import os
import sys
import argparse
import json
import re
from pathlib import Path
from typing import Dict, Optional, List
import requests
import frontmatter


class MailerLiteClient:
    """MailerLite API client for campaign management."""
    
    def __init__(self, api_key: str):
        """Initialize the MailerLite client."""
        self.api_key = api_key
        self.base_url = "https://connect.mailerlite.com/api"
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    
    def create_campaign(
        self, 
        subject: str, 
        from_email: str, 
        from_name: str
    ) -> Optional[str]:
        """
        Create a draft campaign in MailerLite.
        Returns the campaign ID if successful, None otherwise.
        Note: Free tier requires manual content addition via UI.
        """
        
        payload = {
            "name": subject,
            "type": "regular",
            "emails": [{
                "subject": subject,
                "from_name": from_name,
                "from": from_email
            }]
        }
        
        url = f"{self.base_url}/campaigns"
        
        try:
            response = requests.post(url, headers=self.headers, json=payload)
            response.raise_for_status()
            campaign_data = response.json()
            
            data = campaign_data.get("data", {})
            return data.get("id")
        except requests.exceptions.RequestException as e:
            print(f"❌ Error creating campaign: {e}")
            if hasattr(e.response, 'text'):
                print(f"Response: {e.response.text}")
            return None
    
    def get_groups(self) -> List[Dict]:
        """Get all subscriber groups."""
        url = f"{self.base_url}/groups"
        
        try:
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            return response.json().get("data", [])
        except requests.exceptions.RequestException as e:
            print(f"❌ Error fetching groups: {e}")
            return []


class BlogPostParser:
    """Parse Jekyll blog post markdown files."""
    
    def __init__(self, post_path: str, site_url: str):
        self.post_path = Path(post_path)
        self.site_url = site_url.rstrip('/')
        
    def parse(self) -> Optional[Dict]:
        """Parse blog post and extract metadata."""
        if not self.post_path.exists():
            print(f"❌ Post file not found: {self.post_path}")
            return None
        
        try:
            post = frontmatter.load(self.post_path)
            
            # Extract frontmatter
            title = post.get('title', 'Untitled')
            date = post.get('date')
            description = post.get('description', '')
            tags = post.get('tags', [])
            category = post.get('category', 'articles')
            image = post.get('image') or '/assets/images/default-sep-tag-image.png'
            
            # Generate post URL from filename
            filename = self.post_path.stem
            # Extract date from filename (YYYY-MM-DD-slug)
            date_match = re.match(r'(\d{4})-(\d{2})-(\d{2})-(.*)', filename)
            if date_match:
                year, month, day, slug = date_match.groups()
                post_url = f"{self.site_url}/{category}/{year}/{month}/{day}/{slug}.html"
            else:
                print(f"❌ Could not extract date from filename: {filename}")
                return None
            
            # Get excerpt (first paragraph or description)
            content = post.content
            excerpt = description or self._extract_excerpt(content)
            
            # Build full image URL (only if image is not None/empty)
            full_image_url = f"{self.site_url}{image}" if image and image.strip() else ""
            
            return {
                'title': title,
                'date': date,
                'description': description,
                'excerpt': excerpt,
                'tags': tags,
                'category': category,
                'url': post_url,
                'image': full_image_url,
                'content': content
            }
            
        except Exception as e:
            print(f"❌ Error parsing post: {e}")
            return None
    
    def _extract_excerpt(self, content: str, max_length: int = 200) -> str:
        """Extract excerpt from markdown content."""
        # Remove markdown syntax
        text = re.sub(r'[#*_`\[\]()]', '', content)
        # Get first paragraph
        paragraphs = [p.strip() for p in text.split('\n\n') if p.strip()]
        if paragraphs:
            excerpt = paragraphs[0]
            if len(excerpt) > max_length:
                excerpt = excerpt[:max_length].rsplit(' ', 1)[0] + '...'
            return excerpt
        return ""


class EmailTemplateGenerator:
    """Generate plain text email templates for blog posts."""
    
    @staticmethod
    def generate(post_data: Dict) -> str:
        """Generate plain text email template."""
        
        title = post_data['title']
        excerpt = post_data['excerpt']
        url = post_data['url']
        
        text = f"""Hi there! 👋

I just published a new blog post that you might find interesting:

{title}

{excerpt}

Read the full article here:
{url}

As always, thanks for reading!

Found this helpful? Hit reply and let me know what you think!
"""
        return text


def main():
    parser = argparse.ArgumentParser(description='Create MailerLite campaign for blog post')
    parser.add_argument('--post-path', required=True, help='Path to blog post markdown file')
    parser.add_argument('--config', default='automation/config/email_config.json', help='Path to config file')
    parser.add_argument('--dry-run', action='store_true', help='Parse and generate email without creating campaign')
    
    args = parser.parse_args()
    
    # Load configuration (optional if all values provided via env vars)
    config = {}
    config_path = Path(args.config)
    if config_path.exists():
        with open(config_path) as f:
            config = json.load(f)
    
    # Get values from environment variables (priority) or config file (fallback)
    api_key = os.getenv('MAILERLITE_API_KEY') or config.get('mailerlite_api_key')
    from_email = os.getenv('FROM_EMAIL') or config.get('from_email', 'hello@firasesbai.com')
    from_name = os.getenv('FROM_NAME') or config.get('from_name', 'Firas Esbai')
    site_url = os.getenv('SITE_URL') or config.get('site_url', 'https://www.firasesbai.com')
    
    # API key only required if not dry-run
    if not args.dry_run and not api_key:
        print("❌ MAILERLITE_API_KEY not found in environment or config")
        sys.exit(1)
    
    print(f"📄 Processing blog post: {args.post_path}")
    
    # Parse blog post
    parser_obj = BlogPostParser(args.post_path, site_url)
    post_data = parser_obj.parse()
    
    if not post_data:
        print("❌ Failed to parse blog post")
        sys.exit(1)
    
    print(f"✅ Parsed post: {post_data['title']}")
    print(f"📅 Date: {post_data['date']}")
    print(f"🔗 URL: {post_data['url']}")
    print(f"🏷️  Tags: {', '.join(post_data['tags'])}")
    
    # Generate email plain text
    email_text = EmailTemplateGenerator.generate(post_data)
    
    if args.dry_run:
        print("\n" + "="*60)
        print("DRY RUN MODE - Email Text Preview")
        print("="*60)
        print(email_text)
        print("="*60)
        print("\n✅ Dry run completed - no email sent")
        sys.exit(0)
    
    # Initialize MailerLite client
    client = MailerLiteClient(api_key)
    
    # Create campaign
    subject = f"New Blog Post: {post_data['title']}"
    print(f"\n📧 Creating campaign: {subject}")
    print("📢 Campaign will be created as draft (select groups in MailerLite UI)")
    
    campaign_id = client.create_campaign(subject, from_email, from_name)
    
    if not campaign_id:
        print("❌ Failed to create campaign")
        sys.exit(1)
    
    print(f"✅ Campaign created: {campaign_id['campaign_id']}")
    
    # Display email content for copy-paste
    print("\n" + "="*60)
    print("📧 EMAIL CONTENT - Copy this into MailerLite editor:")
    print("="*60)
    print(email_text)
    print("="*60)
    print(f"\n👉 Edit campaign here: https://dashboard.mailerlite.com/emails/{campaign_id['campaign_id']}/edit")
    print("\n💡 Next steps:")
    print("   1. Click the edit link above")
    print("   2. Paste the email content into MailerLite's editor")
    print("   3. Preview and send the campaign")
    
    print("\n🎉 Draft campaign created successfully!")


if __name__ == '__main__':
    main()

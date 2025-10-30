---
layout: post
title:  "Migrating from Google Domains to Cloudflare"
date:   2025-01-19
category: articles
tags: ["Blogging"]
author: Firas Esbai
description: "Steps to migrate your domain from google domains to cloudflare registrar and explanation of dns provider, important dns records and domain name structure"
comments: true
image: "/assets/images/articles/21_domain_name_structure_diagram.png"
---

*In this article, I will outline how I migrated from Google Domains, due to its shutdown, to Cloudflare all while explaining some key terms and concepts.*

On 15.06.2023, Google announced that Google Domains is shutting down and Squarespace is buying all customer accounts. I was a happy customer ever since I started this site and chose Google Domains to host its domain until this announcement.  


{% include table-of-content.html %}

## What is a Domain Registrar? ##

A domain registrar is an organization that allows you to register and manage your domain name. Think of it like a middleman between you and the internet – they help facilitate communication between your domain name and the servers that host your website.

## What is a DNS Provider? ##

A Domain Name System (DNS) provider is a service that manages the settings for your domain name. It handles DNS records, which are used to connect your domain name to IP addresses or other details.

This works through **Authoritative Name Servers (NS)** managed by the DNS provider and act like the "brain" of your domain. They store and update your DNS records to keep everything accurate and working correctly.

There are DNS hosting providers that offer domain registration and vice versa such as Cloudflare but the two services should not be confused. 

For more information on the communication flow between your browser, the DNS provider and your web server, check the resources section. 

## What are DNS Records? ##

DNS records are like the phonebook of the internet. They help connect your domain name (e.g., example.com) to an IP address or other relevant information. Think of it like a map that helps your website find its way on the web.

There are several types of DNS records, including:

- **A Record** : Maps a domain or subdomain to an IPv4 address.
- **AAAA Record** : Maps a domain or subdomain to an IPv6 address.
- **CNAME Record** : Creates an alias or nickname for a domain or subdomain, pointing it to another domain name. This is often used for creating subdomains or for pointing one domain to another.
- **MX Record** : Specifies the mail servers responsible for receiving email messages on behalf of a domain.
- **TXT Record** : Stores arbitrary text data for various purposes, including domain verification and email authentication (SPF, DKIM).
- **NS Record** : Specifies the authoritative name servers for a domain. These servers hold the DNS records for the domain.

## Domain Name Structure ##

The diagram below decomposes the structure of a domain name: 

<figure>
  <img src="/assets/images/articles/21_domain_name_structure_diagram.png" alt="domain name structure diagram">
  <figcaption>Figure 1: Domain Name Structure Diagram - <a href="https://love2dev.com/blog/domain-names/">Image Source</a></figcaption>
</figure>

## Why Cloudflare? ##

Cloudflare is a popular choice and it stood out for me for the following features: 
- Ease of use with simple and clean interface
- Free DNS Management and configuration of your DNS settings.
- Protection against attacks, including a built-in firewall and DDoS mitigation.
- Content caching and image optimization to speed up your site and enhance its performance.

## Migration Steps ##

1. Add Your Domain to Cloudflare
  - Sign up for a Cloudflare account if you don’t already have one.
  - Log in and add your domain. In Cloudflare, domains are referred to as “zones.”
2. Update the Nameservers in Google Domains
  - Log in to your Google Domains account.
  - Find the nameserver settings for your domain and replace them with the nameservers provided by Cloudflare. This step tells the internet to start using Cloudflare to manage your DNS.
3. Verify Zone Activation in Cloudflare
  - Cloudflare will automatically check the nameserver changes. Once the changes are detected, it will activate your domain (zone) on their platform.
4. Initiate the Transfer from Google Domains
  - In Google Domains, initiate the transfer process. You’ll receive an authorization code (sometimes called an EPP code) to use during the transfer.
5. Complete the Transfer in Cloudflare
  - In your Cloudflare account, start the transfer process. Enter the authorization code and update your billing information as required.
6. Configure Email Forwarding (Optional)
  - If you used Google Domains for email forwarding, you can set up similar forwarding in Cloudflare to ensure uninterrupted email service.
7. Approve the Transfer
  - Google Domains will send you an email to confirm the transfer. Approve the transfer to speed up the process, which can otherwise take up to 5 days.
8. Transfer Completion
  - Once the transfer is complete, you’ll receive a confirmation email from Cloudflare. Your domain is now fully managed by Cloudflare.


With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Stay tuned!* 

## Recap ##

As a website owner, understanding how DNS records work, the involved entities in play, their interactions and how to manage the site's domain settings are important. This article explained these key concepts as part of a migration from the domain registrar Google Domains to Cloudflare and its free DNS managment service. 

*Happy learning!*

## Resources ##

[https://blog.bytebytego.com/p/what-happens-when-you-type-a-url](https://blog.bytebytego.com/p/what-happens-when-you-type-a-url)

[https://blog.bytebytego.com/p/how-does-the-domain-name-system-dns](https://blog.bytebytego.com/p/how-does-the-domain-name-system-dns)

[https://blog.bytebytego.com/i/132279282/url-uri-urn-do-you-know-the-differences](https://blog.bytebytego.com/i/132279282/url-uri-urn-do-you-know-the-differences)
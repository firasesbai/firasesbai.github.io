---
layout: page
title: Contact Me
permalink: /contact/
description: "Get in touch with Firas Esbai to discuss collaborations or inquiries. We are here to connect and help with all your needs."
---

<style>
   .success-message {
      background-color: #4CAF50;
      color: white;
      padding: 10px;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 300px;
      margin-top: 20px;
  }
  .close-button {
      cursor: pointer;
  }
   form {
      width: 300px; 
      margin: 0; 
      margin-bottom: 20px;
   }
   label {
      display: block; 
      margin-bottom: 5px; 
   }
   input[type="text"],
   input[type="email"],
   textarea {
      width: 100%; 
      padding: 10px; 
      margin-bottom: 10px;
   }
   input[type="submit"] {
      background-color: #007bff; 
      color: white;
      padding: 10px 15px;
      border: none;
      cursor: pointer;
}
</style>

### Contact Information ###

Feel free to reach out by sending an email to [contact [at] firasesbai.com](mailto: contact@firasesbai.com) or via the contact form below. 

<iframe 
   name="hidden_iframe" 
   id="hidden_iframe" 
   style="display:none;" 
   onload="if(submitted) showSuccessMessage();"
   >
</iframe>
<form 
   class="form" 
   action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSevosKEIxopA8dI9FrAd87lwl0rF3-k7iHtAPXCvjms1WrGxQ/formResponse" 
   target="hidden_iframe" 
   onsubmit="submitted=true; "
   method="POST"
>
   <label for="name">Name:</label>
   <input type="text" id="name" name="entry.1947952944">

   <label for="email">Email:</label>
   <input type="email" id="email" name="entry.301353795" required>

   <label for="message">Message:</label>
   <textarea id="message" name="entry.64898976" rows="4"></textarea>

   <input type="submit" value="Submit">
</form>

<script>
   var submitted=false;

   function showSuccessMessage() {
      var successMessage = document.createElement('div');
      successMessage.className = 'success-message';

      successMessage.innerHTML = 'Thank you for reaching out! I will get back to you as soon as possible.<span class="close-button" onclick="closeSuccessMessage()">X</span>';

      var form = document.querySelector('.form');
      form.appendChild(successMessage);
  }

   function closeSuccessMessage() {
      location.reload();
   }
</script>

### Social Media ###

[LinkedIn](https://www.linkedin.com/in/firas-esbai/)
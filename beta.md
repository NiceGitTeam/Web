---
title: Private Beta
description: You're joining the first people the world to experience NiceGit and help to shape its development.
layout: default
---

{% include hero.html
   cta_text="Download"
   cta_href="/downloads"
%}

<div class="content">
 {% capture beta_content %}
   <p>You're moments away from the future of source control. To get started, please <a href="/downloads">download the latest version of the NiceGit desktop app</a>.</p>
   <p>Setting up NiceGit is as simple as opening the app and signing up. For further information, please see our <a href="/docs/installation">Installation</a> and <a href="/docs/getting-started">Getting Started</a> guides.</p>
 {% endcapture %}

 {% include feature-section.html
    heading="<strong>Welcome</strong> to the NiceGit Private Beta."
    text=beta_content
    image="/images/Screenshot.png"
    image_alt="A screenshot of the NiceGit Desktop app"
 %}

{% include feature-section.html
   heading="The first <strong>intelligent, real-time</strong> source control platform"
   text="<p>NiceGit brings the best of both worlds: the reliability of Git with the simplicity of a one-button workflow.</p>
   <p>It’s designed for people and teams who want to focus on their work, not on wrangling their tools.
   And because NiceGit works with all the major hosting providers — GitHub, GitLab, and Bitbucket — your team doesn’t have to change where your projects live. You simply make them easier to manage, without giving up the integrations you already rely on.</p>
   <p>Much more than just a Git client, NiceGit actively manages your project. See waht your team mates and agents are working on in real-time, removing the potential for merge conflicts.</p>"
   image="/images/UX Designer.jpg"
   image_alt="Photo of a UX designer seated at their desk"
%}

{% capture feedback_content %}
    <p>Tell us what you would like to see in the future of NiceGit. Your input helps shape the future of the platform.</p>
    <p>Please use any of the following channels:</p>
    <ul>
    <li>The Feedback Button is always available in the bottom-left corner of the NiceGit Desktop app. Share as much as you like!</li>
    <li>Email us at <a href="mailto://hello@nicegit.com">hello@nicegit.com</a></li>
    </ul>
{% endcapture %}

 {% include feature-section.html
    heading="Your feedback, your ideas"
    text=feedback_content
 %}

<div class="container flex">
   <div class="text editable">
      <h2><a href="/downloads">Download the NiceGit Desktop app and get started</a></h2>
   </div>
</div>

{% include feature-section.html
   heading="What you'll need"
   text="<p>All you need to get started is a project hosted on GitHub, Bitbucket or GitLab. The NiceGit setup process will guide you through downloading the project or opening it from a folder on your device.</p>
   <p>NicceGit supports Windows 10 or later and macOS 12 (Monterey) or later for Intel and ARM based Macs.</p>"
   image="/images/OpenGitHub.gif"
   image_alt="GitHub login animation"
   image_class="open-github"
%}

<section class="bottom-cta" id="sign-up">
  {% include signup.html
     heading="Not ready to download today? <strong>Sign up</strong> to our mailing list"
  %}
</section>

</div>

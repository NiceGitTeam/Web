---
title: NiceGit - Source control for normal people
description: NiceGit is the simpler, faster way for teams to share and track their files.
layout: default
---

{% include hero.html
   heading='Source control <strong>for normal people</strong>'
   subtext="NiceGit is the simpler, faster way for teams to share and track their files."
   cta_text="Sign Up for the NiceGit Beta"
   cta_href="#sign-up"
   cta_position="before_image"
   image="/images/Screenshot.png"
   image_alt="Screenshot"
%}

<div class="content">
 {% capture work_faster_text %}
<p>NiceGit provides a simple workflow that makes working on shared files easy. Based around a real-time feed, you'll
see what your colleagues are working on right now, not just what they've already finished.</p>
 {% endcapture %}
 {% include feature-section.html
    heading="How can I <strong>work faster</strong> and spend more time on what matters?"
    text=work_faster_text
    image="/images/Screenshot.png"
    image_alt="Screenshot"
 %}

 {% include feature-section.html
    heading="<strong>Everything you need,</strong> nothing you don't"
    text="<p>More than just an app, NiceGit is a complete workflow. By always understanding which files people are
    working on, NiceGit has no need for complex, hard to use concepts such as branching and merging. When you're
    ready to share your latest work, just hit the Share button, it really is that simple!</p>
<p>As its name suggests, NiceGit builds on the awesome power of Git. Integration with your existing projects and
tools is seamless and all Git hosting providers are supported, including GitHub, Bitbucket and GitLab.</p>"
    image="/images/OpenGitHub.gif"
    image_alt="GitHub login animation"
    image_class="open-github"
 %}

 {% capture user_first_text %}
<p>A clean, simple interface designed around the common things that you and your team do all day, every day. Your
current changes, a complete project history, and the latest status of everyone on the team, are all there on a single
screen. Just one button is all you need to stay in sync.</p>
 {% endcapture %}
 {% include feature-section.html
    heading="Source control that puts the <strong>user first</strong>"
    text=user_first_text
    image="/images/Screenshot.png"
    image_alt="Screenshot"
 %}

 <section class="bottom-cta" id="sign-up">
  {% include signup.html %}
 </section>
</div>

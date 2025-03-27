---
layout: post
title: "24 Hours to Validate NiceGit"
author: dan
categories: [startup, startmate]
excerpt_separator: <!--more-->
---

## The Challenge

[Ajay Prakash](https://www.linkedin.com/in/ajayvprakash/) has challenged Startmate LaunchClub founders to validate their startup idea within the next 24 hours. It's a bit of a Hail Mary, but exactly what I need to get out of my comfort zone with NiceGit.

I'll be posting progress updates to this page over the next 24h and then any results, starting with my first AI driven cold outreach effort using Apollo.io...

<!--more-->

## _26 March 2025, 8pm_ The world's roughest cold outreach campaign

Last night (26/3) I had an hour (while also making a Toad in the Hole for dinner) to setup up the cold outreach campaign. Sign up and basic setup was easy enough, the main steps:

- Give Apollo full access to a Gmail account (had to take off my security officer hat for this one!)

- Create a 'Sequence' of emails for cold outreach. I used Apollo's AI to generate a draft sequence of three emails. A nice feature is you can just enter your product's website (e.g. https://nicegit.com) and it will scan most of the relevant info it needs. The generated emails were surprisingly bare, around 5-10 sentences of pure text. It was recommended not to include images, which was an interesting learning.

- Create a 'List' of people by searching Apollo's database (presumably compiled mostly by LinkedIn scraping?). I chose to target designers, content writers and digital artists at senior level.

- It took a while to figure out the UI for how to coordinate the List and the Sequence, but once done I just took the first 100 users from the list and asked Apollo to trigger the Sequence.

- The platform has been steadily sending emails from my account ever since!

![First email sequence](/images/posts/Apollo Sequence.png)

## _27 March 2025, 12pm_ Overnight results

Overnight, 49 emails were delivered (of the 100 I scheduled). I can actually see them in my 'Sent' box in Gmail which is cool!

The call to action is the Sign Up page of the NiceGit website (https://nicegit.com/#sign-up). As of now I've yet to see any new sign ups, but traffic to the website has seen 28 new visitors, which would be a great result. I suspect that at least some of these 'visitors' are email clients doing strange things to open the page to generate previews, protect privacy etc. Time spent on the site is very low!

It's great to see a simple action leading to tangible results though.

(btw the Toad in the Hole also went down very well with my son)

![Site visits in Google Analytis](/images/posts/Apollo Analytics.png)

## _27 March 2025, 1pm_ Working in public

As I was creating [a LinkedIn post](https://www.linkedin.com/posts/danborthwick_b2b-sales-platform-powered-by-ai-apollo-activity-7310844881562701824-eR9O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAABfd1QBjjISAXzZeQ5sewbuGLcS8cXLYys) to 'live blog' progress, I realised this would also be a good test for the current NiceGit prototype build itself. NiceGit.com is built using a simple GitHub Pages site (based on the beautifully simple Jekyll framework). Since the whole projects is a Git repository, I created a quick build of NiceGit for the project (the project is currently hardcoded) and have been using it ever since to post these updates! I've been using NiceGit exclusively in this way ('dogfooding' my own product) since the end of last week and so far it's been handling this simple use case really well. (Please excuse the broken preview in the screenshot, minor issue with cropping the previews of nested files! It's gone into the backlog.)

![NiceGit screenshot of this very post](/images/posts/Apollo Analytics.png)

Next step, set up a Stripe payment page...
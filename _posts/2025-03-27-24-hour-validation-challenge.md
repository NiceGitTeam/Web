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

## _Wednesday, 8pm_ - The world's roughest cold outreach campaign

Last night (Wednesday) I had an hour (while also making a Toad in the Hole for dinner) to setup up the cold outreach campaign. Sign up and basic setup was easy enough, the main steps:

- Give Apollo full access to a Gmail account (had to take off my security officer hat for this one!)

- Create a 'Sequence' of emails for cold outreach. I used Apollo's AI to generate a draft sequence of three emails. A nice feature is you can just enter your product's website (e.g. <https://nicegit.com>) and it will scan most of the relevant info it needs. The generated emails were surprisingly bare, around 5-10 sentences of pure text. It was recommended not to include images, which was an interesting learning.

- Create a 'List' of people by searching Apollo's database (presumably compiled mostly by LinkedIn scraping?). I chose to target designers, content writers and digital artists at senior level.

- It took a while to figure out the UI for how to coordinate the List and the Sequence, but once done I just took the first 100 users from the list and asked Apollo to trigger the Sequence.

- The platform has been steadily sending emails from my account ever since!

![First email sequence](/images/posts/Apollo Sequence.png){: class="small" }

## _Thursday, 12pm_ - Overnight results

Overnight, 49 emails were delivered (of the 100 I scheduled). I can actually see them in my 'Sent' box in Gmail which is cool!

The call to action is the Sign Up page of the NiceGit website (<https://nicegit.com/#sign-up>). As of now I've yet to see any new sign ups, but traffic to the website has seen 28 new visitors, which would be a great result. I suspect that at least some of these 'visitors' are email clients doing strange things to open the page to generate previews, protect privacy etc. Time spent on the site is very low!

It's great to see a simple action leading to tangible results though.

(btw the Toad in the Hole also went down very well with my son)

![Site visits in Google Analytis](/images/posts/Apollo Analytics.png){: class="small" }

## _Thursday, 1pm_ - Working in public

As I was creating [a LinkedIn post](https://www.linkedin.com/posts/danborthwick_b2b-sales-platform-powered-by-ai-apollo-activity-7310844881562701824-eR9O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAABfd1QBjjISAXzZeQ5sewbuGLcS8cXLYys) to 'live blog' progress, I realised this would also be a good test for the current NiceGit prototype build itself. NiceGit.com is built using a simple GitHub Pages site (based on the beautifully simple Jekyll framework). Since the whole projects is a Git repository, I created a quick build of NiceGit for the project (the project is currently hardcoded) and have been using it ever since to post these updates! I've been using NiceGit exclusively in this way ('dogfooding' my own product) since the end of last week and so far it's been handling this simple use case really well. (Please excuse the broken preview in the screenshot, minor issue with cropping the previews of nested files! It's gone into the backlog.)

![NiceGit screenshot of this very post](/images/posts/Validation Challenge Screenshot.png){: class="small" }

Next step, set up a Stripe payment page...

## _Thursday, 4pm_ - Setting up a payments experiment

The goal of the challenge is to 'validate your idea as quickly as possible'. The gold standard being to find people to pay atual real money.

To this end, I've just set up a Stripe payments page for a 'NiceGit Early Adopter Package'. Setting up a new Stripe account and creating the products, pricing etc. was super easy and took under an hour (for full transparency, I'm fairly familiar with Stripe, and I'm also a registered Sole Trader which helps).

Next I need to give users a way to actually pay. Rather than a full Stripe integration I've opted to use a simple Buy Button here on NiceGit.com, then let Stripe provide the actual checkout page etc. Using [Stripe's Get Started guide](https://docs.stripe.com/no-code/get-started))

Quick break for a haircut (it's the Melbourne Launch Club welcome party tonight, gotta look fresh) and a falafel wrap, then it's back to Stripe. Had to verify my identify using my passport which might take 1-3 days and be a potential roadblock, but got it done, then got to work integrating the Buy Button on the website.

Another hour of tinkering around and [the Purchase Panel](/#purchase) is now live on the website. Clicking [the Buy button](/#purchase) (highly recommended, although perhaps an ambitious ask if you've read the rest of this page!) directs the user to a Stripe-hosted page where, at least in theory, they should be able to purchase the 'NiceGit Early Adopters Package'.

Ok, time to head into Melbourne for the Launch Club Welcome party. With a fair wind and a seat on the train I might even be able to send out another email campaign with a more targeted call to action to see if this is enough for anyone to part with actual dollars. I strongly suspect not yet, especially given the state of the product page, but nothing ventured, nothing gained. Whatever happens, all of this setup will be helpful in a few weeks once the product page and the actual app itself are a little further along.

[![The purchase panel](/images/posts/Purchase Page Dev.png){: class="small" }](/#purchase)

Hehe, just as I was about to hit publish on the payment page (and this blog post), my son came in to show me the newly created Patreon page for his rock band, _Bladenrock_. I thought I was doing well today. He's ten years old!

## _Friday, 1pm_ - Pivoting to a more targeted, experimental approach

[Ajay](https://www.linkedin.com/in/ajayvprakash/) never precisely specified when the 24 hours for the challenge specifically started from, so I'm going to take this as license to keep going! ;p

The results of the first cold outreach campaign are now in. In the last 40 hours NiceGit has:

- Delivered 91 cold outreach emails to senior level designers and artists =|
- Apollo reports only a 5% open rate (excluding automated)* =(
- However, the [NiceGit website](/) reports 99 new users in the same period =)
- But no sales of the Early Adopter Package yet =(

*_From past experience I take 'open rates' and 'click throughs' from email platforms with a huge pinch of salt. The email protocol has fundamentally no way for the sender to know when the recipient has done anything to an email, and nor should it. (We once successfully sued an airline based, in part, on this. But that's a story for another day!)_

Given the roughness of the email copy, and of the product landing page, this is about what I was expecting. So this afternoon I'm going to try a more manual approach to creating the emails, with variations to target different professional groups, such as Data Scientists, Designers, etc. If there's time I'll do something similar to the website, perhaps even trying some different landing page, product and price variations.

## _Friday, 4pm_ - Let's get personal

It took a little longer than AI-lead copy generation but just finished work on a manually writted, more personal email template. This one starts with a brief account of my personal career journey and how I identified the problems that NiceGit aims to solve. It then gets into a more traditional problem/solution pattern, but still drawing a lot from personal experiences and avoiding overly generic language.

I've just set it live so we'll see how it performs next week.

Having set up the basics for running these campaigns, by far the biggest constraint is now the rate at which I can send emails without risking the @nicegit.com domain being labelled as overly spammy. It takes a while for domains to 'warm up' so right now Apollo is advising sending no more than 50 emails a day. This number will rise over the next couple of weeks so I'm looking forward to experimenting with a larger variety of email templates and audiences. From this point of view I'm really glad I started working on email outreach so early. It should be ready to scale up over the next couple of months as my marketing and product positioning changes kick in.

Anyway, it's the end of the day and there are my family and fish and chips and waiting for me at the beach. I'll post some more results next week, thanks everyone (anyone?) who's made it this far with me. Have a great weekend!

![Site visits in Google Analytics](/images/posts/Personal Email Template.png){: class="small" }

## Thursday 3rd April - Post mortem

A week later and enough time has passed to start reviewing the results...

### Less nice

- No sales (yet)  
  The 'Early Adopter Package' always felt like a big ask. My gut was that the landing page just isn't ready yet to convince people to part with actual cash money. I still love the idea of seeking revenue, so will give the page a refresh over the next couple of weeks, especially as more info comes in from customer interviews.  
  ![Sales chart showing no sales](/images/posts/No%20Sales%20Yet.png){: class="small" }

- Email rate limiting  
  Apollo's rate limiting is strict. After the first two days its only been sending 5-10 emails a day to protect the reputation of @nicegit.com emails with spam filters. This is a good thing but I hadn't anticipated how limiting it would be to rapid iteration. With hindsight I could have mitigated to some extent by setting up a new 'burner' domain whose reputation didn't matter.

### Nice

- [nicegit.com](/) has seen 156 new users the site! That's more users than probably ever visited it before this week. I initially thought a lot of this might have been coming from my LinkedIn posting, but the demographics strongly suggest the majority of traffic is likely coming from the cold outreach emails. I've recently added [UTM tracking parameters](https://en.wikipedia.org/wiki/UTM_parameters) to the links in the emails which should confirm this.

- Email rate limiting  
  Despite rate limits hampering my attempts at rapid results (see above), the exercise has forced me to make a start on setting up cold outreach email for the longer term. Over the next few weeks I should be able to increase volumes significantly. I'm glad I ran into this problem now, not at a more critical point.

- Apollo  
  Apollo has turned out be quite a powerful tool. It's a little different to other email platforms I've used, but its focus on CRM and sales has already proved useful as I've used it to streamline my user interview pipeline, messaging around 25 personal contacts across email, LinkedIn and other channels and allowing me to keep track of the progress of each one. I initially used the Free Plan and am now on the Basic Plan which costs $59/month. I think I'll keep using it for at least the duration of Launch Club.

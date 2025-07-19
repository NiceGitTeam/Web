---
layout: post
title: "Our First Demo: NiceGit vs. Traditional Git"
author_staff_member: dan
categories: [product]
excerpt_separator: <!--more-->
---

We've been talking about how NiceGit simplifies collaboration for creative teams, but sometimes seeing is believing. That's why I've created a side-by-side comparison video demonstrating how NiceGit transforms the version control experience compared to traditional Git workflows.

<!--more-->

## Watch the Demo

{% include youtube.html video_id="c7KtS92Qbb4" %}

In this demonstration, you'll see:

1. **One-Click Sharing**: How NiceGit eliminates the commit-stage-push workflow with a single "Share" button
1. **Real-time Collaboration**: See who's working on what, right now
1. **Visual Previews**: Understanding changes with easy to use visual previews
1. **Natural Language**: How NiceGit replaces Git jargon with intuitive terminology

## Why This Matters

Our user interviews have consistently revealed that creative team members - designers, writers, artists, and even many developers — find traditional Git unnecessarily complex and intimidating. This complexity creates friction that slows down collaboration and often leads to workarounds that undermine the benefits of version control.

NiceGit maintains all the power of Git behind the scenes while presenting an interface that matches the way creative teams naturally want to work.

## Ready to Try It Yourself?

If you're interested in simplifying version control for your team, please [sign up to the NiceGit mailing list](/#sign-up) to be the first to try NiceGit.

## Transcript

*Hi everyone! Today we're going to do a quick demo to show the difference between using NiceGit and a traditional Git workflow.*

*We've got a very simple website project here with an HTML file and a logo. Our job today is to recolor that logo to a different color. First, we'll open the logo in our image editor - I'm using Gimp, but it could be Photoshop or whatever you want to use. We're going to recolor the logo to a nice pinky orange color. There we go, happy with that. We'll just save the file. All good - nice pink logo.*

*Now we're going to use our traditional Git program to share those changes with our team. We can see here that we've made some changes to the image file. There's kind of a preview showing we've gone from blue to pink, which is what we wanted.*

*To share that with our team, the first step is to stage the file. After staging, we should be ready to commit. We'll enter our commit message: "changed logo color to pink." After committing, we try to push the file to make it available to the rest of our team.*

*It's failed! We can see an error with some very verbose text. What's happened is that we didn't pull before we pushed, which means we didn't get other people's changes first. We'll try pulling now. We've got an option to fetch or pull - let's try fetch. Now we can see that someone else has actually changed the logo file before we changed it. They've made the NiceGit logo vertical.*

*We'll have to give up on our change and redo it. After resetting, we can see the vertically aligned text version. Not the end of the world, but we'll have to do our recoloring all over again from scratch.*

*Let's redo our coloring to get that same nice pink again. Now we've remade our change and saved our file. Let's try one more time to share those changes. This time we'll stage, commit with "make the logo pink," and try pushing. It's working this time! We'll do a pull as well just to be safe.*

*Now, let's see what that same operation would look like using NiceGit. We normally just leave Nice running the whole time. NiceGit immediately syncs the project in the background - we can see we've got the vertical version of the logo already. All we need to do now is make our change, just like before. Finding the right shade of pink might be the hardest bit! After saving the file, we can see our nice vertical pink logo in NiceGit. We'll just enter our message, hit the sync button, and that's it! Everything's synced up, and we're ready to get on with our next task.*

*Thank you for watching. That was nice source control for normal people. Please visit our website at nicegit.com, sign up for our mailing list, and look out for the first playable version of NiceGit coming later this year.*

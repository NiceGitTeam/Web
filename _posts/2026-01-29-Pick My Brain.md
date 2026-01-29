---
layout: post
title: Pick My Brain Podcast - NiceGit's route to market
author_staff_member: Dan
categories: [startup, business, product]
excerpt_separator: <!--more-->
---

[Alan Jones](https://www.linkedin.com/in/alanjones/) has been a [NiceGit](/) mentor since his peerless pitch coaching for [The Startup Network](https://thestartupnetwork.com.au/) last year.

In the latest episode of his [Pick My Brain podcast](https://dayone.fm/show/pick-my-brain), we talk about how developer time becomes the scarcest, and most expensive, resource as teams scale. And how old-school tools that exclude non-engineers tax velocity and morale.

{% include youtube.html video_id="43Pk3ZPlqMI" %}

<!--more-->

On the investment side, we talk about why products that unlock non-technical capacity can punch above their weight in the age of AI-assisted development, how investors think about 'headache pills' and 'vitamin pills', and how neither of us knows the difference between a [metaphor](https://www.oed.com/dictionary/analogy_n?tab=meaning_and_use#4177757) and an [analogy]((https://www.oed.com/dictionary/metaphor_n?tab=meaning_and_use#37059120)).

But what do you think? Is full team, AI-assisted product development the future? How would you reach the right global audience? Does bootstrapping and launching make sense? [Let me know!](/contact)

Thanks to the team at [DayOne.fm](https://dayone.fm) for making it happen, and to [CorporateCubes.Co](https://CorporateCubes.Co) for generously rescheduling the studio time, and to [Galah Cyber](https://www.galahcyber.com.au/) for sponsoring.

[Watch on YouTube](https://youtu.be/43Pk3ZPlqMI?si=4EQu0O1Q5h-wAk8j)

[Listen on Apple Podcasts](https://podcasts.apple.com/us/podcast/nicegit-making-git-usable-for-everyone-not-just-engineers/id1807400437?i=1000747063007)

[Listen on Spotify](https://open.spotify.com/episode/7BvWESPsXSXAI8fb5Q337I?si=9bbb789ae3954fd6)

![Pick My Brain podcast](/images/posts/Pick My Brain.jpg)

## Full Transcript

**Dan Borthwick (00:00)**
NiceGit is the world's first single button solution. It takes care of all of that complexity for you. And it gives you the power of Git with the simplicity of something like Dropbox or a shared drive, which is really what 90 % of the time, what people want and how people expect these things to work.

**Alan Jones (00:15)**
What's the current plan right now for making the world aware that this product exists?

**Dan Borthwick (00:20)**
position it more as a, in terms of like people's workflows and the people problem that we're solving. So not as a technical solution.

**Alan Jones (00:27)**
Those of us typically from a technical background, we don't particularly love marketing and advertising in general as a thing in the world.

**Dan Borthwick (00:35)**
to somebody who's probably been pitched to more than just about anyone, how would you approach that?

**Alan Jones (00:44)**
Welcome to Pick My Brain, the podcast where we help startup founders improve their pitches to better connect with customers, co-founders, and investors. My name's Alan Jones and I'm an ex-startup founder myself, but now I'm an angel investor with literally decades of experience helping new businesses find their footing and achieve their goals. I'd like to acknowledge first that this podcast is being recorded on Gannagall land, land that was never ceded. I pay my respects to their innovators and leaders past, present, and emerging. On Pick My Brain,

You'll hear the real story straight from the founders as they pitch their startups, raise some of the challenges that they face, and hopefully turn their ideas into a successful business. Each episode, we'll see if I can help founders take their startups another step forward with advice, ideas, and maybe a little constructive criticism. Thanks for joining me.

**Dan Borthwick (01:30)**
You're listening to a day one.fm show.

Never sat through security training and thought, non of this helps me ship code? Well, GalarCyber gets it. The foundations of application security course is built for engineers who actually build things. Two days, hands-on, and packed to lessons you can use the minute you're back at your desk. It's practical, it's relevant, and it'll make you better at your job, not just ticker box. Register your interest at galarcyber.com.au slash learn.

for the 2026 intake. That's galasciber.com.au slash learn.

**Alan Jones (02:11)**
Today we're joined by Dan Borthwick, who's the founder of a startup called NiceGit. Thanks for joining me today, Dan. ⁓ I like to begin every episode with a couple of standard questions. If you've listened to our previous episode, you might've heard them both, but easy to answer off the cuff. When you are a kid and you were imagining what you might do when you grew up, what did you have in mind back then?

**Dan Borthwick (02:17)**
Thanks Alan, fantastic to be here.

Well, as a teenager back in the UK where I'm originally from, I was a big gamer as a lot of people were playing around with Commodore Amiga and 16-bit systems. So at that point, yeah, I decided I loved games and I was really fascinated by how they were made. So I wanted to be a game developer.

**Alan Jones (02:52)**
And before you started NiceKit, what were you doing?

**Dan Borthwick (02:55)**
did manage to become a game developer. I worked in the games industry for about 15 years doing a lot of kind of mobile and casual games. So I worked for King for a while, the company that makes Candy Crush. Also way back in the day was doing like ⁓ 3D games on mobiles. This is like pre-smartphone and really kind of rode that wave of mobile gaming, which was a lot of fun. Then more recently moved to Australia, obviously based in Melbourne now, and have been working in health tech. So founded a couple of health tech companies.

And my most recent role was with Mindset Health doing digital hypnotherapy. And again, delivering digital hypnotherapy through mobile apps and being able to directly impact people's lives and have a positive impact on people's lives through that kind of technology was a lot of fun and very rewarding.

**Alan Jones (03:41)**
Great business and a great platform. Tell us about NiceKit, what's going on there?

**Dan Borthwick (03:49)**
Great. So here we are in 2025 and it feels like suddenly everyone is making software, websites, web apps, mobile apps, sales funnels for your startup, podcast platforms, you name it. Everyone's suddenly building it. So software is made up of lots of different files. You've got your code files, you've got your text files, images, animations, all sorts. So 87 % of projects use a system called Git to manage those files.

The Git was designed for professional software engineers and for everyone else, it's incredibly hard to use. It's such a whisper it, but actually it's incredibly hard to use for professional software engineers as well, but they just have to kind of get used to it and suck it up. So basically anyone who's not a professional software engineer or a professional programmer can't make changes to their project. That includes people like UX designers, product managers, content writers, artists. So like 89 % of the people I've interviewed this year, and I've been talking to all of these different people.

89 % of those people just agree that Git is far too hard to use and that it's a major obstacle to them being able to directly make changes on their projects. And so there's a workaround ⁓ and in professional teams that workaround is that every single change that goes into the project has to go through the programming team. And that's slow, it's tedious, it's expensive and people sort of give up quite quickly when the changes are good enough rather than when the changes are as good as they can be. So just...

To give you an example, if you were a professional ⁓ UX designer, say, and you wanted to change the color scheme of your mobile application, you have the skills to do that. You can make those changes. You can edit those RGB values or whatever they might be. But when it comes to actually sharing those changes with the rest of your team and applying those changes into your project, you're blocked because you can't use the source control and you can't access the project. So instead of that, you end up writing a big change request document, maybe a juror ticket or something like that.

describing what it is that you'd like. You give that to a programmer. They're incredibly busy. Their capacity is normally the bottleneck of the project. So it might take a week or two to get to the top of the backlog, if you're lucky. It might not get to the top of the backlog at all. But eventually the programmer will do their best to interpret what you described in your documentation and give you back something that approximates what you wanted. You might go through one more round of notes and make sort of one more round of tweaks with the programmer.

And then eventually it's like, okay, that's good enough and we'll move on. But a lot of the time, like in the extreme, we're paying some of these programmers, you we might be paying them $200,000 to copy paste text and be changing copy on a website, maybe not even in their first language, while the professional copywriter kind of sits and waits for them to do it. This problem is actually incredibly common. So the biggest Git hosting platform is a platform called GitHub, which a lot of your users will probably have heard of. So of their 220 million users,

Over half of their users now are not programmers and that number is actually growing. That proportion is growing very quickly, particularly over the last two years with the release of AI assisted coding tools. Okay, so that's the problem. What's the solution? So NiceGit is the ecosystem to enable non-programmers to work directly on their product development projects. So we're building the tools to provide the connective tissue between the non-programmers ⁓ and the mature world of mature software development.

We're starting that with a revolutionary new user first approach to source control, to working with Git. So currently people who use Git today, the state of the art is actually, believe it or not, is programmers typing terminal commands as we did in the 1960s and the 1970s. Or there are some visual applications that you can use. I use one called SmartGit, which I quite like, it's very good, but it has 43 buttons on screen and a lot of those buttons do some quite scary stuff.

So NiceGit is the world's first single button solution. It takes care of all of that complexity for you. And it gives you the power of Git with the simplicity of something like Dropbox or a shared drive, which is really what 90 % of the time, what people want and how people expect these things to work. So all of the smarts, all of the complexities is done for you and hidden under the hood. And best of all, actually works. We're just entering into our kind of early testing phase. Yeah, and it's working really well.

**Alan Jones (08:11)**
It's always good when it works. Maybe you're working on it ⁓ with a team. Is it a passion project for you solo? Tell us about who's behind the mask.

**Dan Borthwick (08:23)**
Yes, so I've been working on it full time since February this year. At the moment, it's effectively just me working on it full time. I've got some great advisors and collaborators around me who I'm very grateful to. But obviously looking to grow that team. of my biggest asks at the moment, I'm looking for kind of COO, a kind of go-to-market B2B SaaS-focused co-founder. So if any of your listeners out there might fit that bill, please do drop me a line.

And also in terms of like the opportunity here, like this is a massive market. So GitHub alone makes over a billion dollars a year just from their core Git hosting services. And that's before Copilot, their AI tooling, makes another couple of billion on top of that. And if we look at the three major Git hosting providers, they've all exited for a total of over $20 billion. One of those being Bitbucket here and...

Australia as part of Atlassian, course. But all of those, they're only building for the power users. They're only building for these professional software engineers. The platforms are fantastic, but they're getting more more complex and harder and harder for normal people to use. So, yes, we're really great to be working on that problem and enabling like basically the other half of the world, the normal people involved in product development to work on their projects.

**Alan Jones (09:44)**
Cool. And so you have a public beta coming out soon.

**Dan Borthwick (09:49)**
Yeah, very soon. we're just, I'm hoping next week we'll have our first private beta. I actually made a bit of a technical breakthrough yesterday, which was blocking distribution of the app. So that's exciting. So you can actually get the products into the hands of people now. And then we'll go into a public beta by the end of the year. And then from there into a full page commercial, B2B launch.

**Alan Jones (10:10)**
All right, great. So what's the current plan right now for putting this in the hands of making the world aware that this product exists? ⁓ Is that something you've got all funk through or is that something that maybe we could discuss today?

**Dan Borthwick (10:26)**
Yeah, I mean, the current thinking is to approach game development and use them as a beachhead. So I've been speaking to a lot of different people from a lot of different industries and game developers are the group that kind of really gets this. They're actually already working in this way and they've been finding their own solutions and workarounds for forever really. yeah, they're super keen. One of the most exciting things that's been happening over the last couple of months is we're actually now starting to get

cold approaches inbound approaches from game development studios. We've had a couple in Europe, for example, who are basically championing at the bit to get hold of Nisqit. And my mission with them was actually to kind of keep them warm, keep them interested as we as we're getting the product.

**Alan Jones (11:11)**
Have they searched for something in Founder Online or have they word of mouth heard about that you're building something? How has that happened?

**Dan Borthwick (11:18)**
that's tend to tap and through kind of founder LinkedIn activity. So I've tried to be as active as I can on LinkedIn. Also with my backgrounds in game development. So you have a bit of a network there ⁓ who have been sort of following what I'm doing and kind of understand where we're coming from. Cool.

**Alan Jones (11:36)**
Okay, look, I think ⁓ you've got another opportunities and a number of challenges before you. And I think perhaps one thing to keep in mind is that those of us, typically from a technical background, we don't particularly love marketing and advertising in general as a thing in the world. And I think the thing that we don't love about marketing and advertising or being marketed to or advertised to is that we like to make logical, rational decisions with all the facts before us.

You know, I mean, that's, that's how you do good engineering, right? Who you meant to do. And, um, advertising and marketing is, is, is, is really about interrupting that process before you've got all the facts and figures in front of you and can make a fully informed decision and try and persuade you to make a decision before that point, you know, you maybe think doing this thing, we're going to try and switch off over here. And the way that the advertisers and marketers do that is, is by appealing to another part of our brain.

not the logical, rational part of our brand, but the emotional, vulnerable, often sometimes subconscious or semi subconscious part of the brain, you know, or you're, missing out on this opportunity or other people like you have already got this thing. You may not be aware of this problem that you face. Come in and try this new thing and we'll get you started. And, ⁓ and we feel a little bit, think, exploited when that works on us. So I think, I think the first challenge is, know, there were some.

demographics out there in the world who are relatively speaking more easy to market than advertised to because they're looking for solutions to problems that are very willing to try new things. So as an example, ⁓ think social media has proven to be a great platform for reaching young adults and saying, ⁓ your skin's overpigmented ⁓ or your hair looks dry and brittle. ⁓

try this new wonder serum, you know? And ⁓ so that's relatively speaking, you know, ⁓ a pretty fruitful place to market. ⁓ To go along to ⁓ a tech conference or a software ⁓ engineering meetup ⁓ is a different beast altogether. And you mentioned Alassian before, and famously their main marketing channel in the early days was to go along to meetups ⁓ and just stick Alassian stickers.

on a case of beer and then just had our free beers and use that as a means to stand there and have a conversation at a P2P level with an engineer. That's a fantastic marketing channel in the early days, but it doesn't scale. The smaller your team, the fewer conversations you have at a time. ⁓ And unless the people that you have a conversation with sign up to use your product and then go and tell their teammates about it, then that marketing channel isn't gonna work.

It's really easy to test whether that particular marketing channel works, right? It doesn't have to be a case of beer, but to go along to meet-ups and just have a series of casual but intentional conversations with other attendees and then studying whether you'll need to get the contact details of those people so that you'll be able to see when they sign up to try a public beta. But if you see that person introducing another person or another person at the same email domain, then you can be fairly certain, okay, well, that's the channel that can work.

I could go and get a bunch of software engineer friends to go and do that in return for a case of beer. The other challenge that we have, I think how you describe it is that Nuskit's biggest opportunity is all those people who aren't software engineers, but who deals need to have input into what happens with the product and they're frustrated and delayed by having to wait for the engineering team to push stuff out. My fear of that kind of challenge, ⁓

is interesting because we kind of have to bring the awareness of that problem to the surface and in the minds of that target customer in the same way that we were both involved in the early days of the smartphone industry, where we switched from feature phone to smartphone, right? And when Steve Jobs stood up on stage and said, you know, the iPhone ⁓ is your music and a phone and a web browser.

all on the one device and like 30 % of the Mac world audience got it right away. But the rest of the world went, so like, know, I've already, you already sold me an iPod, you know, and I've, you know, I don't need to browse the web until I get back to my desk. So a of the world didn't really see that they had a problem with the iPhone solved in the early days and the early reviews were terrible. The product started selling, but it took a while. A pundit said,

It wasn't a business as well. So, ⁓ when we are marketing, ⁓ a solution to a problem that our customer has, but they're not aware that it exists. It takes longer. And you might've heard about the, the, the metaphor or analogy. I think it's a metaphor. I always get metaphors analogies confused. ⁓ but, but, ⁓ it's a good thought exercise to think about, am I marketing a headache pill or a vitamin pill? And people I've met with for a coffee before probably heard me say this. So.

A headache pill is something that solves an immediate problem in the moment. And the challenge for the marketer is to make sure that your brand of headache pill is in the top three brands of headache pill that your headache sufferer has in terms of unprompted recall, meaning that you don't have to, ⁓ they don't have to like reach for it. go, yeah, you know, this brand of paracetamol is probably what I need. I believe that that's going to cure my headache better than the rest. So the challenge for that marketer is to get your brand pushed above

the other two brands that are already in the person's brain and get to the top. So they reach for you on the chemist's shelf right away. So that's a different kind of marketing. What you and I are talking about with NiceGit is how do we gradually make people aware that there is this problem that they maybe aren't thinking about solutions to yet. So when we present them a solution to the problem, that they'll be ready to give it a try. And so that is more like vitamin pill marketing.

And in vitamin pill marketing, the vitamin pill company comes to you in their marketing and they say, you know, are you tired and listless? Taking one of these every day at some point in the future, you'll look back at this investment in vitamin pills and you'll realize that it was because of our vitamin pills. You now feel much more full of energy in our life and healthy. You know, it's not like you can take a multivitamin and then on day two.

feel spectacularly better, right? The pitch is, is this going to take a while? And so for somebody who's in a startup site as a PM or as a UX person and they're frustrated by that delay while they wait for chances to get pushed, ⁓ that will just be part of their everyday life most of the time. And some people might even be grateful for the opportunity to leave that with the software engineers while they go and work on the next round of changes that they want to go and do. ⁓

We first need to create an understanding in that, that, ⁓ post customers, ⁓ mind that actually there's no need to wait and that it will be safe. And, ⁓ you know, the engineering team aren't going to haul them over the coals. Right. So we need that, that vitamin pill, mentality and, and I realized that this probably going to take a bit longer. ⁓ so it will be a, ⁓ a longer investment at probably a lower cost over a longer period of time.

to start to make this become a thing. ⁓ If it works, it should spread, not virally, but it should spread through word of mouth from customer to customer to customer.

Have you thought about how much permission that early NiceGit users and organization might need from the people who currently control the Git?

**Dan Borthwick (19:44)**
Yeah, absolutely. So this is one of the things that comes up. ⁓ So first of all, think, yeah, the kind of ⁓ the vitamin pill, headache pill analogy metaphor. I also struggle with those. But yeah, I think that's really spawned and it actually kind of reflects the journey that I've been on in terms of how I think about it. ⁓ Yeah, when I started working on my, I was kind of anticipating that we'd be selling the headache pill to UX designers, that they'd be frustrated and thinking, yeah, why can't I do this?

actually that's not turned out to be the case as I think you've anticipated. And we're actually getting the most traction and the most positive responses from team leads, the people who are kind of owning the teams, owning the productivity and responsible for the happiness of those teams. And a big learning that I've had has been shifting my mindset from, yeah, thinking about it as a solution to a problem to thinking about it as an enabler, as an add-on, as the bit of an impel.

And so that's definitely reflected how I've been thinking about the go-to-market strategy. ⁓ With the game developers being that initial beachhead, one of the reasons for doing that is because for them it is actually a bit more of a heavy pill. They are working in this way and they have problems and they want to be able to solve it. So that's kind of in our favour, but the real opportunity is to build for that big market. It's interesting that you said that that could therefore require a sort of

a longer investment period or a longer scaling up period. Also, the kind of product-led growth. Yeah, I think it feel like nice to get the current thinking is that the pricing will be relatively on the low end of like a per seat cost for B2B SaaS, just based on where people's expectations around it. But that actually enables product-led growth and that kind of SaaS virality that

we see. I'm very inspired by products like Slack and by Atlassian. It's very easy to be inspired when you see their bottom lines. But specifically the way that they've grown their products within organizations and NiceKit should work quite well in that way as well.

**Alan Jones (21:59)**
Do you have a short concise little tagline that kind of expresses the value that NiceGit has for its ideal customer?

**Dan Borthwick (22:12)**
Ooh, great question. To be honest, the one liner that we often use is source control for normal people. That's actually a quite solution focus when you think about it. What I'd really like to get to though is, and what we're trying to do with the marketing and the positioning is to position it more as in terms of people's workflows and the people problem that we're solving. So not as a technical solution, but this is something that enables your people

to do these things. And then the details of how it works, which is important as well. So yes, I would love to come up with a one-liner that kind of captures that. I don't quite have it yet. If any of your listeners have ideas, please do let me know.

**Alan Jones (22:55)**
It might be really fun to run some ⁓ multivariate tests on simple ways to describe this and for potentially different kinds of ideal customer profile. So some software engineers might be very grateful to know that there's something that they can give to the non-technical people on the team to ease the load for them. So they might need to bid.

a tagline for them and then another tagline for UX people, another tagline for the product lead, perhaps potentially a tagline for the leadership team as well. Help your team squeeze more out of every push, make further progress on each strength or something like that. I'm not really sure, but certainly worth trying. And it might be something that you can come up with sort of hack together a bit of multivariate test with a little bit of a

lightweight advertising spend and a couple of relevant platforms. Reddit is obviously a really great place where a lot of this community hang out. LinkedIn to an extent is also a place where that hangs out. Although, for our kinds of audio customer profile, potential customers on LinkedIn are more wary of marketing messages on LinkedIn. Like everybody hates the fact that LinkedIn is now this huge self-promotion platform where everybody's humbled.

to announce, but ⁓ another one perhaps worth looking at is Propertant. I don't know if you've spent any time there.

**Dan Borthwick (24:26)**
Yes, I've had a product on product hunt in the past and yeah, I've seen good results from that. One of the learnings, was a lot of work to organise the campaign. think this is cracking my time in the games world, but yeah, we had a small agency and we were sort of full time getting that going and we had a Kickstarter as well. But yeah, that was very effective and I think could be a fit.

**Alan Jones (24:48)**
Yeah, that's gotten even more competitive now. Sorry.

**Dan Borthwick (24:51)**
I was just going to ask you, Alan, one of the things I wanted to see if you had any thoughts around was, like you mentioned, that there's different roles within the teams that we're targeting here. You've got the technical lead to some extent can be the gatekeepers to the projects. You've got the team leads, like producers and product owner type roles. And then you've got the designers and the content writers and the more of the end users. All of those people sort of seek different information and sort of see things in different ways.

So come across that where you've been kind of trying to reach out and market to people, but sort of different groups of people at the same time, because we know when we hit team, team leads at the moment, we get a generally very good response. And then they often ask, okay, well, I'm going to go away and talk to my tech leads now. And at that point, I would love them to have the information in their hands without having to ask me for it. I'd love them to have the information in their hands to take their tech leads. So is that something you've come across? And are there any strategies that

might work in terms of being able to target multiple groups of people within one single channel or one single flow.

**Alan Jones (25:56)**
Yeah, in a lot of marketing for technology products, there's people use white papers, you know, for different audiences to help somebody in one part of an organization explain why the organization is to spend money on this thing. And then they need to get permission ⁓ for budget or headcount from somebody else in another area of the organization. And so those

White papers can't be written for your initial contact. They have to be written for the audience that your initial contact needs permission and or budget from. So that's not a bad way forward. It's probably a graded in not to call it. And for this market, it's probably not a graded in not to call it a white paper because I don't think anybody in our industry, know, like white paper sells dry and boring and formal and corporate. So, know, cheat sheet.

And there might be some fun visual ways to create something that looks less like two and a half thousand impenetrable buzzwords. And make something perhaps more visual and playful, seeing as you are a nice git and not unfriendly git. With some audiences, it can sometimes work to do a brief video white papers, have somebody speak into camera.

that can be tough when you've got a interface ⁓ focused product and NiceGit might be one of those. Like you may need to show the difference between using another good product and NiceGit to make it work. And so when you're bringing screenshots into video, ⁓ it takes quite a bit of production. It's getting easier all the time, but it can be harder. Another really helpful thing to remember is that each of these different ⁓ stakeholders in the decision to adopt your product,

is going to be focused on a different metric for success. So in my area of the business, I might be thinking about successful features pushed over a period of time or personnel is required to refactor something. Other people in the organization might be thinking about overall headcount budget. I might be thinking about in terms of dollars.

Others might be thinking about in terms of, you know, if I'm a product leader, I might be thinking about, know, my, biggest competitors got, excuse me, got these three new features that we have to mimic as rapidly as possible. So maybe, you know, refactoring for different audiences, this is the win for you. This is why you need to get on board with the decision to adopt this as a product. Other interesting thing about, about product hunt though, is, is that there is some, some forerality. ⁓ And so.

that reality is almost entirely confectioned. Now it's almost entirely created professionally by third-party experts for the most part, and it's not free, ⁓ but ⁓ it is very effective when you see something go off and it is a big deal. And the final thing that might be really helpful here is to look for ⁓ publishers.

other podcasts that's speaking to your audience and perhaps journalists working for online mastheads. This area might be good to have them be enthusiastic proponents for the product too. ⁓ You're already building in public out there on LinkedIn. This is probably a really great idea if you're not already to start publishing a ⁓ dev blog. This is our product roadmap. This is the current feature set. This is what's in the backlog.

This is what we're prioritising for our next cycle. Follow us to learn more and here's an open message board of some kind where you can chime in with your own ideas.

**Dan Borthwick (29:56)**
Yeah, I'm actually interested in exploring the idea of an open backlog. So in the same way as like within a company, in theory, normally anyone can contribute ideas to the backlog. I would love to open that up to the public and for them to let us know their future ideas and even to have a say in prioritizing.

**Alan Jones (30:13)**
Are you planning to raise money for the business?

**Dan Borthwick (30:16)**
⁓ Yes, we are. So we're looking to raise a seed round in the new year. But I would love again to get your sort of ideas in this particular area. I've had different advice from different people over the over the course of the project on this in terms of like sequencing the release against the the fundraisers. So some people have said, yeah, it's probably better to to fundraise and do like a pre seed before you release the products. And at that point, you're kind of selling the dream, selling the vision. Other people said, yeah, well, you know,

You're so close. can get this thing built. You've got the ability to actually build it and release it yourself. So just do it and get the data, get the learnings and then talk to us then and everything in between. So what would your personal take be on that? As an investor, when would your sweep spot be ⁓ in terms of the life cycle of the launch of the product and growing views?

**Alan Jones (31:11)**
Every year raising capital for early stage startups in Australia is interesting and challenging, but just every year brings different challenges. We have a very unstable macroeconomic climate right now. ⁓ And there are a lot of investors in tech who've got to hold a lot of capital to be able to follow on and very expensive investments they've made in AI over the past couple of years. many of may be looking at.

dialing down how many new checks they write into Starlerton 2026. So that may make it tighter and more competitive to raise capital. In the US, the precede stage of startup investment has a lot of investors who come from a product and technical background. And so they're actually pretty good when a product is very new and it's more aspiration than actuality. Those people are pretty good at

confidently coming up with a decision of whether or not they think it's an investable business. Here in Australia, there are far fewer people ⁓ at all of any stage in capital in Australia ⁓ with actual hands-on building a product experience. There's really only a of us. So anytime there are fewer investors to go around, you have to leave it to a point where you're more certain you're going to be able to bring them on board or at least start early enough.

that you can start showing them and updating them on a regular basis. This is the progress I'm gonna make next. ⁓ And then, you know, two weeks later, hey, so I told you I was gonna do those things. I go up down, here's the result of what I learned from that. This is what I'm gonna do next. So that when you're ready to raise money from those people that have seen you making forward progress on bringing a product to market, because, you know, anybody can sit here with a ⁓ slide deck and says, this is what I'm gonna build. It's just as soon as I find an engineer, he'll work with me on it.

Of course it's possible to get the rest of the venture capital industry excited about the business that you're building, but they'll be excited about the business that you're building, not about the product that you build. And for them to be excited about the business that you're building, that requires rapid customer growth and revenue growth. Everybody's trying to invest in what they expect to become exponential growth as well. So when you're investing in other traditional industries, know, 5 % growth.

year on year is a great thing. Of course, in startup investing, we're not looking for that. We're looking for 5 % in a month and then 10 % in the next month and then 15 % in the next month. So we're trending towards exponential. And the art as an investor is trying to pick the earliest possible moment where you believe it has a reasonable chance of going exponential. But early enough in the growth curve that everybody else isn't yet ready.

to agree with you and so the company is still at a very affordable valuation. So ⁓ when you're appealing to those few of us in early stage venture in Australia who come from a product and technical background, invest in showing them how your product's working now, what it's going to do next, ask for their feedback on the actual product itself so that when you're ready to raise money from them, they kind of feel like they've seen you making forward progress on the product. ⁓ And then for the rest of the venture community, you're going to have to show them customer growth and revenue growth.

So it's probably not something yet that you really need to spend much time on yet in the broader VC community. Look for those people from an engineering, product management, UX kind of background, they're toasting.

**Dan Borthwick (34:39)**
Yeah, great. Thanks. think it's a really good device. I think we're already seeing that and I've got several good warm investor conversations on the go. And yeah, definitely seeing that kind of dichotomy between people who kind of understand the products and people who maybe don't have that product background, but understand the business opportunity. One of the things I actually wanted to ask you about, it's okay, like, I'm finding when I'm pitching, it's like where to start in terms of explaining the opportunity and the problem.

It's a business and a product that's based within a particular domain. And some of the people that we're pitching to have that domain knowledge. Some don't. And often I'm finding, ⁓ of course I do my research and try and figure out who I'm pitching to before I do it. But still it's like, when I'm going into those conversations, going into pitches sometimes, ⁓ it's kind of hard to gauge. Do I need to start by explaining what the domain is and then take it from there? Or do I just go straight in and just assume some knowledge?

So again, like for somebody who's probably been pitched to more than just about anyone, ⁓ how would you approach that from my seat?

**Alan Jones (35:48)**
Yeah, I think you've, ⁓ this is a question of ⁓ audience research, know, so don't go into, if you can avoid it, don't go into pitch discussions with people until you know something about their background, until you know what they're likely to understand and not understand. ⁓ Cause it's going to be, it's always difficult ⁓ to explain something that you know deeply to someone who doesn't know anything about it because you keep unconsciously making assumptions and you assume that everybody knows this acronym.

or that bit of jargon and we can't help it. That's how we've been forced to learn to speak so that we can efficiently move forward with our business or our job. So just try and focus on making sure that you're pitching to people who will understand what you're working on. That's gonna shortcut it quite a bit. The other thing you can do is you can lean back on those two things that neither of us are quite sure which is which, but the analogy and the metaphor. So there might be analogies and metaphors for this.

Perhaps what we're talking about here is, ⁓ if you've ever flown internationally, you have this frustrating experience where you have to arrive at the airport super early because there's 400 other people who also have to arrive at the airport super early and you'll have to be processed through customs and your bags checked in and all wait at the gate and all that. And all of that is because for the airlines to operate the most efficiently, there's an efficient size of aircraft.

and a whole 400 customers. So the aircraft's not gonna leave and take you to London until the airplane is full of people and luggage and fuel, right? So a much better way, more convenient for all of us would be if we all had little one person intercontinental airplanes, right? So I just walk up the airport anytime I like, chuck my bag in, it's just me, off we go, right?

**Dan Borthwick (37:35)**
I think they call that now, don't they?

**Alan Jones (37:37)**
Yeah, yeah, so in building technology products, have this dynamic, fast moving, really productive kind of team of people working on things, but everybody has to wait until the plane is at the gate and all the baggage is in the hold. That's what we're talking about here. So, what we're talking about is giving everybody their own little private jet. Maybe that's terrible actually, but...

some sort of analogy or metaphor for those people that you haven't been so successful with. ⁓ As soon as you realize that they're blanking out, might go, you know what, hang on a second. I'm just gonna hit you with the metaphor that I think is working for me right now. Let me see if this makes sense.

**Dan Borthwick (38:19)**
Yeah. Awesome. like, yeah, similarly, ⁓ when it comes to like the tactics of investor relations, I'm often being asked at the moment, I'm not sort of full pitching to investors just yet. These are kind of introductory warmup type conversations, but sometimes investors are asking, okay, can we see your deck? Meaning, can you send us a deck? I'm torn. My natural inclination ⁓ is to kind of hold off a little bit and try and get to the point where I can pitch in person.

partly to have that kind of flexibility that you're talking about there to tailor the pitch to the person. But what are your thoughts though in terms of is it better to hold out to get that in-person pitch meeting or is it better to seize the opportunity, give them a standalone leave behind deck and sort of take it on from there?

**Alan Jones (39:07)**
Yeah, I would definitely reach out for a coffee first. Definitely. There's too many things to do in a day. ⁓ And so once you've delivered a label, hand it to somebody, you're to have to nag and nag and nag and nag just to get them to read it. And that's going to start the relationship off from ⁓ the wrong place. Much, better. Even the busiest people out there will make time. And in Sydney, Melbourne, at least.

in Brisbane and both Australia is relatively friendly place. People will allow you to buy them a coffee. Especially if it's come through a warm introduction from somebody else that they know. So, investors with some kind of technical background in this space will probably get the product from the beginning. My own awesome partner at Made Ventures, Emily Rich, Sasha Boranikov down on Adelaide, Rain Ong, the famous Rain Ong.

⁓ and perhaps Matt Allen would be great people to, to reach out to and have their first coffee with. Dan, thanks very much for coming on today's episode of, of Pick My Brain. ⁓ you've been an awesome guest and it's been great to learn about what you've been working on with Nice Kit. ⁓ thanks listeners too, and viewers for this and every episode of Pick My Brain's, the advice podcast for every startup founder. Thanks for listening. And if you enjoyed this episode, nevermind that. Don't forget to like and subscribe.

that every bloody podcast has. Instead, try and think about somebody you know out there in startup land that might be at use on the advice that we've talked about today. Until then, maybe they'll listen to it. Maybe they'll subscribe. If they like, I'm not gonna make them. That said, I'm not a lawyer or an accountant or a software engineer. And what you've heard today is not intended as financial, legal or software development advice. You should always seek that from a qualified professional before making big decisions. I'm not a superhero either. So sometimes,

I am fallible and occasionally I might even be wrong. So please let me know when you think I might be or if you know another guest for the show so that we can get better at this too and you get a better listening experience. Just reach out to me on any of our social channels or email the show at pickmybrain at startupfoundercoach.com. That's pickmybrain at startupfoundercoach.com. The Pick My Brain podcast is produced, edited and being directed to your ears by the hardworking and understaffed team of day one.

the podcast network for founders, operators, and investors. Find out more about us at dayone.fm. That's dayone.fm. Have a great day.

Thanks for joining me for this and every episode of Pick My Brains, the advice podcast for every startup founder. Have you been listening to the show and wishing you could ask for a little advice about your startup? Well, here's your chance to do just that. We're trying something new and you can be part of it too. Leave me a voicemail message with a question you'd like answered in a future episode and I'll do my best to give you the best advice I can. Just go to speakpipe.com slash pick my brain and leave me your most pressing question, request or just some feedback and support for the show.

go to speakpipe.com slash pick my brain. We'll follow the link in the show notes.



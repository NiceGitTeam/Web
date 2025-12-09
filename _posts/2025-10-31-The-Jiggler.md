---
layout: post
title: "The Jiggler: Chaos Engineering for Git"
author_staff_member: Dan
categories: [development, AI]
excerpt_separator: <!--more-->
---

Testing a single-user application is easy. You click a button, something happens, you verify it worked. Ship it!

Testing a multi-user real-time collaboration tool? Welcome to hell.

<!--more-->

## The Problem

[NiceGit](/) is designed for teams working together on the same Git repository. That means multiple people pushing, pulling, branching, and merging. Sometimes all at the same time. In theory, this should work flawlessly. In practice, every possible race condition and state synchronization bug will crawl out of the woodwork the moment two users breathe near the same branch.

But how do you test for this? You can't exactly hire a dozen developers to frantically hammer your staging server while you watch the logs and pray.

Enter **The Jiggler**.

![The Jiggler in action](/images/posts/Jiggler.gif)

## What is The Jiggler?

The Jiggler is a beautifully chaotic script that simulates multiple users making rapid-fire changes to a Git project. It creates commits, switches branches, pushes, pulls, and generally creates the kind of mayhem that would make any Git repository cry for mercy.

Think of it as a stress test designed by someone who's seen *too much*. Someone who's been awakened at 3am by merge conflicts that shouldn't exist. Someone who's watched in horror as two users simultaneously pushed to the same branch and the tools just... shrugged.

## Why "The Jiggler"?

Because it jiggles your Git repository like a hyperactive child with a snow globe. Also because "Project [Chaos Monkey](https://netflix.github.io/chaosmonkey/) But For Git And Also We're Running Out Of Naming Ideas" didn't fit on the whiteboard.

The approach is inspired by my time in Game Development where 'button mashing' tools are sometimes used to spam a game with random inputs. While it sounds haphazard, and is, it's often an incredibly effective way to find bugs.

## What Does It Actually Do?

The Jiggler spawns multiple simulated users, each with their own terrible ideas about what to commit next. They:

- Create files with abandon
- Make commits faster than you can say "atomic transaction"
- Push and pull like they're in a Git speedrunning competition
- Attempt to merge conflicts just to spice things up (which NiceGit detects and prevents before they can occur)
- Generally behave like the least coordinated product team imaginable

All of this happens *simultaneously*, because the best bugs only appear when Murphy's Law is in full effect.

## Jiggler, Son of Claude

Standalone tool scripts are a great use case for AI code generation. The lack of dependencies on other systems, absence of a UI, small codebase and relatively low risk all play to LLMs' strengths. In this case [Anthropic's Claude Code](https://www.anthropic.com/claude/code) LLM was able to produce a working version from just a single prompt:

```text
Create a new ts-node script to perform a series of Git operations on a given Git repository.
- you don't need to create the repository, just make it configurable to a local folder
- put it in functions/scripts
- use 6 different personas to perform the operations
- the sequence of operations is random
- push the changes after between one and three operations
- the frequency of operations is configurable. Default to one per minute.
- operations could include:
-  editing existing text files
- adding and removing text files
- adding, removing and editing image files using [ImageMagick](https://imagemagick.org/)

The repo will use [Git LFS](https://git-lfs.com/) so ensure the script accounts for this.

Call the script 'repo-jiggler'
```

A second prompt tweaked the behaviour to allow for more realistic file histories:

```text
update the script so that some files are never deleted. this should allow files to have a long, multi-commit history.
```

and we're done!

*There's a lot of hype around AI at the moment, which I don't want to add to. So I'm posting this an example of a best case experience, this certainly isn't typical of AI assisted coding which normally needs a **lot** more supervision and manual intervention.*

## The Lesson

Building collaborative tools is hard. Testing them is harder. But with enough simulated chaos and a script with a silly name, you can at least catch the worst bugs before your users find them.

And that's really all you can ask for.

---

*The Jiggler: Because if your code can survive this, it can survive anything.*

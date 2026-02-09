---
title: Technical FAQs
heading: Technical FAQs
layout: docs
---

### Does NiceGit work with GitHub / GitLab / Bitbucket?

Yes.

NiceGit works with all of these major Git hosting providers. If you already have a repository, there's nothing to change.
For new projects, just set up a repository on the host of your choice and then access it through the NiceGit desktop app.

[We also support Self Managed GitLab instances.](/docs/self-managed-gitlab/)

### Does NiceGit store our project files?

No.

Files remain hosted on your Git hosting provider. NiceGit does not store any project files on our servers. The NiceGit
platform works through standard Git and host provider APIs.

### Will our existing CI, code review and other integrations work?

Yes.

### Does the whole team need to switch to using NiceGit?

No. If some of your team works with NiceGit, others can continue to use traditional Git tools, that's fine.

### Can I control the kind of changes NiceGit users can make?

Yes.

NiceGit only accesses the branches the team chooses. Your team retains full control over when and how to merge these changes into
other branches, such as if you have a separate production/release branch.
You can merge using traditional Git tools, pull/merge requests, or however you choose.

### What tools can users use to make changes?

Anything you like! As with traditional source control solutions, NiceGit users have a copy of the project in a normal
folder on their computer. They can use any tools they like to edit the files. Photoshop, Figma, Illustrator,
any text editor or IDE, it's toally up to you.

### Is NiceGit just a desktop Git client?

No. NiceGit is a full-stack platform that is continually monitoring your project using back-end services as well
as our NiceGit desktop app. This supports features such as real-time updates on your team-mates' activity,
and our unique Intelligent Locks automated file locking.

### How secure is NiceGit?

Very. We use state of the art cloud infrastructure from Google, follow the latest industry best practises, and all
user data is held securely in enterprise grade databases, with encryption for sensitive information.
Please [contact](/contact/) us if you have any specific queries or requirements.

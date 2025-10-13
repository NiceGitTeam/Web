---
title: Self-Managed GitLab Setup
heading: Setting Up NiceGit for your Self-Managed GitLab
layout: docs
---

NiceGit supports [Self-Managed GitLab](https://docs.gitlab.com/topics/offline/quick_start_guide/). This guide prepares
your environment to work with NiceGit. Follow these steps before using NiceGit with your environment for the first time.

Self-Managed GitLab environments typically have their own domain, for example `gitlab.mycompany.com` or similar. Please
replace `<mydomain>` in the instructions below with the relevent domain for your environment.

* This will become a table of contents (this text will be scrapped).
{:toc}

## Prerequisites

* You will need administrator access to your Self-Managed GitLab instance
* Your GitLab instance should be version `v12.0` or higher.
  * Your environment's version can be found at
`https://<mydomain>/admin` under _Components -> GitLab version_. v12.0 was first released in 2019 so most environments will meet this requirement.

## Step 1: Access Application Settings

1. Sign in to your GitLab instance as a user with administrator access
1. Navigate to `https://<mydomain>/admin/applications`
1. Ensure there is no existing NiceGit application listed under _Instance OAuth applications_

## Step 2: Create a New Application

1. Click _Add new application_ to create a new OAuth application for NiceGit.
1. Fill in the following details:
    * Name: `NiceGit`
    * Redirect URI: `https://api.nicegit.com/oauth/gitlab`
    * Trusted: No
    * Confidential: Yes
    * Scopes: Select _api_
1. Click _Save application_
1. You should see a message _The application was created successfully_. The screen should look like this:

    ![GitLab Application Created](/images/docs/GitLab%20Application%20Created.png){: class="medium" }

1. Note the value of _Application ID_
1. Copy the value of _Secret_ and keep it in a secure location. It will be needed later.
1. Click _Continue_ to finish creating the Application.

## Step 3: Register the Application

1. Contact the NiceGit Support Team at [support@nicegit.com](mailto:support@nicegit.com) with the following information:
   * Your GitLab instance URL (e.g., `https://gitlab.mycompany.com`)
   * The _Application ID_ from Step 2
   * **Do not** include the _Secret_ from Step 2
1. NiceGit support will arrange to securely share the _Secret_ value and register your environment

## Step 4: Test the Connection

After the NiceGit Support Team hs confirmed registration:

1. Open the NiceGit desktop application
2. Go to _Project -> Login..._
3. Select _Self-Managed GitLab_
4. Enter the domain of your GitLab environment. (e.g., `https://gitlab.mycompany.com`)
    ![Enter GitLab Domain](/images/docs/Enter%20GitLab%20Domain.png){: class="small" }
5. Click **Connect**
6. You'll be redirected to your GitLab instance to authorize NiceGit
7. After authorization, you should be able to access your repositories through NiceGit

## Problems?

Please [contact our support team](/contact) with:

* Your GitLab version
* Your GitLab environment's domain
* The error message you're seeing if applicable, and a description of the problem. If possible please include the approximate time and date at which the problem occurred.

## Notes

* The application secret should be kept confidential and only shared with the NiceGit Support team through secure channels
* The application secret is used to verify that requests to the NiceGit API come only from your GitLab environment
* Changing the Application ID or Secret will require reconfiguration - contact NiceGit Support if you need to regenerate these credentials.

## Webhooks

When a repository is first used with NiceGit and Self Managed GitLab, a Webhook will automatically be created. This Webhook allows GitLab to notify NiceGit of changes to the repository's contents.

No user action is required and the Webhook settings should not be modified. For reference, the settings can be seen at `https://<mydomain>/<user>/<repo>/-/hooks` and should look like:

![Webhook Settings](/images/docs/GitLab%20Webhook%20Settings.png){: class="medium" }

If you have any questions or issues related to Webhooks, please [contact NiceGit Support](mailto:support@nicegit.com).

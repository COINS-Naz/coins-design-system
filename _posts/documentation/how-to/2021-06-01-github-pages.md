---
layout: post
category: "Documentation"
tag: "How To's"
title: GitHub Pages
subtitle: "Information on how to add or edit pages using GitHub"
permalink: /documentation/github-pages/
---

## Introduction
This section describes how to add or edit pages for this design system using GitHub pages.

## Before you start
There are a couple of required steps to be able to collaborate on this content:

1. Have an existing or create a GitHub account.
2. Be a part of the COINS Design System Repository.
  <small><br>(Message Nazar Kulynyak ([nazar.kulynyak@coins-global.com](mailto:nazar.kulynyak@coins-global.com){:target="_blank"}) or Yan Llamas ([yan.llamas@coins-global.com](mailto:nazar.kulynyak@coins-global.com){:target="_blank"}) for an invite)</small>
3. Follow the instructions described on this page or the [Design System Cheatsheet](../cheatsheet/). 


## Editing existing pages

At the bottom of every page there is a "Edit on GitHub" button.

Clicking on this button navigates you to an appropriate GitHub page in a new browser tab. On this page there's an edit action (see screenshot below) in the top right corner of the screen.


<img src="{{site.baseurl}}/img/how-to-github-edit-icon.png" alt="Coins Construction Cloud - Design System - How To's - GithHub edit icon" width="400">

This action will switch the page mode to editing. For the appropriate content markdown please refer to [Design System Cheatsheet](../cheatsheet/).


## Creating new pages

To create a new page navigate to [this page](https://github.com/COINS-GLOBAL/coins-design-system/tree/design-system/_posts){:target="_blank"}, to an appropriate folder and click the "Add File" button and choose "Create new file" option from the menu (see screenshot below).

<img src="{{site.baseurl}}/img/how-to-github-new-page.png" alt="Coins Construction Cloud - Design System - How To's - GithHub create new file" width="400">

### Naming the pages
For a page to appear in the list of pages, it has to have a correct format file name which is <span class="snip">yyyy-mm-dd-nameofpage.md</span>

<img src="{{site.baseurl}}/img/how-to-github-create-name.png" alt="Coins Construction Cloud - Design System - How To's - GithHub page name" width="800">

### Standard page template
There's a certain template we need to follow at the start of the page.

This section describes the page settings such as title, description, relation to different sections, categories and subsections of the design system and the page URL.

{% include snippet-image.html
  image='how-to-github-page-template.png' 
  code='
---
layout: post
category: "Web"
tag: "UI Components"
title: Page title
subtitle: "Page description"
permalink: /section-name/page-name/
---

** Replace this line with real content **
' %}

### Understanding the settings

| Page setting | Values                                                                        | Description    |
|--------------|-------------------------------------------------------------------------------|----------------|
| layout       | post                                                                          | Page layout (default - post) |
| category     | "Web",<br> "Mobile",<br> "Global Styles",<br> "COINS Figma",<br> "Documentation",<br> "Marketing" | Page section - a relation to a certain section visible on the home page |
| tag          | -                                                                             | Page subsection - page relation within a section. Displayed as categories within a section in the navigation sidebar |
| title        | -                                                                             | Page title |
| subtitle     | -                                                                             | Page subtitle |
| permalink    | /section-name/page-name/                                                      | A URL to this page |
{: .doc-table}

For the appropriate content markdown please refer to [Design System Cheatsheet](../cheatsheet/).

After you're done adding the content, refer to the next "Saving" section.

## Saving

After the edits are done scroll down to the end of the screen and add some description to what has been changed / added to this page.


<div class="coins-alert error">Important: Make sure to select "Create a new branch" before you click "Propose changes"</div>

<img src="{{site.baseurl}}/img/how-to-github-save.png" alt="Coins Construction Cloud - Design System - How To's - GithHub saving" width="800">

After this just click the "Create pull request" button. The changes proposed will go to the repository admin and will be approved shortly. After they have been approved the content appears on the page in about 2-5 minutes.

<img src="{{site.baseurl}}/img/how-to-github-pull-request.png" alt="Coins Construction Cloud - Design System - How To's - GithHub pull requst" width="800">


## Demo or Further help

Feel free to email Nazar Kulynyak ([nazar.kulynyak@coins-global.com](mailto:nazar.kulynyak@coins-global.com){:target="_blank"}) if you need any help or guidance.
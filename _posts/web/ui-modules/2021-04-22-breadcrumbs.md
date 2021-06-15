---
layout: post
category: "Web"
tag: "UI Modules"
title: Breadcrumbs
subtitle: "The breadcrumb is a secondary navigation pattern that helps a user understand the hierarchy among levels and navigate back through them."
permalink: /web/breadcrumbs/
---

## Overview

Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step.

### When to use

Breadcrumbs are effective in products and experiences that have a large amount of content organized in a hierarchy of more than two levels. They take up little space but still provide context for the user’s place in the navigation hierarchy.

### When not to use

Breadcrumbs are always treated as secondary and should never entirely replace the primary navigation. They shouldn’t be used for products that have single level navigation because they create unnecessary clutter.

## Guidelines

Use breadcrumbs for nested navigation, with each item acting as a link. They show the hierarchical progress from the highest item level to the lowest, one step at a time. 
- Make sure breadcrumbs don’t visually overwhelm the page.
- Place breadcrumbs at the top left corner of the screen, right below the header (navigation level 1) and above the sidebar, grid and filtering panel
- Make sure your breadcrumb items reflect the page or product section titles exactly for screen readers.

### Position 

{% include do-dont.html 
  do-img="Guidelines_Breadcrumb_Position_Do.png"
  do-text="Right location of the breadcrumbs."
  dont-img="Guidelines_Breadcrumb_Position_Do_Not.png"
  dont-text="Wrong location of the breadcrumbs."
%}

### Wording

{% include do-dont.html 
  do-img="Guidelines_Breadcrumb_Wording_Do.png"
  do-text="Reflect the page or product section titles exactly in a breadcrumb item."
  dont-img="Guidelines_Breadcrumb_Wording_Do_Not.png"
  dont-text="Do not mismatch the page or product section titles and breadcrumb item."
%}

## Live Preview

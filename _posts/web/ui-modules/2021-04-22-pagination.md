---
layout: post
category: "Web"
tag: "UI Modules"
title: Pagination
subtitle: "Pagination is used for splitting up content or data into several chunks, with a control for navigating to the next or previous part of the data."
permalink: /web/pagination/
---

## Overview

There can be multiple ways to go through the data grids. We allow our users to decide which type of navigating between the data they use. <br>
Pagination options consist of three options:
- **Paginated** <br>
This option refers to the default “go to page X” of a set of data presented on a page.
Paginated option also allows to select the amount of rows to display on a given page. <br>
- **All – aka lazy loading** <br>
If a user selects All as their method to paginate they will have the ability to scroll down to load more (some predetermined amount) of data rows. While the row data is loading we display a placeholder skeleton indicating that data will appear here soon.
- **Alphabetical – if possible** <br>
When a grids data contains core data (i.e. Users as main focus of the grid) which supports Alphabetical mode we display this third option of paginating. The Alphabetical mode works similar to All - lazy loading, but additionaly has a way to determine which data to display (i.e. Only rows starting with the letter A in their core column)

## Guidelines
**General**
- Always anchor to the top of the list when the user interacts with the pagination component. Doing so reduces scrolling on the part of the user while keeping them on task.
- Place the selection of the pagination type on the left side near the pagination itself.

**Paginated**
- Display back and forward Icon chevrons as well as page numbers for each page. 
- Pagination must have Icon chevrons for incrementally navigating forward or backward between pages.
- Pagination must have page numbers for navigating to specific pages
- Pagination must include an ellipsis (…) indicating hidden pages when there are more than 7 pages to condense the component and make it more readable while still showing the first, last, and current pages.
- Highlight the Current page as well as available pages in Pagination.
- Show the size of the paginated set. Users want to know the length of a paginated section. This is most commonly accomplished by always showing the last and second page as the last item in the pagination navigation. 

**Alphabetical**
- Display all the alphabet in the pagination box.
- Highlight the Current letter page.

## Live preview

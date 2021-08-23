---
layout: post
category: "Web"
tag: "UI Modules"
title: Content Switch
subtitle: "Content switchers allow users to toggle between two or more content sections within the same space on screen."
permalink: /web/content-switch/
---

## Overview

Content switchers allow users to toggle between alternate views of similar or related content. Only one content section is shown at a time.<br>

They are composed of 3 elements: 
1. Selected content tab: Only one content tab can be selected at a time and there should always be one selected.
2. Content tab: Selectable container for each content view.
3. Text label or corresponding icon: Describes the content view.

### When to use
Content switchers are frequently used to let users toggle between different formatting, like with a grid view and a table view. They are also often used to narrow content groups. 

### When not to use
- When the content on the page is divided into related sections, but without any overlap use tabs instead. Tabs follow the metaphor for sections in a filing cabinet and two tabs wouldn’t contain the same sheet of paper. So the role of tabs in information hierarchy is to separate content.<br>
- The content switcher is used for large groups of content, as opposed to the toggle which is meant for a “yes/no” or “on/off” binary decision.<br>

## Guidelines

**Text label**
Be concise and specific and limit text labels to two to three words.
Text labels should clearly communicate the view users will see and the content contained in the view.<br>

**Default selection**
Only one content section can be shown at a time. The first content tab in the switcher should be determined based on usage and should always be the default selection.<br>

**States**
The content switcher includes two content tab states: selected and unselected. The selected state uses a high contrast color.<br>

**Width**
The width of each individual content tab should be based on the width of the text label and 12px paddings on the left and right sides.<br>

{% include do-dont.html 
  do-img="Guidelines_CSwitch_Do.png"
  do-text="Set the width of the tab based on the width of the text and same left and right 12 px paddings"
  dont-img="Guidelines_CSwitch_Do_Not.png"
  dont-text="Do not base make all the tabs the same width."
%}

## Type
The overall content switcher type varies based on the content and layout. You can use different number of switch options or replace text labels with corresponding icons. 

<!-- Content switch -->
<!-- Content switch tab 1 -->
{% capture type-withtext %}
{% include snippet.html code='
insert code snippet here
' %}
{% endcapture %}

<!-- Content switch tab 2 -->
{% capture type-withicon %}
{% include snippet.html code='
insert code snippet 2 here
' %}
{% endcapture %}

<!-- Render Content -->
{% include content-switch.html for="type"
           content-1-label="With Text" content-1=type-withtext
           content-2-label="With Icon" content-2=type-withicon
%}
<!-- End content switch -->

**Note:** Use icons only in a case when you are sure that user will understand the meaning.

## State
The content switcher includes two content tab states: selected and unselected. The selected state uses grey color, when unselected remains white. 

<!-- Content switch -->
<!-- Content switch tab 1 -->
{% capture state-default %}
{% include snippet.html code='
insert code snippet 3 here
' %}
{% endcapture %}

<!-- Content switch tab 2 -->
{% capture state-selected %}
{% include snippet.html code='
insert code snippet 4 here
' %}
{% endcapture %}

<!-- Render Content -->
{% include content-switch.html for="type"
           content-1-label="Default" content-1=state-default
           content-2-label="Selected" content-2=state-selected
%}
<!-- End content switch -->

**Note:** Only one content section can be selected at a time.
  
  

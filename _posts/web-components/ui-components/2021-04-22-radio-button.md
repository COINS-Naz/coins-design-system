---
layout: post
category: "Web Components"
tag: "UI Components"
title: Radio button
subtitle: "Radio buttons allow the user to select one option from a set."
permalink: /web-components/radio-button/
---

## Overview

The radio button is presented as a small circle on the screen. It also has two states, and when selected, the circle is filled with a solid dot.  Radio buttons enable the selection of one out of at least two options. Activation of a radio button therefore rules out the activation of other radio buttons of the same group. Each radio button has a label.

### When to use

Use radio buttons when the user needs to see all available options. Radio buttons are used to configure a specific setting, switch between options or turn something on or off. They can typically be found in surveys where the user needs to scan a list and make a single selection from it.

If possible, use radio buttons rather than drop-down menus. Radio buttons have lower cognitive load because they make all options permanently visible so that users can easily compare them. 

Radio buttons should have the most commonly used option selected by default.

### When not to use

Do not use radio buttons as action buttons that make something happen. Also, the changed settings should not take effect until the user clicks the command button (labeled "OK" for example, or "Proceed to XXX" where "XXX" is the next step in a process).

If you have more than 5 options in a set, consider using a drop-down list instead.

## Guidelines
### Text alignment

With radio buttons, we use right and left text alignment and avoid using top or bottom.

{% include do-dont.html 
  do-img="Guidelines_Radio_Do.png"
  do-text="Put text on the right or left side."
  dont-img="Guidelines_Radio_Do_Not.png"
  dont-text="Do not put text at the top or bottom side."
%}

## Component

{% include snippet.html code='
<label class="radio">
  <input type="radio">
  <span>Radio button label</span>
</label>
' %}

---
layout: post
category: "Web"
tag: "UI Components"
title: Alerts & Notifications
subtitle: "Notification is an act of bringing something to the notice of the user. They can be assigned to certain elements or be universally valid."
permalink: /web-components/notifications/
---

## Overview

Alerts and notifications draw the user’s attention to warnings or important information. The type and urgency of the information is conveyed by means of colouring and position.

### When to use
We use several types of notifications. Scroll down for more information.


### When not to use

Do not use system notifications under any circumstances, except when they are triggered by the system itself.
Do not use notifications when there is no value to bring to a user, such as “Haven’t seen you in a while”. 
Do not use notifications for operations that don’t require user involvement, like syncing information
Avoid using notifications for error states from which the app may recover without user interaction.

## Guidelines
### Text
Keep notification messages specific and relevant. Try to use as minimum text as possible and use common terminology. Avoid overusing ALL CAPS or Italics.

{% include do-dont.html 
  do-img="Guidelines_Notifications_Text_Do.png"
  do-text="Use short and relevant message."
  dont-img="Guidelines_Notifications_Text_Do_Not.png"
  dont-text="Do not use ALL CAPS and text with imprecise meaning."
%}

### Right type for right circumstances
Use the right notification based on catogiries described above. Use types consistently and make no exceptions.

{% include do-dont.html 
  do-img="Guidelines_Notifications_Type_Do.png"
  do-text="Use short and relevant message."
  dont-img="Guidelines_Notifications_Type_Do_Not.png"
  dont-text="Do not mismatch type and context."
%}


## Type

Each notification type has a particular function and its design signals that function to the user. It is therefore very important that the different variants are implemented consistently across products, so that they message the correct information.

| Type                | Usage          |
|---------------------|----------------|
| Alert               | Shown by the system to warn, inform a user of something within a given page. |
| Toast Message       | Shown as a feedback after a user action. |
| System Notification | Shown by the system to notify of the system status or a system message from other products, sections, pages. |
{: .doc-table}


### Alerts

High short-term importance message notifying users of important information, warnings or a critical message.

<!-- Content switch -->
<!-- Content switch tab 1 -->
{% capture type-info %}
{% include snippet.html code='
<div class="coins-alert">Lorem ipsum sit dolor amet</div>
' %}
{% endcapture %}

<!-- Content switch tab 2 -->
{% capture type-success %}
{% include snippet.html code='
<div class="coins-alert success">Lorem ipsum sit dolor amet</div>
' %}
{% endcapture %}

<!-- Content switch tab 3 -->
{% capture type-warning %}
{% include snippet.html code='
<div class="coins-alert warning">Lorem ipsum sit dolor amet</div>
' %}
{% endcapture %}

<!-- Content switch tab 4 -->
{% capture type-error %}
{% include snippet.html code='
<div class="coins-alert error">Lorem ipsum sit dolor amet</div>
' %}
{% endcapture %}


<!-- Render Content -->
{% include content-switch.html for="type"
           content-1-label="Information"
           content-1=type-info
           content-2-label="Success"
           content-2=type-success
           content-3-label="Warning"
           content-3=type-warning
           content-4-label="Error"
           content-4=type-error
%}
<!-- End content switch -->

<br>
### Toasts

Toasts - appear in the bottom center of the viewport (sticky to the bottom of the screen).

We use them to provide a feedback based on the user interaction.

The user can discard them or they are automatically hidden after certain period of time.

{% include snippet.html code='
<div class="coins-toast">
  Lorem ipsum sit dolor amet
  <button class="undo">Undo</button>
  <button class="dismiss">Ok</button>
</div>
' %}

Click on this button to view the demo of a toast message:

<button id="toast-demo" class="button small">Show toast message</button>

<div id="toast-demo-msg" class="coins-toast" style="display: none;">
  Button clicked!
  <button class="dismiss">Ok</button>
</div>


<br>
### System Notification

These cover system feedback such as warnings and messages the user must take note of, such as warnings about system changes.

Notices appear in the lower corner of the right-hand viewport edge.

The notice can be discarded by the user. We use them when notification that is pushed by the application.

The actions on the notifications are <span class="snip">optional</span>.

{% include snippet.html code='
<div class="coins-notification">
  <div class="title-row">
    <i class="icn icn-Bell"></i>
    <div class="notification-title">Notification Title</div>
    <button class="dismiss">
      <i class="icn icn-Close"></i>
    </button>
  </div>
  <div class="notification-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
    <div class="buttons-row">
      <button class="button small">Action</button>
      <button class="button small primary">Action</button>
    </div>
  </div>
</div>
' %}


Click on this button to view the demo of a notification message:

<button id="notification-demo" class="button small">Show notification</button>
<br>

<div class="coins-alert error">Note: These should not be triggered after a user action and instead be a system message to a user.</div>

<div id="notification-demo-msg" class="coins-notification" style="display: none;">
  <div class="title-row">
    <i class="icn icn-Bell"></i>
    <div class="notification-title">Coins Design System</div>
    <button class="dismiss">
      <i class="icn icn-Close"></i>
    </button>
  </div>
  <div class="notification-body">
    This is a system message from the COINS Design System. These actions below are optional.
    <div class="buttons-row">
      <button class="button small">Action</button>
      <button class="button small primary">Action</button>
    </div>
  </div>
</div>

<!-- Demo's -->
<script>
  document.addEventListener("DOMContentLoaded", function(event) { 
    // Show toast
    $('#toast-demo').click(function(event) {
      $('#toast-demo-msg').show();
    });
    // Hide toast
    $('#toast-demo-msg .dismiss').click(function(event) {
      $('#toast-demo-msg').hide();
    });


    // Show Notification
    $('#notification-demo').click(function(event) {
      $('#notification-demo-msg').show();
    });
    // Hide Notification
    $('#notification-demo-msg .dismiss').click(function(event) {
      $('#notification-demo-msg').hide();
    });
  });
</script>

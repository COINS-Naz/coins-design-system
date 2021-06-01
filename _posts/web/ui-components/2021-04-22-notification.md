---
layout: post
category: "Web"
tag: "UI Components"
title: Notifications
subtitle: "Notification is an act of bringing something to the notice of the user. They can be assigned to certain elements or be universally valid."
permalink: /web-components/notifications/
---

## Overview

Notifications draw the user’s attention to warnings or important information. The type and urgency of the information is conveyed by means of colouring and position.

### When to use

We use several types of notifications and classify them on three levels: high, medium, and low-attention depending on signal strength (which peripheral messages need more or less attention).

#### High-attention
Alerts - high short-term importance message such as feedback on success or failure of an action triggered by the user. We use them when we need providing a feedback based on the user interaction with certain element. They are directly attached to an individual element.

#### Medium-attention
Toasts - appear in the bottom center of a viewport (remains in the viewport during scrolling). They are especially suitable for time-sensitive live notifications. The user can discard them or they are automatically hidden after certain period of time. We use them to provide a feedback based on the user interaction. They usually refer not to certain element as alert, but to certain amount of changes or a group of actions. They also can be universally valid.

#### Low-attention
Information - is the static message which describes how to do the required action on a partial section of a page and is positioned below or above this partial section or container. We use them to show some details about upcoming steps the user may have to follow.

Notices - are the system feedback such as warnings and messages the user must take note of, such as warnings about system changes. Notices appear in the lower corner of the right-hand viewport edge. The notice can be discarded by the user. We use them when notification that is pushed by the application.


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

<!-- Content switch -->
<!-- Content switch tab 1 -->
{% capture type-alert %}
{% include snippet.html code='
<div class="coins-alert error">Lorem ipsum sit dolor amet</div>
' %}
{% endcapture %}

<!-- Content switch tab 2 -->
{% capture type-toast %}
{% include snippet.html code='
<div class="coins-alert error">Lorem ipsum sit dolor amet</div>
' %}
{% endcapture %}

<!-- Content switch tab 3 -->
{% capture type-information %}
{% include snippet.html code='
<div class="coins-alert">Lorem ipsum sit dolor amet</div>
' %}
{% endcapture %}

<!-- Content switch tab 4 -->
{% capture type-notice %}
{% include snippet.html code='
<div class="coins-alert error">Lorem ipsum sit dolor amet</div>
' %}
{% endcapture %}

<!-- Render Content -->
{% include content-switch.html for="type"
           content-1-label="Alert" content-1=type-alert
           content-2-label="Toast" content-2=type-toast
           content-3-label="Information" content-3=type-information
           content-4-label="Notice" content-4=type-notice
%}
<!-- End content switch -->

### Alert subtypes

<!-- Content switch -->
<!-- Content switch tab 1 -->
{% capture type-success %}
{% include snippet.html code='
<div class="coins-alert success">Lorem ipsum sit dolor amet</div>
' %}
{% endcapture %}

<!-- Content switch tab 2 -->
{% capture type-warning %}
{% include snippet.html code='
<div class="coins-alert warning">Lorem ipsum sit dolor amet</div>
' %}
{% endcapture %}

<!-- Content switch tab 3 -->
{% capture type-alert %}
{% include snippet.html code='
<div class="coins-alert error">Lorem ipsum sit dolor amet</div>
' %}
{% endcapture %}

<!-- Render Content -->
{% include content-switch.html for="type"
           content-1-label="Alert Success" content-1=type-success
           content-2-label="Alert Warning" content-2=type-warning
           content-3-label="Alert Error" content-3=type-error
%}
<!-- End content switch -->

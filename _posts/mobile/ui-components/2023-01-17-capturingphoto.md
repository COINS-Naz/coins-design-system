---
layout: post
category: "Mobile and Tablet"
tag: "UI Modules"
title: Capturing a photo
subtitle: "This UI module is used to take a photo or a bunch of photos."
permalink: /mobile/capturingphoto/
---

## Variations
There are a couple of flows that are used to capture a photo depending on product needs.

### Issue Management Photo Flow
**Screen 1**

After selecting an option Camera, the Take Photo screen is opened. It consists of:
1. Top Bar. Includes Title (Here “Take Photo”) and a back arrow, which navigates to the previous screen.
2. Change camera mode button. Changes camera mode from frontal to regular and vice versa.
3. Take photo button. Tapping on this button takes a photo. And saves it to the local gallery (component below).
4. Local gallery. Local gallery captures all photos taken. Usually it has specified limit of photos that can be taken. If you’ve reached the limit of photos (In this case 5 of 5), you will not be able to take more photos.
If the user took some photos and the value is 1-5/5 then tapping on square icon will lead to photo preview screen.
If there are no photo taken and the value is 0/5 then square icon is non-tappable.
If user is allowed to take only one photo, this icon and functionality should be hidden.
5. Working panel backdrop. Backdrop is used to make sure that each function is visible enough. The color of the back drop should be #000000 with 20% opacity.
6. Camera view.
![IM Screen 1]({{site.baseurl}}/img/Mobile_Photoflow_IM.png) 

**Screen 2**

Photo is captured, camera is active for taking more photos or for selecting markup option.
1. Top Bar. Includes Title (Here “Take Photo”) and a back arrow, which closes camera flow, as per Screen 1. Also, as the first photo is taken, the new Markup option in top bar is available. Markup option navigates user to the markup screen.
2-5. Keep the same look and functionality as in Screen 1 
6. Taken Photo.

![IM Screen 2]({{site.baseurl}}/img/Mobile_Photoflow_IM2.png) 

### Clockin Booth Photo Flow
**Screen 1**

After selecting an option Camera, the Take Photo screen is opened. It consists of:
1. Top Bar. Includes title “Take Photo” and a back button. Back Button closes the camera flow.
2. Frame. The frame is used to give the user a hint about where and how he should stand to take a picture of proper quality and with expected format.
3. Take photo button. Tapping on this button takes a photo. 
4. Working panel backdrop. Backdrop is used to make sure that each function is visible enough. The color of the back drop should be #000000 with 20% opacity.
5. Info message. Explains the user how to interact with the UI elements on the screen.
6. Frontal Camera view.

![CB Screen 1]({{site.baseurl}}/img/Mobile_Photoflow_CB1.png) 

**Screen 2**

1. Top bar. Includes:
- Title, here  “Submit Image”;
- Submit button - saves and submits image, navigates to the next screen;
- Retake button, which navigates you to Screen 1;
- Back button - closes the camera flow.
2.Taken Photo.

![CB Screen 2]({{site.baseurl}}/img/Mobile_Photoflow_CB2.png) 

For exporting exact component colors, sizes and fonts [Open Capturing a Photo page on Figma Design System]([https:/1066%3A21943&t=9ABgPdWYKM5ljMXF-1](https://www.figma.com/file/TwQ8GcLuodWXegpAArH1RC/Draft-mobile-components?node-id=1880%3A24779&t=tKyUIDngq8iFsVhF-1)).

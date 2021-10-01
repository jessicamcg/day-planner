# Description

A simple work day scheduler:

Upon application deployment, the user is presented with an organized table with time blocks for standard business hours.

The user can click into the text area, to edit a specific time block. The user can save the contents of that time block by clicking the lock button icon. The user will know that the contents are saved when the icon turns black. (The icon also turns a dark blue when hovered over)

The contents are saved in localStorage which will retain its contents even on page reload.

The user can unsaved each item by clicking the lock icon again. The user will know that the contents are not saved if the lock icon is white.

The current date is reflected in the header of the page.

The current time is represented by the color of each time block. 
    Grey as past, red as present and green as future.

![First Page Load]()
![Saved events]()

## Live Link
https://jessicamcg.github.io/day-planner/
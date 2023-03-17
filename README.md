# Week 03 - Key Code Challenge

**Author:** Peter C. Matthews

This repository contains my submission for the [Master Coding](https://wearecodenation.com/2022/04/25/master-coding/) course at *CodeNation*.

## Brief

These criteria must be met:

 - A welcome message should be displayed (in any form).
 - The generator should wait for a key to be pressed.
 - Once the key has been pressed, the generator should report the: `.code`, `.key`, and `.which` values.
 - Appropriate styling should be applied.

Example: [https://keycode.info](https://keycode.info)

## Implementation

My aim with this project has been to make it modular, and visually consistent.

 - Each information card is a template of an `article` that can be customised with header and footer text.

 - HTML is then injected into each card when a key is pressed, to update the values shown on screen.

 - I have used `prototype` methods to streamline some of the code, in a similar way I would use "*Extension Methods*" in C#.

 - As well as the `.code`, `.keys`, and `.which` values, I have also included the `.location`, with a description of where the location is; the `.altKey`, `.ctrlKey`, and `.shiftKey`, as a "*modifiers*" section; and, I've aggregated all this information into a seprate "*dump*" section, that displays the values in JSON format.

 - The screen resets, 5 seconds after the user presses a key. Each time the user presses a key, the timer resets. To do this I have created a custom `CountdownTimer` wrapper for the basic `.setTimeout()` function. 

### Personal Stretch Goals

Within this project, I have tried to push myself to give a visually pleasing, and consistent layout. I have also focussed on making the JavaScript logical, modular, and easy to follow.

 - Line-by-line annotation, for purposes of education. In a production release, this would be overkill, but within this settings, I felt it was important to document my code-flow as much as possible, and aswell, give a roadmap for future development.

 - Full JSDoc annotation within all classes.

 - Being unsure about standard JS project architecture, I've employed a similar architectural structure as I would with a C# project, using "*Vertical Slice Architecture*", or "*Feature Driven Design*". Within this project there is only one feature, so it's less relevant; however, I feel it's important to cement these standards in early, so that if this project was scaled up, and out, the scaffolding and conventions would already be in place.

 - By separating the prototype functions, and `CountdownTimer` class into a "*Core*" folder, I am starting to build up a re-usable core library, that can be used within other projects.

 ## Retrospective

 I am pleased with how this assignment turned out. Especially with the back-end code. I feel that the styling of the cards is aesthetically pleasing, but I did have grandiose ideas of how the information could be displayed on the screen. When it came to realising these ideas, I found that my artistic skills limited my ability to put my ideas into practice. I think if I had a LOT more time to fiddle with styling, and typography, I could get the basic idea of a notepad on an angle, showing the various bits of information in scrawled handwriting, and a doodle of the key being pressed. However, this would be best left to an artist.
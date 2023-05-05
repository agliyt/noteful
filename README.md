# Noteful Implementation Demo

## Features

For the implemented portion of our high-fidelity prototype, we decided to use native HTML and CSS, with JQuery. The code can be found on GitHub at https://github.com/agliyt/noteful and a link to the hosted demo site is at https://agliyt.github.io/noteful/index.html.

### State before completing a lesson

When we first open the site, we can switch between the band and the lessons by clicking the tabs on the right sidebar. Cloud opening and closing transitions are implemented for switching between screens. Note that at first, when we open the band page, We have two band members, a bear playing the bass and an elephant playing the drums. Music featuring just drums and bass automatically plays and loops in the background. The user currently holds a 4 day streak, as we can see on the left sidebar.

### Flow right after completing a lesson with animations

The lesson overview pop-up is implemented as well. This pop-up can be opened and closed. Once we begin the lesson, we can again see cloud animations. After clicking through the placeholder lesson page, the site takes us through a flow full of animations showing rewards earned, lessons learned and mastered, and the streaks increasing for that day. These animations include the sliding of the XP progress bar, the streaks circle completing, the streaks circle moving down, and the stars around the streaks circle twinkling.

### State after completing a lesson

If we select Gus the guitar-playing lion, new music than before plays in the background, this time including the track with guitar added. Streaks also increase from 4 to 5. Gus, the music, and the streaks stay this way as long as we stay in the same tab - this does not change as long as we don’t switch to a new tab.

The screenshots below show the differences in the band page before and after completing a lesson:

![image](https://user-images.githubusercontent.com/56128451/236377097-6a9371d9-645b-481f-84b9-4abe0cbe2289.png)

*Band page before a lesson is completed. Note that we only have drums and bass, and the user has a 4 day streak.*

![image](https://user-images.githubusercontent.com/56128451/236377129-7d4165c1-f096-42a9-8833-8aaa8ffcba9d.png)

*Band page after a lesson is completed. We now have guitar in addition to drums and bass, and the user now has a 5 day streak.*

## Implementation

### Implementation Process

We originally wanted to find and use a Figma plugin that imported all elements directly from Figma into HTML and CSS. However, we did not find anything that imported the elements properly, so we had to manually implement the elements instead. Due to time constraints for the implementation portion, we decided to add in elements by their absolute position. We recommend that when Noteful implements the student view, they use Bootstrap or some other formatting tool to make the site and app responsive.

### Cloud animations

Cloud animations are shown as transitions between the lessons page and all other pages. To tackle this, we decided to use CSS animations. This way, to make clouds animate, all we have to do is to add the “move” or “move-out” classes to the cloud elements.

### Progress bar, streaks, and stars animations

To animate the XP progress bar, streaks circular progress bar, and twinkling stars, we made frame-by-frame animations using the setInterval() method in JavaScript. This method calls a function every specified time interval. More details about each animation can be found in the code.

### Remembering whether or not the user has completed a lesson

Our implemented prototype demo features different streak numbers, band members shown, and music playing in the background of the band page depending on whether the user has completed a lesson or not. To do this, we used session storage to remember when a lesson is completed and dynamically change the contents displayed and music played based on that. The state lasts as long as the user is in the same tab. We imagine that with the full implementation of Noteful, they will store band member data in a separate database instead.

### Music playing in background

To play music in the background of the band page, we used the “audio” HTML tag. The “controls” attribute is used because some browsers, like Chrome, block autoplay, forcing the user to manually start playing the song. In the live version of the demo at https://agliyt.github.io/noteful/index.html, the “controls” attribute is removed, since autoplay works in that version. When Noteful implements the full app, they should test out whether the autoplay is blocked for them.

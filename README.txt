CPSC-335-03-PROJECT_1 
BY: 		SuperTeam (team number not provided)
TEAM MEMBERS:	Zach Serna, Nicole Serna


INTRO:

We designed a modification of the famous Langton's Ant by expanding the amount of colors in
the ant's pallete. As opposed to exclusively black and white, we have the colors:
Blue, Yellow, Red and Black. The ant will be placed onto a canvas preset to the color black.
Upon moving onto a tile the ant will react based on the color tile it moves onto.
These reactions will be explained in the "FEATURES" section below. The ant also has
3 distinct modes which will affect how it reacts to the color it encounters as well.
These 3 modes will be explained in features below as well. The ant will continue 
to move as long as the tab remains open; however, leaving the browser instance open
for an extensive amount of time (as in days) could lead to unexpected behaviours.

CONTENTS:

1. LarksAnt-HTML
2. p5.js
3. p5.sound.min.js
4. sketch.js
5. style.css
6. README.txt
7. sample_execution.jpg



EXTERNAL REQUIREMENTS:

1. A browser that can support both HTML and Java Script

SETUP/INSTALLATION:

1. Open a browser that can support both html and JavaScript (Chrome should suffice).

2. place the  LarksAnt-HTML file into the browser by dragging it into the browser.

3.  Execute.





FEATURES:


COLORS:
The available colors of the tile are organized into a color index:
0: Blue
1: Yellow
2: Red
3: Black

When the ant reaches a tile, it will react and move based on the mode it is currently
on and change the color tile to the next tile in the index. If it has reached the highest
color in the index, it will loop back to 0.

There are 3 Modes the ant can be in: Left-Right Mode, Set-Count Mode, and Countdown Mode.

LEFT-RIGHT MODE:

1. Check which color tile the ant is currently on and react as follows:
- Blue/Black: 	Set to move Left
- Yellow: 	Change to Set/Count Mode, set to move straight.
- Red:		Set to move Right

2. Change cell color.

3. Move to neighbor cell.

SET-COUNT MODE:

1. Set the counter to the color index of the cell the ant is currently on.

2. Change to Countdown Mode.

3. Change cell color.

4. Move Straight to neighbor cell.


COUNTDOWN MODE:

1. Decrement counter by 1.

2. If counter has reached 0, change to Left-Right Mode.

3. Change cell color.

4. Move Straight to neighbor cell.

 

BUGS:
None!










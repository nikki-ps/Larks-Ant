/*---------------------------------------------------------------
CPSC-335-03-Project_1-SuperTeam

Created By: Nicole Serna, Zach Serna
Date: 2/27/2021

Description: A modification of the famous Langton's Ant
with the addition of the new colors. A more insightful 
Description of the ant's movement can be found within
the README text file located in the contents of the zip file


Note: The speed of the ant may be adjusted by changing the
mcount variable, the lower the number the faster the ant.

---------------------------------------------------------------*/

//Global Variables

//Dimensions
const cell_size = 10;
const rows = 60;
const col = 40;

//Speed of the Ant
var fcount = 0;
var mcount = 5;


function setup() {
  var w = cell_size * col;
  var h = cell_size * rows;
  createCanvas(w, h);
  background("black");
  
}


//Constructor for ant. Assigns default position, color and mode
class Ant
  {
    constructor(x,y,color,mode){
      this.x = x;
      this.y = y;
      this.color = color;
      this.counter = 0;
      this.mode = mode;
      this.facing = 0;
      this.dir = "";
      this.colorCount = 0;
      
    }
    
    //Function for finding the color of the tile the ant is currently on
    findColor(x,y){
      let c = get(x,y); //get color of current tile
      let c2 = c[0] +c[1]+c[2];
      if(c2 == 0) // if its black
        {
          return 3;
        }
      else if(c[2] == 255 && c[0]== 0) // if its blue
        {
          return 0;
        }
      else if(c[0] == 255 && c[1]==0)  // if its red
        {
          return 2;
        }
      else if(c2 == 510) //if its yellow
        {
          return 1;
        }
    }
    
    //Function responsible for handling the movement of the ant. Enfactors which way the ant is currently facing and is passed the direction it will go.
    move(dir){
      
      //tx and ty adjust the x and y (respectively) coordinate changes the ant will undergo 
      let tx = 0;
      let ty = 0;
      
      if(this.facing == 0) //facing north
        {
          if(dir == "straight")
            {
              tx = 0;
              ty = -10;
            
            }
          else if(dir == "left")
            {
              tx = -10;
              ty = 0;
              this.facing = 3;
            }
          else if(dir == "right")
            {
              tx = 10;
              ty = 0;
              this.facing = 1;
            }
        }
      else if(this.facing == 1) //facing east
        {
          if(dir == "straight")
            {
              tx = 10;
              ty = 0;
            
            }
          else if(dir == "left")
            {
              tx = 0;
              ty = -10;
              this.facing = 0;
            }
          else if(dir == "right")
            {
              tx = 0;
              ty = 10;
              this.facing = 2;
            }
        }
      else if(this.facing == 2) //facing south
        {
          if(dir == "straight")
            {
              tx = 0;
              ty = 10;
            
            }
          else if(dir == "left")
            {
              tx = 10;
              ty = 0;
              this.facing = 1;
            }
          else if(dir == "right")
            {
              tx = -10;
              ty = 0;
              this.facing = 3;
            }
        }
      else if(this.facing == 3) //facing west
        {
          if(dir == "straight")
            {
              tx = -10;
              ty = 0;
            }
          else if(dir == "left")
            {
              tx = 0;
              ty = 10;
              this.facing = 2;
            }
          else if(dir == "right")
            {
              tx = 0;
              ty = -10;
              this.facing = 0;
            }
        }
      let x = (tx + this.x + 400) % 400;
      let y = (ty + this.y + 600) % 600;
      this.x = x;
      this.y = y;
    }
    draw() {
      
 //Pick Procedure based on current mode(dir Mode, Set-Count Mode, or Countdown Mode)
if(this.colorCount == 0)
  {
    fill("blue");
  }
else if(this.colorCount == 1)
  {
    fill("yellow");
  }
else if(this.colorCount == 2)
  {
    fill("red");
  }
else if(this.colorCount == 3)
  {
    fill("black");
  }
rect(this.x,this.y,cell_size,cell_size);
      
//The ant will react to each tile it encounters based on the current mode it is in and move accordingly. There are 3 Modes: LR Mode(0), Set-count Mode(1) and Countdown Mode (2)

  //If in LR Mode, 
  if(this.mode == 0)// where 0 indicates LR Mode
    {
      if(this.color == 3|| this.color == 0) // blue or black
        {
          this.dir = "left";
          this.move(this.dir);
        } 
      else if(this.color == 2) //red
        {
          this.dir = "right";
          this.move(this.dir);
        }
      else if(this.color == 1) //yellow
        {
          this.mode = 1;
          this.dir = "straight";
          this.move(this.dir);
        }
    }
  //If in Set-Count Mode
  else if(this.mode == 1)//where 1 indicates Set-Count Mode
    {
      this.counter = this.color;//FIIIIIIIIIIIIIX
      this.dir = "straight";
      this.move(this.dir);
      this.mode = 2;
    }
  else if(this.mode == 2) //where 2 indicates Countdown Mode
    {
      //If the countdown has ended, switch to LR-Mode
      if(this.counter == 0)
        {
          this.mode = 0;
          this.dir = "straight";
          this.move(this.dir);
        }
      //Else, The Countdown is still going on, Count down one and continue going straight
      else
      {
      this.dir = "straight";
      this.move(this.dir);
      this.counter--;
      }
    }
    this.color = this.findColor(this.x,this.y);
    this.colorCount = this.color;
    this.colorCount++;
    if(this.colorCount == 4)
      {
        this.colorCount = 0;
      }
  }
}

//initializes ant and places it onto grid at position 300,200
let ant1 = new Ant(300,200,0 ,0);

//constantly updates grid to display ant's movement
function draw()
{
  noStroke();
  fcount++;
  if((fcount % mcount) == 0)
  {
    update();
  }
}
function update()
{
  ant1.draw();
}
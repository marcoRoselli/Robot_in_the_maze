"use strict";

function Robot(){
  this.x = null;
  this.y = null;
  this.orientation = null;
  this.maze = null;
}

Robot.prototype.setMaze = function (maze) {
  this.maze = maze;
  this.x = maze.startX;
  this.y = maze.startY;
  this.orientation = maze.startOrientation;

}

Robot.prototype.turnRight = function(){
  //use a pair current orientation:new orientation
  var rotation = {
    "north":"east",
    "east":"south",
    "south":"west",
    "west":"north"
  }
  this.orientation = rotation[this.orientation];
}
Robot.prototype.turnLeft = function(){
  var rotation = {
    "north":"west",
    "east":"north",
    "south":"east",
    "west":"south"
  }
  this.orientation = rotation[this.orientation];
}

Robot.prototype.moveForward = function(){
  switch (this.orientation) {
  case ("north"):this.y++;
  break;
  case("west"):this.x--;
  break;
  case("south"):this.y--;
  break;
  case("east"):this.x++;
  break;
  }
  
}




"use strict";

function MazeSpace(directions){
  var i;
  for (i=0; i< directions.length; i++){
    this[directions]= false;
  }
  this.east = false;
  this.south = false;
  this.west = false;
  
}

MazeSpace.prototype.setWall = function(direction){
  this[direction] = true;


}

/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
  with(processing) {
    size(400, 400);
    background(30)

    var xPos = 0;
    var yPos = 0;
    var weight = 3;
    draw = function() {

      // Blue circles upper left to bottom right
      strokeWeight(3);
      ellipse(xPos, yPos, 30, 30);
      fill(0, 210, 247);
      stroke(57, 0, 214);
      xPos = xPos + 20;
      yPos = yPos + 20;

      // Blue circles upper right to bottom left
      strokeWeight(weight);
      ellipse(height - xPos, yPos, 30, 30);
      fill(0, 210, 247);
      stroke(57, 0, 214);

      // Blue circles straight fromt the middle
      strokeWeight(3);
      ellipse(height - xPos, 190, 30, 30);
      fill(0, 210, 247);
      stroke(57, 0, 214);

      // Blue circles straight from the top
      strokeWeight(3);
      ellipse(height - xPos, 0, 30, 30);
      fill(0, 210, 247);
      stroke(57, 0, 214);
      weight;

      // Blue circles straight from the bottom
      strokeWeight(3);
      ellipse(height - xPos, 390, 30, 30);
      fill(0, 210, 247);
      stroke(57, 0, 214);
      weight;




    };



    // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
  }
};
var p = new Processing(document.getElementById("cir"), sketch);

/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        // Background color
        background(46, 183, 47);

        //Calm downs the rapid rate of rectangles 
        frameRate(20);

        // Activates the Condition 
        draw = function() {

            // If true will make blue rectangles
            if (mouseX > 200) {
                fill(0, 210, 247);
                strokeWeight(3);
                stroke(57, 0, 214)
                rect(mouseX, mouseY, 30, 30)
            }
            // If that is not true it will make red rectangles
            else {
                fill(255, 0, 0);
                strokeWeight(2);
                stroke(57, 20, 14);
                rect(mouseX, mouseY, 30, 30)

            }
        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("c"), sketch);

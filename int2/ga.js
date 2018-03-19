/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        // Starting grey background
        background(150)

        // Loops when you click your mouse and creates the background and shapes colors 
        loopConditonal = function() {

            // Background color randomization
            background(random(255), random(255), random(255));

            // Loop that makes the random locations for shapes
            for (var i = 0; i < width; i += 20) {
                for (var j = 0; j < height; j += 20) {
                    var size = random(30)

                    // Conditional statement that makes the shapes black on click if y is greater than or equal to 200
                    if (mouseY <= 200) {
                        fill(5);
                        stroke(150);
                        rect(i, j, random(15), random(30));
                        ellipse(i, j, random(30), random(15));
                    }
                    // Conditional statement that makes the shapes grey on click if y is less than 200
                    else {
                        fill(150);
                        stroke(5);
                        rect(i, j, random(15), random(30));
                        ellipse(i, j, random(30), random(15));
                    }
                }
            }
        }


        //Calm downs the rapid rate of rectangles 
        frameRate(20);

        // Activates the Condition 
        draw = function() {

            // If true will make green rectangles
            if (mouseX > 200) {
                fill(49, 155, 35);
                strokeWeight(3);
                stroke(22, 81, 74)
                rect(mouseX, mouseY, 30, 30)
            }
            // If that is not true it will make orange rectangles
            else {
                fill(255, 182, 0);
                strokeWeight(3);
                stroke(135, 104, 39);
                rect(mouseX, mouseY, 30, 30)

            }
        };

        // Activates the mouse click function which resets the shapes formation, also on click resets the rapid rectangles.
        mouseClicked = function() {
            loopConditonal(mouseX, mouseY);
        }

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};

var p = new Processing(document.getElementById("output-canvas"), sketch);

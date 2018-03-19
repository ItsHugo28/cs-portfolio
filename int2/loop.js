/* global draw ellipse rect p processing width height size */

var sketch = function(processing) {
    with(processing) {
        size(500, 500);
        background(150);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        // Background Color Blue 
        background(40, 45, 140);

        // Loops 
        for (var i = 0; i < width; i += 20) {
            for (var j = 0; j < height; j += 20) {
                var size = random(30)

                // Green Rectangles and Circles 
                fill(40, 140, 67);
                stroke(5)
                rect(i, j, random(30), random(15))
                ellipse(i, j, random(15), random(30));

                // Grey Rectangles and Circles 
                fill(150);
                stroke(5);
                rect(i, j, random(15), random(30));
                ellipse(i, j, random(30), random(15));
            }
        }



        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("l"), sketch);

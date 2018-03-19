/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        // Starting Grey Background
        background(150)

        // The function that starts drawing the guy
        drawGuy = function(x, y) {

            // Creates the guy where the mouse is clicked and changes the background color and the guy's face color
            fill(random(255), random(255), random(255));
            background(random(255), random(255), random(255));
             line(x , y , x, y + 35);
            ellipse(x, y, 35, 35);
            ellipse(x - 5, y, 5, 5);
            ellipse(x + 5, y, 5, 5);
            line(x - 4, y + 6, x + 4, y + 6);
            line(x - 4, y + 45, x + 25, y + 10);
            line(x - 3, y + 43, x - 25, y + 10);
            line(x - 3, y + 55, x - 20, y + 95);
            line(x - 4, y + 55, x + 20, y + 95);
            ellipse(x, y + 50, 30, 30);


        }

        // Activates the drawGuy function when mouse is clicked
        mouseClicked = function() {
            drawGuy(mouseX, mouseY);
            
        }




        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("f"), sketch);

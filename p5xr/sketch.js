function preload() {
    createVRCanvas();
}

function setup()
{
   setVRBackgroundColor(0, 255, 0);
    fill(0, 255, 0);
}

function calculate() {
    // code that you want to run once each frame.
 
 
}

function draw()
{
     translate(0, 0, 10);
  rotateX(10);
  rotateY(20);
  
  box(5);
}

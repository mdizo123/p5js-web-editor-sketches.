// Setup only runs once, Draw runs infinitly - 
function setup() {//Function is a box of code that does things that are connected - Everything inside fits together. Communicate via computer syntax Function is expecting parenthesis for parameters and the curly ones are used for the actual instruction.
  createCanvas(500, 500);//(Width of my canvas, Height of my canvas)
  background("midnightblue");fill(68.2,77.6,81.2)
}

function draw() {
  noStroke()
  fill("hotpink")
  circle(mouseX,mouseY,25)//you can use slash to divide, you dont need the answer to the maths sum you can just place it into the code and the computer will solve it for you.
  
} 
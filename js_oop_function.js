function Shape(paramX,paramY){ //Defining Shape class
    let z='this iz z property';
    this.x=paramX;
    this.y=paramY;

    this.draw=function(){
        console.log('Draw Shape!');
    }
    
    this.zz=z;
}

let shape1=new Shape(5,10);
console.log(shape1);

Shape.prototype.toString=function(){
    return 'this is toString method';
}
console.log(shape1.toString());

function Rectangle(paramX,paramY,paramWidth,paramHeight){
    //Rectangle class
    Shape.call(this, paramX, paramY);
    //And it's inheriting from Shape class through call method
    this.width=paramWidth;
    this.height=paramHeight;
}

let rect1=new Rectangle(5,10,100,50);
let rect2=new Rectangle(5,15,200,150);

console.log('rect1',rect1.draw());

/****
 * 
 * Exercise
 * 
 * create a Circle class through function(like Rectangle). It will inherit from Shape. It will also have property called radius which you can pass through arguments. It will also over ride the draw() method from Shape and basically print out the radius.
 */


function Circle(paramX, paramY,radius){
    Shape.call(this,paramX, paramY); //inheriting from Shape class/function
    
    this.radius=radius;
    this.draw=function(){
        console.log('radius:',this.radius);
    }

    this.perimeter=function(){
        let perimeter= 2 * Math.PI * this.radius;
        console.log('PERIMETER',perimeter);
    }
}

//let circle1=new Circle(5,10,5);
let circle2=new Circle(5,10,5);
//console.log(circle1);
circle2.draw();
circle2.perimeter();
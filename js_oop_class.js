class Shape{ //Defining Shape class
    constructor(paramX,paramY){
        this.x=paramX;
        this.y=paramY;
        let z='this iz z property';
    }
    draw(){
        console.log('Draw Shape!');
    }
}

let shape1=new Shape(5,10);
console.log(shape1);

Shape.prototype.toString=function(){
    return 'this is toString method';
}
console.log(shape1.toString());

class Rectangle extends Shape{
    //Rectangle class
    constructor(paramX,paramY,paramWidth,paramHeight){
        super(paramX,paramY);
        this.width=paramWidth;
        this.height=paramHeight;
    }

    draw(){
        console.log(`Rectangle width:${this.width} height: ${this.width}`);
    }
}

let rect1=new Rectangle(5,10,100,50);
let rect2=new Rectangle(5,15,200,150);
rect1.draw();

/****
 * 
 * Exercise
 * 
 * create a Circle class through function(like Rectangle). It will inherit from Shape. It will also have property called radius which you can pass through arguments. It will also over ride the draw() method from Shape and basically print out the radius.
 */


class Circle extends Shape{
    constructor(paramX, paramY,radius){
        super(paramX,paramY);
        this.radius=radius;
    }
    
    draw(){
        console.log('circle radius',this.radius);
    }
    
    perimeter(){
        let perimeter= 2 * Math.PI * this.radius;
        console.log('circle perimeter',perimeter);
    }
}

//let circle1=new Circle(5,10,5);
let circle2=new Circle(5,10,5);
//console.log(circle1);
circle2.draw();
circle2.perimeter();
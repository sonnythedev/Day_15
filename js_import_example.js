import {Shape} from './Shape.js';

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
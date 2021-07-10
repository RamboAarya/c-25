class Dustbin{
    constructor(x,y,width,Height){
        this.body=Bodies.rectangle(x,y,width,Height,{restitution:0.3,
        isStatic:false,
        density:1.2,
        friction:0.5
        });
        this.width=width;
        this.Height=Height;
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.body);
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle)
        stroke("yellow");
        strokeWeight(10);
        fill("green");
        imageMode(CENTER);
        image(this.image,-10,-100,200,200);
        pop()
    }


}
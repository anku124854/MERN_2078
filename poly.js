//polymorphism

class Shape{
    area(){
        console.log("Area Calculation")
    }
    square(length) {
        this.length = length;
        console.log('Area of square: $(this.length ** 2}');
    }
    rectangle(length,breath) {
        this.length = length;
        this.breath= breath;
        console.log('Area of square: ${this.length * this.breath} ');
    }
    circle(radius) {
        this.radius = radius;
        console.log('Area of circle: ${Math.PI *this radius} ');
        //using polymorphism
        const Shape(4),
        new this.rectangle(4,6),
        new this.circle(5)


        ];
        shapes.forEach(shape => {
            shape.area();  // Calls the overridden area() method
        });
    }
}
const area = new Shape();

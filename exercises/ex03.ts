interface Shape {
  calculatePerimeter(): number;
  calculateArea(): number;
}

interface Rectangle extends Shape {
  width: number;
  height: number;
}

const myRectangle: Rectangle = {
  width: 5,
  height: 10,

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  },

  calculateArea(): number {
    return this.width * this.height;
  },
};

interface Circle extends Shape {
  radius: number;
}

const myCircle: Circle = {
  radius: 7,

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  },

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  },
};

interface Square extends Shape {
  side: number;
}

const mySquare: Square = {
  side: 4,

  calculatePerimeter(): number {
    return 4 * this.side;
  },

  calculateArea(): number {
    return this.side * this.side;
  },
};
// Rectangle
console.log(
  "Perimeter:",
  myRectangle.calculatePerimeter(),
  "Area:",
  myRectangle.calculateArea()
);
// Circle
console.log(
  "Perimeter:",
  myCircle.calculatePerimeter().toFixed(2),
  "Area:",
  myCircle.calculateArea().toFixed(2)
);
// Square
console.log(
  "Perimeter:",
  mySquare.calculatePerimeter(),
  "Area:",
  mySquare.calculateArea()
);

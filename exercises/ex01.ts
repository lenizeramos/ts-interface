interface Triangle {
  sideA: number;
  sideB: number;
  sideC: number;
  calculatePerimeter(): number;
  calculateArea(): number;
  isTriangle(): boolean;
}

const myTriangle: Triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5,
  calculatePerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  },
  calculateArea(): number {
    let semiPerimeter = this.calculatePerimeter() / 2;
    return Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.sideA) *
        (semiPerimeter - this.sideB) *
        (semiPerimeter - this.sideC)
    );
  },
  isTriangle(): boolean {
    return (
      this.sideA + this.sideB > this.sideC &&
      this.sideA + this.sideC > this.sideB &&
      this.sideB + this.sideC > this.sideA
    );
  },
};

console.log(myTriangle.calculatePerimeter()); // 12
console.log(myTriangle.calculateArea()); // 6
console.log(myTriangle.isTriangle()); // true

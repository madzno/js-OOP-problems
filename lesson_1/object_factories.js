function makeCar(rate, brakeRate) {
  return {
    speed: 0,
    rate,
    brakeRate,
    accelerate() {
      this.speed += this.rate;
    },
    brake() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    },
  };
}

let sedan = makeCar(8, 6);
console.log(sedan);
/*
{
  speed: 0,
  rate: 8,
  brakeRate: 6,
  accelerate: [Function: accelerate],
  brake: [Function: brake]
}
*/

let hatchback = makeCar(12, 6);
console.log(hatchback);

/*
{
  speed: 0,
  rate: 12,
  brakeRate: 6,
  accelerate: [Function: accelerate],
  brake: [Function: brake]
}
*/

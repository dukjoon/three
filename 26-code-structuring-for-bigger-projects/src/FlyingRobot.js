import Robot from "./robot";

export default class FlyingRobot extends Robot {
  constructor(name, legs) {
    super(name, legs);
  }

  sayHi() {
    console.log(`Hello My name is ${this.name} and I am a flying robot.`);
  }

  takeOff() {
    console.log(`Having a good flight ${this.name}`);
  }
  land() {
    console.log(`Welcome back ${this.name}`);
  }
}

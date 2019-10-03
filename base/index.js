class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "V6", "grey");
      case "honda":
        return new Car(2, "V4", "red");
    }
  }
}

class Suv {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
    this.wheels = 4;
  }
}

class SuvFactory {
  createSuv(type) {
    switch (type) {
      case "cx5":
        return new Suv(4, "V8", "black");
      case "bronco":
        return new Suv(2, "V8", "white");
    }
  }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case "car":
      return carFactory.createCar(model);
    case "suv":
      return suvFactory.createSuv(model);
  }
};

const cx5 = autoManufacturer("suv", "cx5");

console.log(cx5);



class Vehicle {
  constructor(brand) {
    this.vehicleBrand = brand;
  }
  print() {
    return 'I have a  vehicle of  ' + this.vehicleBrand;
  }
}

class Car extends Vehicle {
  constructor(brand,model) {
    super(brand);
    this.carModel = model;
  }
  show() {
    return this.print() + ', it is a ' + this.carModel;
  }
}

let myCar = new Car(1989 , "Mustang");
console.log(myCar.show());
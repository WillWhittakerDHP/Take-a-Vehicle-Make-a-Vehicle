import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  vin: (string); 
  color: (string);
  make: (string);
  model: (string)
  year: (number);
  weight: (number);
  topSpeed: (number);
  wheels: (Wheel[]);
  towingCapacity: (number);
  selectedVehicleType: (string);

  constructor(
    vin: (string), 
    color: (string),
    make: (string),
    model: (string),
    year: (number),
    weight: (number),
    topSpeed: (number),
    wheels: (Wheel[]),
    towingCapacity: (number),
    selectedVehicleType: (string)  
  ) {
    super();
    this.vin = vin; 
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel()]
    } else {
      this.wheels = wheels;
    }
    this.towingCapacity = 0;
    this.selectedVehicleType = 'motorbike';
  }
  
  tow(vehicle: Motorbike): void {
    (console.log(`Your car can't tow anything`))
  }

}

export default Motorbike;

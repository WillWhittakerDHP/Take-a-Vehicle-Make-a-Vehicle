// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";
import Vehicle from "./Vehicle.js";
import AbleToTow from "../interfaces/AbleToTow.js";

// define the Cli class
class Cli {
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  selectedVehicleType: string | undefined;
  exit: boolean = false;
  
  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }
  
  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
  
  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedVehicleVin',
        message: 'Select a vehicle to perform an action on',
        choices: this.vehicles.map((vehicle) => {
          return {
            name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
            value: vehicle.vin,
          };
        }),
      },
    ])
    .then((answers) => {
      // set the selectedVehicleVin to the vin of the selected vehicle
      this.selectedVehicleVin = answers.selectedVehicleVin;
      this.selectedVehicleType = answers.selectedVehicleType;
      // perform actions on the selected vehicle
      this.performActions();
    });
  }
  
  // method to create a vehicle
  createVehicle(): void {
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'vehicleType',
        message: 'Select a vehicle type',
        choices: ['Car', 'Truck', 'Motorbike'],
      },
    ])
    .then((answers) => {
      switch (answers.vehicleType) {
      case 'Car': {
        // create a car
        this.createCar();
        break;
      }
      case 'Truck': {
        // create a truck
        this.createTruck();
        break;
      }
      case 'Motorbike': {
        // create a motorbike
        this.createMotorbike();
      }
    }});
  }
  
  // method to create a car
  createCar(): void {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'color',
        message: 'Enter Color',
      },
      {
        type: 'input',
        name: 'make',
        message: 'Enter Make',
      },
      {
        type: 'input',
        name: 'model',
        message: 'Enter Model',
      },
      {
        type: 'input',
        name: 'year',
        message: 'Enter Year',
      },
      {
        type: 'input',
        name: 'weight',
        message: 'Enter Weight',
      },
      {
        type: 'input',
        name: 'topSpeed',
        message: 'Enter Top Speed',
      },
    ])
    .then((answers) => {
      const car = new Car(
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        parseInt(answers.year),
        parseInt(answers.weight),
        parseInt(answers.topSpeed),
        [],
        0,
        `car`
      );
      // push the car to the vehicles array
      this.vehicles.push(car);
      // set the selectedVehicleVin to the vin of the car
      this.selectedVehicleVin = car.vin;
      this.selectedVehicleType = car.selectedVehicleType;
      // perform actions on the car
      this.performActions();
    });
  }
  
  // method to create a truck
  createTruck(): void {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'color',
        message: 'Enter Color',
      },
      {
        type: 'input',
        name: 'make',
        message: 'Enter Make',
      },
      {
        type: 'input',
        name: 'model',
        message: 'Enter Model',
      },
      {
        type: 'input',
        name: 'year',
        message: 'Enter Year',
      },
      {
        type: 'input',
        name: 'weight',
        message: 'Enter Weight',
      },
      {
        type: 'input',
        name: 'topSpeed',
        message: 'Enter Top Speed',
      },
      {
        type: 'input',
        name: 'towingCapacity',
        message: 'Enter Towing Capacity',
      },
    ])
    .then((answers) => {
      const truck = new Truck(
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        parseInt(answers.year),
        parseInt(answers.weight),
        parseInt(answers.topSpeed),
        [],
        parseInt(answers.towingCapacity),
        `truck`
      );
      // push the truck to the vehicles array
      this.vehicles.push(truck);
      // set the selectedVehicleVin to the vin of the car
      this.selectedVehicleVin = truck.vin;
      this.selectedVehicleType = truck.selectedVehicleType;
      // perform actions on the truck
      this.performActions();
    });
  }
  
  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        // // TODO: Use the answers object to pass the required properties to the Motorbike constructor
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [],
          0,
          `motorbike`
      );
        // push the motorbike to the vehicles array
        this.vehicles.push(motorbike);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = motorbike.vin;
        this.selectedVehicleType = motorbike.selectedVehicleType;
        // perform actions on the motorbike
        this.performActions();
      });
  }

  // method to find a vehicle to tow
  // // TODO: add a parameter to accept a truck object
  findVehicleToTow(truck: Truck): void {
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'vehicleToTow',
        message: 'Select a vehicle to tow',
        choices: this.vehicles.map((vehicle) => {
          return {
            name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
            value: vehicle,
          };
        }),
      },
    ])
    .then((answers) => {
      // // TODO: check if the selected vehicle is the truck
      if (answers.vehicleToTow.vin === this.selectedVehicleVin) {
        //   // // TODO: if it is, log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action
        console.log("Asking an object to carry itself violates several principles of thermodynamics. Select a different action");
        this.performActions();
        return;
      } else {
        for (let i = 0; i < this.vehicles.length; i++) {
          if (this.vehicles[i].vin === this.selectedVehicleVin) {
            // // TODO: if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action
            this.vehicles[i].tow(answers.vehicleToTow);
            this.performActions();
            return;
          }
        }
      }
    }
  );
};

// method to perform actions on a vehicle
performActions(): void {
  const myThis = this
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Select an action',
      // // TODO: add options to tow and wheelie
      choices: [
        'Print details',
        'Start vehicle',
        'Accelerate 5 MPH',
        'Decelerate 5 MPH',
        'Stop vehicle',
        'Turn right',
        'Turn left',
        'Reverse',
        'Tow a vehicle',
        'Do a totally radical and wicked wheelie like a boss',
        'Select or create another vehicle',
        'Exit',
      ],
    },
  ])
  .then((answers) => {
    // perform the selected action
    if (answers.action === 'Print details') {
      // find the selected vehicle and print its details
      for (let i = 0; i < this.vehicles.length; i++) {
        if (this.vehicles[i].vin === this.selectedVehicleVin) {
          this.vehicles[i].printDetails();
        }
      }
    } else if (answers.action === 'Start vehicle') {
      // find the selected vehicle and start it
      for (let i = 0; i < this.vehicles.length; i++) {
        if (this.vehicles[i].vin === this.selectedVehicleVin) {
          this.vehicles[i].start();
        }
      }
    } else if (answers.action === 'Accelerate 5 MPH') {
      // find the selected vehicle and accelerate it by 5 MPH
      for (let i = 0; i < this.vehicles.length; i++) {
        if (this.vehicles[i].vin === this.selectedVehicleVin) {
          this.vehicles[i].accelerate(5);
        }
      }
    } else if (answers.action === 'Decelerate 5 MPH') {
      // find the selected vehicle and decelerate it by 5 MPH
      for (let i = 0; i < this.vehicles.length; i++) {
        if (this.vehicles[i].vin === this.selectedVehicleVin) {
          this.vehicles[i].decelerate(5);
        }
      }
    } else if (answers.action === 'Stop vehicle') {
      // find the selected vehicle and stop it
      for (let i = 0; i < this.vehicles.length; i++) {
        if (this.vehicles[i].vin === this.selectedVehicleVin) {
          this.vehicles[i].stop();
        }
      }
    } else if (answers.action === 'Turn right') {
      // find the selected vehicle and turn it right
      for (let i = 0; i < this.vehicles.length; i++) {
        if (this.vehicles[i].vin === this.selectedVehicleVin) {
          this.vehicles[i].turn('right');
        }
      }
    } else if (answers.action === 'Turn left') {
      // find the selected vehicle and turn it left
      for (let i = 0; i < this.vehicles.length; i++) {
        if (this.vehicles[i].vin === this.selectedVehicleVin) {
          this.vehicles[i].turn('left');
        }
      }
    } else if (answers.action === 'Reverse') {
      // find the selected vehicle and reverse it
      for (let i = 0; i < this.vehicles.length; i++) {
        if (this.vehicles[i].vin === this.selectedVehicleVin) {
          this.vehicles[i].reverse();
        }
      }
    } else if (answers.action === 'Tow a vehicle') { 
      for (let i = 0; i < this.vehicles.length; i++) {
        if (this.vehicles[i].vin === this.selectedVehicleVin) {
          const thisTruck = this.vehicles[i];
          if (this.vehicles[i].selectedVehicleType === `car`) {
            // // TODO: if it is, log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action
            console.log("Your car doesn't have a tow hitch so isn't really fit to tow much. Do something else");
            this.performActions();
            return;
          } else if (this.vehicles[i].selectedVehicleType === `motorbike`) {
            // // TODO: if it is, log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action
            console.log("I don't think you understand what it means to tow something. Do something realistic");
            this.performActions();
            return;
            // // TODO: Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. 
          } else {
            console.log('findVehicleToTow');
            this.findVehicleToTow(thisTruck);
            return;
            // // TODO: After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
          }
        }
      }
    } else if (answers.action === 'Do a totally radical and wicked wheelie like a boss') {
      for (let i = 0; i < this.vehicles.length; i++) {
        if (this.vehicles[i].vin === this.selectedVehicleVin) {
          // // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
          if (this.vehicles[i].selectedVehicleType !== `motorbike`) {
            console.log(`You cannot pop a wicked wheelie and get everyone to be impressed unless you are cool enough to drive a motorbike`);
          } else {
            console.log(`You did a wheelie, but no one was impressed. There's just no pleasing some people.`)
          };
        }
      }
    } else if (answers.action === 'Select or create another vehicle') {
      // start the cli to return to the initial prompt if the user wants to select or create another vehicle
      this.startCli();
      return;
    } else {
      // exit the cli if the user selects exit
      this.exit = true;
    }
    if (!this.exit) {
      // if the user does not want to exit, perform actions on the selected vehicle
      this.performActions();
    }
  });
}

// method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;

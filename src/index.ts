import { VehicleType } from './vehicleType';

enum VehicleSpeed {
  Bicycle = 15000,
  Foot = 6400,
}

enum AgeAverage {
  Child = 0.4,
  Teenager = 0.8,
  Adult = 1,
  Elderly = 0.6,
}

export class FitnessWatch {
  distance = 0;
  messages = '';
  average = 0;

  constructor(initialValue: number) {
    this.distance = initialValue;
  }

  getInfo = (vehicleType: VehicleType, age: number) => {
    this.setDistance(vehicleType, age);
    return this;
  };

  private setDistance = (vehicleType: VehicleType, age: number) => {
    const ageAverage = this.getAverage(age);
    switch (vehicleType) {
      case VehicleType.Foot:
        this.average = this.distance / (VehicleSpeed.Foot * ageAverage);
        break;
      case VehicleType.Bicycle:
        this.average = this.distance / (VehicleSpeed.Bicycle * ageAverage);
        break;
      default:
        // code...
        break;
    }

    this.messages = `Speed average for 
    ${this.distance} with age 
    ${age}(years) is 
    ${this.average.toFixed(2)} meters per hour`;
  };

  getAverage = (age: number): number => {
    let result = 0;
    if (age > 0) {
      if (age < 12) {
        result = AgeAverage.Child;
      } else if (age > 12 && age < 18) {
        result = AgeAverage.Teenager;
      } else if (age > 18 && age < 50) {
        result = AgeAverage.Adult;
      } else if (age > 50 && age < 80) {
        result = AgeAverage.Elderly;
      }
    }
    this.average = result;
    return result;
  };

  log() {
    console.log(this.messages);
  }
}

function run() {
  const byFoot = new FitnessWatch(15562).getInfo(VehicleType.Foot, 27).log();
  const byBicycle = new FitnessWatch(31313321).getInfo(VehicleType.Bicycle, 8).log();
}

run();

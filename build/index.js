"use strict";
var VehicleType;
(function (VehicleType) {
    VehicleType["Vehicle"] = "vehicle";
    VehicleType["Bicycle"] = "bicycle";
    VehicleType["Foot"] = "foot";
})(VehicleType || (VehicleType = {}));
var VehicleSpeed;
(function (VehicleSpeed) {
    VehicleSpeed[VehicleSpeed["Bicycle"] = 15000] = "Bicycle";
    VehicleSpeed[VehicleSpeed["Foot"] = 6400] = "Foot";
})(VehicleSpeed || (VehicleSpeed = {}));
var AgeAverage;
(function (AgeAverage) {
    AgeAverage[AgeAverage["Child"] = 0.4] = "Child";
    AgeAverage[AgeAverage["Teenager"] = 0.8] = "Teenager";
    AgeAverage[AgeAverage["Adult"] = 1] = "Adult";
    AgeAverage[AgeAverage["Elderly"] = 0.6] = "Elderly";
})(AgeAverage || (AgeAverage = {}));
var getRoutes = /** @class */ (function () {
    function getRoutes(initialValue) {
        var _this = this;
        this.distance = 0;
        this.messages = '';
        this.average = 0;
        this.getDistance = function (vehicleType, age) {
            _this.setDistance(vehicleType, age);
            return _this;
        };
        this.setDistance = function (vehicleType, age) {
            var ageAverage = _this.getAverage(age);
            console.log(ageAverage);
            switch (vehicleType) {
                case VehicleType.Foot:
                    console.log(VehicleSpeed.Foot * ageAverage);
                    _this.average = _this.distance / (VehicleSpeed.Foot * ageAverage);
                    break;
                case VehicleType.Bicycle:
                    console.log(VehicleSpeed.Bicycle * ageAverage);
                    _this.average = _this.distance / (VehicleSpeed.Bicycle * ageAverage);
                    break;
                default:
                    // code...
                    break;
            }
            _this.messages = "Speed average for " + _this.distance + " with age " + age + "(years) is " + _this.average.toFixed(2) + " meters per hour";
        };
        this.getAverage = function (age) {
            console.log('age', age);
            var result = 0;
            if (age > 0) {
                if (age < 12) {
                    result = AgeAverage.Child;
                }
                else if (age > 12 && age < 18) {
                    result = AgeAverage.Teenager;
                }
                else if (age > 18 && age < 50) {
                    result = AgeAverage.Adult;
                }
                else if (age > 50 && age < 80) {
                    result = AgeAverage.Elderly;
                }
            }
            _this.average = result;
            return result;
        };
        this.distance = initialValue;
        console.log('initialValue', this.distance);
    }
    getRoutes.prototype.log = function () {
        console.log(this.messages);
    };
    return getRoutes;
}());
function run() {
    var byFoot = new getRoutes(15562).getDistance(VehicleType.Foot, 27).log();
    var byBicycle = new getRoutes(31313321).getDistance(VehicleType.Bicycle, 8).log();
}
run();

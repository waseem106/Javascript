class Vehicle{

    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }

    startEngine(){
        console.log(`${this.make} ${this.model}'s engine started`);
    }

    get desciption(){
        return `${this.year} ${this.make} ${this.model}`;
    }

    set yearOfManufacture(year){
        if(year>1900 && year<=new Date().getFullYear())
        {
            this.year=year
        }
        else{
            console.log("Inavlid year of manufacture")
        }
    }

    static vehicleType(){
        console.log("Vehicle are used for transportation")
    }

    displayInfo() {
        console.log(`This is a ${this.make} ${this.model} from ${this.year}.`);
    }

}



class Car extends Vehicle{
    constructor(make,model,year,numOfDoors){
        super(make,model,year)  ;//calling the parent class constructor
        this.numOfDoors=numOfDoors;
    }

    displayInfo()
    {
        console.log(`This car is a ${this.make} ${this.model} with ${this.numOfDoors} doors.`);
    }

    honk() {
        console.log(`${this.make} ${this.model} honks: Beep Beep!`);
    }

}



//calss expression (anonymous class)
const Bike = class {
    constructor(make, model, year, type) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.type = type;
    }

    startEngine() {
        console.log(`${this.make} ${this.model} bike engine started.`);
    }

    
    static bikeInfo() {
        console.log("A bike is a two-wheeled vehicle.");
    }

    displayInfo() {
        console.log(`This is a ${this.year} ${this.make} ${this.model} bike.`);
    }
};



const myVehicle=new Vehicle("Toyota","Corolla",2020)
myVehicle.yearOfManufacture=2021
console.log(myVehicle.desciption)
myVehicle.startEngine()
Vehicle.vehicleType()  //calling to static  method


const myCar = new Car("Honda", "Civic", 2022, 4);
myCar.displayInfo();  
myCar.honk(); 
myCar.yearOfManufacture = 2023;  
console.log(myCar.year);  

// Bike object
const myBike = new Bike("Yamaha", "YZF-R1", 2021, "Sport");
myBike.displayInfo();
myBike.startEngine();
Bike.bikeInfo();  
// myCar.yearOfManufacture = 1800;  // Invalid year
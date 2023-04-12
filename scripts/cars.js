const CARS_DATA = [
    {
        id: 9582,
        year: 2008,
        make: "Buick",
        model: "Enclave",
        type: "SUV",
    },
    {
        id: 9583,
        year: 2006,
        make: "MINI",
        model: "Convertible",
        type: "Convertible",
    },
    {
        id: 9584,
        year: 2019,
        make: "Volvo",
        model: "XC90",
        type: "SUV",
    },
    {
        id: 9585,
        year: 1999,
        make: "Ford",
        model: "Taurus",
        type: "Sedan, Wagon",
    },
    {
        id: 9586,
        year: 2020,
        make: "Volvo",
        model: "XC60",
        type: "SUV",
    },
    {
        id: 9587,
        year: 2006,
        make: "HUMMER",
        model: "H2",
        type: "SUV, Pickup",
    },
    {
        id: 9588,
        year: 2016,
        make: "GMC",
        model: "Sierra 1500 Crew Cab",
        type: "Pickup",
    },
    {
        id: 9589,
        year: 2008,
        make: "GMC",
        model: "Canyon Crew Cab",
        type: "Pickup",
    },
    {
        id: 9590,
        year: 2016,
        make: "Subaru",
        model: "Outback",
        type: "SUV",
    },
    {
        id: 9591,
        year: 2010,
        make: "Mitsubishi",
        model: "Outlander",
        type: "SUV",
    },
    {
        id: 9592,
        year: 1998,
        make: "Dodge",
        model: "Ram Van 1500",
        type: "Van/Minivan",
    },
    {
        id: 9593,
        year: 2014,
        make: "Nissan",
        model: "Pathfinder",
        type: "SUV",
    },
    {
        id: 9594,
        year: 2014,
        make: "Honda",
        model: "Civic",
        type: "Sedan, Coupe",
    },
    {
        id: 9595,
        year: 2009,
        make: "Subaru",
        model: "Outback",
        type: "Wagon",
    },
    {
        id: 9596,
        year: 2009,
        make: "Lincoln",
        model: "Navigator L",
        type: "SUV",
    },
    {
        id: 9597,
        year: 2000,
        make: "GMC",
        model: "Yukon Denali",
        type: "SUV",
    },
    {
        id: 9598,
        year: 2007,
        make: "Hyundai",
        model: "Tucson",
        type: "SUV",
    },
    {
        id: 9599,
        year: 2018,
        make: "BMW",
        model: "7 Series",
        type: "Sedan",
    },
    {
        id: 9600,
        year: 1992,
        make: "Dodge",
        model: "Caravan Passenger",
        type: "Van/Minivan",
    },
    {
        id: 9601,
        year: 2008,
        make: "Hyundai",
        model: "Accent",
        type: "Sedan, Hatchback",
    },
    {
        id: 9602,
        year: 2017,
        make: "Nissan",
        model: "Frontier King Cab",
        type: "Pickup",
    },
    {
        id: 9603,
        year: 2019,
        make: "Nissan",
        model: "Altima",
        type: "Sedan",
    },
    {
        id: 9604,
        year: 2018,
        make: "Honda",
        model: "Clarity Plug-in Hybrid",
        type: "Sedan",
    },
    {
        id: 9605,
        year: 2014,
        make: "Buick",
        model: "Verano",
        type: "Sedan",
    },
    {
        id: 9606,
        year: 2007,
        make: "Bentley",
        model: "Azure",
        type: "Convertible",
    },
    {
        id: 9607,
        year: 2017,
        make: "Lexus",
        model: "RC",
        type: "Coupe",
    },
    {
        id: 9608,
        year: 2012,
        make: "Chevrolet",
        model: "Sonic",
        type: "Sedan, Hatchback",
    },
    {
        id: 9609,
        year: 2013,
        make: "Nissan",
        model: "NV2500 HD Cargo",
        type: "Van/Minivan",
    },
    {
        id: 9610,
        year: 1995,
        make: "GMC",
        model: "Sonoma Club Coupe Cab",
        type: "Pickup",
    },
    {
        id: 9611,
        year: 2007,
        make: "Jaguar",
        model: "X-Type",
        type: "Sedan, Wagon",
    },
    {
        id: 9612,
        year: 2004,
        make: "Mercedes-Benz",
        model: "SL-Class",
        type: "Convertible",
    },
    {
        id: 9613,
        year: 1995,
        make: "Chevrolet",
        model: "Sportvan G30",
        type: "Van/Minivan",
    },
    {
        id: 9614,
        year: 2004,
        make: "GMC",
        model: "Sierra 2500 HD Crew Cab",
        type: "Pickup",
    },
    {
        id: 9615,
        year: 2016,
        make: "Volkswagen",
        model: "e-Golf",
        type: "Hatchback",
    },
    {
        id: 9616,
        year: 2010,
        make: "Aston Martin",
        model: "DBS",
        type: "Coupe, Convertible",
    },
    {
        id: 9617,
        year: 1996,
        make: "Chevrolet",
        model: "Beretta",
        type: "Coupe",
    },
    {
        id: 9618,
        year: 2020,
        make: "Land Rover",
        model: "Range Rover Sport",
        type: "SUV",
    },
    {
        id: 9619,
        year: 1996,
        make: "Pontiac",
        model: "Firebird",
        type: "Convertible, Hatchback",
    },
    {
        id: 9620,
        year: 2011,
        make: "Cadillac",
        model: "SRX",
        type: "SUV",
    },
    {
        id: 9621,
        year: 2011,
        make: "Ford",
        model: "E350 Super Duty Cargo",
        type: "Van/Minivan",
    },
    {
        id: 9622,
        year: 2015,
        make: "Nissan",
        model: "Frontier Crew Cab",
        type: "Pickup",
    },
    {
        id: 9623,
        year: 2003,
        make: "Ford",
        model: "F250 Super Duty Super Cab",
        type: "Pickup",
    },
    {
        id: 9624,
        year: 2017,
        make: "Ford",
        model: "Escape",
        type: "SUV",
    },
    {
        id: 9625,
        year: 2019,
        make: "Volkswagen",
        model: "Golf SportWagen",
        type: "Wagon",
    },
    {
        id: 9626,
        year: 2019,
        make: "FIAT",
        model: "500 Abarth",
        type: "Hatchback",
    },
    {
        id: 9627,
        year: 1994,
        make: "Saab",
        model: "9000",
        type: "Sedan, Hatchback",
    },
    {
        id: 9628,
        year: 2006,
        make: "Kia",
        model: "Sorento",
        type: "SUV",
    },
    {
        id: 9629,
        year: 2009,
        make: "Lamborghini",
        model: "Murcielago",
        type: "Coupe, Convertible",
    },
    {
        id: 9630,
        year: 2020,
        make: "Kia",
        model: "Rio",
        type: "Sedan, Hatchback",
    },
    {
        id: 9631,
        year: 2011,
        make: "Audi",
        model: "A5",
        type: "Coupe, Convertible",
    },
];


const mainContainer = document.getElementById("cars__content")
const allCars = document.getElementById("allCarsBtn")
const carsIdBtn = document.getElementById("carsIdBtn")
const carNameBtn = document.getElementById("gmcBtn")
const carYear = document.getElementById("carDateBtn")
const sedanBtn = document.getElementById("sedanBtn")

function renderCars(carsArray) {
    const displayContent = carsArray.map((cars) => {
        return `<div class ="cars">  
           
           <p>Id: <span>${cars.id}</span></p>
           <p>Name: <span>${cars.make}</span></p>
           <p>Model: <span>${cars.model}</span></p>
           <p>Year: <span>${cars.year}</span></p>
           <p>Type: <span>${cars.type}</span></p>
      </div>`;
    })
        .join("")


    const errorContent = `<div>Data not found</div>`;

    mainContainer.innerHTML =
        carsArray && carsArray.length > 0 ? displayContent : errorContent;
}

allCars.onclick = function () {
    renderCars(CARS_DATA)
}
carsIdBtn.onclick = function () {
    const filteredArray = CARS_DATA.filter(
        (item) => item.id >= 9600
    );
    renderCars(filteredArray);
}
carNameBtn.onclick = function () {
    const filteredArray = CARS_DATA.filter(
        (item) => item.make = "GMC"
    );
    renderCars(filteredArray);
}

carYear.onclick = function () {
    const filteredArray = CARS_DATA.filter(
        (item) => item.year <= 2010);
    renderCars(filteredArray);
}
sedanBtn.onclick = function () {
    const filteredArray = CARS_DATA.filter((item) =>
        item.type === "Sedan"
    )
    renderCars(filteredArray)
}
document.body.onload = renderCars(CARS_DATA)
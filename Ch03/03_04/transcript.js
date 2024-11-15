var animal = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};
animal;

var animal2 = animal;
animal2;

animal2.genus = "ursus";
animal2;
animal;

animal2 = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky", // there is a deliberate bug here in the course, removed for your convenience :)
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};

// bonus: make a copy of an object safely
animal2 = Object.assign({}, animal); // both lines do the same thing
animal2 = { ...animal }; // the three dots are called the spread operator
// means spread out all the data in this object into a new copy
animal2 = JSON.parse(JSON.stringify(animal)); // uses built in json object

animal2.genus = "ursus";
animal2;
animal;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

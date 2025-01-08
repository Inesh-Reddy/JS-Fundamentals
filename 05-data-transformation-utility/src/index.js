const DataTransformer = require('./transformer');
const ArrayOperations = require('./arrayOps');
const ObjectOperations = require('./objectOps');
const StringOperations = require('./stringOps');


const testData = [
  {
    id: 1,
    name: "JOHN DOE",
    age: 25,
    address: { city: "New York", country: "USA" },
    scores: [85, 90, 92]
  },
  {
    id: 2,
    name: "JANE SMITH",
    age: 30,
    address: { city: "London", country: "UK" },
    scores: [95, 88, 87]
  },
  {
    id: 3,
    name: "BOB WILSON",
    age: 28,
    address: { city: "Paris", country: "France" },
    scores: [78, 85, 80]
  }
];


const transformer = new DataTransformer(testData);


console.log("\nExample 1: Basic Transformations");
const basicResult = transformer
  .filter(person => person.age > 25)
  .map(person => ({
    name: person.name,
    age: person.age
  }))
  .getValue();
console.log(basicResult);


console.log("\nExample 2: Object Transformations");
const flattenedResult = transformer
  .reset()
  .map(person => ObjectOperations.flattenObject(person))
  .map(ObjectOperations.pickProperties(['name', 'address_city']))
  .getValue();
console.log(flattenedResult);


console.log("\nExample 3: String Transformations");
const nameResult = transformer
  .reset()
  .map(person => ({
    ...person,
    name: StringOperations.toTitleCase(person.name),
    username: StringOperations.createUsername(person.name)
  }))
  .getValue();
console.log(nameResult);


console.log("\nExample 4: Advanced Operations");
const averagesResult = transformer
    .reset()
    .map(item => ({ ...item, scores: ArrayOperations.calculateAverages('scores')([item]) }))
    .getValue();
    const groupedByCountry = ArrayOperations.groupBy(item => item.address.country)(averagesResult); // Grouping by country
console.log(groupedByCountry);


console.log("\nExample 5: Combined Operations");
const combinedResult = transformer
  .reset()
  .filter(person => person.age >= 25)
  .map(person => ({
    ...ObjectOperations.pickProperties(['name', 'age'])(person),
    username: StringOperations.createUsername(person.name),
    avgScore: person.scores.reduce((sum, score) => sum + score, 0) / person.scores.length
  }))
  .getValue();
console.log(combinedResult);
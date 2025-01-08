# DataMaster - Data Transformation Utility

## Project Overview
A focused data transformation utility that helps you master JavaScript array methods, object manipulation, and string transformations. This simplified version concentrates on core functionality without the complexity of validation and error handling.

## Core Features

### 1. Collection Transformations
- **Filter Operations**
  - Filter by single/multiple conditions
  - Support for custom filtering functions
  - Range-based filtering

- **Mapping Operations**
  - Transform object structures
  - Property renaming
  - Nested property extraction

- **Reduction Operations**
  - Group by properties
  - Calculate totals and averages
  - Custom aggregations

### 2. Object Manipulations
- **Structure Transformations**
  - Flatten nested objects
  - Create nested structures
  - Merge objects
  - Pick specific properties

- **Property Operations**
  - Rename properties
  - Transform property values
  - Handle nested properties

### 3. String Processing
- **Text Transformations**
  - Case conversions (upper, lower, title case)
  - Template processing
  - Pattern replacement
  - String formatting

### 4. Method Chaining
- Chain multiple operations
- Access intermediate results
- Final value retrieval

## Project Structure

```
dataMaster/
├── src/
│   ├── transformer.js     # Main transformer class
│   ├── arrayOps.js       # Array transformations
│   ├── objectOps.js      # Object manipulations
│   └── stringOps.js      # String operations
│
└── examples/
    ├── basic-usage.js
    └── advanced-usage.js
```

## Example Operations

```javascript
// Example data structure you'll be working with
const data = [
  {
    id: 1,
    name: "JOHN DOE",
    age: 25,
    address: {
      city: "New York",
      country: "USA"
    },
    scores: [85, 90, 92]
  },
  // ... more records
];

// Operations you'll implement:

// 1. Basic transformations
transform.filter(person => person.age > 20)
        .map(person => person.name)
        .getValue();

// 2. Object transformations
transform.flattenObjects()
        .pickProperties(['name', 'city'])
        .getValue();

// 3. String transformations
transform.transformStrings('name', [
  str => str.toLowerCase(),
  str => str.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
])

// 4. Advanced operations
transform.groupBy('country')
        .calculateAverages('scores')
        .getValue();
```

## Implementation Steps

1. **Core Transformer**
   - Create the main class
   - Implement chain management
   - Add basic data storage

2. **Array Operations**
   - Implement filter
   - Add map functionality
   - Create reduce operations

3. **Object Operations**
   - Add object flattening
   - Implement property picking
   - Create merge functionality

4. **String Operations**
   - Add case transformations
   - Implement pattern replacement
   - Create formatting utilities

## Learning Goals

By building this project, you'll master:
- Array methods (map, filter, reduce)
- Object manipulation techniques
- String processing methods
- Method chaining patterns
- Data transformation concepts

## Suggested Test Data

```javascript
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
```

## Example Transformations to Implement

1. **Name Processing**
   - Convert to proper case
   - Extract first/last names
   - Create username formats

2. **Data Aggregation**
   - Group by country
   - Calculate score averages
   - Find highest/lowest scores

3. **Object Restructuring**
   - Flatten nested objects
   - Create new object structures
   - Extract specific data patterns

## Development Tips

1. Start with basic operations (filter, map, reduce)
2. Add object manipulation methods
3. Implement string processing
4. Create method chaining support
5. Add more complex operations

## Getting Started

1. Create the project structure
2. Implement the base transformer class
3. Add operations one by one
4. Test with sample data
5. Build more complex transformations

Remember to:
- Keep methods focused and simple
- Use descriptive method names
- Add comments for complex logic
- Test each feature as you build

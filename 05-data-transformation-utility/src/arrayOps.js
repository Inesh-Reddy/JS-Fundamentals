class ArrayOperations {
  static filterByRange(property, min, max) {
    return (item) => item[property] >= min && item[property] <= max;
  }

  static filterByMultipleConditions(conditions) {
    return (item) => conditions.every(condition => condition(item));
  }

  static groupBy(property) {
    return (data) => {
      return data.reduce((groups, item) => {
        const key = typeof property === 'function' ? property(item) : item[property];
        if (!groups[key]) groups[key] = [];
        groups[key].push(item);
        return groups;
      }, {});
    };
  }

  static calculateAverages(property) {
    return (data) => {
        return data.map(item => {
        const values = Array.isArray(item[property]) ? item[property] : []; // Ensure it's an array
        const sum = values.reduce((total, val) => total + val, 0);
        const average = values.length > 0 ? sum / values.length : 0; // Handle empty arrays
        return {
            ...item,
            average
        };
        });
    };
    }


//   static calculateAverages(property) {
//     return (data) => {
//       return data.map(item => ({
//         ...item,
//         average: item[property].reduce((sum, val) => sum + val, 0) / item[property].length
//       }));
//     };
//   }
}

module.exports = ArrayOperations;
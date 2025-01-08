class ObjectOperations {
  static flattenObject(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = prefix ? `${prefix}_${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(acc, this.flattenObject(obj[key], newKey));
      } else {
        acc[newKey] = obj[key];
      }
      return acc;
    }, {});
  }

  static pickProperties(properties) {
    return (obj) => {
      return properties.reduce((acc, prop) => {
        if (prop.includes('.')) {
          const [parent, child] = prop.split('.');
          acc[child] = obj[parent]?.[child];
        } else {
          acc[prop] = obj[prop];
        }
        return acc;
      }, {});
    };
  }

  static mergeObjects(objects) {
    return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
  }
}

module.exports = ObjectOperations;
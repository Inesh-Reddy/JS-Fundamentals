class StringOperations {
  static toTitleCase(str) {
    return str.toLowerCase().split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  static extractNames(fullName) {
    const [firstName, ...lastNames] = fullName.split(' ');
    return {
      firstName,
      lastName: lastNames.join(' ')
    };
  }

  static createUsername(name) {
    return name.toLowerCase()
      .replace(/\s+/g, '.')
      .replace(/[^a-z0-9.]/g, '');
  }

  static transformString(value, transformers) {
    return transformers.reduce((result, transformer) => transformer(result), value);
  }
}

module.exports = StringOperations;
class DataTransformer {
  constructor(initialData) {
    this._originalData = Array.isArray(initialData) ? [...initialData] : [];
    this._data = [...this._originalData];
  }

  reset() {
    this._data = [...this._originalData];
    return this;
  }

  getValue() {
    return this._data;
  }

  peek(callback) {
    callback(this._data);
    return this;
  }

 
  filter(predicate) {
    this._data = this._data.filter(predicate);
    return this;
  }

  map(transformer) {
    this._data = this._data.map(transformer);
    return this;
  }

  reduce(reducer, initialValue) {
    this._data = [this._data.reduce(reducer, initialValue)];
    return this;
  }


  count() {
    return this._data.length;
  }

  first() {
    return this._data[0];
  }

  last() {
    return this._data[this._data.length - 1];
  }

  static create(data) {
    return new DataTransformer(data);
  }
}

module.exports = DataTransformer;


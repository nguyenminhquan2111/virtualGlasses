import dataGlasses from "../data/data.js";

class ListGlasses {
  constructor() {
    this.arr = [];
  }
  addGlasses(newGlasses) {
    this.arr.push(newGlasses);
  }
}

export default ListGlasses;

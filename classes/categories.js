const Item = require("../model/itemModel");

class Category {
  static categories = [];

  // main category
  mainCategory(items) {
    let category = new Set();
    items.forEach((element) => {
      category.add(element.category);
    });
    this.categories.mainCategory = Array.from(category.values());
    return this.categories;
  }

  // headphonetype
  //price
  //review
  // offer
}

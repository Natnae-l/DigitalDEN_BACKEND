const Item = require("../model/itemModel");

class Category {
  static categories = {};

  // main category
  static mainCategory(items) {
    let category = new Set();
    items.forEach((element) => {
      category.add(element.category);
    });
    this.categories.Category = Array.from(category.values());
    return this.categories;
  }

  // headphonetype
  //price
  //review
  // offer
}

module.exports = Category;

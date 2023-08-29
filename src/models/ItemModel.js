// unused in this homework
export default class ItemModel {
  constructor(entity) {
    Object.assign(
      this,
      {
        brand: 'Brand name',
        title: 'Untitled',
        description: 'Item',
        descriptionFull: 'Unknown item',
        price: 0,
        currency: '$',
      },
      entity
    );
  }
}

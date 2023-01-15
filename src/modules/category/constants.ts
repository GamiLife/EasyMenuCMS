export const foodsDict = {
  burger: 'Hamburguesas',
  appetizer: 'Aperitivos',
  ribb: 'Costillas',
  chicken: 'Pollos',
  salad: 'Ensaladas',
  noodle: 'Pastas',
  fitting: 'Guarniciones',
  dessert: 'Postres',
  drink: 'Bebidas',
};

export type foodsDictType = keyof typeof foodsDict;

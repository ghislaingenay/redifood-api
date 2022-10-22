import { Order } from "src/app.interface";

export const convertSection = (array: any) => {
  const sectionDisplay = [];
  for (let i = 0; i < array.length; i++) {
    const foundSection = sectionDisplay.find(
      (element) => element.name === array[i].name,
    );
    if (!foundSection) {
      sectionDisplay.push({
        name: array[i].name,
        extra: [array[i].extra],
      });
    } else {
      sectionDisplay.map((element) => {
        if (element.name === array[i].name) {
          element.extra.push(array[i].extra);
        }
      });
    }
  }
  return sectionDisplay;
};

export const findFoodsIdInOrders = (arrayOrders, arrayFoods): Order[] => {
  let orderedList = [];
  for (let i = 0; i < arrayOrders.length; i++) {
    orderedList.push(arrayOrders[i]);
    for (let j = 0; j < arrayOrders[i].menu.length; j++) {
      let foundFood = arrayFoods.find((e) => e._id.valueOf() === arrayOrders[i].menu[j].food.valueOf());
      console.log('foundFood', foundFood);
      orderedList[i].menu[j].food = foundFood;
    }
  }
  return orderedList;
};

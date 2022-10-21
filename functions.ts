
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

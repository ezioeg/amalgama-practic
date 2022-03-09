export const findNameByID = (arrayOfObjects, id) =>
  arrayOfObjects.find((object) => object.id === id).name

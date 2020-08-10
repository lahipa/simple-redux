import * as actionTypes from "./actionTypes";

export const getAllPeople = () => {
  return {
    type: actionTypes.GET_PEOPLES,
    payload: [
      {
        name: "Mr. Andrey",
        photo: "images 1",
      },
      {
        name: "Mr. Fariz",
        photo: "images 2",
      },
      {
        name: "Mr. Doni",
        photo: "images 3",
      },
    ],
  };
};

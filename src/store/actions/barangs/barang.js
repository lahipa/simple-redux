import * as actionTypes from "./actionTypes";

export const getAllBarang = () => {
  return {
    type: actionTypes.GET_BARANGS,
    payload: [
      {
        name: "Setormaru",
        photo: "images 1",
      },
      {
        name: "Naruto",
        photo: "images 2",
      },
      {
        name: "Sasuke",
        photo: "images 3",
      },
      {
        name: "Boruto",
        photo: "images 4",
      },
    ],
  };
};

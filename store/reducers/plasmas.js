import PLASMAS from "../../data/dummy-data";
import {
  DELETE_PLASMA,
  CREATE_PLASMA,
  UPDATE_PLASMA,
} from "../actions/plasmas";
import Plasma from "../../models/plasma";

const initialState = {
  availablePlasmas: PLASMAS,
  userPlasmas: PLASMAS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLASMA:
      const newPlasma = new Plasma(
        new Date().toString(),
        "u1",
        action.plasmaData.title,
        action.plasmaData.imageUrl,
        action.plasmaData.description,
        action.plasmaData.price
      );
      return {
        ...state,
        availablePlasmas: state.availablePlasmas.concat(newPlasma),
        userPlasmas: state.userPlasmas.concat(newPlasma),
      };
    case UPDATE_PLASMA:
      const plasmaIndex = state.userPlasmas.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedPlasma = new Plasma(
        action.pid,
        state.userPlasmas[plasmaIndex].ownerId,
        action.plasmaData.title,
        action.plasmaData.imageUrl,
        action.plasmaData.description,
        state.userPlasmas[plasmaIndex].price
      );
      const updatedUserPlasmas = [...state.userPlasmas];
      updatedUserPlasmas[plasmaIndex] = updatedPlasma;
      const availablePlasmaIndex = state.availablePlasma.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedAvailablePlasmas = [...state.availablePlasmas];
      updatedAvailablePlasmas[availablePlasmaIndex] = updatedPlasma;
      return {
        ...state,
        availableProducts: updatedAvailablePlasmas,
        userProducts: updatedUserPlasmas,
      };
    case DELETE_PLASMA:
      return {
        ...state,
        userPlasmas: state.userPlasmas.filter(
          (plasma) => plasma.id !== action.pid
        ),
        availablePlasmas: state.availablePlasmas.filter(
          (plasma) => product.id !== action.pid
        ),
      };
  }
  return state;
};

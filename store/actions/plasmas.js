import Plasma from "../../models/plasma";

export const DELETE_PLASMA = "DELETE_PLASMA";
export const CREATE_PLASMA = "CREATE_PLASMA";
export const UPDATE_PLASMA = "UPDATE_PLASMA";
export const SET_PLASMAS = "SET_PLASMAS";

export const fetchPlasmas = () => {
  return async (dispatch) => {
    const token = getState().auth.token;
    // any async code you want!
    try {
      const response = await fetch(
        "https://rn-complete-guide.firebaseio.com/plasmas.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      const loadedPlasmas = [];

      for (const key in resData) {
        loadedPlasmas.push(
          new Plasma(
            key,
            "u1",
            resData[key].title,
            resData[key].imageUrl,
            resData[key].description,
            resData[key].price
          )
        );
      }

      dispatch({ type: SET_PLASMAS, plasmas: loadedPlasmas });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const deletePlasma = (plasmaId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `https://rn-complete-guide.firebaseio.com/plasmas/${plasmaId}.json?auth=${token}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    dispatch({ type: DELETE_PLASMA, pid: pId });
  };
};

export const createPlasma = (title, description, imageUrl, price) => {
  return async (dispatch, getState) => {
    // any async code you want!
    const token = getState().auth.token;
    const response = await fetch(
      `https://rn-complete-guide.firebaseio.com/plasmas.json?auth=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
          price,
        }),
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_PLASMA,
      plasmaData: {
        id: resData.name,
        title,
        description,
        imageUrl,
        price,
      },
    });
  };
};

export const updatePlasma = (id, title, description, imageUrl) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `https://rn-complete-guide.firebaseio.com/plasmas/${id}.json?auth=${token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    dispatch({
      type: UPDATE_PLASMA,
      pid: id,
      plasmaData: {
        title,
        description,
        imageUrl,
      },
    });
  };
};

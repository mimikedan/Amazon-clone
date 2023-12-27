// export const initialState = {
//   basket: [],
//   user: null,
// };

// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);

// const reducer = (state, action) => {
//   // console.log(action);
//   switch (action.type) {
//     case "ADD_TO_BASKET":
//       return {
//         ...state,
//         basket: [...state.basket, action.item],
//       };

//     case "EMPTY_BASKET":
//       return {
//         ...state,
//         basket: [],
//       };

//     case "REMOVE_FROM_BASKET":
//       const index = state.basket.findIndex(
//         (basketItem) => basketItem.id === action.id
//       );

//       let newBasket = [...state.basket];

//       if (index >= 0) {
//         newBasket.splice(index, 1);
//       } else {
//         console.warn(
//           `Cant remove product (id: ${action.id}) as its not in basket!`
//         );
//       }
//       return { ...state, basket: newBasket };
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.user,
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;







export const initialState = {
  basket: [],
  user: null,
};

// Homework day 2 - show the number of items and SUM the total price of the products
// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // check action
  // console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // copy the current basket content as newbasket
      let newBasket = [...state.basket];

      if (index >= 0) {
        // go to newbasket cut that element at point of index
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return { ...state, basket: newBasket };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;


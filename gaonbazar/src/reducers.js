export const intialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "ADD_TO_BASKET":
      //Logic for adding items in basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //Logic for removing items in basket
      let newBasket = [...state.basket];
      //check to see if product
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exist in basket remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can not remove id: ${action.id} as its not exsits`);
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
}
export default reducer;

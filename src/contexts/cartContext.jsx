import React, { useState, useContext, useEffect } from "react";

import { useGlobalAlertContext } from "./alertContext";
const AppCartInfoContext = React.createContext();
//cart related all functions will be here..
const AppCartInfoProvider = ({ children }) => {
  //show alert
  const { setShowAlert } = useGlobalAlertContext();
  const [subTotal, setSubTotal] = useState(0);
  //cart items
  const [cartItemListDetails, setCartItemListDetails] = useState("");

  const calculateSummary = () => {
    let total = 0;
    cartItemListDetails.map((i) => {
      total += Number(i.price) * Number(i.qty);
    });
    setSubTotal(total);
  };
  /*****
   * Update cart items
   */
  const getCartItemDetails = async () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItemListDetails(cartItems);
  };

  /****
   * add new item
   */
  const addNewItem = (id, title, price, thumb) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let newItem = { id, title, price, qty: 1, thumb };
    cartItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    getCartItemDetails();
    setShowAlert({ msg: "added to cart", color: "success" });
  };
  /****
   * update item and handleIncreaseQty
   */
  const handleIncreaseQty = async (id) => {
    // item had id and qty props
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let updatedCart = await cartItems.map((i) => {
      if (i.id === id) {
        return { ...i, qty: Number(i.qty) + 1 };
      }
      return i;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    getCartItemDetails();
  };

  /***
   * Handle decrease qty
   */
  const handleDecreaseQty = async (id) => {
    // item had id and qty props
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let updatedCart = await cartItems.map((i) => {
      if (i.id === id && i.qty > 1) {
        return { ...i, qty: Number(i.qty) - 1 };
      }
      return i;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    getCartItemDetails();
  };

  //add to cart
  /******
   * if item is already in the cart it will be updated by qty
   * or the item will be added
   */
  const addToCart = async (id, title, price, thumb) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (cartItems.length > 0) {
      let isExits = await cartItems.find((item) => {
        if (item.id === id) {
          setShowAlert({ msg: "item already exits to cart", color: "primary" });
          return true;
        }
      });
      if (!isExits) {
        addNewItem(id, title, price, thumb);
      }
    } else {
      addNewItem(id, title, price, thumb);
    }
  };

  /*****
   * delete item from cart
   */
  const deleteItem = async (id) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let updatedCart = await cartItems.filter((i) => i.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    getCartItemDetails();
  };
  /***
   * Clear cart
   */
  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItemListDetails("");
  };

  /****
   * by default call getcartitemlist when the page loads
   */
  useEffect(() => {
    getCartItemDetails();
  }, []);
  //calculate total every time cart items changed
  useEffect(() => {
    if (cartItemListDetails?.length > 0) {
      calculateSummary();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItemListDetails]);

  return (
    <AppCartInfoContext.Provider
      value={{
        addToCart,
        cartItemListDetails,
        handleDecreaseQty,
        handleIncreaseQty,
        deleteItem,
        clearCart,
        subTotal,
      }}
    >
      {children}
    </AppCartInfoContext.Provider>
  );
};

export const useGlobalCartInfoContext = () => {
  return useContext(AppCartInfoContext);
};

export { AppCartInfoContext, AppCartInfoProvider };

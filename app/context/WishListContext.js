"use client";

import { createContext, useContext, useState, useEffect } from "react";

const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [WishList, setWishList] = useState([]);

  useEffect(() => {
    const storedWishList = localStorage.getItem("WishList");
    if (storedWishList) {
      setWishList(JSON.parse(storedWishList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("WishList", JSON.stringify(WishList));
  }, [WishList]);

  const addToWishList = (product) => {
    setWishList((prevWishList) => [...prevWishList, product]);
  };

  const removeFromWishList = (productSlug) => {
    setWishList((prevWishList) => prevWishList.filter((item) => item.slug !== productSlug));
  };

  const clearWishList = () => {
    setWishList([]);
  };

  return (
    <WishListContext.Provider value={{ WishList, addToWishList, removeFromWishList, clearWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

export function useWishList() {
  return useContext(WishListContext);
}
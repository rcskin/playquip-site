"use client";

import { createContext, useContext, useState, useEffect } from "react";

const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [WishList, setWishList] = useState([]);

  useEffect(() => {
    try {
      const storedWishList = localStorage.getItem("WishList");
      if (storedWishList) {
        setWishList(JSON.parse(storedWishList));
      }
    } catch (error) {
      console.error('Error loading wishlist from localStorage:', error);
      setWishList([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("WishList", JSON.stringify(WishList));
    } catch (error) {
      console.error('Error saving wishlist to localStorage:', error);
    }
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
  const context = useContext(WishListContext);
  if (context === undefined) {
    throw new Error('useWishList must be used within a WishListProvider');
  }
  return context;
}
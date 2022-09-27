import React from "react";
import NavMain from "../headers/NavMain";
import ShopAccessories from "./ShopAccessories";
import ShopCarousel from "./ShopCarousel";
import ShopCollection from "./ShopCollection";
import ShopFurniture from "./ShopFurniture";
import ShopGift from "./ShopGift";
import ShopInfo from "./ShopInfo";
import ShopToys from "./ShopToys";
import "../../css/styles.css";
import "../../css/shop.css";
const Shop = () => {
  return (
    <>
      <NavMain />
      <ShopCarousel />
      <ShopInfo />
      <ShopCollection />
      <ShopToys />
      <ShopGift />
      <ShopAccessories />
      <ShopFurniture />
    </>
  );
};
export default Shop;

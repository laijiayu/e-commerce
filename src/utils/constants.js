import React from "react"
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi"
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "支持世界各地的工匠",
    text: "我們與工匠合作創造手工產品，同時提供可持續和公平的就業機會。",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "環保包裝",
    text: "我們所有的產品均採用環保可回收包裝運輸，並提供免費塑料運輸選項。",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "向慈善機構捐贈",
    text: "我們與全球 200 多家慈善機構合作，並一直幫助支持偉大的事業。",
  },
]

export const products_url = "/.netlify/functions/products"

export const single_product_url = "/.netlify/functions/single-product?id="

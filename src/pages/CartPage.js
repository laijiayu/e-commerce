import React from "react"
import styled from "styled-components"
import { useCartContext } from "../context/cart_context"
import { Link } from "react-router-dom"
import { CartContent, PageHero } from "../components"

const CartPage = () => {
  //購物車商品少於一，購物車頁面顯示購物車是空的
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h5>your cart is empty</h5>
          <Link to="/products" className="btn">
            go shopping
          </Link>
        </div>
      </Wrapper>
    )
  }
  //購物車商品大於一，顯示導航標示以及CartContext元件內容
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage

import React from "react"
import styled from "styled-components"

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>訂閱電子報即可享有20%折扣</h3>
        <div className="content">
          <p>
            歡迎訂閱WaveRidersOutdoor的電子報
            <br />
            我們會定期分享最新的衝浪資訊、獨家優惠，甚至是衝浪小秘訣。你還在等什麼呢？現在就訂閱，讓我們與你一同迎接海浪，為你的海邊生活添加更多色彩和驚喜！
          </p>
          <form className="contact-form" action="https://formspree.io/f/mjvqvlev" method="POST">
            <input type="mail" className="form-input" placeholder="輸入電子信箱" name="email" />
            <button type="submit " className="submit-btn">
              送出
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact

/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const Main = () => {
  return (
    <div css={style} className="main">
      <img src="/img/pasta.jpg" alt="mainImg" />
      <h1>Pasta</h1>
    </div>
  );
};

const style = css`
  margin: 5% 20%;
  height: 40rem;
  font-family: "Dancing Script", sans-serif;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1 {
    font-size: 8rem;
    color: white;
    position: absolute;
    right: 25%;
    bottom: 25%;
    text-shadow: 1px 1px 1px rgba(150, 150, 150, 1);
  }
`;

export default Main;

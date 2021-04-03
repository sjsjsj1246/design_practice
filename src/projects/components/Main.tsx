/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const Main = () => {
  return (
    <div css={style} className="main">
      <img
        src="https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_960_720.jpg"
        alt="mainImg"
      />
      <h1>Pasta</h1>
    </div>
  );
};

const style = css`
  position: relative;
  margin: 5% 20%;
  height: fit-content;
  font-family: "Dancing Script", sans-serif;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1 {
    margin: 0;
    font-size: 8rem;
    color: white;
    position: absolute;
    right: 7%;
    bottom: 13%;
    text-shadow: 1px 1px 8px rgba(120, 120, 120, 1);
  }
  @media (max-width: 1300px) {
    h1 {
      font-size: 6rem;
    }
  }
`;

export default Main;

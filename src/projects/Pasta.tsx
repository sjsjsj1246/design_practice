/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Content from "./components/Content";
import Main from "./components/Main";

const Pasta = () => {
  return (
    <div css={style} className="app">
      <Main />
      <hr />
      <Content></Content>
    </div>
  );
};

const style = css`
  box-sizing: border-box;
  margin: 0;
  font-size: 16px;
`;

export default Pasta;

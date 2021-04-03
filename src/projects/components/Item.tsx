/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

export type ItemProps = {
  src: string;
  alt: string;
  title: string;
  des: string;
  even: boolean;
};

const Item = ({ src, alt, title, des, even }: ItemProps) => {
  return (
    <div css={style} className="item">
      {!even && <img src={src} alt={alt} />}
      <div className="des">
        <h2>{title}</h2>
        <p>{des}</p>
      </div>
      {even && <img src={src} alt={alt} />}
    </div>
  );
};

const style = css`
  margin: 5%;
  display: flex;
  align-items: center;
  :nth-child(odd) {
    text-align: left;
    justify-content: flex-start;
    img {
      margin-right: 10rem;
    }
    .des {
      align-items: flex-start;
    }
  }
  :nth-child(even) {
    text-align: right;
    justify-content: flex-end;
    img {
      margin-left: 10rem;
    }
    .des {
      align-items: flex-end;
    }
  }
  img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
  }
  .des {
    width: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      width: 100%;
      margin: 0.5rem 0;
      font-size: 2.4rem;
    }
    p {
      width: 100%;
      margin: 0.2rem 0;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center !important;
    .des {
      width: 100%;
    }
    img {
      height: fit-content;
    }
    :nth-child(even) {
      flex-direction: column-reverse;
    }
    img {
      margin: 0 !important;
    }
  }
`;

export default Item;

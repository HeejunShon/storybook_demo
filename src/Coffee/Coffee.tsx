/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type CoffeeProps = {
  url: string;
  name: string;
  price: string;
};

const Coffee = ({ url, name, price }: CoffeeProps) => {
  return (
    <div css={style}>
      <div css={imageWrapper}>
        <img src={url} width="100%" height="100%" alt="coffee" />
      </div>
      <div css={descriptionWrapper}>
        <div css={[item, names]}>{name}</div>
        <div css={[item, prices]}>{price}</div>
      </div>
    </div>
  );
};

export default Coffee;

const style = css`
  box-sizing: border-box;
  height: 30rem;
  width: 20em;
  border: 1px solid black;

  background-color: #efefef;
  background-size: 100% 80%;
`;

const imageWrapper = css`
  height: 80%;
  background-color: #cccacb;
`;

const descriptionWrapper = css`
  display: flex;
  height: 18%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const item = css`
  margin: 0 auto;
`;

const names = css`
  font-size: 1.2em;
  color: #6c7a89;
`;

const prices = css`
  color: #6c7a89;
`;

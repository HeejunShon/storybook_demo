/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type CoffeeProps = {
  name: string;
  price: string;
};

const Coffee = ({ name, price }: CoffeeProps) => {
  return (
    <div css={style}>
      <img
        src="https://www.jbmugs.com/wp-content/uploads/2019/02/Disposable-Takeout-Coffee-Cup-Kraft-Paper-Cartoon-Coffee-Sleeve-Heat-Insulation-Hot-Drink-Mug-Takeaway-Wrapper-2.jpg"
        width="100%"
        height="80%"
        alt="coffee"
      />
      <div css={wrapper}>
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
  background-size: contain;
`;

const wrapper = css`
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

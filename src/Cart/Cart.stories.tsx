/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Cart, { IconTypes } from "./Cart";

export default {
  title: "components|Cart",
  component: Cart,
};

export const cart = () => <Cart icon='cart' />;
cart.story = {
  name: "Default",
};

export const customSize = () => <Cart icon='cart' size='4em' />;
export const customColor = () => <Cart icon='cart' color='#f2d984' />;
export const customWidthStyle = () => (
  <Cart icon='cart' css={{ color: "#f2d984", width: "4rem" }} />
);

export const listOfIcons = () => {
  return (
    <ul css={iconListStyle}>
      {IconTypes.map((icon) => (
        <li key={icon}>
          <Cart icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  );
};

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;

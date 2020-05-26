/** @jsx jsx */
import Coffee from "./Coffee";
import { jsx } from "@emotion/core";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: "components|Coffee",
  component: Coffee,
  decorators: [withKnobs],
};

export const coffee = () => {
  const name = text("children", "PLANZ COFFEE");
  const price = select("price", ["2000원", "2300원", "2800원"], "2300원");

  return <Coffee name={name} price={price}></Coffee>;
};

export const americano = () => {
  return <Coffee name="아메리카노" price="2800원"></Coffee>;
};

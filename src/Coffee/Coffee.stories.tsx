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
  const url = text(
    "url",
    "https://www.jbmugs.com/wp-content/uploads/2019/02/Disposable-Takeout-Coffee-Cup-Kraft-Paper-Cartoon-Coffee-Sleeve-Heat-Insulation-Hot-Drink-Mug-Takeaway-Wrapper-2.jpg"
  );
  const name = text("name", "PLANZ COFFEE");
  const price = select("price", ["2000원", "2300원", "2800원"], "2300원");

  return <Coffee url={url} name={name} price={price}></Coffee>;
};

export const americano = () => {
  return (
    <Coffee
      url={
        "http://pollimolli.com/wp/wp-content/uploads/2015/04/starbucks-ice-americano-178x300.png"
      }
      name="아메리카노"
      price="2800원"
    ></Coffee>
  );
};

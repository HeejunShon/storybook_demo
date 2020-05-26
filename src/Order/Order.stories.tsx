/** @jsx jsx */
import React from "react";
import Order from "./Order";
import { jsx, css } from "@emotion/core";

export default {
  title: "components|Order",
  component: "Order",
};

export const button = () => {
  return <Order>주문하기</Order>;
};

button.story = {
  name: "default",
};

export const coffieButton = () => {
  return <Order theme="coffie">커피 주문하기</Order>;
};

export const drinkButton = () => {
  return <Order theme="drink">음료 주문하기</Order>;
};

export const teaButton = () => {
  return <Order theme="tea">tea 주문하기</Order>;
};

const orderWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={orderWrapper}>
      <div>
        <div className="desc">small</div>
        <Order size="small">커피 주문하기</Order>
      </div>
      <div>
        <div className="desc">medium</div>
        <Order size="medium">음료 주문하기</Order>
      </div>
      <div>
        <div className="desc">big</div>
        <Order size="big">커피 주문하기</Order>
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={orderWrapper}>
      <div>
        <Order disabled theme="coffie">
          커피 주문하기
        </Order>
      </div>
      <div>
        <Order disabled theme="drink">
          음료 주문하기
        </Order>
      </div>
      <div>
        <Order disabled theme="tea">
          tea 주문하기
        </Order>
      </div>
    </div>
  );
};

/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as icons from "./svg";

type IconType = keyof typeof icons;
export const IconTypes: IconType[] = Object.keys(icons) as any[];

export type CartProps = {
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 크기 */
  size?: string | number;
  className?: string;
};

/** svg 아이콘, props 또는 스타일을 사용하여 아이콘의 색상과 크기 정의 가능 */
const Cart = ({ icon, color, size, className, onClick }: CartProps) => {
  const SVGIcon = icons[icon];
  return (
    <SVGIcon
      css={{ fill: color || "currentColor", width: size, height: "auto" }}
      className={className}
      //   onClick={onClick}
    />
  );
};

export default Cart;

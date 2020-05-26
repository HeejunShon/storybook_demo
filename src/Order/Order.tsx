/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type OrderProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새 설정 */
  theme: "coffie" | "drink" | "tea";
  /** 버튼사이즈 크기 */
  size: "small" | "medium" | "big";
  /** 버튼 비활성화 */
  disabled?: boolean;
};

/** `Order` 컴포넌트는 어떠한 작업을 트리거 할 때 사용.  */
const Order = ({ children, theme, size, disabled, onClick }: OrderProps) => {
  return (
    <button
      css={[style, themes[theme], sizes[size]]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Order.defaultProps = {
  theme: "primary",
  size: "medium",
};

const style = css`
  outline: none;
  border: none;
  height: 2rem;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: #f2d984;
  color: #ffffff;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  cursor: pointer;
  &:active {
    background: #e5b182;
  }
`;

const themes = {
  coffie: css`
    background: #20c997;
    color: white;
    &:hover {
      background: #38d9a9;
    }
    &:active {
      background: #12b886;
    }
    &:disabled {
      background: #aed9cc;
    }
  `,
  drink: css`
    background: #e9ecef;
    color: #343a40;
    &:hover {
      background: #f1f3f5;
    }
    &:active {
      background: #dee2e6;
    }
    &:disabled {
      color: #c6d3e1;
    }
  `,
  tea: css`
    background: none;
    color: #20c997;
    &:hover {
      background: #e6fcf5;
    }
    &:active {
      background: #c3fae8;
    }
    &:disabled {
      color: #bcd9d0;
    }
  `,
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};

export default Order;

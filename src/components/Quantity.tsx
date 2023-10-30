import React, { FC, useState } from "react";

interface IQuantityProps {
  count: number;
  setCount: (count: number) => void;
}

const Quantity: FC<IQuantityProps> = ({ count, setCount }) => {
  return (
    <div className="flex items-center my-2">
      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
      <input
        type="number"
        className="mx-2"
        onChange={(e) => setCount(+e.target.value)}
        value={count}
      />
      <button onClick={() => count < 30 && setCount(count + 1)}>+</button>
    </div>
  );
};

export default Quantity;

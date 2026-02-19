import React from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  return (
    <div className="">
      <h2 className="">${price.toFixed(2)}</h2>
      {/* OPTION CONTAINER */}
      {/* QUANTITY CONTAINER */}
    </div>
  );
};

export default Price;

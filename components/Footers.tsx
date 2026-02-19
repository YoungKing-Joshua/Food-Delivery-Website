import Link from "next/link";
import React from "react";

const Footers = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:p-40 text-red-500 flex items-center justify-between ">
      <Link href="/" className="font-bond text-xl">
        MASSIMO
      </Link>
      <p>© ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footers;

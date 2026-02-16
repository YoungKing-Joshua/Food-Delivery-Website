"use Client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { id: 1, name: "Homepage", url: "/" },
  { id: 2, name: "Menu", url: "/" },
  { id: 3, name: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      <div className="bg-red-500 text-white absolute left--0 top-24 h-[calc(100vh-6rem)]">
        {links.map((item) => (
          <Link href={item.url}>{item.title}</Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;

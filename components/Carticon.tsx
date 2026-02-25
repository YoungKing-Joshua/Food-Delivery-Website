import Image from "next/image";
import Link from "next/link";
import React from "react";

type CarticonProps = {
  withLink?: boolean;
};

const Carticon = ({ withLink = true }: CarticonProps) => {
  const content = (
    <div className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="Cart" fill />
      </div>
      <span>Cart (3)</span>
    </div>
  );

  if (withLink) {
    return <Link href="/cart">{content}</Link>;
  }

  return content;
};

export default Carticon;

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Carticon = () => {
//   return (
//     <Link href="/cart" className="flex items-center gap-4">
//       <div className="relative w-8 h-8 md:w-5 md:h-5">
//         <Image src="/cart.png" alt="" fill />
//       </div>
//       <span>Cart (3)</span>
//     </Link>
//   );
// };

// export default Carticon;

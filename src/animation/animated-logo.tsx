import React from "react";
// import Image from 'next/image';
export default function AnimatedLogo() {
  return (
    <img
      src="MyLogo.png"
      alt="Logo"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  );
}

// Then use:
{
  /* <Image src="..." alt="..." width={100} height={100} /> */
}

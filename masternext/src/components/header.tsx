import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="absolute z-10 w-full text-white">
      <nav className="container flex items-center justify-between mx-auto h-14">
        <h1 className="text-xl font-bold">
          <Link href="/">Home</Link>
        </h1>
        <div className="flex items-center gap-4">
          <h1>
            <Link href="/reliability">Reliability</Link>
          </h1>
          <h1>
            <Link href="/performance">Performance</Link>
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Header;

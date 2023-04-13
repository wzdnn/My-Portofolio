import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base text-backg">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        {/* <div className="flex items-center lg:py-2">
          Build with <span className="text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link href="/" className="underline underline-offset-2">
            WZ
          </Link>
        </div> */}
        <Link href="/" className="underline underline-offset-2">
          Zidan Zulkhairyan
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;

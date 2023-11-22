import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { Menu as MenuIcon, X } from "react-feather";

export const Menu = ({}) => {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const router = useRouter();
  console.log(router);
  return (
    <>
      {/** Menu Icon */}
      <div
        onClick={() => setIsMenuVisible(!isMenuVisible)}
        className="fixed right-8 top-8 z-50 cursor-pointer"
      >
        {!isMenuVisible ? (
          <MenuIcon color="white" width={32} height={32} />
        ) : (
          <X color="white" width={32} height={32} />
        )}
      </div>

      {/** Menu */}
      <AnimatePresence>
        {isMenuVisible ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="fixed  left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-main bg-gradient-to-t from-main-500 to-main-300">
              <div className="text-light flex flex-col gap-8 text-center text-4xl text-white ">
                <Link
                  className="font-bold opacity-70 hover:opacity-100"
                  href="/"
                >
                  Start
                </Link>
                <Link className="opacity-70 hover:opacity-100" href="/">
                  Über das Projekt
                </Link>
              </div>

              <div className=" absolute bottom-0  mx-auto flex h-16 justify-center gap-4 text-center text-white">
                <Link
                  className="opacity-70 hover:opacity-100"
                  href="/impressum"
                >
                  Impressum
                </Link>
                <Link
                  className="opacity-70 hover:opacity-100"
                  href="/Datenschutz"
                >
                  Datenschutz
                </Link>
              </div>
            </div>

            <img
              src="/a.png"
              alt=""
              className="pointer-events-none fixed  bottom-0 left-0 z-40 h-screen  w-screen object-cover opacity-5"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

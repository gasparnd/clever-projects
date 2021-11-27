import React from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { LOGO_CLEVERIT } from "../../constants/images";

export const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <a>
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 147px; height: 65px");
            }}
            src={LOGO_CLEVERIT}
          />
        </a>
      </Link>
    </nav>
  );
};

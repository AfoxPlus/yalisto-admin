import { useEffect } from "react";

export const navLinkState = (id_link) => {
  useEffect(() => {
    const navLinkLetrero = document.querySelector(id_link);

    navLinkLetrero.classList.add("active");

    return () => {
      navLinkLetrero.classList.remove("active");
    };
  }, []);
};

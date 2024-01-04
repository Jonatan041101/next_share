"use client";
import React, { useEffect } from "react";

declare const FB: {
  init: any;
  ui: any;
};

declare const window: Window &
  typeof globalThis & {
    fbAsyncInit: () => void;
  };

interface IProps {
  params: { id: string };
}

const Post = ({ params: { id } }: IProps) => {
  useEffect(() => {
    function init() {
      window.fbAsyncInit = function () {
        FB.init({
          appId: "379573221399993",
          xfbml: true,
          version: "v18.0",
        });
      };
    }
    document.addEventListener("DOMContentLoaded", init);

    // Código de limpieza para quitar el listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("DOMContentLoaded", init);
    };
  }, []);
  function share() {
    console.log("HOLA MUNDO");

    FB.ui(
      {
        method: "share",
        href: "https://stackoverflow.com/questions/62581079/dynamic-opengraph-tags-for-spa-react-application/75234916#75234916",
      },
      function () {
        console.log("response");
      }
    );
  }
  return (
    <div>
      PROPS
      {id}
      <div>
        <button onClick={share}>Share</button>
      </div>
    </div>
  );
};

export default Post;

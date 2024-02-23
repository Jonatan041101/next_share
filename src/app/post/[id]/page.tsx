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
       <a
          href={`https://www.facebook.com/sharer/sharer.php?u=https://next-share-91woi5dx5-jonatan041101.vercel.app/post/1`}
          target="_blank"
        >
          <svg
            className="share-icon"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 30 }}
            viewBox="0 0 512 512"
            aria-label="fb"
            role="img"
          >
            <path d="m375.14,288l14.22,-92.66l-88.91,0l0,-60.13c0,-25.35 12.42,-50.06 52.24,-50.06l40.42,0l0,-78.89s-36.68,-6.26 -71.75,-6.26c-73.22,0 -121.08,44.38 -121.08,124.72l0,70.62l-81.39,0l0,92.66l81.39,0l0,224l100.17,0l0,-224l74.69,0z"></path>
          </svg>
        </a>

    </div>
  );
};

export default Post;

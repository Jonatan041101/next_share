import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  params: { id: string };
}
const posts = [
  {
    title: "Post 1",
    description: "Description for post 1",
    image:
      "https://res.cloudinary.com/damjxqb5f/image/upload/v1698937246/Seed_baiokl.png",
  },
  {
    title: "Post 2",
    description: "Description for post 2",
    image:
      "https://res.cloudinary.com/damjxqb5f/image/upload/v1698937246/DoctorsWithoutBorders_fmmqxh.png",
  },
  {
    title: "Post 3",
    description: "Description for post 3",
    image:
      "https://res.cloudinary.com/damjxqb5f/image/upload/v1698937245/HumptyDumpty_ivufnk.png",
  },
  // Agrega más objetos según sea necesario
];
export default function Layout({ children, params: { id } }: IProps) {
  console.log("layout", id);
  return (
    <html>
      <head>
        <meta property="og:url" content="https://wallet-stellar.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={posts[parseInt(id) ?? 0].title} />
        <meta
          property="og:description"
          content={posts[parseInt(id) ?? 0].description}
        />
        <meta property="og:image" content={posts[parseInt(id) ?? 0].image} />
      </head>
      <body>
        POSTEOS {id}
        <div>{children}</div>
      </body>
    </html>
  );
}

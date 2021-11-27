import React, { PropsWithChildren } from "react";
import Head from "next/head";

interface IProps {
  title: string;
  content: string;
}

export const Header = (props: PropsWithChildren<IProps>) => {
  const { children, title, content } = props;
  return (
    <div>
      <Head>
        <title>{`Clever Projects - ${title}`}</title>
        <meta property={`og:${title}`} content={content} key={title} />
      </Head>
      {children}
    </div>
  );
};

import Head from "next/head";
import reset from "../../css/reset";
import typography from "../../css/typography";
import colors from "../../css/colors";
import nprogress from "../../css/nprogress";
import Header from "../header";

import "nprogress";

const Main = ({ description = null, children }) => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {description && <meta name="description" content={description} />}
        <title>Guillermo Rauch&apos;s blog</title>
      </Head>

      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {colors}
      </style>
      <style jsx global>
        {nprogress}
      </style>
      <style jsx global>
        {typography}
      </style>

      <Header />

      {children}

      <style jsx>{`
        main {
          padding: 10px;
        }
        @media (max-width: 600px) {
          main {
            padding: 20px;
          }
        }
      `}</style>
    </main>
  );
};

export default Main;

import A from "./A";
import Head from "next/head";

const MyContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={"nextjs tutorial " + keywords}></meta>
      </Head>
      <div className="navbar">
        <A href={'/'} text="Home"/>
        <A href={'/users'} text="Users"/>
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MyContainer;

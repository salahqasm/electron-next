import { useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";

const IndexPage = () => {
  useEffect(() => {
    const handleMessage = (_event: any, args: any) => alert(args);

    // listen to the 'message' channel
    window.electron.receiveHello(handleMessage);

    return () => {
      window.electron.stopReceivingHello(handleMessage);
    };
  }, []);

  const onSayHiClick = () => {
    window.electron.sayHello();
  };

  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <button
        onClick={async () => {
          const res = await window.electron.getStaticData();
          console.log(res);
        }}
      >
        ping
      </button>
      <h1>Hello Next.js 👋</h1>
      <button onClick={onSayHiClick}>Say hi to electron</button>
    </Layout>
  );
};

export default IndexPage;

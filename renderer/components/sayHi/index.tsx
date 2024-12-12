import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";

export default function SayHi() {
  useEffect(() => {
    const handleMessage = (_event: any, args: any) => alert(args);
    window.electron.receiveHello(handleMessage);
    return () => {
      window.electron.stopReceivingHello(handleMessage);
    };
  }, []);

  const onSayHiClick = () => {
    window.electron.sayHello();
  };
  return <Button onClick={onSayHiClick}>Say hi to electron</Button>;
}

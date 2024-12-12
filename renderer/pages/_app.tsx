import ChakraProvider from "@/providers/chakraProvider";
import { Box } from "@chakra-ui/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box
        backgroundColor={"gray.400"}
        textColor={"white"}
        fontWeight={"bold"}
        textAlign={"center"}
        p={2}
      >
        System Resources Monitor
      </Box>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

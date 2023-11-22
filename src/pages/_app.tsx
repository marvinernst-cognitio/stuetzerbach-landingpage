import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "react-query";
import type { AppType } from "next/dist/shared/lib/utils";
import React from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;

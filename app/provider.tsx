import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function Providers({ children }: { children: React.ReactNode}) {
 const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
              {children}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      );
}

export default Providers;
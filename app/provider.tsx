"use client"
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Providers({ children }: { children: React.ReactNode}) {
    return (
        <QueryClientProvider client={queryClient}>
              {children}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      );
}

export default Providers;
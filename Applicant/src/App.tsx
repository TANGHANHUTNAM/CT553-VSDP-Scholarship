import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import viVN from "antd/es/locale/vi_VN";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import {
  GLOBAL_COLOR,
  GLOBAL_COLOR_ERROR,
  GLOBAL_COLOR_SUCCESS,
} from "./constant/colorCustomize";
import router from "./router";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <ConfigProvider
          locale={viVN}
          theme={{
            token: {
              colorPrimary: GLOBAL_COLOR,
              colorSuccess: GLOBAL_COLOR_SUCCESS,
              colorError: GLOBAL_COLOR_ERROR,
              borderRadius: 4,
            },
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={10}
          containerStyle={{
            marginTop: 18,
          }}
          toastOptions={{
            duration: 3000,
            style: {
              paddingInline: 20,
              borderRadius: 4,

              fontSize: "1rem",
              maxWidth: "calc(100vw - 40px)",
            },
            success: {
              style: {
                color: GLOBAL_COLOR_SUCCESS,
              },
            },
            error: {
              style: {
                color: GLOBAL_COLOR_ERROR,
              },
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;

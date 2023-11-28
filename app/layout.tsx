"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { NextPage } from "next";
import { ReactElement, ReactNode, useEffect } from "react";

import store from "./../app/store";

//Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/layouts/header";
import useAuth from "./hooks/useAuth";
import { updateLoadingUser, updateUser } from "./store/auth";

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, error, loading } = useAuth();
  //console.log(user, error, loading);

  useEffect(() => {
    store.dispatch(updateUser(user));
    store.dispatch(updateLoadingUser(loading));
  }, [user, error]);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Provider>
      </body>
    </html>
  );
}

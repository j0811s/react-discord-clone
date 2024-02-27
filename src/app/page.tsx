'use client'

import "./page.scss";

import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { auth } from "./firbase";
import { login, logout } from "@/lib/features/userReducer";

export default function Home() {
  const user = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(login({
          uid: loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch]);

  return (
    <main id="app" className="app">
      {
        user.uid ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : (
          <Login />
        )
      }
    </main>
  );
}

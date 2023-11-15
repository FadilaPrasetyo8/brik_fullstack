import { Outlet, Navigate } from "react-router-dom";
import { UseLocalStorage } from "../hooks/use-local-storage";
import { Sidebar } from "../components/ui/sidebar";
import { useEffect, useState } from "react";

export const RequireSidebar = () => {
  const { getItem } = UseLocalStorage();
  const [getToken, setGetToken] = useState("");

  useEffect(() => {
    const token = getItem("token");
    setGetToken(token);
  }, []);

  let auth = getToken;

  return !auth.token ? (
    <Sidebar>
      <Outlet />
    </Sidebar>
  ) : (
    <Navigate to="/" />
  );
};

import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/ui/sidebar";

export const RequireSidebar = () => {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
};

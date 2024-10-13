import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import TopSection from "../components/TopSection";

export default function Layout() {
  return (
    <div className="flex flex-row">
      <SideMenu />
      <div className="flex-1">
        <TopSection />
        <Outlet />
      </div>
    </div>
  );
}

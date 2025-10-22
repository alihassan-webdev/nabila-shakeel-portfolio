import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const EMAIL = "qlqfmj9zje@jkotypc.com";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Footer email={EMAIL} />
    </div>
  );
}

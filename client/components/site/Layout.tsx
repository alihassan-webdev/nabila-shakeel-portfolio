import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const CONTACT_EMAIL = "nabilashakeel62@gmail.com";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Footer email={CONTACT_EMAIL} />
    </div>
  );
}

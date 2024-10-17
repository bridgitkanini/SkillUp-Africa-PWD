import { Outlet } from "react-router-dom";

import { Footer, Navbar } from "../components";

function Layout() {
  return (
    <section className="w-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default Layout;

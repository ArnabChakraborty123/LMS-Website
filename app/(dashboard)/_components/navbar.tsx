import MobileSidebar from "./mobile-sidebar";
import NavbarRoutes from "@/components/navbar-routes";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Brand</div>
      <div className="navbar-links">
        <MobileSidebar />
        <NavbarRoutes />
      </div>
    </nav>
  );
};

export default Navbar;

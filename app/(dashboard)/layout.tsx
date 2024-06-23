import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div>
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <div>
        <main className="md:pl-56 h-full"> 
           {children}
           </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

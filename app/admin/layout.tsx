import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "TE-ENGINEERING-AND-CONSTRUCTION-SHOP Admin",
  description: "TE-ENGINEERING-AND-CONSTRUCTION-SHOP Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;

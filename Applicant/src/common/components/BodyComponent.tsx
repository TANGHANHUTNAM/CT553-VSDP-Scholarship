import { Outlet } from "react-router-dom";

const BodyComponent: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
};

export default BodyComponent;

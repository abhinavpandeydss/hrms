import { Navigate, useLocation } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const user = {
    firstName: "Alex",
    lastName: "Carry",
    role: "admin",
  };
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login\" state={{ from: location }} replace />;
  }

  if (requiredRole && user && !requiredRole.includes(user.role)) {
    return <Navigate to="/dashboard\" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

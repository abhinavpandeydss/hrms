import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import { setTheme } from "./store/slices/themeSlice";
import { ThemeContext } from "./contexts/ThemeContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const LoginPage = React.lazy(() => import("./pages/auth/LoginPage"));
const DashboardLayout = React.lazy(() => import("./layout/DashboardLayout"));
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));
const EmployeeList = React.lazy(() => import("./pages/employees/EmployeeList"));
const EmployeeProfile = React.lazy(() =>
  import("./pages/employees/EmployeeProfile")
);
const AttendanceTracker = React.lazy(() =>
  import("./pages/attendance/AttendanceTracker")
);
const LeaveManagement = React.lazy(() =>
  import("./pages/leave/LeaveManagement")
);
const PerformanceReview = React.lazy(() =>
  import("./pages/performance/PerformanceReview")
);
const PayrollDashboard = React.lazy(() =>
  import("./pages/payroll/PayrollDashboard")
);

const App = () => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const isAuthenticated = true;

  const handleThemeChange = (theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard\" replace />
          ) : (
            <LoginPage />
          )
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard\" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="employees/:id" element={<EmployeeProfile />} />
        <Route path="attendance" element={<AttendanceTracker />} />
        <Route path="leave" element={<LeaveManagement />} />
        <Route path="performance" element={<PerformanceReview />} />
        <Route path="payroll" element={<PayrollDashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard\" replace />} />
    </Routes>
    // <div
    //   className={"min-h-screen transition-colors duration-300"}
    //   style={{ backgroundColor: theme.background }}
    // >
    //   <div className="container mx-auto p-4">
    //     <h1 className="text-3xl font-bold mb-4">Theme Switcher</h1>
    //     <div className="flex space-x-4 mb-4">
    //       <button
    //         onClick={() => handleThemeChange("system")}
    //         className={`px-4 py-2 rounded text-black dark:text-white hover:bg-blue-600`}
    //         style={{
    //           backgroundColor:
    //             currentTheme === "system" ? "#075a55" : "#ae7654",
    //         }}
    //       >
    //         System
    //       </button>
    //       <button
    //         onClick={() => handleThemeChange("light")}
    //         className={`px-4 py-2 rounded text-white hover:bg-blue-600`}
    //         style={{
    //           backgroundColor: currentTheme === "light" ? "#075a55" : "#ae7654",
    //         }}
    //       >
    //         Light
    //       </button>
    //       <button
    //         onClick={() => handleThemeChange("dark")}
    //         className={`px-4 py-2 rounded text-white hover:bg-blue-600`}
    //         style={{
    //           backgroundColor: currentTheme === "dark" ? "#075a55" : "#ae7654",
    //         }}
    //       >
    //         Dark
    //       </button>
    //     </div>
    //     <p className="mt-4">
    //       Current theme: <span className="font-semibold">{currentTheme}</span>
    //     </p>
    //   </div>
    // </div>
  );
};

export default App;

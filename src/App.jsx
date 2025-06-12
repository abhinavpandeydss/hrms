import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
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
  const { isAuthenticated } = useSelector((state) => state.auth);

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
  );
};

export default App;

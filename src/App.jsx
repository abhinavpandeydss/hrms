import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import ThemeProvider from "./contexts/ThemeContext";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NotificationCenter from "./components/notifications/NotificationCenter";
import AddEmployeeModal from "./components/modals/AddEmployeeModal";
import LeaveRequestModal from "./components/modals/LeaveRequestModal";
import ClockInOutModal from "./components/modals/ClockInOutModal";

// Lazy load components for better performance
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
const ReportsPage = React.lazy(() => import("./pages/reports/ReportsPage"));
const SettingsPage = React.lazy(() => import("./pages/settings/SettingsPage"));

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" replace />
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
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="employees" element={<EmployeeList />} />
              <Route path="employees/:id" element={<EmployeeProfile />} />
              <Route path="attendance" element={<AttendanceTracker />} />
              <Route path="leave" element={<LeaveManagement />} />
              <Route path="performance" element={<PerformanceReview />} />
              <Route path="payroll" element={<PayrollDashboard />} />
              <Route path="reports" element={<ReportsPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Suspense>

        {/* Global Components */}
        <NotificationCenter />
        <AddEmployeeModal />
        <LeaveRequestModal />
        <ClockInOutModal />
      </div>
    </ThemeProvider>
  );
}

export default App;

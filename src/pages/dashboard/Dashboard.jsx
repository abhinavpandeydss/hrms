import React, { useContext } from "react";
import { useSelector } from "react-redux";
import StatsCards from "../../components/dashboard/StatsCards";
import AttendanceChart from "../../components/dashboard/AttendanceChart";
import RecentActivities from "../../components/dashboard/RecentActivities";
import QuickActions from "../../components/dashboard/QuickActions";
import UpcomingEvents from "../../components/dashboard/UpcomingEvents";
import { ThemeContext } from "../../contexts/ThemeContext";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  const user = {
    firstName: "Alex",
    lastName: "Carry",
    role: "admin",
  };

  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div
        className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white p-6"
        style={{ backgroundImage: theme.gradients.primary }}
      >
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-primary-100">
          Here's what's happening in your organization today.
        </p>
      </div>

      {/* Stats cards */}
      <StatsCards />

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Charts and activities */}
        <div className="lg:col-span-2 space-y-6">
          <AttendanceChart />
          <RecentActivities />
        </div>

        {/* Right column - Quick actions and events */}
        <div className="space-y-6">
          <QuickActions />
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

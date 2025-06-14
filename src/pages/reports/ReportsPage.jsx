import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Icons } from "../../utils/icons";
import {
  Download,
  Filter,
  Calendar,
  Users,
  TrendingUp,
  FileText,
} from "lucide-react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Select from "../../components/ui/Select";
import Tabs from "../../components/ui/Tabs";

const ReportsPage = () => {
  const [dateRange, setDateRange] = useState("last-30-days");
  const [department, setDepartment] = useState("all");

  // Mock data for charts
  const attendanceData = [
    { month: "Jan", present: 95, absent: 5 },
    { month: "Feb", present: 92, absent: 8 },
    { month: "Mar", present: 97, absent: 3 },
    { month: "Apr", present: 94, absent: 6 },
    { month: "May", present: 96, absent: 4 },
    { month: "Jun", present: 93, absent: 7 },
  ];

  const departmentData = [
    { name: "Engineering", employees: 45, color: "#1995AD" },
    { name: "Sales", employees: 32, color: "#A1D6E2" },
    { name: "Marketing", employees: 28, color: "#F1F1F2" },
    { name: "HR", employees: 15, color: "#2dd55b" },
    { name: "Finance", employees: 12, color: "#ffc409" },
  ];

  const performanceData = [
    { quarter: "Q1", average: 4.2, target: 4.0 },
    { quarter: "Q2", average: 4.3, target: 4.0 },
    { quarter: "Q3", average: 4.1, target: 4.0 },
    { quarter: "Q4", average: 4.4, target: 4.0 },
  ];

  const leaveData = [
    { type: "Vacation", count: 45, color: "#1995AD" },
    { type: "Sick", count: 23, color: "#dc2626" },
    { type: "Personal", count: 12, color: "#ffc409" },
    { type: "Maternity", count: 8, color: "#2dd55b" },
    { type: "Other", count: 5, color: "#A1D6E2" },
  ];

  const dateRangeOptions = [
    { value: "last-7-days", label: "Last 7 Days" },
    { value: "last-30-days", label: "Last 30 Days" },
    { value: "last-90-days", label: "Last 90 Days" },
    { value: "last-year", label: "Last Year" },
    { value: "custom", label: "Custom Range" },
  ];

  const departmentOptions = [
    { value: "all", label: "All Departments" },
    { value: "engineering", label: "Engineering" },
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "hr", label: "HR" },
    { value: "finance", label: "Finance" },
  ];

  const attendanceTab = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Monthly Attendance Trends
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="present" fill="#1995AD" name="Present %" />
                <Bar dataKey="absent" fill="#dc2626" name="Absent %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Department Distribution
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="employees"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Attendance Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">96.2%</div>
            <div className="text-sm text-gray-500">Average Attendance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">1,156</div>
            <div className="text-sm text-gray-500">Present Today</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">45</div>
            <div className="text-sm text-gray-500">Absent Today</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">33</div>
            <div className="text-sm text-gray-500">Late Arrivals</div>
          </div>
        </div>
      </Card>
    </div>
  );

  const performanceTab = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quarterly Performance Trends
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis domain={[3.5, 5]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="average"
                  stroke="#1995AD"
                  name="Average Rating"
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#dc2626"
                  strokeDasharray="5 5"
                  name="Target"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Performance Distribution
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Excellent (4.5-5.0)
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium">35%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Good (4.0-4.4)
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium">45%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Average (3.5-3.9)
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium">15%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Below Average (3.0-3.4)
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: "5%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium">5%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const leaveTab = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Leave Types Distribution
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leaveData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {leaveData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Leave Statistics
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Total Leave Requests
              </span>
              <span className="font-semibold">93</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Approved</span>
              <span className="font-semibold text-green-600">78</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Pending</span>
              <span className="font-semibold text-yellow-600">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Rejected</span>
              <span className="font-semibold text-red-600">3</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Average Days per Request
                </span>
                <span className="font-semibold">3.2</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const tabs = [
    {
      key: "attendance",
      label: "Attendance",
      icon: <Icons.FaUsers className="w-4 h-4" />,
      content: attendanceTab,
    },
    {
      key: "performance",
      label: "Performance",
      icon: <Icons.MdTrendingUp className="w-4 h-4" />,
      content: performanceTab,
    },
    {
      key: "leave",
      label: "Leave Management",
      icon: <Icons.FaRegCalendarAlt className="w-4 h-4" />,
      content: leaveTab,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Reports & Analytics
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Comprehensive insights into your organization's performance
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="secondary">
            <Icons.AiOutlineFileText className="w-4 h-4 mr-2" />
            Schedule Report
          </Button>
          <Button>
            <Icons.FaDownload className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center space-x-2">
            <Icons.FaFilter className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Filters:
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <Select
              options={dateRangeOptions}
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              placeholder="Select date range"
            />
            <Select
              options={departmentOptions}
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Select department"
            />
          </div>
        </div>
      </Card>

      {/* Reports Tabs */}
      <Card padding="none">
        <Tabs tabs={tabs} defaultTab="attendance" />
      </Card>
    </div>
  );
};

export default ReportsPage;

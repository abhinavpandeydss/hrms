import React, { useState } from "react";
import { Icons } from "../../utils/icons";

const AttendanceTracker = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  // Mock attendance data
  const attendanceStats = {
    totalEmployees: 1234,
    presentToday: 1156,
    absentToday: 45,
    lateToday: 33,
    attendanceRate: 93.7,
  };

  const attendanceRecords = [
    {
      id: "1",
      employeeName: "John Doe",
      employeeId: "EMP001",
      department: "Engineering",
      clockIn: "09:00",
      clockOut: "18:00",
      totalHours: 8.0,
      status: "present",
      breakTime: 60,
    },
    {
      id: "2",
      employeeName: "Sarah Johnson",
      employeeId: "EMP002",
      department: "HR",
      clockIn: "08:45",
      clockOut: "17:30",
      totalHours: 7.75,
      status: "present",
      breakTime: 45,
    },
    {
      id: "3",
      employeeName: "Mike Chen",
      employeeId: "EMP003",
      department: "Engineering",
      clockIn: "09:15",
      clockOut: "18:15",
      totalHours: 8.0,
      status: "late",
      breakTime: 60,
    },
    {
      id: "4",
      employeeName: "Emma Davis",
      employeeId: "EMP004",
      department: "Marketing",
      clockIn: "-",
      clockOut: "-",
      totalHours: 0,
      status: "absent",
      breakTime: 0,
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "present":
        return <Icons.GoCheckCircle className="w-5 h-5 text-green-500" />;
      case "late":
        return (
          <Icons.IoAlertCircleOutline className="w-5 h-5 text-yellow-500" />
        );
      case "absent":
        return <Icons.GoXCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Icons.FaRegClock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "bg-green-100 text-green-800";
      case "late":
        return "bg-yellow-100 text-yellow-800";
      case "absent":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Attendance Tracker
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Monitor and manage employee attendance records
          </p>
        </div>
        <div className="flex items-center space-x-3 text-gray-800 dark:text-gray-100">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="input-field text-gray-800 dark:text-gray-100"
          />
          <button className="bg-primary-800 text-gray-800 dark:text-gray-50 px-2 py-1 rounded-md">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Employees
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {attendanceStats.totalEmployees.toLocaleString()}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500">
              <Icons.FaUsers className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Present Today
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {attendanceStats.presentToday.toLocaleString()}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-green-500">
              <Icons.GoCheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Absent Today
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {attendanceStats.absentToday}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-red-500">
              <Icons.GoXCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Late Today
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {attendanceStats.lateToday}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-500">
              <Icons.IoAlertCircleOutline className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Attendance Rate
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {attendanceStats.attendanceRate}%
              </p>
            </div>
            <div className="p-3 rounded-lg bg-purple-500">
              <Icons.MdOutlineTrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Records Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Daily Attendance - {new Date(selectedDate).toLocaleDateString()}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Clock In
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Clock Out
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Total Hours
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {attendanceRecords.map((record) => (
                <tr
                  key={record.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {record.employeeName}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {record.employeeId}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {record.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {record.clockIn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {record.clockOut}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {record.totalHours}h
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(record.status)}
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          record.status
                        )}`}
                      >
                        {record.status.charAt(0).toUpperCase() +
                          record.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary-600 dark:text-primary-400 hover:text-primary-500 mr-3">
                      <Icons.BsPencilSquare />
                    </button>
                    <button className="text-warning-900 dark:text-warning-700 hover:text-warning-800">
                      <Icons.FaRegEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTracker;

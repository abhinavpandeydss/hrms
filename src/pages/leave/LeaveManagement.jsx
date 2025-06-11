import React, { useState } from "react";
import { Icons } from "../../utils/icons";

const LeaveManagement = () => {
  const [activeTab, setActiveTab] = useState("requests");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock leave requests data
  const leaveRequests = [
    {
      id: "1",
      employeeName: "Sarah Johnson",
      employeeId: "EMP002",
      type: "vacation",
      startDate: "2024-01-15",
      endDate: "2024-01-19",
      days: 5,
      reason: "Family vacation to Hawaii",
      status: "pending",
      appliedDate: "2024-01-01",
      approver: "John Smith",
    },
    {
      id: "2",
      employeeName: "Mike Chen",
      employeeId: "EMP003",
      type: "sick",
      startDate: "2024-01-10",
      endDate: "2024-01-12",
      days: 3,
      reason: "Medical appointment and recovery",
      status: "approved",
      appliedDate: "2024-01-08",
      approver: "Jane Davis",
      approvedDate: "2024-01-09",
    },
    {
      id: "3",
      employeeName: "Emma Davis",
      employeeId: "EMP004",
      type: "personal",
      startDate: "2024-01-20",
      endDate: "2024-01-20",
      days: 1,
      reason: "Personal matters",
      status: "rejected",
      appliedDate: "2024-01-05",
      approver: "John Smith",
      approvedDate: "2024-01-06",
    },
  ];

  // Mock leave balances
  const leaveBalances = [
    {
      employeeId: "EMP001",
      employeeName: "John Doe",
      department: "Engineering",
      vacation: { used: 8, available: 12, total: 20 },
      sick: { used: 2, available: 8, total: 10 },
      personal: { used: 1, available: 4, total: 5 },
    },
    {
      employeeId: "EMP002",
      employeeName: "Sarah Johnson",
      department: "HR",
      vacation: { used: 15, available: 5, total: 20 },
      sick: { used: 3, available: 7, total: 10 },
      personal: { used: 2, available: 3, total: 5 },
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return <Icons.GoCheckCircle className="w-5 h-5 text-green-500" />;
      case "rejected":
        return <Icons.GoXCircle className="w-5 h-5 text-red-500" />;
      case "pending":
        return (
          <Icons.IoAlertCircleOutline className="w-5 h-5 text-yellow-500" />
        );
      default:
        return <Icons.FaRegClock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getLeaveTypeColor = (type) => {
    switch (type) {
      case "vacation":
        return "bg-blue-100 text-blue-800";
      case "sick":
        return "bg-red-100 text-red-800";
      case "personal":
        return "bg-purple-100 text-purple-800";
      case "maternity":
        return "bg-pink-100 text-pink-800";
      case "paternity":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredRequests =
    filterStatus === "all"
      ? leaveRequests
      : leaveRequests.filter((request) => request.status === filterStatus);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Leave Management
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Manage employee leave requests and balances
          </p>
        </div>
        <button className="btn-primary flex items-center space-x-2 text-gray-700 dark:text-gray-300">
          <Icons.FaPlus className="w-4 h-4" />
          <span>Request Leave</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            {[
              { key: "requests", label: "Leave Requests" },
              { key: "calendar", label: "Leave Calendar" },
              { key: "balances", label: "Leave Balances" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.key
                    ? "border-primary-500 text-primary-600 dark:text-primary-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Leave Requests Tab */}
          {activeTab === "requests" && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Icons.FaFilter className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Filter by status:
                  </span>
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="input-field p-1 text-gray-700 dark:text-gray-300 dark:bg-gray-800"
                >
                  <option value="all">All Requests</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              {/* Requests List */}
              <div className="space-y-4">
                {filteredRequests.map((request) => (
                  <div
                    key={request.id}
                    className="border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {request.employeeName}
                          </h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            ({request.employeeId})
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getLeaveTypeColor(
                              request.type
                            )}`}
                          >
                            {request.type.charAt(0).toUpperCase() +
                              request.type.slice(1)}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                          <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Duration:
                            </span>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {new Date(request.startDate).toLocaleDateString()}{" "}
                              - {new Date(request.endDate).toLocaleDateString()}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {request.days} day{request.days > 1 ? "s" : ""}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Applied:
                            </span>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {new Date(
                                request.appliedDate
                              ).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Approver:
                            </span>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {request.approver}
                            </p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Reason:
                          </span>
                          <p className="text-sm text-gray-900 dark:text-white mt-1">
                            {request.reason}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(request.status)}
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                              request.status
                            )}`}
                          >
                            {request.status.charAt(0).toUpperCase() +
                              request.status.slice(1)}
                          </span>
                        </div>

                        {request.status === "pending" && (
                          <div className="flex space-x-2">
                            <button className="btn-primary text-sm py-1 px-3 text-gray-700 dark:text-gray-300">
                              Approve
                            </button>
                            <button className="btn-secondary text-sm py-1 px-3 text-gray-700 dark:text-gray-300">
                              Reject
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Leave Calendar Tab */}
          {activeTab === "calendar" && (
            <div className="text-center py-12">
              <Icons.FaRegCalendarAlt className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Leave Calendar
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Calendar view of all leave requests and company holidays will be
                displayed here.
              </p>
            </div>
          )}

          {/* Leave Balances Tab */}
          {activeTab === "balances" && (
            <div className="space-y-6">
              <div className="grid gap-6">
                {leaveBalances.map((employee) => (
                  <div
                    key={employee.employeeId}
                    className="border border-gray-200 dark:border-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {employee.employeeName}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {employee.employeeId} • {employee.department}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Vacation */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                          Vacation Leave
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-blue-600 dark:text-blue-400">
                              Used:
                            </span>
                            <span className="font-medium text-blue-800 dark:text-blue-200">
                              {employee.vacation.used} days
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-blue-600 dark:text-blue-400">
                              Available:
                            </span>
                            <span className="font-medium text-blue-800 dark:text-blue-200">
                              {employee.vacation.available} days
                            </span>
                          </div>
                          <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{
                                width: `${
                                  (employee.vacation.used /
                                    employee.vacation.total) *
                                  100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Sick Leave */}
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
                          Sick Leave
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-red-600 dark:text-red-400">
                              Used:
                            </span>
                            <span className="font-medium text-red-800 dark:text-red-200">
                              {employee.sick.used} days
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-red-600 dark:text-red-400">
                              Available:
                            </span>
                            <span className="font-medium text-red-800 dark:text-red-200">
                              {employee.sick.available} days
                            </span>
                          </div>
                          <div className="w-full bg-red-200 dark:bg-red-800 rounded-full h-2">
                            <div
                              className="bg-red-500 h-2 rounded-full"
                              style={{
                                width: `${
                                  (employee.sick.used / employee.sick.total) *
                                  100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Personal Leave */}
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">
                          Personal Leave
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-purple-600 dark:text-purple-400">
                              Used:
                            </span>
                            <span className="font-medium text-purple-800 dark:text-purple-200">
                              {employee.personal.used} days
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-purple-600 dark:text-purple-400">
                              Available:
                            </span>
                            <span className="font-medium text-purple-800 dark:text-purple-200">
                              {employee.personal.available} days
                            </span>
                          </div>
                          <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2">
                            <div
                              className="bg-purple-500 h-2 rounded-full"
                              style={{
                                width: `${
                                  (employee.personal.used /
                                    employee.personal.total) *
                                  100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaveManagement;

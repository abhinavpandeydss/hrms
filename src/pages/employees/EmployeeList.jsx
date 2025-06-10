import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Icons } from "../../utils/icons";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  // Mock employee data
  const employees = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@company.com",
      department: "Engineering",
      position: "Senior Developer",
      status: "active",
      startDate: "2022-03-15",
      avatar: null,
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      department: "Human Resources",
      position: "HR Manager",
      status: "active",
      startDate: "2021-08-20",
      avatar: null,
    },
    {
      id: "3",
      name: "Mike Chen",
      email: "mike.chen@company.com",
      department: "Engineering",
      position: "Frontend Developer",
      status: "active",
      startDate: "2023-01-10",
      avatar: null,
    },
    {
      id: "4",
      name: "Emma Davis",
      email: "emma.davis@company.com",
      department: "Marketing",
      position: "Marketing Specialist",
      status: "active",
      startDate: "2022-11-05",
      avatar: null,
    },
    {
      id: "5",
      name: "Alex Thompson",
      email: "alex.thompson@company.com",
      department: "Sales",
      position: "Sales Representative",
      status: "inactive",
      startDate: "2021-06-12",
      avatar: null,
    },
  ];

  const departments = [
    "Engineering",
    "Human Resources",
    "Marketing",
    "Sales",
    "Finance",
  ];
  const statuses = ["active", "inactive", "terminated"];

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      !selectedDepartment || employee.department === selectedDepartment;
    const matchesStatus = !selectedStatus || employee.status === selectedStatus;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-yellow-100 text-yellow-800";
      case "terminated":
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
            Employee Directory
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Manage and view all employees in your organization
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center space-x-2 text-gray-800 dark:text-gray-100 shadow-sm px-4 py-2 bg-gray-100 dark:bg-gray-600">
            <Icons.FaDownload className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button
            onClick={() => navigate("/employees/new")}
            className="btn-primary flex items-center space-x-2 text-gray-800 dark:text-gray-100 shadow-sm px-4 py-2 bg-gray-100 dark:bg-gray-600"
          >
            <Icons.FaPlus className="w-4 h-4" />
            <span>Add Employee</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Icons.IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-300" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10 text-black dark:text-white"
            />
          </div>

          {/* Department filter */}
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="input-field text-black dark:text-white dark:bg-gray-800"
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          {/* Status filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="input-field text-black dark:text-white dark:bg-gray-800"
          >
            <option value="">All Statuses</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>

          {/* Clear filters */}
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedDepartment("");
              setSelectedStatus("");
            }}
            className="btn-secondary flex items-center justify-center space-x-2 text-black dark:text-white"
          >
            <Icons.CiFilter className="w-4 h-4" />
            <span>Clear Filters</span>
          </button>
        </div>
      </div>

      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <div
            key={employee.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200 cursor-pointer"
            onClick={() => navigate(`/employees/${employee.id}`)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {employee.avatar ? (
                  <img
                    src={employee.avatar}
                    alt={employee.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-medium">
                    {employee.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {employee.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {employee.position}
                  </p>
                </div>
              </div>
              <button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                <Icons.FiMoreVertical className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Department:
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {employee.department}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Status:
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    employee.status
                  )}`}
                >
                  {employee.status.charAt(0).toUpperCase() +
                    employee.status.slice(1)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Start Date:
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {new Date(employee.startDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {employee.email}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icons.IoMdSearch className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No employees found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Try adjusting your search criteria or add a new employee.
          </p>
          <button
            onClick={() => navigate("/employees/new")}
            className="btn-primary"
          >
            Add First Employee
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;

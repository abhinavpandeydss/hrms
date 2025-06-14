import React, { useState } from "react";
import { Icons } from "../../utils/icons";

const PayrollDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("2024-01");

  // Mock payroll data
  const payrollStats = {
    totalPayroll: 2450000,
    totalEmployees: 1234,
    averageSalary: 75000,
    payrollGrowth: 8.5,
  };

  const payrollSummary = [
    {
      id: "1",
      period: "January 2024",
      status: "processed",
      totalAmount: 2450000,
      employeeCount: 1234,
      processedDate: "2024-01-31",
      payDate: "2024-02-01",
    },
    {
      id: "2",
      period: "December 2023",
      status: "processed",
      totalAmount: 2380000,
      employeeCount: 1220,
      processedDate: "2023-12-31",
      payDate: "2024-01-01",
    },
    {
      id: "3",
      period: "November 2023",
      status: "processed",
      totalAmount: 2365000,
      employeeCount: 1215,
      processedDate: "2023-11-30",
      payDate: "2023-12-01",
    },
  ];

  const employeePayroll = [
    {
      id: "1",
      employeeName: "John Doe",
      employeeId: "EMP001",
      department: "Engineering",
      baseSalary: 85000,
      overtime: 2400,
      bonuses: 5000,
      deductions: 1200,
      netPay: 91200,
      status: "processed",
    },
    {
      id: "2",
      employeeName: "Sarah Johnson",
      employeeId: "EMP002",
      department: "HR",
      baseSalary: 75000,
      overtime: 0,
      bonuses: 3000,
      deductions: 950,
      netPay: 77050,
      status: "processed",
    },
    {
      id: "3",
      employeeName: "Mike Chen",
      employeeId: "EMP003",
      department: "Engineering",
      baseSalary: 78000,
      overtime: 1800,
      bonuses: 2500,
      deductions: 1100,
      netPay: 81200,
      status: "pending",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "processed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Payroll Dashboard
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Manage payroll processing and employee compensation
          </p>
        </div>
        <div className="flex space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="input-field"
          >
            <option value="2024-01">January 2024</option>
            <option value="2023-12">December 2023</option>
            <option value="2023-11">November 2023</option>
          </select>
          <button className="btn-secondary flex items-center space-x-2">
            <Icons.MdOutlineFileDownload className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="btn-primary">Process Payroll</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Payroll
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {formatCurrency(payrollStats.totalPayroll)}
              </p>
              <div className="flex items-center mt-2">
                <Icons.MdOutlineTrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                  +{payrollStats.payrollGrowth}%
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                  vs last month
                </span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-green-500">
              <Icons.FaDollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Employees
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {payrollStats.totalEmployees.toLocaleString()}
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
                Average Salary
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {formatCurrency(payrollStats.averageSalary)}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-purple-500">
              <Icons.MdOutlineTrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Next Pay Date
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                Feb 1
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                2024
              </p>
            </div>
            <div className="p-3 rounded-lg bg-orange-500">
              <Icons.FaRegCalendarAlt className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Payroll Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Payroll Summary
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Period
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Total Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Employees
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Pay Date
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
              {payrollSummary.map((payroll) => (
                <tr
                  key={payroll.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {payroll.period}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatCurrency(payroll.totalAmount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {payroll.employeeCount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {new Date(payroll.payDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        payroll.status
                      )}`}
                    >
                      {payroll.status.charAt(0).toUpperCase() +
                        payroll.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-primary-600 dark:text-primary-400 hover:text-primary-500">
                      <Icons.FaEye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-gray-500">
                      <Icons.MdOutlineFileDownload className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Employee Payroll Details */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Employee Payroll Details - {selectedPeriod}
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
                  Base Salary
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Overtime
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Bonuses
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Deductions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Net Pay
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
              {employeePayroll.map((employee) => (
                <tr
                  key={employee.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {employee.employeeName}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {employee.employeeId} • {employee.department}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatCurrency(employee.baseSalary)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatCurrency(employee.overtime)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatCurrency(employee.bonuses)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    -{formatCurrency(employee.deductions)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {formatCurrency(employee.netPay)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        employee.status
                      )}`}
                    >
                      {employee.status.charAt(0).toUpperCase() +
                        employee.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-primary-600 dark:text-primary-400 hover:text-primary-500">
                      <Icons.AiOutlineFileText className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-gray-500">
                      <Icons.MdOutlineFileDownload className="w-4 h-4" />
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

export default PayrollDashboard;

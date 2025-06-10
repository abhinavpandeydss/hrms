import React from "react";
import { useParams, useNavigate } from "react-router";
import { Icons } from "../../utils/icons";

const EmployeeProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock employee data - in real app, fetch based on ID
  const employeeData = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@company.com",
      phone: "+1 (555) 123-4567",
      department: "Engineering",
      position: "Senior Developer",
      manager: "Sarah Johnson",
      startDate: "2022-03-15",
      status: "active",
      avatar: null,
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "USA",
      },
      emergencyContact: {
        name: "Jane Doe",
        relationship: "Spouse",
        phone: "+1 (555) 987-6543",
      },
      salary: {
        amount: 85000,
        currency: "USD",
        payFrequency: "monthly",
      },
      benefits: ["Health Insurance", "Dental Insurance", "401(k)", "PTO"],
      skills: ["JavaScript", "React", "Node.js", "Python", "SQL"],
      documents: [
        {
          id: "1",
          name: "Employment Contract",
          type: "PDF",
          uploadDate: "2022-03-15",
          url: "#",
        },
        {
          id: "2",
          name: "Tax Forms",
          type: "PDF",
          uploadDate: "2023-01-01",
          url: "#",
        },
      ],
    },
    {
      id: "2",
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.johnson@company.com",
      phone: "+1 (555) 901-2345",
      department: "Human Resources",
      position: "HR Manager",
      manager: "None",
      startDate: "2021-08-20",
      status: "active",
      avatar: null,
      address: {
        street: "456 Elm St",
        city: "Chicago",
        state: "IL",
        zipCode: "60611",
        country: "USA",
      },
      emergencyContact: {
        name: "Mike Johnson",
        relationship: "Husband",
        phone: "+1 (555) 111-2222",
      },
      salary: {
        amount: 70000,
        currency: "USD",
        payFrequency: "monthly",
      },
      benefits: ["Health Insurance", "Dental Insurance", "401(k)", "PTO"],
      skills: ["HR Management", "Recruitment", "Employee Relations"],
      documents: [
        {
          id: "1",
          name: "Employment Contract",
          type: "PDF",
          uploadDate: "2021-08-20",
          url: "#",
        },
        {
          id: "2",
          name: "Tax Forms",
          type: "PDF",
          uploadDate: "2022-01-01",
          url: "#",
        },
      ],
    },
    {
      id: "3",
      firstName: "Mike",
      lastName: "Chen",
      email: "mike.chen@company.com",
      phone: "+1 (555) 789-0123",
      department: "Engineering",
      position: "Frontend Developer",
      manager: "John Doe",
      startDate: "2023-01-10",
      status: "active",
      avatar: null,
      address: {
        street: "789 Oak St",
        city: "San Francisco",
        state: "CA",
        zipCode: "94111",
        country: "USA",
      },
      emergencyContact: {
        name: "Emily Chen",
        relationship: "Sister",
        phone: "+1 (555) 444-5555",
      },
      salary: {
        amount: 90000,
        currency: "USD",
        payFrequency: "monthly",
      },
      benefits: ["Health Insurance", "Dental Insurance", "401(k)", "PTO"],
      skills: ["JavaScript", "React", "Node.js", "HTML/CSS"],
      documents: [
        {
          id: "1",
          name: "Employment Contract",
          type: "PDF",
          uploadDate: "2023-01-10",
          url: "#",
        },
        {
          id: "2",
          name: "Tax Forms",
          type: "PDF",
          uploadDate: "2023-01-01",
          url: "#",
        },
      ],
    },
    {
      id: "4",
      firstName: "Emma",
      lastName: "Davis",
      email: "emma.davis@company.com",
      phone: "+1 (555) 456-7890",
      department: "Marketing",
      position: "Marketing Specialist",
      manager: "None",
      startDate: "2022-11-05",
      status: "active",
      avatar: null,
      address: {
        street: "321 Maple St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "USA",
      },
      emergencyContact: {
        name: "David Davis",
        relationship: "Brother",
        phone: "+1 (555) 777-8888",
      },
      salary: {
        amount: 60000,
        currency: "USD",
        payFrequency: "monthly",
      },
      benefits: ["Health Insurance", "Dental Insurance", "401(k)", "PTO"],
      skills: ["Marketing Strategy", "Social Media", "Content Creation"],
      documents: [
        {
          id: "1",
          name: "Employment Contract",
          type: "PDF",
          uploadDate: "2022-11-05",
          url: "#",
        },
        {
          id: "2",
          name: "Tax Forms",
          type: "PDF",
          uploadDate: "2023-01-01",
          url: "#",
        },
      ],
    },
    {
      id: "5",
      firstName: "Alex",
      lastName: "Thompson",
      email: "alex.thompson@company.com",
      phone: "+1 (555) 234-5678",
      department: "Sales",
      position: "Sales Representative",
      manager: "None",
      startDate: "2021-06-12",
      status: "inactive",
      avatar: null,
      address: {
        street: "901 Pine St",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001",
        country: "USA",
      },
      emergencyContact: {
        name: "Sarah Thompson",
        relationship: "Wife",
        phone: "+1 (555) 999-0000",
      },
      salary: {
        amount: 50000,
        currency: "USD",
        payFrequency: "monthly",
      },
      benefits: ["Health Insurance", "Dental Insurance", "401(k)", "PTO"],
      skills: ["Sales Strategy", "Customer Service", "Communication"],
      documents: [
        {
          id: "1",
          name: "Employment Contract",
          type: "PDF",
          uploadDate: "2021-06-12",
          url: "#",
        },
        {
          id: "2",
          name: "Tax Forms",
          type: "PDF",
          uploadDate: "2022-01-01",
          url: "#",
        },
      ],
    },
  ];

  const selectedEmployee = employeeData.filter(
    (employee) => employee.id === id
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/employees")}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Icons.FaArrowLeftLong className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Employee Profile
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              View and manage employee information
            </p>
          </div>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Icons.MdOutlineEdit className="w-4 h-4" />
          <span>Edit Profile</span>
        </button>
      </div>

      {selectedEmployee &&
        selectedEmployee.map((employee) => {
          return (
            <>
              {/* Profile Overview */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    {employee.avatar ? (
                      <img
                        src={employee.avatar}
                        alt={`${employee.firstName} ${employee.lastName}`}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {employee.firstName[0]}
                        {employee.lastName[0]}
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {employee.firstName} {employee.lastName}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                      {employee.position} • {employee.department}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Icons.MdMailOutline className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {employee.email}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icons.FaPhone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {employee.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icons.FaRegCalendarAlt className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Started{" "}
                          {new Date(employee.startDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Personal Information */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Personal Details */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                          Employee ID
                        </label>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {employee.id}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                          Status
                        </label>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {employee.status.charAt(0).toUpperCase() +
                            employee.status.slice(1)}
                        </span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                          Manager
                        </label>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {employee.manager}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                          Department
                        </label>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {employee.department}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Icons.LuMapPin className="w-5 h-5 mr-2" />
                      Address Information
                    </h3>

                    <div className="space-y-2">
                      <p className="text-sm text-gray-900 dark:text-white">
                        {employee.address.street}
                      </p>
                      <p className="text-sm text-gray-900 dark:text-white">
                        {employee.address.city}, {employee.address.state}{" "}
                        {employee.address.zipCode}
                      </p>
                      <p className="text-sm text-gray-900 dark:text-white">
                        {employee.address.country}
                      </p>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Emergency Contact
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                          Name
                        </label>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {employee.emergencyContact.name}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                          Relationship
                        </label>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {employee.emergencyContact.relationship}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                          Phone
                        </label>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {employee.emergencyContact.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Additional Information */}
                <div className="space-y-6">
                  {/* Compensation */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Compensation
                    </h3>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Salary
                        </span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {employee.salary.currency}{" "}
                          {employee.salary.amount.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Pay Frequency
                        </span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {employee.salary.payFrequency
                            .charAt(0)
                            .toUpperCase() +
                            employee.salary.payFrequency.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Benefits
                    </h3>

                    <div className="space-y-2">
                      {employee.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-sm text-gray-900 dark:text-white">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Skills
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {employee.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Documents
                    </h3>

                    <div className="space-y-3">
                      {employee.documents.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg"
                        >
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {doc.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {doc.type} •{" "}
                              {new Date(doc.uploadDate).toLocaleDateString()}
                            </p>
                          </div>
                          <button className="text-primary-600 dark:text-primary-400 hover:text-primary-500 text-sm font-medium">
                            View
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default EmployeeProfile;

import React, { useState } from "react";
import { Icons } from "../../utils/icons";

const PerformanceReview = () => {
  const [activeTab, setActiveTab] = useState("reviews");

  // Mock performance data
  const performanceReviews = [
    {
      id: "1",
      employeeName: "John Doe",
      employeeId: "EMP001",
      department: "Engineering",
      reviewPeriod: "Q4 2023",
      overallRating: 4.2,
      status: "completed",
      reviewDate: "2024-01-15",
      reviewer: "Sarah Johnson",
      categories: {
        technical: 4.5,
        communication: 4.0,
        teamwork: 4.2,
        leadership: 3.8,
        innovation: 4.3,
      },
    },
    {
      id: "2",
      employeeName: "Mike Chen",
      employeeId: "EMP003",
      department: "Engineering",
      reviewPeriod: "Q4 2023",
      overallRating: 3.8,
      status: "in-progress",
      reviewDate: "2024-01-20",
      reviewer: "Sarah Johnson",
      categories: {
        technical: 4.0,
        communication: 3.5,
        teamwork: 4.0,
        leadership: 3.2,
        innovation: 4.1,
      },
    },
  ];

  const goals = [
    {
      id: "1",
      employeeId: "EMP001",
      employeeName: "John Doe",
      title: "Complete React Certification",
      description:
        "Obtain React Developer Certification to enhance frontend skills",
      category: "Professional Development",
      targetDate: "2024-03-31",
      progress: 75,
      status: "on-track",
    },
    {
      id: "2",
      employeeId: "EMP001",
      employeeName: "John Doe",
      title: "Lead Team Project",
      description: "Successfully lead the new product feature development",
      category: "Leadership",
      targetDate: "2024-02-28",
      progress: 60,
      status: "on-track",
    },
    {
      id: "3",
      employeeId: "EMP003",
      employeeName: "Mike Chen",
      title: "Improve Code Review Process",
      description: "Implement automated code review tools and best practices",
      category: "Process Improvement",
      targetDate: "2024-04-15",
      progress: 30,
      status: "at-risk",
    },
  ];

  const feedback = [
    {
      id: "1",
      fromEmployee: "Sarah Johnson",
      toEmployee: "John Doe",
      type: "360-feedback",
      category: "Strengths",
      comment:
        "John consistently delivers high-quality code and is always willing to help team members.",
      date: "2024-01-10",
      rating: 5,
    },
    {
      id: "2",
      fromEmployee: "Mike Chen",
      toEmployee: "John Doe",
      type: "peer-feedback",
      category: "Areas for Improvement",
      comment:
        "Could improve on communication during stand-ups and provide more detailed updates.",
      date: "2024-01-12",
      rating: 3,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "pending":
        return "bg-gray-100 text-gray-800";
      case "on-track":
        return "bg-green-100 text-green-800";
      case "at-risk":
        return "bg-red-100 text-red-800";
      case "delayed":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icons.FaRegStar
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : index < rating
            ? "text-yellow-400 fill-current opacity-50"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Performance Management
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Track employee performance, goals, and feedback
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary">Generate Report</button>
          <button className="btn-primary">Start Review Cycle</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            {[
              {
                key: "reviews",
                label: "Performance Reviews",
                icon: Icons.FaAward,
              },
              {
                key: "goals",
                label: "Goals & Objectives",
                icon: Icons.FiTarget,
              },
              { key: "feedback", label: "360° Feedback", icon: Icons.FaUser },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 flex items-center space-x-2 ${
                    activeTab === tab.key
                      ? "border-primary-500 text-primary-600 dark:text-primary-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {/* Performance Reviews Tab */}
          {activeTab === "reviews" && (
            <div className="space-y-6">
              {performanceReviews.map((review) => (
                <div
                  key={review.id}
                  className="border border-gray-200 dark:border-gray-600 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {review.employeeName}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {review.employeeId} • {review.department} •{" "}
                        {review.reviewPeriod}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          review.status
                        )}`}
                      >
                        {review.status.charAt(0).toUpperCase() +
                          review.status.slice(1)}
                      </span>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          {renderStars(review.overallRating)}
                          <span className="text-sm font-medium text-gray-900 dark:text-white ml-2">
                            {review.overallRating}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Overall Rating
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                    {Object.entries(review.categories).map(
                      ([category, rating]) => (
                        <div key={category} className="text-center">
                          <div className="flex justify-center mb-1">
                            {renderStars(rating)}
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                            {category}
                          </p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {rating}
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icons.FaRegCalendarAlt className="w-4 h-4" />
                        <span>
                          Review Date:{" "}
                          {new Date(review.reviewDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icons.FaUser className="w-4 h-4" />
                        <span>Reviewer: {review.reviewer}</span>
                      </div>
                    </div>
                    <button className="text-primary-600 dark:text-primary-400 hover:text-primary-500 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Goals Tab */}
          {activeTab === "goals" && (
            <div className="space-y-6">
              {goals.map((goal) => (
                <div
                  key={goal.id}
                  className="border border-gray-200 dark:border-gray-600 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {goal.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {goal.employeeName} ({goal.employeeId})
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        {goal.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gray-500 dark:text-gray-400">
                          Category:{" "}
                          <span className="font-medium text-gray-900 dark:text-white">
                            {goal.category}
                          </span>
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          Target:{" "}
                          <span className="font-medium text-gray-900 dark:text-white">
                            {new Date(goal.targetDate).toLocaleDateString()}
                          </span>
                        </span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        goal.status
                      )}`}
                    >
                      {goal.status.charAt(0).toUpperCase() +
                        goal.status.slice(1).replace("-", " ")}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Progress
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {goal.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          goal.progress >= 80
                            ? "bg-green-500"
                            : goal.progress >= 50
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Feedback Tab */}
          {activeTab === "feedback" && (
            <div className="space-y-6">
              {feedback.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 dark:border-gray-600 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.category}
                        </h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {item.type.replace("-", " ")}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        From: {item.fromEmployee} → To: {item.toEmployee}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {renderStars(item.rating)}
                      <span className="text-sm font-medium text-gray-900 dark:text-white ml-2">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {item.comment}
                  </p>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceReview;

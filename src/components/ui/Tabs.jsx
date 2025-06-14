import React, { useState } from "react"

const Tabs = ({ tabs, defaultTab, onChange, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.key)

  const handleTabChange = key => {
    setActiveTab(key)
    onChange?.(key)
  }

  const activeTabContent = tabs.find(tab => tab.key === activeTab)?.content

  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => !tab.disabled && handleTabChange(tab.key)}
              disabled={tab.disabled}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 flex items-center space-x-2
                ${
                  activeTab === tab.key
                    ? "border-primary-500 text-primary-600 dark:text-primary-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }
                ${
                  tab.disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }
              `}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">{activeTabContent}</div>
    </div>
  )
}

export default Tabs

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../store/slices/themeSlice";
import { updateUser } from "../../store/slices/authSlice";
import { addNotification } from "../../store/slices/uiSlice";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Tabs from "../../components/ui/Tabs";
import { Icons } from "../../utils/icons";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.ui);

  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "",
    department: user?.department || "",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    leaveRequests: true,
    performanceReviews: true,
    payrollUpdates: true,
    systemMaintenance: false,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: "30",
    passwordExpiry: "90",
    loginNotifications: true,
  });

  const handleProfileUpdate = () => {
    dispatch(updateUser(profileData));
    dispatch(
      addNotification({
        type: "success",
        title: "Profile Updated",
        message: "Your profile information has been successfully updated.",
      })
    );
  };

  const handleThemeChange = (newTheme) => {
    dispatch(setTheme(newTheme));
  };

  const profileTab = (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            value={profileData.firstName}
            onChange={(e) =>
              setProfileData({ ...profileData, firstName: e.target.value })
            }
          />
          <Input
            label="Last Name"
            value={profileData.lastName}
            onChange={(e) =>
              setProfileData({ ...profileData, lastName: e.target.value })
            }
          />
          <Input
            label="Email"
            type="email"
            value={profileData.email}
            onChange={(e) =>
              setProfileData({ ...profileData, email: e.target.value })
            }
          />
          <Input
            label="Phone"
            type="tel"
            value={profileData.phone}
            onChange={(e) =>
              setProfileData({ ...profileData, phone: e.target.value })
            }
          />
          <Select
            label="Department"
            value={profileData.department}
            onChange={(e) =>
              setProfileData({ ...profileData, department: e.target.value })
            }
            options={[
              { value: "engineering", label: "Engineering" },
              { value: "hr", label: "Human Resources" },
              { value: "marketing", label: "Marketing" },
              { value: "sales", label: "Sales" },
              { value: "finance", label: "Finance" },
            ]}
          />
        </div>
        <div className="mt-6">
          <Button onClick={handleProfileUpdate}>Update Profile</Button>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Change Password
        </h3>
        <div className="space-y-4">
          <Input label="Current Password" type="password" />
          <Input label="New Password" type="password" />
          <Input label="Confirm New Password" type="password" />
        </div>
        <div className="mt-6">
          <Button>Update Password</Button>
        </div>
      </Card>
    </div>
  );

  const notificationsTab = (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Notification Preferences
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                Email Notifications
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive notifications via email
              </p>
            </div>
            <input
              type="checkbox"
              checked={notificationSettings.emailNotifications}
              onChange={(e) =>
                setNotificationSettings({
                  ...notificationSettings,
                  emailNotifications: e.target.checked,
                })
              }
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                Push Notifications
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive push notifications in browser
              </p>
            </div>
            <input
              type="checkbox"
              checked={notificationSettings.pushNotifications}
              onChange={(e) =>
                setNotificationSettings({
                  ...notificationSettings,
                  pushNotifications: e.target.checked,
                })
              }
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
          </div>

          <div className="border-t pt-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Notification Types
            </h4>
            <div className="space-y-3">
              {Object.entries({
                leaveRequests: "Leave Requests",
                performanceReviews: "Performance Reviews",
                payrollUpdates: "Payroll Updates",
                systemMaintenance: "System Maintenance",
              }).map(([key, label]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {label}
                  </span>
                  <input
                    type="checkbox"
                    checked={notificationSettings[key]}
                    onChange={(e) =>
                      setNotificationSettings({
                        ...notificationSettings,
                        [key]: e.target.checked,
                      })
                    }
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const securityTab = (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Security Settings
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                Two-Factor Authentication
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Add an extra layer of security to your account
              </p>
            </div>
            <input
              type="checkbox"
              checked={securitySettings.twoFactorAuth}
              onChange={(e) =>
                setSecuritySettings({
                  ...securitySettings,
                  twoFactorAuth: e.target.checked,
                })
              }
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Session Timeout (minutes)"
              value={securitySettings.sessionTimeout}
              onChange={(e) =>
                setSecuritySettings({
                  ...securitySettings,
                  sessionTimeout: e.target.value,
                })
              }
              options={[
                { value: "15", label: "15 minutes" },
                { value: "30", label: "30 minutes" },
                { value: "60", label: "1 hour" },
                { value: "120", label: "2 hours" },
              ]}
            />

            <Select
              label="Password Expiry (days)"
              value={securitySettings.passwordExpiry}
              onChange={(e) =>
                setSecuritySettings({
                  ...securitySettings,
                  passwordExpiry: e.target.value,
                })
              }
              options={[
                { value: "30", label: "30 days" },
                { value: "60", label: "60 days" },
                { value: "90", label: "90 days" },
                { value: "180", label: "180 days" },
              ]}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                Login Notifications
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get notified of new login attempts
              </p>
            </div>
            <input
              type="checkbox"
              checked={securitySettings.loginNotifications}
              onChange={(e) =>
                setSecuritySettings({
                  ...securitySettings,
                  loginNotifications: e.target.checked,
                })
              }
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
          </div>
        </div>
      </Card>
    </div>
  );

  const appearanceTab = (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Theme Preferences
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleThemeChange("light")}
              className={`p-4 border-2 rounded-lg transition-colors ${
                theme === "light"
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                  : "border-gray-200 dark:border-gray-600 hover:border-gray-300"
              }`}
            >
              <div className="w-full h-20 bg-white border border-gray-200 rounded mb-2"></div>
              <span className="text-sm font-medium">Light Theme</span>
            </button>

            <button
              onClick={() => handleThemeChange("dark")}
              className={`p-4 border-2 rounded-lg transition-colors ${
                theme === "dark"
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                  : "border-gray-200 dark:border-gray-600 hover:border-gray-300"
              }`}
            >
              <div className="w-full h-20 bg-gray-800 border border-gray-600 rounded mb-2"></div>
              <span className="text-sm font-medium">Dark Theme</span>
            </button>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Display Settings
        </h3>
        <div className="space-y-4">
          <Select
            label="Language"
            options={[
              { value: "en", label: "English" },
              { value: "es", label: "Spanish" },
              { value: "fr", label: "French" },
              { value: "de", label: "German" },
            ]}
            value="en"
          />

          <Select
            label="Timezone"
            options={[
              { value: "UTC-8", label: "Pacific Time (UTC-8)" },
              { value: "UTC-5", label: "Eastern Time (UTC-5)" },
              { value: "UTC+0", label: "Greenwich Mean Time (UTC+0)" },
              { value: "UTC+1", label: "Central European Time (UTC+1)" },
            ]}
            value="UTC-8"
          />

          <Select
            label="Date Format"
            options={[
              { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
              { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
              { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
            ]}
            value="MM/DD/YYYY"
          />
        </div>
      </Card>
    </div>
  );

  const tabs = [
    {
      key: "profile",
      label: "Profile",
      icon: <Icons.FaUser className="w-4 h-4" />,
      content: profileTab,
    },
    {
      key: "notifications",
      label: "Notifications",
      icon: <Icons.FaBell className="w-4 h-4" />,
      content: notificationsTab,
    },
    {
      key: "security",
      label: "Security",
      icon: <Icons.FaShield className="w-4 h-4" />,
      content: securityTab,
    },
    {
      key: "appearance",
      label: "Appearance",
      icon: <Icons.FaPalette className="w-4 h-4" />,
      content: appearanceTab,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Settings Tabs */}
      <Card padding="none">
        <Tabs tabs={tabs} defaultTab="profile" />
      </Card>
    </div>
  );
};

export default SettingsPage;

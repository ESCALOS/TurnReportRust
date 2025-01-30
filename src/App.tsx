import { useEffect, useState } from "react";
import "./App.css";

import { ActivityCard } from "./components/ActivityCard";
import { FloatingActions } from "./components/FloatingActions";
import { formatDate } from "./utils";
import { invoke } from "@tauri-apps/api/core";
import { Activity } from "./type";

function App() {
  const [groupedActivities, setGroupedActivities] = useState<
    Record<string, Activity[]>
  >({});

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activities = await invoke<Record<string, Activity[]>>(
          "get_activities"
        );
        setGroupedActivities(activities);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);

  const handleView = (id: number) => {
    console.log("View activity:", id);
  };

  const handleEdit = (id: number) => {
    console.log("Edit activity:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete activity:", id);
  };

  const handleRefresh = () => {
    console.log("Refreshing activities...");
  };

  const handleExport = () => {
    console.log("Exporting to Excel...");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-lg mx-auto px-4 py-6">
        {Object.entries(groupedActivities).map(([date, activities]) => (
          <div key={date} className="mb-8">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 capitalize">
              {formatDate(date)}
            </h2>
            <div className="space-y-4">
              {activities.map((activity) => (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <FloatingActions onRefresh={handleRefresh} onExport={handleExport} />
    </div>
  );
}

export default App;

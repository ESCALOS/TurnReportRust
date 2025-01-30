import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { getJobColor } from "../utils";
import { Activity } from "../type";

interface ActivityCardProps {
  activity: Activity;
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex gap-4">
        {/* Time column */}
        <div className="flex-none w-16 text-center">
          <div className="text-sm font-medium text-gray-400">
            {new Date(activity.start_date)
              .getHours()
              .toString()
              .padStart(2, "0")}
            :
            {new Date(activity.start_date)
              .getMinutes()
              .toString()
              .padStart(2, "0")}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {new Date(activity.end_date).getHours().toString().padStart(2, "0")}
            :
            {new Date(activity.end_date)
              .getMinutes()
              .toString()
              .padStart(2, "0")}
          </div>
        </div>

        {/* Content column */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-2 items-center mb-2">
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-md ${getJobColor(
                activity.job
              )}`}
            >
              {activity.job}
            </span>
            <span className="text-xs text-gray-400">{activity.area}</span>
          </div>
          <p className="text-sm text-gray-300 line-clamp-2">
            {activity.description}
          </p>
        </div>

        {/* Actions column */}
        <div className="flex-none flex flex-col gap-2">
          <button
            onClick={() => onView(activity.id)}
            className="p-2 text-gray-400 hover:text-blue-400 transition-colors rounded-full hover:bg-gray-700"
            title="Ver detalles"
          >
            <Eye size={18} />
          </button>
          <button
            onClick={() => onEdit(activity.id)}
            className="p-2 text-gray-400 hover:text-yellow-400 transition-colors rounded-full hover:bg-gray-700"
            title="Editar"
          >
            <Pencil size={18} />
          </button>
          <button
            onClick={() => onDelete(activity.id)}
            className="p-2 text-gray-400 hover:text-red-400 transition-colors rounded-full hover:bg-gray-700"
            title="Eliminar"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

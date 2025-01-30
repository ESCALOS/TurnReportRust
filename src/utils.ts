import { Activity } from "./type";
import { Job } from "./type.d";

export const getJobColor = (job: Job): string => {
  const colors: Record<Job, string> = {
    [Job.OTPV]: "bg-blue-900 text-blue-200",
    [Job.OTFM]: "bg-green-900 text-green-200",
    [Job.OTCO]: "bg-purple-900 text-purple-200",
    [Job.OTPD]: "bg-orange-900 text-orange-200",
    [Job.OTEM]: "bg-red-900 text-red-200",
  };
  return colors[job] || "bg-gray-700 text-gray-200";
};

export const formatTimeRange = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return `${start.getHours().toString().padStart(2, "0")}:${start
    .getMinutes()
    .toString()
    .padStart(2, "0")} a ${end.getHours().toString().padStart(2, "0")}:${end
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const groupActivitiesByDate = (
  activities: Activity[]
): Record<string, Activity[]> => {
  return activities
    .sort(
      (a, b) =>
        new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
    ) // Ordenamos antes de agrupar
    .reduce((groups: Record<string, Activity[]>, activity) => {
      const date = new Date(activity.start_date).toISOString().split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(activity);
      return groups;
    }, {});
};

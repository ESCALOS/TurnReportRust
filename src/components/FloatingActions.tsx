import React, { useState } from "react";
import { MoreVertical, FileSpreadsheet, X, Plus } from "lucide-react";

interface FloatingActionsProps {
  onRefresh: () => void;
  onExport: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onRefresh,
  onExport,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3">
      {isOpen && (
        <>
          <button
            onClick={onRefresh}
            className="w-12 h-12 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
          </button>
          <button
            onClick={onExport}
            className="w-12 h-12 bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors"
          >
            <FileSpreadsheet size={20} />
          </button>
        </>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-indigo-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <MoreVertical size={24} />}
      </button>
    </div>
  );
};

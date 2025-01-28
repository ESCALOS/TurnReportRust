import { Activity } from "../type";

type Props = {
  activity: Activity;
};

function Card({ activity }: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-zinc-900 text-white">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white rounded-lg shadow-md p-4 w-full">
          <div className="flex flex-row justify-between items-center">
            <div className="text-xl font-bold">{activity.job}</div>
            <div className="text-xl font-bold">{activity.description}</div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="text-xl font-bold">{activity.solution}</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Ver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

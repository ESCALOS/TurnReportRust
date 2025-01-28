import "./App.css";
import Card from "./components/Card";
import { activities } from "./mocks";
import { Activity } from "./type";

function App() {
  return (
    <main className="flex flex-col items-center w-screen h-screen bg-neutral-950 text-white px-2 py-6">
      <h1 className="text-4xl font-bold">Actividades</h1>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-full h-full flex flex-col items-center">
          {activities.map((activity: Activity) => (
            <div className="w-full h-full flex flex-col justify-start items-start">
              <Card activity={activity} />
            </div>
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agregar Actividad
        </button>
      </div>
    </main>
  );
}

export default App;

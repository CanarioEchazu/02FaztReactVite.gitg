import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
      <div className="text-slate-500">
        <h3>Creado por Fazt</h3>
        <h3>Desarrollado por Dario Echazu</h3>
        <h4>Enero 2023</h4>
      </div>
    </main>
  );
}

export default App;

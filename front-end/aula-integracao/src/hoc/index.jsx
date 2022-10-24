import Header from "./Header";
import Dashboard from "./Dashboard";

export function App() {
  return (
    <div>
      <h1>High Order Component</h1>
      <Header title={"Digital House"} />
      <Dashboard />
    </div>
  );
}

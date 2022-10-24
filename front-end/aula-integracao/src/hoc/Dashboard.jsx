import { withClickTracker } from "./withClickTracker";

function Dashboard() {
  return (
    <div>
      <h1>DASHBOARD</h1>
    </div>
  );
}

export default withClickTracker(Dashboard, "App Dashboard");

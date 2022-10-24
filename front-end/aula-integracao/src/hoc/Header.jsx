import { withClickTracker } from "./withClickTracker";

function Header({ title }) {
  return (
    <div>
      <h1>HEADER: {title}</h1>
    </div>
  );
}

export default withClickTracker(Header, "Header");

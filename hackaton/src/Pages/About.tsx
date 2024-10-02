import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function About(): ReactElement {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>About</h1>
    </div>
  );
}

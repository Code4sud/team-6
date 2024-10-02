import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Home(): ReactElement {
  return (
    <div>
      <Link to="/about">About</Link>
      <h1 className="text-red-500">Bonjour tout le monde</h1>
    </div>
  );
}

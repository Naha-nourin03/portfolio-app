import { Link } from "react-router-dom";

 function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto flex justify-center space-x-8">
        <Link to="/" className="text-white hover:text-blue-400">Home</Link>
        <Link to="/about" className="text-white hover:text-blue-400">About</Link>
        <Link to="/project" className="text-white hover:text-blue-400">Project</Link>
        <Link to="/contact" className="text-white hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
}
export default Navbar
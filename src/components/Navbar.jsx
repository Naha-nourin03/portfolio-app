import { Link } from "react-router-dom";

 function Navbar() {
  return (
    <nav className="bg-sky-950 p-4">
      <div className="max-w-6xl mx-auto flex justify-center space-x-8">
        <Link to="/" className="bg-orange-100 text-sky-950 rounded-full  p-7 sm:flex-row sm:items-center sm:gap-6 sm:py-2 hover:text-blue-400">Home</Link>
        <Link to="/about" className="bg-orange-100  text-sky-950 rounded-full p-7 sm:flex-row sm:items-center sm:gap-6 sm:py-2 hover:text-blue-400">About</Link>
        <Link to="/project" className="bg-orange-100  text-sky-950 rounded-full p-7 sm:flex-row sm:items-center sm:gap-6 sm:py-2 hover:text-blue-400">Project</Link>
        <Link to="/contact" className="bg-orange-100  text-sky-950 rounded-full p-7 sm:flex-row sm:items-center sm:gap-6 sm:py-2 hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
}
export default Navbar
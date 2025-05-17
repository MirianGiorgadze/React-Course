// Navbar.jsx
import TailButton from './TailButton';

export default function Navbar() {
  return (
    <nav className="bg-white shadow flex items-center justify-between px-6 py-4">
      <div className="text-xl font-bold text-gray-800">MySite</div>
      <div className="space-x-4">
        <TailButton>Home</TailButton>
        <TailButton>About</TailButton>
        <TailButton extraClassName="bg-yellow-600 hover:bg-yellow-700">Contact</TailButton>
      </div>
    </nav>
  );
}

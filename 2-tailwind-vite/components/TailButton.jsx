// TailButton.jsx
export default function TailButton({ children, extraClassName = ''}) {
  return (
    <button
      className={` px-4 py-2 bg-blue-600 hover:bg-blue-700 text-yellow-700 rounded-lg shadow-md transition-colors duration-300 ${extraClassName}`}
      
    >
      {children}
    </button>
  );
}

export function Button({ variant = "default", className = "", children, ...props }) {
  const baseStyles = "px-4 py-2 rounded focus:outline-none transition text-sm";
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    ghost: "bg-transparent hover:bg-gray-200 text-gray-700",
    outline: "border border-gray-700 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

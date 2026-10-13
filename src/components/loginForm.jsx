import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

function LoginForm({ isClosed }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 flex justify-center items-center">

      <div className="bg-gray-200 p-10 shadow-lg w-[500px] rounded-md">

        {/* Close */}
        <div className="flex justify-end">
          <button onClick={isClosed}>
            <IoIosClose size={34} />
          </button>
        </div>

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 border rounded-md"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 mb-4 border rounded-md"
        />

        {/* Sign In */}
        <Link to="/register">
          <button
            type="button"
            className="w-full bg-blue-900 text-white py-3 rounded-md font-bold hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Sign in
          </button>
        </Link>

        {/* Register */}
        <p className="text-center mt-5">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-700 font-bold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default LoginForm;








import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import logo from "../assets/logo.png";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowLogin(true);
    }, 3000);
  };

  return (
    <>
      {/* HEADER */}
      <header className="flex justify-between items-center py-5 px-10 border-b-2 border-gray-300">

        {/* LOGO + TITLE */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="THE DAILY BRIEF Logo"
            className="w-20 h-20 object-contain"
          />

          <h1 className="text-3xl font-bold text-blue-900">
            THE DAILY BRIEF
          </h1>
        </div>

        {/* SUBSCRIBE */}
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="bg-blue-900 text-white py-2 px-10 font-bold rounded-md disabled:opacity-50"
        >
          Subscribe
        </button>
      </header>

      {/* LOADING */}
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">

            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-900 rounded-full animate-spin mx-auto mb-4"></div>

            <p className="text-lg font-semibold">
              Loading...
            </p>

          </div>
        </div>
      )}

      {/* LOGIN */}
      {showLogin && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex justify-center items-center">

          <div className="bg-gray-200 p-10 shadow-lg w-[500px] rounded-md">

            <div className="flex justify-end">
              <IoIosClose
                size={34}
                className="cursor-pointer text-red-600"
                onClick={() => setShowLogin(false)}
              />
            </div>

            <h2 className="text-2xl font-bold text-center mb-6">
              Login
            </h2>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mb-4 border rounded-md"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 mb-4 border rounded-md"
            />

            <button className="w-full bg-blue-900 text-white py-3 rounded-md">
              Login
            </button>

          </div>
        </div>
      )}
    </>
  );
}

export default Header;







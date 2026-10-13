
import { useState } from "react";

function Count() {
    const [isCount, setIsCount] = useState(0);

    const increament = () => {
        setIsCount(isCount + 1);
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-[400px]">



                <div className="flex flex-col gap-4 mt-10">
                    <h1 className="text-center font-bold text-3xl mt-60">
                    Register Form
                </h1>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-3 border border-gray-400 rounded-md outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 border border-gray-400 rounded-md outline-none"
                    />

                    <input
                        type="tel"
                        placeholder="Enter your telephone"
                        className="w-full p-3 border border-gray-400 rounded-md outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full p-3 border border-gray-400 rounded-md outline-none"
                    />

                    <button
                        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Register
                    </button>

                    <p className="text-center text-gray-600">
                        Have you registered?
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Count;
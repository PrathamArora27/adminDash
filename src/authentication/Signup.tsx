import React from "react";

interface SignupProps {
  setAuthPage: (page: "login" | "signup") => void;
}

const Signup: React.FC<SignupProps> = ({ setAuthPage }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded w-96">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <input type="text" placeholder="Full Name" className="w-full p-2 border mb-2" />
        <input type="email" placeholder="Email" className="w-full p-2 border mb-2" />
        <input type="password" placeholder="Password" className="w-full p-2 border mb-2" />
        <select className="w-full p-2 border mb-4">
          <option>User</option>
          <option>Editor</option>
          <option>Admin</option>
        </select>
        <button className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
        <p className="mt-2 text-sm">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer" onClick={() => setAuthPage("login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

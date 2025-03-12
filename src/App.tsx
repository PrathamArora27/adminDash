import React, { useState } from "react";
import Sidebar from "./dashboard components/Sidebar";
import Navbar from "./dashboard components/Navbar";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authPage, setAuthPage] = useState<"login" | "signup">("login");

  return isLoggedIn ? (
    <div className="flex h-screen w-screen"> {/* Full width & height */}
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6 flex-grow flex items-center justify-center"> 
          <h2 className="text-2xl font-bold">Welcome to the Admin Dashboard</h2>
        </div>
      </div>
    </div>
  ) : authPage === "login" ? (
    <Login setAuthPage={setAuthPage} />
  ) : (
    <Signup setAuthPage={setAuthPage} />
  );
};


export default App;

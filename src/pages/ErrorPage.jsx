import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="font-Poppins align-middle mt-24 flex justify-center">
      <div className="justify-items-center">
        <h1 className="font-Inter text-[110px] font-medium">404 Not Found</h1>
        <p className="mt-[50px] mb-[70px] text-[16px]">
          Your visited page not found. You may go home page.
        </p>
        <Link to="/homepage">
          <button
            className="py-4 px-10 text-[16px] bg-[#DB4444] text-white"
            type="button"
            
          >
            Back to home page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

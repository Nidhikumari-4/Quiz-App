import React from "react";
import { Link } from "react-router-dom";

const CreateQuizButton = () => {
  return (
    <div>
      <Link to="/createquiz">
        <div className="flex justify-center items-center pb-60">
          <div className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 cursor-pointer">
            <span className="block rounded-sm bg-white px-60 py-3 text-2xl font-bold hover:bg-transparent">
              Create New Quiz
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CreateQuizButton;

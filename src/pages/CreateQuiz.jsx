import React, { useState } from "react";

const CreateQuiz = () => {
  const [quizData, setQuizData] = useState({
    name: "",
    description: "",
    question: "",
    points: 0,
    timeLimit: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuizData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className=" absolute inset-x-50 top-2 h-16 text-gray-100 text-3xl font-medium">
        Create your Quiz 😯❓
      </div>
      <div className="flex justify-center w-2/4 p-5 rounded border bg-gray-500 items-center ">
        <form
          className="mx-auto flex flex-col items-center max-w-screen-md gap-4 sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div className="mb-5 inline-block text-gray-100 sm:text-base">
            <label>Quiz Name:</label>
            <input
              type="text"
              name="name"
              className="m-2 px-3 py-3 rounded border bg-gray-50 text-gray-800 outline-none "
              value={quizData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-5 inline-block text-gray-100 sm:text-base">
            <label className="relative bottom-7">Description:</label>
            <textarea
              name="description"
              className="m-2 px-3 mr-6 rounded border bg-gray-50 text-gray-800 outline-none "
              value={quizData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-5 inline-block text-gray-100 sm:text-base">
            <label className="relative bottom-6">Question:</label>
            <textarea
              name="question"
              className="m-2 px-3 mx-6 rounded border bg-gray-50 text-gray-800 outline-none "
              value={quizData.question}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative bottom-2 left-5  text-gray-100 sm:text-base flex justify-evenly gap-2 bg-gray-500 items-center ">
            <input name="option" type="radio" /> Option 1
            <input name="option" type="radio" /> Option 2
            <input name="option" type="radio" /> Option 3
            <input name="option" type="radio" /> Option 4
          </div>

          <div className="mb-5 inline-block text-gray-100 sm:text-base">
            <label>Points:</label>
            <input
              type="number"
              name="points"
              className="m-2 px-3 ml-10 rounded border bg-gray-50 text-gray-800 outline-none "
              value={quizData.points}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-5 inline-block text-gray-100 sm:text-base">
            <label>Time Limit: </label>
            <input
              type="number"
              name="timeLimit"
              className="m-2 px-3  rounded border bg-gray-50 text-gray-800 outline-none "
              value={quizData.timeLimit}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-center items-center rounded  hover:text-white bg-gray-800 focus:outline-none cursor-pointer">
            <span className="flex justify-center items-center rounded-sm bg-white px-20 py-2 text-2xl font-bold hover:bg-transparent">
              <button type="submit">Submit</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateQuiz;

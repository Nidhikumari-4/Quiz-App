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
      <div className="flex justify-center items-center mb-86">
        <form
          className="mx-auto flex flex-col items-center max-w-screen-md gap-4 sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div className="mb-5 inline-block text-gray-100 text-6xl sm:text-base">
            <label>
              Quiz Name:
              <input
                type="text"
                name="name"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                value={quizData.name}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="mb-5 inline-block text-gray-100 text-2xl sm:text-base">
            <label>
              Description:
              <textarea
                name="description"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                value={quizData.description}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="mb-5 inline-block text-gray-100 text-2xl sm:text-base">
            <label>
              Question:
              <textarea
                name="question"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                value={quizData.question}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="mb-5 inline-block text-gray-100 text-2xl sm:text-base">
            <label>
              Points:
              <input
                type="number"
                name="points"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                value={quizData.points}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="mb-5 inline-block text-gray-100 text-2xl sm:text-base">
            <label>
              Time Limit:
              <input
                type="number"
                name="timeLimit"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                value={quizData.timeLimit}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 cursor-pointer">
            <span className="block rounded-sm bg-white px-10 py-1 text-2xl font-bold hover:bg-transparent">
              <button type="submit">Submit</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateQuiz;

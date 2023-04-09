import React, { useState } from "react";

const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState([]);
  const [questions, setQuestions] = useState([
    { question: "", options: [""], answer: "" },
  ]);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: [""], answer: "" }]);
  };

  const handleQuestionChange = (event, questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].question = event.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const newOptions = [...options];
    newOptions[optionIndex] = event.target.value;
    setOptions(newOptions);
  };

  const handleAnswerChange = (event, questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answer = event.target.value;
    setQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("ques", questions, "option", options);
  };

  return (
    <div className="container px-20 py-5 ml-20">
      <h1 className="text-4xl font-bold text-center mb-3">Create Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div className="container bg-slate-200 px-20 py-8">
          <div className="  form-group flex bg-white shadow-lg rounded-md flex-col  space-y-5 my-3 px-2 py-2">
            <input
              type="text"
              id="title"
              value={title}
              placeholder="Add Title"
              className=" text-3xl font-bold border-b-0 border-gray-300 focus:outline-none p-2 w-3/4 "
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="  form-group flex bg-white shadow-lg rounded-md flex-col w-full space-y-5  px-2 py-2">
            <input
              type="text"
              id="description"
              value={description}
              placeholder="Add Description"
              className="text-md font-bold border-b-0 border-gray-300 focus:outline-none p-2 w-3/4 "
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* For Questions and options*/}
          {questions.map((question, questionIndex) => (
            <div className="bg-white shadow-lg rounded-md p-5 my-10">
              <div
                key={questionIndex}
                className="form-group block text-lg font-medium text-gray-700 capitalize "
              >
                <div className="form-group ">
                  <label htmlFor={`question${questionIndex + 1}`}></label>
                  <input
                    type="text"
                    id={`question${questionIndex + 1}`}
                    value={question.question}
                    className="border-b-2  border-gray-300 focus:outline-none p-2 w-3/4  hover:bg-violet-50"
                    placeholder={`Question ${questionIndex + 1}`}
                    onChange={(event) =>
                      handleQuestionChange(event, questionIndex)
                    }
                  />
                </div>
                {options.map((option, optionIndex) => (
                  <div
                    className="form-group block text-lg font-medium text-gray-700 capitalize my-5"
                    key={optionIndex}
                  >
                    <label
                      htmlFor={`option${questionIndex + 1}-${optionIndex + 1}`}
                    ></label>
                    <input
                      type="text"
                      id={`option${questionIndex + 1}-${optionIndex + 1}`}
                      value={option.quizOption}
                      className="border-b-2 border-gray-300 focus:outline-none p-2 w-2/4  ml-2"
                      placeholder={`Option ${optionIndex + 1}`}
                      onChange={(event) =>
                        handleOptionChange(event, questionIndex, optionIndex)
                      }
                    />
                  </div>
                ))}

                {/* <div className="form-group block text-lg font-medium text-gray-700 capitalize"> */}
                <label htmlFor={`answer${questionIndex + 1}`}></label>
                <select
                  id={`answer${questionIndex + 1}`}
                  value={question.answer}
                  onChange={(event) => handleAnswerChange(event, questionIndex)}
                  className="border-2 my-5  rounded-md border-gray-300 focus:outline-none p-2 w-1/4 "
                >
                  <option value="">Select answer</option>
                  {options.map((option, index) => (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
                {/* </div> */}
              </div>
            </div>
          ))}

          <div className="relative w-full p-5 mt-8">
            <div className="absolute inset-x-0 bottom-5 h-10 flex justify-center text-lg  text-white rounded-md">
              <button
                type="button"
                onClick={addOption}
                className="inline-flex  mx-8 bg-gray-700 hover:bg-gray-500 items-center px-8 "
              >
                Add Option
              </button>
              <button
                type="button"
                onClick={addQuestion}
                className="inline-flex  mx-8 bg-gray-700 hover:bg-gray-500 items-center px-8 "
              >
                Add Question
              </button>
              <button
                type="submit"
                className="inline-flex bg-gray-700 hover:bg-gray-500 items-center px-8 "
              >
                Create Quiz
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;

import { useState } from "react";
import { christmasTrivia } from "./constants";

const Questions = ({ questionIndex }: { questionIndex: number }) => {
  const currentQuestion = christmasTrivia[questionIndex];
  const [revealAnswer, setRevealAnswer] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-[45vh] ">
      <div className="bg-white rounded-lg border-black border-4 p-4 mt-10 indentShadow w-2/3 relative">
        <p className="absolute right-2 bottom-2 border-2 rounded-full h-7 w-7 text-center">{questionIndex + 1}</p>
        <div className="text-center flex gap-4 flex-col py-4">
          <p className="text-2xl">{revealAnswer ? currentQuestion.answer : currentQuestion.question}</p>

          {currentQuestion.multiChoice && !revealAnswer ? (
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              {currentQuestion.multiChoice.map((option) => (
                <button
                  key={option}
                  onClick={() => setRevealAnswer(true)}
                  className="bg-white border-2 w-fit p-4 hover:scale-110 cursor-pointer indentShadow hover:bg-blue-300 transition duration-300"
                >
                  {option}
                </button>
              ))}
            </div>
          ) : !revealAnswer ? (
            <button
              onClick={() => setRevealAnswer(true)}
              className="bg-white border-2 w-fit p-4 mx-auto hover:scale-110 cursor-pointer indentShadow hover:bg-blue-300 transition duration-300"
            >
              ANSWER
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Questions;

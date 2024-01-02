"use client"

import { use, useState } from "react";
import { questions } from "./data/questions";
import { QuestionItem } from "./components/QuestionItem";
import { Results } from "./components/Results";

function Page(){
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const title = 'Quiz de Culinária';

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]){
      setCurrentQuestion(currentQuestion + 1);
    }else{
      setShowResult(true);
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([ ...answers, answer ]);

    loadNextQuestion();
  }

  const handleRestarButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }
  
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-lg rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl">{title}</div>
        <div className="p-5">
          {!showResult &&
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          }
          {showResult &&
            <Results 
              questions={questions}
              answers = {answers}
            />
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? "" : "s"}`
          }

          {showResult &&
            <button className="px-3 py-2 rounded-md bg-blue-800 text-white" onClick={handleRestarButton}>Reiniciar Quiz</button>
          }
        </div>
      </div>
    </div>
    );
}

export default Page;
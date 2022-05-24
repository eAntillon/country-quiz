import React, { useEffect, useState } from 'react';
import svg from '../assets/undraw_adventure_4hum 1.svg';
import Question from './Question';
import Score from './Score';

const Game = ({ questions, refetch }) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [question, setQuestion] = useState(questions[0]);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [showScore, setShowScore] = useState(false);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setQuestion(questions[questionIndex]);
    }, [questionIndex]);

    const handleSelect = (answer) => {
        if (answer === question.answer) {
            setScore(score + 1);
        }
        setSelected(answer);
        setShowResult(true);
    };

    const handleNext = () => {
        if (questionIndex + 1 < questions.length) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setShowScore(true);
        }
        setShowResult(false);
    };

    const handleReset = () => {
        refetch();
        setQuestionIndex(0);
        setScore(0);
        setShowScore(false);
        setShowResult(false);
        setSelected(null);
    };

    return (
        <div className=" w-5/6 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 p-0 mt-20 md:mt-40">
            <div>
                <h3 className="text-3xl xl:text-4xl text-white font-bold mb-4">
                    COUNTRY QUIZ
                </h3>
            </div>
            {showScore ? (
                <Score score={score} reset={handleReset} />
            ) : (
                <div className=" bg-white rounded-3xl  px-8 py-14 pb-4 relative ">
                    <img
                        src={svg}
                        alt="svg-undraw-adventure"
                        className="absolute w-28 sm:w-36 2xl:w-40 -top-10 sm:-top-16 right-0"
                    />

                    <Question
                        currentQuestion={question}
                        showResult={showResult}
                        selected={selected}
                        handleSelect={handleSelect}
                    />
                    {showResult && (
                        <div className="flex">
                            <button
                                className="text-center bg-[#F9A826] font-bold py-4 px-9 rounded-xl text-white hover:bg-[#FAB13B] ml-auto"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Game;

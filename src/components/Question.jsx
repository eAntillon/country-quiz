import React from 'react';
const letters = ['A', 'B', 'C', 'D', 'E'];

const Question = ({ currentQuestion, showResult, selected, handleSelect }) => {
    return (
        <>
            <div className="text-2xl font-bold text-[#2F527B] mb-8">
                {currentQuestion.type === 'flag' && (
                    <h3 className="text-6xl mb-4 mt-3">
                        {currentQuestion.flag}
                    </h3>
                )}
                {currentQuestion.type === 'flag' ? (
                    `Which country does this flag belong to?`
                ) : (
                    <p className="mb-4 mt-12">{`${currentQuestion.capital} is the capital of`}</p>
                )}
            </div>
            <ul>
                {!showResult &&
                    currentQuestion.options.map((answer, index) => (
                        <li
                            className="text-[#6066D0] border-2 rounded-xl border-borderColor py-3 px-5 mb-6 flex justify-start hover:bg-[#F9A826] hover:text-white hover:border-[#F9A826] hover:cursor-pointer ease-out transition duration-200"
                            onClick={() => {
                                handleSelect(answer);
                            }}
                            key={index}
                        >
                            <p className="w-1/5 ">{letters[index]}</p>
                            <p className="w-4/5 text-left">{answer}</p>
                        </li>
                    ))}
                {showResult &&
                    currentQuestion.options.map((answer, index) => {
                        if (answer === currentQuestion.answer) {
                            return (
                                <li
                                    className="bg-[#60BF88] text-white border-2 rounded-xl border-[#60BF88] py-3 px-5 mb-6 flex justify-start items-center"
                                    key={index}
                                >
                                    <p className="w-1/5 ">{letters[index]}</p>
                                    <p className="w-4/5 text-left">{answer}</p>
                                    <i class="bx bx-check-circle text-xl leading-none"></i>
                                </li>
                            );
                        } else if (
                            answer == selected &&
                            selected !== currentQuestion.answer
                        ) {
                            return (
                                <li
                                    className="bg-[#EA8282] text-white border-2 rounded-xl border-[#EA8282] py-3 px-5 mb-6 flex justify-start items-center"
                                    key={index}
                                >
                                    <p className="w-1/5 ">{letters[index]}</p>
                                    <p className="w-4/5 text-left">{answer}</p>
                                    <i class="bx bx-x-circle text-xl m-0 p-0 leading-none"></i>
                                </li>
                            );
                        } else {
                            return (
                                <li
                                    className="text-[#6066D0] border-2 rounded-xl border-borderColor py-3 px-5 mb-6 flex justify-start items-center"
                                    key={index}
                                >
                                    <p className="w-1/5 ">{letters[index]}</p>
                                    <p className="w-4/5 text-left">{answer}</p>
                                </li>
                            );
                        }
                    })}
            </ul>
        </>
    );
};

export default Question;

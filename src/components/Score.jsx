import React from 'react';
import svg from '../assets/undraw_winners_ao2o 2.svg';
const Score = ({ score, reset }) => {
    return (
        <div className=" bg-white rounded-3xl  px-6 py-12 pb-8 relative text-[#1D355D] flex flex-col justify-center items-center">
            <img
                src={svg}
                alt="svg-undraw_winners_ao2o"
                className="w-56 mb-16"
            />
            <p className='text-5xl font-bold mb-5'>Results</p>
            <p className='text-xl mb-16'>You got <span className='text-[#6fcf97] font-bold text-4xl'>{score}</span> correct answers</p>
            <button className='border-[#1D355D] border-2 rounded-xl font-semibold  py-4 px-16' onClick={reset}>Try again</button>
        </div>
    );
};

export default Score;

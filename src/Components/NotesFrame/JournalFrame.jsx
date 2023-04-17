import React from 'react';

const JournalFrame = ({ onHideJournalClick, journalData, handleNextButtonClick }) => {

    const handleOutsideClick = (event) => {
        if (event.target.classList.contains("modal-overlay")) {
          onHideJournalClick();
        }
      };

    return (
        <div className='absolute h-full w-full backdrop-blur-sm'>
            <div className='flex flex-row bg-white/10 p-32 h-full w-full modal-overlay' onClick={handleOutsideClick}>
                <div className='flex flex-col justify-center p-2'>
                    <button>
                        <span class="material-symbols-outlined text-white">arrow_back_ios</span>
                    </button>
                </div>
                <div className='bg-indigo-900 p-16 h-full rounded-3xl overflow-auto'>
                    <div className='flex flex-col gap-8 text-white'>
                        <div className='flex flex-row gap-2'>
                            <h1 className=' font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                            {journalData.title}
                            </h1>

                            <div className='flex flex-col justify-end'>
                                <h1 className='font-bold'>{journalData.date}</h1>
                            </div>
                            <div className='flex flex-col gap-2 justify-center ml-auto'>
                                <div className='flex gap-4 text-white bg-pink-500 py-2 px-4 rounded-full ml-auto'>
                                    <button onClick={onHideJournalClick} className='flex content-center gap-2'>
                                        <span className='material-symbols-outlined'>cancel</span>
                                    </button>
                                </div>
                            </div>            
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='bg-indigo-800 p-6 rounded-3xl'>
                                <label className='text-white text-xl h-full'>{journalData.content}</label> 
                            </div>
                        </div>
                        <div className='gap-4 flex flex-row'>
                            <div className='flex flex-col gap-4 bg-indigo-800 p-6 rounded-3xl col-span-2'>
                                <h1 className='font-bold text-white text-3xl'>Consejo</h1>
                                <label className='text-white text-xl h-full'>{journalData.pageAdvice}</label> 
                            </div>
                            <div className='flex flex-col bg-indigo-800 p-6 rounded-3xl'>
                                <h1 className='font-bold text-white text-3xl'>Tabla de emociones</h1>
                                <div className='flex flex-row gap-1'>
                                    <h1>Happiness:</h1>
                                    <h1 className='font-bold'>{journalData.feelingAnalysis.happiness}</h1>
                                </div>
                                <div className='flex flex-row gap-1'>
                                    <h1>Sadness:</h1>
                                    <h1 className='font-bold'>{journalData.feelingAnalysis.sadness}</h1>
                                </div>
                                <div className='flex flex-row gap-1'>
                                    <h1>Fear:</h1>
                                    <h1 className='font-bold'>{journalData.feelingAnalysis.fear}</h1>
                                </div>
                                <div className='flex flex-row gap-1'>
                                    <h1>Anger:</h1>
                                    <h1 className='font-bold'>{journalData.feelingAnalysis.anger}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center p-2'>
                    <button onClick={handleNextButtonClick }>
                        <span class="material-symbols-outlined text-white">arrow_forward_ios</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default JournalFrame;

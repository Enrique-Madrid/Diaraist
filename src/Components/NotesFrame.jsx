import React from 'react';
import EveryNote from './NotesFrame/EveryNote';

const NotesFrame = ({ onShowCreateNoteClick, onShowJournalClick, DataJournal, handleNextButtonClick }) => {
    
    return (
        <div className='flex flex-col bg-violet-950 p-8 max-md:p-4 rounded-lg h-full font-sans text-pink-500'>        
            <div className='overflow-y-scroll'>
                <h1 className='font-bold text-9xl max-md:text-4xl max-md:text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-4'>Your Journals</h1>

                <div className='flex my-4 max-md:justify-center'>
                    <button onClick={onShowCreateNoteClick} className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full '>
                        <div className='flex content-center gap-2'>
                        <p>Create New Journal</p>
                        <span class="material-symbols-outlined">add</span>
                        </div>
                    </button>
                </div>
                <EveryNote  handleOpenJournalClick={ onShowJournalClick } setJournalData={ DataJournal }/>
            </div>

        </div>
    );
}

export default NotesFrame;

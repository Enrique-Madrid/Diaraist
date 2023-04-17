import React, { useState, useEffect } from 'react';
import '../../CSS/Scrollbar.css';

const EveryNote = ({ handleOpenJournalClick, setJournalData }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/check/')
            .then(response => response.json())
            .then(data => setNotes(data))
            .catch(error => console.error('Error fetching notes:', error));
    }, []);

    const handleButtonClick = (note) => {
        const journalData = {
            title: note.title,
            date: note.date,
            content: note.content,
            summary: note.summary,
            pageAdvice: note.pageAdvice,
            feelingAnalysis: note.feelingAnalyzer
        };
        setJournalData(journalData);
        handleOpenJournalClick();
    }

    // ! Note content is not being displayed properly

    return (
        <div>
            <div className='m-8 sm:overflow-y-auto text-white'>
                <div className='flex flex-wrap gap-8'>
                    {notes.map(note => (
                        <button key={note.id} className='bg-gradient-to-b from-cyan-500 to-blue-500 w-64 h-64 rounded-lg text-left p-4' onClick={() => handleButtonClick(note)}>
                            <div className='h-full'>
                                <div className='overflow-hidden'>
                                    <h1 className='text-2xl font-bold '>
                                        {note.title}
                                    </h1>
                                    <p className='text-sm font-semibold'>
                                        {note.date}
                                    </p>
                                    <p className='line-clamp-6 max-md:overflow-hidden'>
                                        {note.content}
                                    </p>
                                </div>
                            </div>        
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EveryNote;

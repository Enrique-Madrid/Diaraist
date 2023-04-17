import React, { useState } from 'react';
const AddJournalWindow = ({ onHideCreateNoteClick }) => {

    const currentDate = new Date().toISOString().split('T')[0];

    const [journalTitle, setJournalTitle] = useState('');
    const [journalDate, setJournalDate] = useState(currentDate);
    const [journalContent, setJournalContent] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const [unfilledFields, setUnfilledFields] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSaveJournalClick = async () => {

        if (journalTitle === '' || journalDate === '' || journalContent === '') {
            setUnfilledFields(true);
            // Wait 3 seconds and then hide the message
            setTimeout(() => {
                setUnfilledFields(false);
            }, 3000);

            return;
        }

        setIsOpen(true);

        try {
            const journalData = {
                title: journalTitle,
                date: journalDate,
                content: journalContent
            };

            const response = await fetch('http://127.0.0.1:5000/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(journalData)
            });

            if (response.ok) {
                // Fill the fields with empty strings
                setJournalTitle('');
                setJournalContent('');
                setJournalDate(currentDate);
                setIsOpen(false);

                setIsSuccessful(true);
                setTimeout(() => {
                    setIsSuccessful(false);
                }, 3000);
            } else {
                setIsOpen(false);
                setIsError(true);
                setTimeout(() => {
                    setIsError(false);
                }, 3000);
            }
        } catch (error) {
            setIsOpen(false);
            setIsError(true);
            setTimeout(() => {
                setIsError(false);
            }, 3000);
        }
    };

    const handleOutsideClick = (event) => {
        if (event.target.classList.contains("modal-overlay")) {
            onHideCreateNoteClick();
        }
      };

    return (
        <div className='absolute h-full w-full backdrop-blur-sm'>
            <div className='bg-white/10 p-32 h-full w-full modal-overlay' onClick={handleOutsideClick}>
                <div className='bg-indigo-900 p-16 h-full rounded-3xl overflow-auto'>
                    <div className='flex flex-col gap-8 text-white'>
                        <div className='flex flex-row'>
                            <h1 className='text-white font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                            Create New Journal
                            </h1>
                            <div className='flex flex-col gap-2 justify-center ml-auto'>
                                <div className='flex gap-4 text-white bg-pink-500 py-2 px-4 rounded-full ml-auto'>
                                    { !isOpen ? (<button onClick={handleSaveJournalClick} className='flex content-center gap-2'>
                                        <span className='material-symbols-outlined'>save</span>
                                    </button>) : (
                                    <p className='flex content-center gap-2 animate-spin'>
                                        <span className='material-symbols-outlined'>autorenew</span>
                                    </p>)}
                                    <button onClick={onHideCreateNoteClick} className='flex content-center gap-2'>
                                        <span className='material-symbols-outlined'>cancel</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        { isSuccessful ? (<p className='text-lime-500 font-bold'>Se añadio correctamente</p>) : null}
                        { unfilledFields ? (<p className='text-yellow-400 font-bold'>Campos Vacios</p>) : null}
                        { isError ? (<p className='text-red-600 font-bold'>No se pudo crear, intenta más tarde</p>) : null}
                        <div className='flex flex-row gap-8'>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <label className='text-white font-bold text-2xl'>Journal Title</label>
                                <input className='bg-white/10 text-white rounded-md p-2' type='text' placeholder='Enter Journal Title'
                                    value={journalTitle} onChange={(e) => setJournalTitle(e.target.value)} />
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <label className='text-white font-bold text-2xl'>Journal Date</label>
                                <input className='bg-white/10 text-white rounded-md p-2' type='date'
                                    value={journalDate} onChange={(e) => setJournalDate(e.target.value)}/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-white font-bold text-2xl h-full'>Journal Content</label>
                            <textarea className='bg-white/10 text-white rounded-md p-2 h-64' type='text' placeholder='Enter Journal Content'
                                value={journalContent} onChange={(e) => setJournalContent(e.target.value)} />  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddJournalWindow;

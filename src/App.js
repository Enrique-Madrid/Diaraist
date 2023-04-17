import React, { useState, useEffect } from 'react';
import MainFrame from './Components/MainFrame';
import SideBar from './Components/SideBar';
import NotesFrame from './Components/NotesFrame';
import SummariesFrame from './Components/SummariesFrame';
import AddJournalWindow from './Components/NotesFrame/AddJournalWindow';
import JournalFrame from './Components/NotesFrame/JournalFrame';

function App() {

  const [showHome, setShowHome] = useState(true);

  const [showNotes, setShowNotes] = useState(false);
  const [showSummaries, setShowSummaries] = useState(false);
  const [showCreateNote, setShowCreateNote] = useState(false);

  const [openJournal, setOpenJournal] = useState(false);

  const [journalData, setJournalData] = useState();

  useEffect(() => {
  }, [journalData]);

  const handleShowJournalData = (data) => {
    setJournalData(data);
  }

  const handleShowNotesClick = () => {
    setShowNotes(true);
    setShowSummaries(false);
    setShowHome(false);
  }

  const handleShowSummariesClick = () => {
      setShowNotes(false);
      setShowSummaries(true);
      setShowHome(false);
  } 

  const handleShowHomeClick = () => {
    setShowNotes(false);
    setShowSummaries(false);
    setShowHome(true);
  }

  const handleShowCreateNoteClick = () => {
    setShowCreateNote(true);
  }

  const handleHideCreateNoteClick = () => {
    setShowCreateNote(false);
  }

  function handleOpenJournalClick() {
    setOpenJournal(true);
  }

  function handleCloseJournalClick() {
      setOpenJournal(false);
  }

  return (
    <div className="App">
      { openJournal ? <JournalFrame onHideJournalClick={handleCloseJournalClick} journalData={journalData} /> : null }
      { showCreateNote ? <AddJournalWindow onHideCreateNoteClick={handleHideCreateNoteClick}></AddJournalWindow> : null}
      <div className='h-screen bg-slate-800 dark:bg-stone-950 p-12 max-md:p-8'>
        <div className='flex flex-row max-md:flex-col gap-4 h-full'>    
          <div className='grow-0 sm:h-full'>
            <SideBar
              onShowNotesClick={handleShowNotesClick}
              onShowSummariesClick={handleShowSummariesClick}
              onShowHomeClick={handleShowHomeClick}
            ></SideBar>
          </div>

          <div className='w-full h-full overflow-hidden'>
            {showNotes ? <NotesFrame onShowCreateNoteClick={handleShowCreateNoteClick} onShowJournalClick={ handleOpenJournalClick } DataJournal={ handleShowJournalData }></NotesFrame> : null}
            {showSummaries ? <SummariesFrame/> : null}        
            {showHome ? <MainFrame /> : null}       
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

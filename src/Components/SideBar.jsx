import '../CSS/Icons.css'
import React from 'react';
import Profile from './SideBar/Profile';
import Search from './SideBar/Search';
import ShowNotes from './SideBar/ShowNotes';
import ShowSummaries from './SideBar/ShowSummaries';
import ShowHome from './SideBar/ShowHome';

import '../CSS/Scrollbar.css';	

const SideBar = ({ onShowNotesClick, onShowSummariesClick, onShowHomeClick, onShowCreateNoteClick }) => {
    return (
        <div className='flex flex-col bg-violet-700 rounded-lg h-full py-8  overflow-hidden max-md:py-2'>
            <div className='flex flex-col max-md:flex-row px-4'>
                <Profile/>
                <div className='my-4 max-md:my-2'>
                    <Search/>
                </div>
            </div>
            <div className='w-full flex flex-col max-md:flex-row max-md:justify-center'>
                <button onClick={onShowHomeClick}>
                    <ShowHome/>
                </button>
                <button onClick={onShowNotesClick}>
                    <ShowNotes/>
                </button>  
                <button onClick={onShowSummariesClick}>
                    <ShowSummaries/>
                </button>
            </div>
        </div>
    );
}

export default SideBar;

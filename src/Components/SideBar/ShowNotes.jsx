import React from 'react';

const ShowNotes = () => {
    return (
        <div className='bg-violet-700 hover:bg-violet-950 py-4 px-6 w-full text-white font-bold text-left'>
            <div className='flex content-center'>
                <span class="material-symbols-outlined">note</span>
                <p className='mx-4 max-md:hidden'>Notes</p>
            </div>
        </div>
    );
}

export default ShowNotes;

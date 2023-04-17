import React from 'react';

const Search = () => {
    return (
        <div className='flex px-4 max-md:px-0'>
            <input type="text" placeholder="Search" className='bg-violet-900 p-2 rounded-full rounded-r-lg w-full text-white'></input>
            <button className='flex content-center bg-white p-2 rounded-full rounded-l-lg text-violet-600'>
                <span class="material-symbols-outlined">search</span>
            </button>
        </div>
    );
}

export default Search;

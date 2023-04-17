import React from 'react';

const SettingMenu = () => {
    return (
        <div className='transition-opacity ease-in-out delay-150'> 
            <div className='absolute bg-white text-violet-700 font-bold text-left rounded-md'>
                <div className='flex flex-col'>
                    <button className='flex content-center hover:bg-violet-950 hover:text-white py-3 px-6'>
                        <span class="material-symbols-outlined">account_circle</span>
                        <p className='mx-4'>Profile Settings</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SettingMenu;

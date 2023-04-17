import React, { useState } from 'react';
import SettingMenu from './SettingMenu';

const Profile = () => {

    const [showComponent, setShowComponent] = useState(false);

    function showSettings() {
        setShowComponent(!showComponent);
    }

    return (
        <div className='bg-violet-700 py-4 px-4 text-white font-bold text-left'>
            <div className="flex">
                <div className="w-1/2">
                    <div className='flex content-center'>
                        <span class="material-symbols-outlined">account_circle</span>
                        <input type="button" value="Profile" className='mx-4 max-md:hidden'></input>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className='flex content-center justify-end gap-2 max-md:gap-0'>
                        <button onClick={showSettings}>
                            <span class="material-symbols-outlined max-md:hidden">expand_more</span>
                        </button>
                    </div>
                    {showComponent && <SettingMenu></SettingMenu>}
                </div>     	    
            </div>
        </div>
    );
}

export default Profile;

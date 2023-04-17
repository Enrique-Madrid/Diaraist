import React from 'react';
import '../CSS/Scrollbar.css';

const MainFrame = () => {
    return (
        <div className=' bg-violet-950 p-8 max-md:p-4 rounded-lg h-full font-sans text-white'>
            <div className='h-full overflow-auto max-md:overflow-crop max-md:flex max-md:flex-col max-md:gap-2'>
                <h1 className='font-bold text-9xl max-md:text-5xl max-md:text-center'>Hello</h1>
                <img className='float-right object-fill h-60 w-60 max-md:hidden rounded-full m-6' alt='a person writting a journal generated with dall-e' src='https://openai-labs-public-images-prod.azureedge.net/user-U2XOsjCcHsD9HIEsSvDTRrF6/generations/generation-oHsX4d4DaFJooJbAXW0IJSyI/image.webp'></img>
                
                <p className='font-bold text-2xl'> Welcome to our website for journal writing!</p>

                <div className='m-4 gap-8 max-md:gap-2 max-md:mx-4'>
                    <p>
                        <div class="flow-root my-4 max-md:my-0">Here on our platform, we offer you a safe and private experience to write your thoughts, emotions, and daily experiences. Our digital journal allows you to keep a personal record online easily and conveniently.
                        </div>
                        <div class="flow-root my-4 max-md:my-0">Need to vent, reflect, or simply organize your ideas? Our journal writing tool is perfect for you! You can write in your journal anytime and from anywhere, whether it's on your computer or mobile device.
                        </div>
                        <div class="flow-root my-4 max-md:my-0">Features of our journal writing platform:</div>
                        <ul class="list-disc list-inside my-4 font-bold text-amber-300">
                            <li>Privacy and security: Your privacy is our priority. Your personal information and writings are kept completely confidential and secure on our platform.</li>
                            <li>Customization: You can personalize your journal with themes, backgrounds, and font styles that suit your style and personality.</li>
                            <li>Organization: Our journaling tool allows you to organize your entries by date, tags, or categories, making it easy to search and track your writings.</li>
                            <li>Reflection: Journal writing is an excellent way to reflect on your thoughts and emotions and gain a clearer understanding of yourself and your life experiences.</li>
                            <li>Anytime, anywhere access: You can access your journal online anytime and from anywhere, allowing you to write when you feel inspired or need to vent.</li>
                        </ul>

                    <p className='my-4'>
                    Start your personal writing journey with us and discover the therapeutic and cathartic benefits of keeping an online journal. Sign up now and begin writing your story today!
                    </p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainFrame;

import React from 'react';
import RightArrow from '../RightArrow';

const Footer: React.FC = () => {
    return (
        <footer className="dark:text-white light:text-dark py-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <RightArrow />
                    <p className='hidden sm:block'>Made With 💓 By webTribe</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


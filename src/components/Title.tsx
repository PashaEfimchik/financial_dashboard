import React from 'react';

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    const currentDateTime = new Date();
    const formattedDate = currentDateTime.toLocaleDateString();
    const formattedTime = currentDateTime.toLocaleTimeString();
    return (
        <div className="title__container">
            <div className="title__container--content">{title}</div>
            <div className="title__container--content-updated">Updated: {formattedDate} {formattedTime}</div>
        </div>
    );
}

export default Title;
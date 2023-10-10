import React from 'react';

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    const currentDateTime = new Date();
    const formattedDateParts = currentDateTime.toLocaleDateString().toString().split('.');
    const formattedDate = `${formattedDateParts[1]}/${formattedDateParts[0]}/${formattedDateParts[2]}`;
    const formattedTime = currentDateTime.toLocaleTimeString();
    return (
        <div className="title__container">
            <div className="title__container--content">{title}</div>
            <div className="title__container--content-updated">Updated: {formattedDate} {formattedTime}</div>
        </div>
    );
}

export default Title;
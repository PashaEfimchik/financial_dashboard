import React from 'react';

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    const currentDateTime = new Date();
    const options: Intl.DateTimeFormatOptions = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const formattedDate = currentDateTime.toLocaleDateString('en-US', options);

    return (
        <div className="title__container">
            <div className="title__container--content">{title}</div>
            <div className="title__container--content-updated">Updated: {formattedDate}</div>
        </div>
    );
}

export default Title;
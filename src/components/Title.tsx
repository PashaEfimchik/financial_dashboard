import React from 'react';

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className="title__container">
            <div className="title__container--content">{title}</div>
        </div>
    );
}

export default Title;
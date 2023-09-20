import React from 'react';

interface CalendarDaysProps {
    data: [string, number][];
}

const CalendarDate: React.FC<CalendarDaysProps> = ({ data }) => {
    const dataParts = data[0][1].toString().split('.');
    const formattedData = `${dataParts[1]}/${dataParts[0]}/${dataParts[2]}`;
    return (
        <div className="calendarDate__container-wrap">
            <div className="calendarDate__container-content">
                <div className="calendarDays__container-content-wrap">
                    <div className="calendarDays__container--content-title">
                        <span className="calendarDays__container--content-title-text">{data[1][0]}</span>
                    </div>
                    <div className="calendarDays__container--content-value">
                        <span className="calendarDays__container--content-value-text">{data[1][1]}</span>
                    </div>
                </div>
                <div className="calendarDate__container-content-wrap">
                    <div className="calendarDate__container--content-title">
                        <span className="calendarDate__container--content-title-text">{data[0][0]}</span>
                    </div>
                    <div className="calendarDate__container--content-value">
                        <span className="calendarDate__container--content-value-text">{formattedData}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarDate;
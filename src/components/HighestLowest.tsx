import React from 'react';

interface HighestLowestProps {
    data: [string, number][];
}

const HighestLowest: React.FC<HighestLowestProps> = ({ data }) => {
    return (
        <div className="highestLowest__container-wrap">
            <div className="highestLowest__container-content">
                <div className="highestLowest__container winner-wrap">
                    <span className="highestLowest__container--content-title winner">{data[2][0]}</span>
                    <span className="highestLowest__container--content-value winner">{data[2][1]}</span>
                </div>
                <div className="highestLowest__container loser-wrap">
                    <span className="highestLowest__container--content-title loser">{data[3][0]}</span>
                    <span className="highestLowest__container--content-value loser">{data[3][1]}</span>
                </div>
                <div className="highestLowest__container profit-wrap">
                    <span className="highestLowest__container--content-title profit">{data[0][0]}</span>
                    <span className="highestLowest__container--content-value profit">{data[0][1]}</span>
                </div>
                <div className="highestLowest__container loss-wrap">
                    <span className="highestLowest__container--content-title loss">{data[1][0]}</span>
                    <span className="highestLowest__container--content-value loss">{data[1][1]}</span>
                </div>
            </div>
        </div>
    );
}

export default HighestLowest;
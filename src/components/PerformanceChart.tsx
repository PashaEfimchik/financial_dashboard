import React from 'react';
import wholeCircle from '../assets/wholeCircle.svg';

interface performanceChartProps {
    data: [string, number][];
}

const PerformanceChart: React.FC<performanceChartProps> = ({ data }) => {
    return (
        <div className="performanceChart__container-wrap">
            <div className="performanceChart__container-content">
                <div className="performanceChart__container-tradedesk-wrap">
                    <img src={wholeCircle} alt="whole circle" className="performanceChart__chart--whole-circle" />
                    <div className="performanceChart__container--content-tradedesk-wrap">
                        <span className="performanceChart__container--content-tradedesk-title">{data[1][0]}</span>
                        <span className="performanceChart__container--content-tradedesk-value">{data[1][1]}</span>
                    </div>
                </div>

                <div className="performanceChart__container-sap-wrap">
                    <img src={wholeCircle} alt="whole circle" className="performanceChart__chart--whole-circle" />
                    <div className="performanceChart__container--content-sap-wrap">
                        <span className="performanceChart__container--content-sap-title">{data[0][0]}</span>
                        <span className="performanceChart__container--content-sap-value">{data[0][1]}</span>
                    </div>
                </div>
            </div>
            <div className="performanceChart__container-difference-wrap">
                <span className="performanceChart__container-difference-value">{data[2][1]}</span>
            </div>
        </div>
    );
}

export default PerformanceChart;
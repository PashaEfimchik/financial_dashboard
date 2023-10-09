import React from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

interface TotalTradesProps {
    data: [string, number][];
    totalTrades: [string, number];
}

const TotalTrades: React.FC<TotalTradesProps> = ({ data, totalTrades }) => {
    const options = {
        chart: {
            type: 'pie',
            backgroundColor: 'transparent',
            width: 359,
            height: 241,
        },
        colors: ['#FFFFFFCC', '#FFFFFF99'],
        title: {
            text: '',
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                },
                startAngle: 180,
                endAngle: 180,
                borderWidth: 0,
                borderRadius: 0,
                allowPointSelector: false,
            },
        },
        series: [{
            data: data,
            size: 179,
            innerSize: '50%',
            showInLegend: true,
            dataLabels: {
                enabled: false,
            }
        }],
    }

    return (
        <div className="totalTrades__container-wrap">
            <div className="totalTrades__container--content">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
                <div className="totalTrades__container--content-total-wrap">
                    <span className="totalTrades__container--content-total-title">{totalTrades[0]}</span>
                    <span className="totalTrades__container--content-total-value">{totalTrades[1]}</span>
                </div>
                <div className="totalTrades__container-firstData" style={data[1][1] > data[0][1] ? { top: "43px", left: "215px"} : {top: "170px", left: "235px"}}>
                    <span className="totalTrades__container--content-data">{data[1][1]}</span>
                    <div className="totalTrades__container--content-line"></div>
                    <span className="totalTrades__container--content-value">{data[1][0]}</span>
                </div>
                <div className="totalTrades__container-secondData" style={data[1][1] > data[0][1] ? { top: "173px", left: "200px"} : {top: "44px", left: "215px"}}>
                    <span className="totalTrades__container--content-data">{data[0][1]}</span>
                    <div className="totalTrades__container--content-line"></div>
                    <span className="totalTrades__container--content-value">{data[0][0]}</span>
                </div>
            </div>
        </div>
    );
}

export default TotalTrades;
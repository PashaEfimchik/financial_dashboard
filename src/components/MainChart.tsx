import React from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

interface MainChartProps {
    data: [string, number][];
}

const MainChart: React.FC<MainChartProps> = ({ data }) => {
    const options = {
        chart: {
            type: 'pie',
            backgroundColor: 'transparent',
        },
        colors: ['#FFFFFFCC', '#FFFFFF99'],
        title: {
            text: '',
        },
        plotOptions: {
            series: {
              states: {
                hover: {
                    halo: 0,
                }
              }
            },
            pie: {
                dataLabels: {
                    enabled: false,
                },
                startAngle: 160,
                endAngle: 340,
                borderWidth: 0,
                borderRadius: 0,
                allowPointSelector: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        series: [{
            data: data,
            size: 300,
            showInLegend: true,
            dataLabels: {
                enabled: false,
            }
        }],
    }

    return (
        <div className="mainChart__container-wrap">
            <div className="mainChart__container-content">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
                <div className="mainChart__container-firstData">
                    <span className="mainChart__container--content-data">{data[1][1]}%</span>
                    <div className="mainChart__container--content-line"></div>
                    <span className="mainChart__container--content-value">{data[1][0]}</span>
                </div>
                <div className="mainChart__container-secondData">
                    <span className="mainChart__container--content-data">{data[0][1]}%</span>
                    <div className="mainChart__container--content-line"></div>
                    <span className="mainChart__container--content-value">{data[0][0]}</span>
                </div>
            </div>
        </div>
    );
}

export default MainChart;
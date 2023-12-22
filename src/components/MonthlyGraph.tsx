import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface MonthlyGraphProps {
    data: [string, number][];
}

const MonthlyGraph: React.FC<MonthlyGraphProps> = ({ data }) => {
    const currentDateTime = new Date();
    const optionsDate: Intl.DateTimeFormatOptions = {
        month: 'long',
    };

    //const formattedDate = currentDateTime.toLocaleDateString('en-US', optionsDate);

    const options = {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
            width: 378,
        },
        title: {
            text: "Total",
            className: 'monthlyGraph__title',
            y: 5,
            style: {
                color: '#fff',
                fontFamily: "Inter, 'Helvetica'",
                fontSize: '20px',
                fontWeight: '400',
                letterSpacing: '-0.8px',
                lineHeight: '20px',
                position: 'absolute',
                whiteSpace: 'nowrap',
                top: 0,
                margin: 0,
            },
        },
        subtitle: {
            y: 20,
            text: '',
            className: 'monthlyGraph__subtitle',
            style: {
                color: '#fff',
                fontFamily: "Inter, 'Helvetica'",
                fontSize: '12px',
                fontWeight: '400',
                letterSpacing: '-0.48px',
                lineHeight: '12px',
                position: 'absolute',
                whiteSpace: 'nowrap',
                top: '22px',
                margin: 0,
            },
        },
        xAxis: {
            type: 'category',
            className: 'monthlyGraph__x-axis-label',
            labels: {
                className: 'monthlyGraph__x-axis-label',
                style: {
                    color: '#fff',
                    fontFamily: "Inter, 'Helvetica'",
                    fontSize: '12px',
                    fontWeight: '200',
                    letterSpacing: '-0.48px',
                    lineHeight: '12px',
                    position: 'absolute',
                    whiteSpace: 'wrap',
                    width: '122px',
                    textTransform: 'uppercase',
                },
                y: 20,
                x: -60,
                align: 'left',
                width: 122,
            },

        },
        yAxis: {
            min: 0.000,
            title: {
                text: ''
            },
            tickInterval: 10,
            className: 'monthlyGraph__y-axis-label',
            labels: {
                y: 0,
                style: {
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#fff',
                    fontFamily: "Playfair Display, 'Helvetica'",
                    display: 'flex',
                    width: '43px',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    textAlign: 'right',
                    marginTop: '10px',
                },
                formatter: function (this: any) {
                    return new Intl.NumberFormat('en-US', {
                        style: 'decimal',
                        minimumFractionDigits: 3,
                    }).format(this.value);
                    },
            },
            gridZIndex: 2,
            gridLineWidth: 1,
            gridLineHeight: 1,
            gridLineColor: 'rgba(237, 237, 237, 0.40)',
        },
        plotOptions: {
            series: {
                states: {
                    hover: {
                        halo: 0,
                    }
                }
            },
            column: {
                borderRadius: 6,
                pointWidth: 122,
                borderWidth: 0,
                color: 'rgba(255, 255, 255, 0.80)',
                shadow: {
                    color: '0px 3.92776px 3.92776px 0px rgba(255, 255, 255, 0.09)',
                }
            }
        },
        tooltip: {
            enabled: false,
        },
        series: [{
            data: data,
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#1E343E',
                align: 'left',
                formatter: function (this: any) {
                    return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 3 }).format(this.point.y);
                },
                y: 27,
                style: {
                    fontSize: '16px', 
                    color: '#1E343E',
                    fontFamily: "Playfair Display, 'Helvetica'",
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '18px',
                    letterSpacing: '-0.64px',
                    textOutline: 'none',
                }
            }
        }],
    }

    return (
        <div className="monthly-graph__container-wrap">
            <div className="monthly-graph__container--content">
                <div className="monthly-graph__container--content-currency-wrap">
                    <div className="monthly-graph__container--content-currency">
                        <span>usd</span>
                    </div>
                </div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        </div>
    );
}

export default MonthlyGraph;
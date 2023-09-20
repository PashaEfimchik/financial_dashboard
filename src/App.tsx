import React, { useEffect } from 'react';
import './App.css';
import Title from "./components/Title";
import MonthlyGraph from "./components/MonthlyGraph";
import TotalTrades from "./components/TotalTrades";
import axios from 'axios';
import PerformanceChart from "./components/PerformanceChart";
import HighestLowest from "./components/HighestLowest";
import CalendarDate from "./components/CalendarDate";
import MainChart from "./components/MainChart";

function App() {
    const API_KEY = 'AIzaSyBwM0n4kEHaKbvfjO-3oDXhhb-9--UkCDg';
    const spreadsheetId = '14SKgK07JReMNxSqhEf8rWOdaPTS0onvN6DrB4n0cHOk';
    const [data, setData] = React.useState([]);

    useEffect(() => {
        const baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets';
        const url = `${baseUrl}/${spreadsheetId}/values/Dashboard?key=${API_KEY}`;

        axios
            .get(url)
            .then((response) => {
                setData(response.data.values);
            }
        ).catch((error) => {
            console.log("error: ", error);
        }
        );
    }, []);

  return (
    <div className="App">
        <div className="app__container">
            <div className="app__container--shadow-instance"></div>
            <div className="app__container--slice-instance">
                <Title title={"Financial dashboard"} />
                {
                    data.length > 0 && (
                        <>
                            <MonthlyGraph data={[
                                [data[8][1], parseFloat(data[8][2])],
                                [data[9][1], parseFloat(data[9][2])],
                            ]}/>
                            <TotalTrades data={[
                                [(data[14][1] as string).split(' ')[0], parseFloat(data[14][2])],
                                [(data[15][1] as string).split(' ')[0], parseFloat(data[15][2])],
                            ]}
                            totalTrades={[data[13][1], parseFloat(data[13][2])]}
                            />
                            <MainChart data={
                                [
                                    [(data[12][1] as string).split(' ')[0], parseFloat(data[12][2])],
                                    [(data[11][1] as string).split(' ')[0], parseFloat(data[11][2])],
                                ]
                            }
                            />
                            <PerformanceChart data={
                                [
                                    [(data[27][1] as string).split(' ').slice(0,2).join(' '), data[27][2]],
                                    [(data[28][1] as string).split(' ').slice(0,2).join(' '), data[28][2]],
                                    [(data[29][1] as string).split(' ')[0], data[29][2]],
                                ]
                            } />
                            <HighestLowest data={
                                [
                                    [(data[21][1] as string), data[21][2]],
                                    [(data[22][1] as string), data[22][2]],
                                    [(data[23][1] as string), data[23][2]],
                                    [(data[24][1] as string), data[24][2]],
                                ]
                            } />
                            <CalendarDate data={
                                [
                                    [(data[6][1] as string), data[6][2]],
                                    [(data[7][1] as string), data[7][2]],
                                ]
                            }/>
                        </>
                    )
                }

            </div>
            <div className="app__container--circle-shade"></div>
        </div>
    </div>
  );
}

export default App;

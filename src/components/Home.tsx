import React, {useEffect} from 'react';
import Title from "./Title";
import MonthlyGraph from "./MonthlyGraph";
import TotalTrades from "./TotalTrades";
import MainChart from "./MainChart";
import PerformanceChart from "./PerformanceChart";
import HighestLowest from "./HighestLowest";
import CalendarDate from "./CalendarDate";
import {Button} from "@mui/material";
import {logoutUser} from "../actions/user";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getDataFromApi} from "../actions/data";

const Home = () => {
    const [data, setData] = React.useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getDataFromApi(dispatch)
            .then((response) => {
                setData(response)
            }
        ).catch((error) => {
            console.log("error: ", error);
        });
    }, [dispatch]);

    const handleLogout = () => {
        logoutUser(dispatch).then(() => navigate('/financial_dashboard/login'));
    }

    return (
        <>
            <div className="App">
                <div className="app__container">
                    <div className="app__container--shadow-instance"></div>
                    <div className="app__container--slice-instance">
                        <Title title={"Performance"} />
                        {
                            data.length > 0 && (
                                <div className="app__container-wrap-content">
                                    <div className="app__container-wrap-content-item left">
                                        <MonthlyGraph data={[
                                            ["Total funds allocated", parseFloat(data[0][4])],
                                            ["Total profit from closed trades", parseFloat(data[0][5])],
                                        ]}/>
                                        <TotalTrades data={[
                                            ["Open", parseFloat(data[0][10])],
                                            ["Closed", parseFloat(data[0][11])],
                                        ]}
                                            totalTrades={["Total trades", parseFloat(data[0][9])]}
                                        />
                                    </div>
                                    <div className="app__container-wrap-content-item center">
                                        <MainChart data={
                                            [
                                                ["Estimated return on capital in one year", parseFloat(data[0][8])],
                                                ["Return on capital closed trades", parseFloat(data[0][7])],
                                            ]
                                        }
                                        />
                                        <div className="app__container-wrap-content-item-center-mob">
                                            <HighestLowest data={
                                                [
                                                    ["Number of closed trades in profit", data[0][15]],
                                                    ["Number of closed trades in loss", data[0][16]],
                                                    ["Highest winner", data[0][17]],
                                                    ["Highest loser", data[0][18]],
                                                ]
                                            } />
                                        </div>
                                    </div>
                                    <div className="app__container-wrap-content-item right">
                                        <PerformanceChart data={
                                            [
                                                ["S&P performance", data[0][19]],
                                                ["TradeDesk performance", data[0][20]],
                                                ["Difference", data[0][21]],
                                            ]
                                        } />
                                        <div className="app__container-wrap-content-item-right-mob">
                                            <HighestLowest data={
                                                [
                                                    ["Number of closed trades in profit", data[0][15]],
                                                    ["Number of closed trades in loss", data[0][16]],
                                                    ["Highest winner", data[0][17]],
                                                    ["Highest loser", data[0][18]],
                                                ]
                                            } />
                                        </div>
                                        <CalendarDate data={
                                            [
                                                ["Start date", data[0][2]],
                                                ["Calendar days in the market", data[0][3]],
                                            ]
                                        }/>
                                    </div>
                                </div>
                            )
                        }
                        <div className="app__container--logout-wrap">
                            <Button
                                className="app__container--logout-button"
                                onClick={() => handleLogout()}
                                variant="text"
                            >
                                <span className="app__container--logout-button-text">Log out</span>
                            </Button>
                        </div>
                    </div>
                    <div className="app__container--circle-shade-wrap">
                        <div className="app__container--circle-shade"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
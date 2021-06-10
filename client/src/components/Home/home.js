import React, { useState, useEffect } from "react";
import Header from '../Header/header';
import LogementsList from '../Logements/logementsList';
import './home.scss';

const Home = ({ match }) => {
  const [logements, setLogements] = useState([]);

  //replace componentDidMonth
    useEffect(() => {
        fetchLogements();
    }, []);

    //Get the logements from API
    const fetchLogements = async () => {
        const response = await fetch('api/logements');
        const data = await response.json();
        setLogements(data);
    }
    return (
        <>
        <Header isHomePage={true}></Header>
        <div className="mb-5rem"></div>

        <div className="container">
            <div className="banner">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={`${window.location.origin}/img/banner.png`} alt="Fôret et mer" className="banner__img"/>
            </div>
        </div>
        <div className="mb-1rem"></div>

        <main className="container">
            <div className="logements">{
                logements.map(( l, index ) => (
                    <LogementsList logement={l} key={index} index={index} />
                ))
            }</div>
        </main>
        </>
    )
}

export default Home;
import React from 'react';
import './dash.css';
import PieChart23 from '../../Components/dashboard/piechart';
import Bar23 from '../../Components/dashboard/bargraph';
import Area23 from '../../Components/dashboard/areachart';
import Graph23 from '../../Components/dashboard/datagraph';
import QuizResult from '../../Components/dashboard/result';
import MapI from "../../Assets/Images/Map.png"
import Gimg from "../../Assets/Images/googlefit.jpg"
import { Link } from 'react-router-dom';
import meditation from "../../Assets/Images/Meditation.png";
import gratitude from "../../Assets/Images/Gratitude.png";
import affirmation from "../../Assets/Images/Affirmation.png";
import Helplines from '../../Components/dashboard/helpline';
import Adetails from '../../Components/dashboard/analysis';
import Footer from '../../Components/Footer/Footer';
import NavBar from "../../Components/Navbar/NavBar";

function Dash() {
  return (
    <div className='parent'>
      <NavBar />
      <div className='container'>
      <div className='card'>
          <div className='card-body'>
            <div className="card-title">
              <h2>Quiz Result</h2>
            </div>
            <div>
              <QuizResult/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className='card'>
          <div className='card-body text-center'>
            <div className="card-title">
              <h2>Pie Chart</h2>
            </div>
            <PieChart23 />
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <Bar23 />
            <br/>
            <div className="card-summary">
              <p>Data shown is in percentage values.</p>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <Area23 />
            <br/>
            <div className="card-summary">
              <p>Percentage of Population effected.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <h1>Analysis</h1>
          </div>
          <div>
            <Adetails/>
          </div>
        </div>
      </div>
      <div className='container'>
       <div className='card'>
          <div className='card-body'>
            <div className="card-title">
              <h2>Reccomendation</h2>
            </div>
            <div className='rec'>
              <ol>
                <li>
                  <img src={meditation} className="avatar" />
                  <Link to="/meditation">
                    <button className='btn-dash'> Meditation</button>
                  </Link>
                </li>
                <li>
                  <img src={gratitude} className="avatar" />
                  <Link to="/gratitude">
                    <button className='btn-dash'> Gratitude</button>
                  </Link>
                </li>
                <li>
                  <img src={affirmation} className="avatar" />
                  <Link to="/affirmation">
                    <button className='btn-dash'> Affirmation</button>
                  </Link>
                </li>
                <li>
                  <img src={meditation} className="avatar" />
                  <Link to="/face">
                    <button className='btn-dash'> Laughing </button>
                  </Link>
                </li>
              </ol>
            </div>
          </div>
         </div>
          <div className='card'>
           <div className='card-body'>
            <h3>Google Fit</h3>
            <div>
              <img src={Gimg}/>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <Graph23 />
          </div>
        </div>
      </div>
      <div className='container'>
      <div className='card'>
          <div className='card-body'>
            <div>
              <img src={MapI}/>
            </div>
          </div>
        </div>
        <div >
          <Helplines/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Dash;

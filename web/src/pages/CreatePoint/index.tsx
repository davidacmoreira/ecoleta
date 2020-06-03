import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';

import './styles.css';

import logo from '../../assets/logo.svg';

const CreatPoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="ecoleta"/>

        <Link to="/">
          <FiArrowLeft />
          home
        </Link>
      </header>

      <form action="">
        <h1>Register</h1>

        <fieldset>
          <legend>
            <h2>Data</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">entity name</label>
            <input 
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="name">email</label>
              <input 
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="field">
              <label htmlFor="name">whatsapp</label>
              <input 
                type="text"
                name="whatsapp"
                id="whatsapp"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>address</h2>
            <span>select in map</span>
          </legend>

          <Map center={[ 41.1238774, -8.6117846 ]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[ 41.1238774, -8.6117846 ]} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">STATE</label>
              <select name="uf" id="uf">
                <option value="0">select one uf</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">CITY</label>
              <select name="city" id="city">
                <option value="0">select one city</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>items</h2>
            <span>select items</span>
          </legend>

          <ul className="items-grid">
            <li className="selected">
              <img src="http://localhost:3333/uploads/lamps.svg" alt="lamp"/>
              <span>lamp</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lamps.svg" alt="lamp"/>
              <span>lamp</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lamps.svg" alt="lamp"/>
              <span>lamp</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lamps.svg" alt="lamp"/>
              <span>lamp</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lamps.svg" alt="lamp"/>
              <span>lamp</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lamps.svg" alt="lamp"/>
              <span>lamp</span>
            </li>
          </ul>
        </fieldset>

        <button type="submit">
          register collect point
        </button>
      </form>
    </div>
  );
};

export default CreatPoint;

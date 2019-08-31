import React from 'react';
import './styles.css';
import DeviceItem from './device-item';
import {Link} from 'react-router-dom';

const Devices = (props) => {
    return (
        <div className="devices-container">
            <h4 className="text-center">Tareas</h4>
            <div className="center-component">
                <button onClick= {props.eventAddDev} type="button" className="btn btn-primary btn-margin"> Add task </button>
                
            </div>
            <ul className="list-group">
                {
                    props.list.map( (item, key) => {
                        return (
                            <DeviceItem key={ key } name={ item.name } />
                        )
                    })
                }
            </ul>

        </div>
    );
};

//function addDevice() {
//    console.log('pressed');
//}
export default Devices;
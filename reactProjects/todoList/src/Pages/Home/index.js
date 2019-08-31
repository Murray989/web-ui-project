import React, { Component } from 'react';
import Devices from './components/devices';

class Home extends Component {

    state = {
        listDevices:[]
    }

    /*
    constructor(props){
        super(props);
        */
    

componentDidMount(){
    console.log('el componente fue montado');
    let deviceList = [
        {
            id: 1,
            name: 'UTF-984'
        },
        {
            id: 2,
            name: 'CYT-924'
        },
        {
            id: 3,
            name: 'UJI-089'
        },
        {
            id: 4,
            name: 'LHJ-471'
        },
        {
            id: 5,
            name: 'JRW-110'
        }
    ];
    //this.listDevices =deviceList
    this.setState({listDevices: deviceList}); 
}


clickHandler(){
    console.log('AGREGARE  preseed');
    let newDevice = {
        id:6,
        name:'RPJ-456'
    }  ;
        let newListDevices=[ ...this.state.listDevices, newDevice];
        this.setState({ listDevices: newListDevices }) ;
}

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <Devices eventAddDev={ this.clickHandler.bind(this)} list={ this.state.listDevices} />
                    </div>
                    <div className="col-md-4">
                        <Devices eventAddDev={ this.clickHandler.bind(this)} list={ this.state.listDevices} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
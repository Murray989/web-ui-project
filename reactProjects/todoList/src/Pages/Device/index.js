import React, { Component } from 'react';

class Device extends Component {

state={
    name:'hrs-258',
    serial: '12345',
    descripcion:'Este dispositivo',
    clasificacion:'3',
    estado:'Activo'
}

submitHandler(event){

  event.preventDefault();
  console.log('form', this.state);
}

    render() {
        return (
        <div>
        <h2>Ingreso de dispositivos</h2>
        <form onSubmit={this.submitHandler.bind} >  
        <div className="form-group row">
          <label forhtml="exampleFormControlInput1">Nombre</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"> </input>
        </div>
        <div className="form-group">
          <label forhtml="exampleFormControlSelect1">Example select</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label forhtml="exampleFormControlSelect2">Example multiple select</label>
          <select multiple className="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label forhtml="exampleFormControlTextarea1">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
      <button submit ='submit' className="btn btn-primary" > Guardar</button>    
      </div>
         );
    }
}

export default Device;
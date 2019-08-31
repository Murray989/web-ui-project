import React, { Component } from 'react';
import { O_RDONLY } from 'constants';

class Menu extends Component {

    render() {
        return (
            <div className="container">  
                <section>
                    <div className="row">
                    <div className="col-md-2">
                        <img  className ="logo" src="imagenmas.jpg"/>
            
                    </div>
                    <div className="form-group content col-md-6">
                        <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="buscar..."/>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
                
                </section>
                
                <section>
                    <div className="row">
                        <div className="col-md-3">
                        
                        </div>
                        <div className="col-md-6">
                            
                         <img  className ="foto" src="persona.jpg"/>
                         <h4> Mis tareas en la empresa X</h4>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Menu;


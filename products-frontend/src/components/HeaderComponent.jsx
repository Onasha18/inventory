import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)

        this.state ={
        }
            
        }

    render() {
        return (
            
              <div>
               <header>
                    <nav className="navbar navbar-expand-md navabr-dark bg-primary" >
                     <h2 className="text-center" style={{color:"#fff"}}> &nbsp;&nbsp;&nbsp;Inventory</h2>
                    </nav>
                </header>   
            </div>
        );
    }
}

export default HeaderComponent;
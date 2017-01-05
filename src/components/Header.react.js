/**
 * Created by aman on 1/01/2017.
 */
import { Component } from 'react';
import React from 'react'

 class Header extends Component{

    render(){
        let headerStyle = {
            fontSize:'16px',
            fontWeight:'300',
            display:'inline-block',
            margin:'20px 10px'
        }
        return <h2 style={headerStyle}>
            {this.props.text}
        </h2>;
    }
}

Header.defaultProps = {
    text:'Default header'
}

export default Header;
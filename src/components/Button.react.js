/**
 * Created by aman on 7/01/2017.
 */
import React from 'react'

export default class Button extends React.Component{

    render(){
        let buttonStyle ={margin:'10px 10px 10px 0'}

        return(
            <button className="btn btn-default"
                    style={buttonStyle}
                    onClick={this.props.handleClick}>{this.props.label}
            </button>
        )
    }
}
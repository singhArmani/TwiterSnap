/**
 * Created by aman on 7/01/2017.
 */

import React from 'react'

export default class CollectionExportForm extends React.Component{
    render(){
        let formStyle ={display:'inline-block'}
        
        return(
            <form   action="http://codepen.io/pen/define"
                    method="POST"
                    target="_blank"
                    style={formStyle}>

                <input type="hidden"
                       name="data"
                       value={this.props.htmlMarkup}/>

                <button type="submit"
                        className="btn btn-default">
                       Export as HTML
                </button>
            </form>
        )
    }
}
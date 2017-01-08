/**
 * Created by aman on 6/01/2017.
 */
import React from 'react';
import Header from './Header.react'
import Button from './Button.react'
import CollectionRenameForm from './CollectionRenameForm.react'
import CollectionExportForm from './CollectionExportForm.react'

export default class CollectionControls extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: 'new',
            isEditingName:false
        }
        this.getHeaderText = this.getHeaderText.bind(this)
        this.toggleEditCollectionName = this.toggleEditCollectionName.bind(this)
        this.setCollectionName = this.setCollectionName.bind(this)
    }

    getHeaderText(){
        debugger
        let numberOfTweetInCollection = this.props.numberOfTweetsInCollection
        let text;
        if(numberOfTweetInCollection ===1){
           text = numberOfTweetInCollection + ' tweet in your'
        }else{
            text = numberOfTweetInCollection + ' tweets in your'
        }

        return (
            <span>{text} <strong>{this.state.name}</strong></span>
        )
    }

    toggleEditCollectionName(){
        this.setState({
            isEditingName:!this.state.isEditingName
        })
    }

    setCollectionName(name){
        this.setState({
            name:name,
            isEditingName:false
        })
    }

    render(){
        if(this.state.isEditingName){
            return (
                <CollectionRenameForm name={this.state.name}
                onChangeCollectionName={this.setCollectionName}
                onCancelCollectionNameChange={this.toggleEditCollectionName}/>
            )
        }

        return (
            <div>
                <Header text={this.getHeaderText()}/>
                <Button
                    label="Rename Collection"
                    handleClick={this.toggleEditCollectionName}/>

                <Button
                    label="Empty Collection"
                    handleClick={this.props.onRemoveAllTweetsFromCollection}/>

                <CollectionExportForm htmlMarkup={this.props.htmlMarkup}/>
            </div>
        )
    }
}
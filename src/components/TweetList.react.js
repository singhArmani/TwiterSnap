/**
 * Created by aman on 6/01/2017.
 */
import React, { Component } from 'react'
import Tweet from './Tweet.react';

let listStyle = { padding:'0'}
let listItemStyle = {
    display: 'inline-block',
    listStyle:'none'
}

export default class TweetList extends Component{

    constructor(props){
        super(props);

        this.getListOfTweetIds = this.getListOfTweetIds.bind(this);
        this.getTweetElement = this.getTweetElement.bind(this);
    }

    getListOfTweetIds(){
        console.log('TweetList'+this);
         let listOfIds = Object.keys(this.props.tweets);
         console.log(listOfIds)
        return listOfIds;
    }

    getTweetElement(tweetId){
        let tweet = this.props.tweets[tweetId]
        let handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

        let tweetElement;

        if(handleRemoveTweetFromCollection){
            tweetElement = (
                <Tweet tweet={tweet}
                        onImageClick={handleRemoveTweetFromCollection}/>)
        }else {
            tweetElement = <Tweet tweet={tweet}/>
        }

        return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>
    }

    render(){
        let listOfIds = this.getListOfTweetIds();
       let tweetElements = listOfIds.map(this.getTweetElement)

        return (
            <ul style={listStyle}>
                {tweetElements}
            </ul>
        )
    }


}
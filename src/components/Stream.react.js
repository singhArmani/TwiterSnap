/**
 * Created by aman on 1/01/2017.
 */
import React from 'react'
import SnapKiteStreamClient from 'snapkite-stream-client'
import StreamTweet from './StreamTweet.react';
import Header from './Header.react'

//defining the Stream Component
export default class Stream extends React.Component{
    constructor(props){
        super(props);
        this.state = {tweet:null}
        this.handleNewTweet = this.handleNewTweet.bind(this);
    }

    //handing New Tweet
    handleNewTweet(tweet){

        this.setState({tweet:tweet})

    }

    componentDidMount(){
        console.log("Stream Component has been mounted...");

        SnapKiteStreamClient.initialiseStream(this.handleNewTweet)
    }

    componentWillUnmount(){
        SnapKiteStreamClient.destroyStream();
    }

    render(){
         console.log('Stream render()...')
        if(this.state.tweet){
            return (
                <StreamTweet  tweet={this.state.tweet}
                              onAddTweetToCollection={this.props.onAddTweetToCollection}/>
            );
        }
        return (

            <Header text="Waiting for public photos from Twitter"/>

        );
    }
}
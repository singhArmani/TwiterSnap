/**
 * Created by aman on 1/01/2017.
 */
import React from 'react'
import Stream from './Stream.react';
import Collection from './Collection.react'
import '../App.css';

export default class Application extends React.Component{
    constructor(props){
        super(props)
        this.state={collectionTweets:{}}
        this.addTweetToCollection = this.addTweetToCollection.bind(this);
        this.removeTweetFromCollection = this.removeTweetFromCollection.bind(this);
        this.removeAllTweetsFromCollection = this.removeAllTweetsFromCollection.bind(this);
    }

   addTweetToCollection(tweet){
        console.log("Image has been clicked!!"+tweet.length);

        let collectionTweets = this.state.collectionTweets

       collectionTweets[tweet.id] = tweet;

        this.setState({
            collectionTweets:collectionTweets
        })

   }
   removeTweetFromCollection(tweet){
     let collectionTweets = this.state.collectionTweets;
        delete collectionTweets[tweet.id];
        this.setState({collectionTweets:collectionTweets})

   }

   removeAllTweetsFromCollection(){
        this.setState({
            collectionTweets:{}
        })
   }

    render(){

        return (

            <div className="container-fluid">
                 <div className="row">
                     <div className="col-md-4 text-center">
                        <Stream style={{alignSelf:'center'}} onAddTweetToCollection={this.addTweetToCollection}/>
                     </div>

                     <div>
                    <Collection style={{alignSelf:'center'}} tweets={this.state.collectionTweets}
                    onRemoveTweetFromCollection={this.removeTweetFromCollection}
                    onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection}
                    />
                     </div>
                 </div>
            </div>
        )
    }
}

/**
 * Created by aman on 1/01/2017.
 */
import React from 'react'
import Stream from './Stream.react';
import Collection from './Collection.react'
import '../App.css';

export default class Application React.Component{
    constructor(props){
        super(props)
        this.state={collectionTweets:{}}
\\\\\        this.addTweetToCollection = this.addTweetToCollection.bind(this);
        this.removeTweetFromCollection = this.removeTweetFromCollection.bind(this);
        this.removeAllTweetsFromCollection = this.removeAllTweetsFromCollection.bind(this);
    }

   addTweetToCollection(tweet){
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

                        {/*rendering Stream component and af passing data as props*/}
                        <Stream onAddTweetToCollection={this.addTweetToCollection}/>
                    </div>

                    <div className="col-md-8">
                        {/*rendering Collection component and passing data as props*/}
                        <Collection tweets={this.state.collectionTweets}
                                    onRemoveTweetFromCollection={this.removeTweetFromCollection}
                                    onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

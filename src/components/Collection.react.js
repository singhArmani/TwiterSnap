/**
 * Created by aman on 1/01/2017.
 */
import { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from 'CollectionControls.react'
import TweetList from 'TweetList.react'
import Header from 'Header.react'

export default class Collection extends Component{

    constructor(props){
        super(props);
        this.createHtmlMarkupStringOfTweetList= this.createHtmlMarkupStringOfTweetList.bind(this)
        this.getListOfTweetIds = this.getListOfTweetIds.bind(this)
        this.getNumberOfTweetsInCollection = this.getNumberOfTweetsInCollection.bind(this)

    }

    createHtmlMarkupStringOfTweetList(){

        let htmlString = ReactDOMServer.renderToStaticMarkup(<TweetList tweets ={this.props.tweet}/>)

        let htmlMarkup = {html:htmlString};

        return JSON.stringify(htmlMarkup);

    }

    getListOfTweetIds(){
        return Object.keys(this.props.tweets);
    }

    getNumberOfTweetsInCollection(){
        return this.getListOfTweetIds().length;
    }


    render(){

        //if there are some tweets
        if(this.getNumberOfTweetsInCollection() > 0){
            //define some variables
            let htmlMarkup = this.createHtmlMarkupStringOfTweetList();
            let removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
            let handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

            return(<div>
                    <CollectionControls
                        numberOfTweetsInCollection = {this.getNumberOfTweetsInCollection()}
                        htmlMarkup = {htmlMarkup}
                        onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}/>

                    <TweetList
                        tweets={this.props.tweets}
                        onRemoveTweetFromCollection ={handleRemoveTweetFromCollection}/>
            </div>);

        }
        return <Header text="Your collection is empty"/>
    }

}
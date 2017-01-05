/**
 * Created by aman on 1/01/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import Tweet from './Tweet.react';
import Header from './Header.react'

export default class StreamTweet extends React.Component{
    constructor(props){
        super(props);
        console.log("get intial state")
        this.state = {
            numberOfCharacterIsIncreasing:null,
            headerText:null}
    }
    componentWillMount(){
        console.log("Running streamTweet componentWillMount method here...")
        this.setState({
            numberOfCharacterIsIncreasing:true,
            headerText:'Latest public photo from Twitter'
        });

        window.twitsnap = {
            numberOfReceivedTweets:1,
            numberOfDisplayedTweets:1
        }
    }

    componentDidMount(){
        console.log("running StreamTweet's componentDidMount().. ")

        let componentDOMRepresentation = ReactDOM.findDOMNode(this)

        window.twitsnap.headerHtml = componentDOMRepresentation.children[0].outerHTML
        window.twitsnap.twitterHtml =componentDOMRepresentation.children[1].outerHTML
    }

    componentWillReceiveProps(nextProps){
        console.log('[Snapterest] StreamTweet: 4. Running componenetWillReceiveProps');

        let currentTweetLength = this.props.tweet.text.length;

        let nextTweetLength = nextProps.tweet.text.length;

        let isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);

        let headerText;

        this.setState({numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
        });

        if (isNumberOfCharactersIncreasing) {
            headerText = 'Number of characters is increasing';
        } else {
            headerText = 'Latest public photo from Twitter';
        }
        this.setState({
            headerText: headerText
        });
        window.twitsnap.numberOfReceivedTweets++;
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Running shouldComponentUpdate()");

        return nextProps.tweet.text.length>1;
    }

    componentWillUpdate(nextProps,nextState){
        console.log("calling StreamTweet's componentWillUpdate")
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Running StreamTweet's componentDidUpdate()");
        window.twitsnap.numberOfDisplayedTweets++;
    }

    componenetWillUnmount(){
        console.log("Running componentWillUNmount")
        delete window.twitsnap
    }



    render(){
        console.log("Running render function here...")

        return(
            <section>
               <Header text={this.state.headerText}/>

                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection}/>
            </section>
        )
    }
}
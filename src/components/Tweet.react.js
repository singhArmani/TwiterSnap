/**
 * Created by aman on 3/01/2017.
 */
import React, { Component } from 'react';

 class Tweet extends Component{

     constructor(props){
         super(props);
         this.handleImageClick = this.handleImageClick.bind(this);
     }

     handleImageClick(){

         let tweet =this.props.tweet;

         let onImageClick = this.props.onImageClick;

         if(onImageClick){
             onImageClick(tweet)
         }
     }

    render(){

        let tweetStyle = {
            position: 'relative',
            display: 'inline-block',
            width: '300px',
            height: '400px',
            margin: '10px'
        };
        let imageStyle = {
            maxHeight: '400px',
            boxShadow: '0px 1px 1px 0px #aaa',
            border: '1px solid #fff'
        };

        let tweet = this.props.tweet;
        let tweetMediaUrl = tweet.media[0].url

            return (
                <div style={tweetStyle}>
                    <img src={tweetMediaUrl}
                         onClick={this.handleImageClick}
                         style={imageStyle}
                         alt={'tweet'}
                         />
                </div>
            )
    }
}

Tweet.propTypes = {
     tweet: function(props,propsName,componentName){
         let tweet = props[propsName];
         if(!tweet) return new Error('tweet must be set.');
         if(!tweet.media) return new Error('Tweet must have an image')
     },
    onImageClick: React.PropTypes.func
}

export default Tweet;
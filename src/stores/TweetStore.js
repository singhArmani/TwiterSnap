/**
 * Created by aman on 9/01/2017.
 */
import { AppDispatcher } from '../dispatcher/AppDispatcher'
import { EventEmitter } from 'events'

//Store is all about our application logic and data

 class TweetStore extends EventEmitter{
    constructor() {
        super()
        //describing our data
        this.tweet = null
        // this.setTweet = this.setTweet.bind(this)

    }
    //our logic here
    setTweet(receivedTweet){
        this.tweet = receivedTweet

        //upon receiving tweets store emits "change" event
        this.emit('change')
    }


    getTweet(){
        return this.tweet;
    }

    handleActions(action){
       switch(action.type){
           case 'receive_tweet': {
               this.setTweet(action.tweet)
           }
       }
    }

}

AppDispatcher.register(TweetStore.handleActions.bind(TweetStore))
const tweetStore = new TweetStore()
export default tweetStore
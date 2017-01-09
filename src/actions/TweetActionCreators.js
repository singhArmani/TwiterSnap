/**
 * Created by aman on 9/01/2017.
 */
import { AppDispatcher } from '../dispatcher/AppDispatcher'

export function receiveTweet(tweet){

    //create an action
    let action = {
        type:'receive_tweet',
        tweet:tweet
    }

    //dispatching action
    AppDispatcher.dispatch(action)
}
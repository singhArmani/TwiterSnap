/**
 * Created by aman on 9/01/2017.
 */
import { getListOfTweetsIds } from './TweetUtils'

export function getNumberOfTweetsInCollection(collection){


    let listOfCollectionTweetIds = getListOfTweetsIds(collection);

    return listOfCollectionTweetIds.length

}

export function isEmptyCollection(collection){
    return (getNumberOfTweetsInCollection(collection) === 0)
}

// module.exports ={
//     getNumberOfTweetsInCollection:getNumberOfTweetsInCollection,
//     isEmptyCollection: isEmptyCollection
// }


/**
 * Created by aman on 9/01/2017.
 */
jest.autoMockOff();
import { getNumberOfTweetsInCollection, isEmptyCollection } from '../CollectionUtils';

//test suit
describe('Collection utilities modules', ()=>{


    let collectionTweetMock = {
        collectionTweet1:{},
        collectionTweet2:{},
        collectionTweet3:{}
    }

    //spec 1
    it('returns a number of tweets in collection', ()=>{
        let actualNumberOfTweetsInCollection = getNumberOfTweetsInCollection(collectionTweetMock);
        let expectedNumberOfTweetsInCollection = 3;

        expect(actualNumberOfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection)
    })

    //spec 2
    it('checks if collection is not empty', ()=>{
        let actualIsEmptyCollectionValue = isEmptyCollection(collectionTweetMock)

        //expectation
        expect(actualIsEmptyCollectionValue).toBeDefined()
        expect(actualIsEmptyCollectionValue).toBe(false)
        expect(actualIsEmptyCollectionValue).not.toBe(true)
    })

})
/**
 * Created by aman on 9/01/2017.
 */
jest.dontMock('../TweetUtils');
import { getListOfTweetsIds } from '../TweetUtils'


describe('Tweet utilities module', ()=>{

    it('returns an array of tweets ids', ()=>{

        let TweetMocks = {
            tweet1:{},
            tweet2:{},
            tweet3:{}
        }

        let expectedListOfTweetsIds = ['tweet1','tweet2','tweet3'];
        let actualListOfTweetIds = getListOfTweetsIds(TweetMocks);

        expect(actualListOfTweetIds).toEqual(expectedListOfTweetsIds);
    })
})

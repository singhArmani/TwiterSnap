/**
 * Created by aman on 9/01/2017.
 */

import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Button from '../Button.react'
jest.dontMock('../Button.react')

describe('Button component', ()=>{

    //specs
    it('calls handler function on click ', () =>{
        let handleClick = jest.genMockFunction()

        let button = TestUtils.renderIntoDocument(
            <Button handleClick = {handleClick}/>
        )

        let buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button,'button')

        TestUtils.Simulate.click(buttonInstance);

        expect(handleClick).toBeCalled();

        let numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length

        expect(numberOfCallsMadeIntoMockFunction).toBe(1)
    })

})
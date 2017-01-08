/**
 * Created by aman on 9/01/2017.
 */
jest.dontMock('../Header.react')
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Header from '../Header.react'

describe('Header Component',()=>{

    //spec 1
    it('renders provided header text', ()=>{

        //returning the reference of the rendered Header Component
        let header = TestUtils.renderIntoDocument(
            <Header text="Testing..."/>
        )

        let actualHeaderText = ReactDOM.findDOMNode(header).textContent

        expect(actualHeaderText).toBe('Testing...')

        let defaultHeader = TestUtils.renderIntoDocument(<Header/>)

        let actualDefaultHeaderText = ReactDOM.findDOMNode(defaultHeader).textContent

        expect(actualDefaultHeaderText).toBe('Default header')
    })
} )
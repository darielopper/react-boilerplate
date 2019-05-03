import React from 'react'
import App from '../src/components/App'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon' //For mockery and click spies
import { shallow, configure, mount, render } from 'enzyme'

configure({ adapter: new Adapter() })

describe('App component', () => {
    test('should shallow correctly', () => {
        expect(shallow(
            <App />
        )).toMatchSnapshot()
    })

    test('should mount correctly', () => {
        expect(mount(
            <App />
        )).toMatchSnapshot()
    })

    test('should render correctly', () => {
        expect(render(
            <App />
        )).toMatchSnapshot()
    })

    test('have default text', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('h1').text()).toContain('Hello World')
    })
})
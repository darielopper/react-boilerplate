import App from '../src/components/App'
import { shallow, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('App component', () => {
    test('should shallow correctly', () => {
        expect(shallow(
            <App />
        )).toMatchSnapshot()
    })
})
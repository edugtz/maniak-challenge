import React from 'react';
import Savings from './Savings';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import { createSerializer } from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
configure({ adapter: new Adapter() });

describe('Savings component', () => {

    const buildWrapper = (props) => {
        return shallow(<Savings {...props} />);
    };

    it('should render correctly', () => {
        const wrapper = buildWrapper({ amount: 100, description: 'Test description' });

        // Snapshot test
        expect(wrapper).toMatchSnapshot();
    });
});

import React from 'react';
import Calculator from './Calculator';
import RangeSlider from '../../components/RangeSlider';
import Slider from 'rc-slider';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { createSerializer } from "enzyme-to-json";
import sinon from 'sinon';

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
configure({ adapter: new Adapter() });

const sandbox = sinon.createSandbox();

describe('Calculator component', () => {

    afterEach(() => {
        sandbox.restore();
    });

    const buildWrapper = (props) => {
        return shallow(<Calculator {...props} />);
    };

    // Snapshot test
    it('should render correctly', () => {
        const wrapper = buildWrapper({ });

        expect(wrapper).toMatchSnapshot();
    });

    it('should update and display employee count correctly', () => {
        const employeeCount = 8;
        const wrapper = buildWrapper({ });
        const employeeSliderSpy = sandbox.spy(wrapper.instance(), 'handleEmployeeChangeSlider');
        
        wrapper.instance().forceUpdate();

        wrapper.find(RangeSlider)
            .at(1)
            .dive()
            .find(Slider)
            .simulate('change', employeeCount);

        
        expect(employeeSliderSpy.calledOnce).toBe(true);
        expect(wrapper.state().employeeCount).toEqual(employeeCount);
    });

    it('should update and display monthly spendings correctly', () => {
        const monthlySpending = 90;
        const wrapper = buildWrapper({ });
        const monthlySpendingSpy = sandbox.spy(wrapper.instance(), 'handleSpendingChangeSlider');
        
        wrapper.instance().forceUpdate();

        wrapper.find(RangeSlider)
            .at(0)
            .dive()
            .find(Slider)
            .simulate('change', 90);

        
        expect(monthlySpendingSpy.calledOnce).toBe(true);
        expect(wrapper.state().monthlySpending).toEqual(monthlySpending);
    });
});

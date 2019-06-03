import React, { Component } from 'react';
import './Calculator.scss';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RangeSlider from '../RangeSlider';
import Savings from '../Savings';


class Calculator extends Component {
    constructor(props) {
        super(props);

        this.handleEmployeeChangeSlider = this.handleEmployeeChangeSlider.bind(this);
        this.handleSpendingChangeSlider = this.handleSpendingChangeSlider.bind(this);
        
        this.handleEmployeeChangeInput = this.handleEmployeeChangeInput.bind(this);
        this.handleSpendingChangeInput = this.handleSpendingChangeInput.bind(this);

        this.state = {
            employeeCount: 1,
            monthlySpending: 10,
            estimatedFoodCostSavings: 0,
            estimatedAnnualSavings: 0
        };
    };

    componentDidMount = () => {
        this.calculateSavings();
    };

    handleEmployeeChangeInput = (e) => {
        const value = e.target.value;

        if (value >= 1 && value <= 10) {
            this.setState({
                employeeCount: value
            }, () => {
                this.calculateSavings();
            });
        }
    };

    handleSpendingChangeInput = (e) => {
        const value = e.target.value;

        if (value >= 10 && value <= 100) {
            this.setState({
                monthlySpending: value
            }, () => {
                this.calculateSavings();
            });
        }
    };

    handleEmployeeChangeSlider = (value) => {
        this.setState(() => ({
            employeeCount: value
        }), () => {
            this.calculateSavings();
        });
    };

    handleSpendingChangeSlider = (value) => {
        this.setState(() => ({
            monthlySpending: value
        }), () => {
            this.calculateSavings();
        });
    };

    calculateSavings = () => {
        const { monthlySpending, employeeCount } = this.state;

        const estimatedFoodCostSavings = Number((monthlySpending) * 0.3).toFixed(1);
        const estimatedAnnualSavings = Number((employeeCount) * 1337 + estimatedFoodCostSavings).toFixed(1);

        this.setState(() => ({
            estimatedAnnualSavings,
            estimatedFoodCostSavings
        }));
    };

    render() {
        const { 
            monthlySpending, 
            employeeCount, 
            estimatedAnnualSavings, 
            estimatedFoodCostSavings 
        } = this.state;

        return(
            <div className="calculator-container">
                <div className="calculator-top-section-wrapper">
                    <div className="spending-description">
                        <p>Monthly <br></br> ingredient spending</p>
                    </div>

                    <div className="input-icon-wrapper">
                        <span className="spending-icon"><FontAwesomeIcon icon={faDollarSign} /></span>
                        <input className="spending-input" 
                            value={monthlySpending} 
                            onChange={this.handleSpendingChangeInput} 
                            type="text"    
                        />
                    </div>
                    <div className="range-slider-wrapper">
                        <RangeSlider
                            id="spending-slider"
                            handleOnChange={this.handleSpendingChangeSlider} 
                            value={monthlySpending}
                            defaultValue={10}
                            min={10}
                            max={100}
                        />
                    </div>
                </div>
                <div className="calculator-mid-section-wrapper">
                    <div className="employee-description">
                        <p>Full time employees that <br></br> process invoices</p>
                    </div>

                    <div className="input-wrapper">
                        <input className="employee-count-input" 
                            value={employeeCount} 
                            onChange={this.handleEmployeeChangeInput} 
                            type="text"    
                        />
                    </div>
                    <div className="range-slider-wrapper">
                        <RangeSlider
                            id="employee-slider" 
                            handleOnChange={this.handleEmployeeChangeSlider}
                            value={employeeCount}
                            defaultValue={1}
                            min={1}
                            max={10}
                        />
                    </div>
                </div>
                <div className="calculator-bottom-section-wrapper">
                    <Savings 
                        amount={estimatedFoodCostSavings} 
                        description="Estimated food cost savings"
                    />
                    <Savings 
                        amount={estimatedAnnualSavings} 
                        description="Your estimated annual savings"    
                    />
                </div>
            </div>
        );
    }
};

export default Calculator;
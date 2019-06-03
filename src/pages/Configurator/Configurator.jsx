import React, { Component } from 'react';
import './Configurator.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getConfiguratorData } from '../../actions/configuratorActions';
import Calculator from '../../components/Calculator';

class Configurator extends Component {
    componentDidMount() {
        this.props.getConfiguratorData();
    }

    render() {
        const { title, description } = this.props;
        const titlePartOne = title.substr(0, 14);
        const titlePartTwo = title.substr(14, 13);

        return (
            <div className="container configurator-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="configurator-title-wrapper">
                            <h1 className="configurator-title">{titlePartOne}</h1>
                            <h1 className="configurator-title">{titlePartTwo}</h1>  
                        </div>
                        <div className="configurator-description-container">
                            <p className="configurator-description">{description}</p>
                        </div>     
                    </div>
                    <div className="col-md-6 offset-md-2">
                        <Calculator />
                    </div>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getConfiguratorData }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        title: state.configurator.title,
        description: state.configurator.description
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Configurator);
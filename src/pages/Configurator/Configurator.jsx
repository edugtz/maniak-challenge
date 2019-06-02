import React, { Component } from 'react';
import './Configurator.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getConfiguratorData } from '../../actions/configuratorActions';

class Configurator extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className="configurator-title">Save</h1> 
                    </div>
                    <div className="col-6">
                        Two
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Configurator);
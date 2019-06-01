import sinon from 'sinon';
import chai from 'chai';
import axios from 'axios';
import { getAppData, getPageOneData, getPageTwoData } from './api';
import apiFixtures from './apiFixtures';

const sandbox = sinon.createSandbox();
chai.should();

describe('api service', () => {
    describe('getAppData', () => {
        const { getAppDataFixture } = apiFixtures;
        afterEach(() => {
            sandbox.restore();
        });

        it('should successfully get app data', () => {
            sandbox.stub(axios, 'get').resolves(getAppDataFixture.response);

            getAppData()
                .then(response => {
                    axios.get.calledOnce.should.be.true;
                    response.should.be.eql(getAppDataFixture.response);
                });
        });

        it('should fail and return an error', () => {
            sandbox.stub(axios, 'get').rejects(getAppDataFixture.error);

            getAppData()
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    axios.get.calledOnce.should.be.true;
                    e.message.should.be.eql(getAppDataFixture.error.message);
                })
        });
    });

    describe('getPageOneData', () => {
        const { getPageOneDataFixture } = apiFixtures;
        afterEach(() => {
            sandbox.restore();
        });

        it('should successfully get app data', () => {
            sandbox.stub(axios, 'get').resolves(getPageOneDataFixture.response);

            getAppData()
                .then(response => {
                    axios.get.calledOnce.should.be.true;
                    response.should.be.eql(getPageOneDataFixture.response);
                });
        });

        it('should fail and return an error', () => {
            sandbox.stub(axios, 'get').rejects(getPageOneDataFixture.error);

            getAppData()
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    axios.get.calledOnce.should.be.true;
                    e.message.should.be.eql(getPageOneDataFixture.error.message);
                })
        });
    });

    describe('getPageTwoData', () => {
        const { getPageTwoDataFixture } = apiFixtures;
        afterEach(() => {
            sandbox.restore();
        });

        it('should successfully get app data', () => {
            sandbox.stub(axios, 'get').resolves(getPageTwoDataFixture.response);

            getAppData()
                .then(response => {
                    axios.get.calledOnce.should.be.true;
                    response.should.be.eql(getPageTwoDataFixture.response);
                });
        });

        it('should fail and return an error', () => {
            sandbox.stub(axios, 'get').rejects(getPageTwoDataFixture.error);

            getAppData()
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    axios.get.calledOnce.should.be.true;
                    e.message.should.be.eql(getPageTwoDataFixture.error.message);
                })
        });
    });
});
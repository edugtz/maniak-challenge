import api from 'axios';

const mainUrl = 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master';

const routes = {
    APP_DATA: mainUrl + '/app.json',
    PAGE_ONE: mainUrl + '/page1.json',
    PAGE_TWO: mainUrl + '/page2.json'
};

export const getAppData = () => {
    return api.get(routes.APP_DATA);
};

export const getPageOneData = () => {
    return api.get(routes.PAGE_ONE);
};

export const getPageTwoData = () => {
    return api.get(routes.PAGE_TWO); 
}
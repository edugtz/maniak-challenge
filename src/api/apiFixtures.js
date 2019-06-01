const errorMessage = 'Request failed';

module.exports = {
    getAppDataFixture: {
        response: {
            "menu": {
                "items": [
                    {
                        "text": "Testimonial",
                        "route": "page-1"
                    },
                    {
                        "text": "Configurator",
                        "route": "page-2"
                    },
                    {
                        "text": "Stories",
                        "route": "#"
                    },
                    {
                        "text": "About",
                        "route": "#"
                    }
                ]
            }
        },
        error: {
            message: errorMessage
        }
    },
    getPageOneDataFixture: {
        response: {
            "slider": {
                "title": "Our customers love us",
                "reviews": [
                    {
                        "name": "Pete Zahut",
                        "position": "Chief @ Maniak",
                        "comment": "It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail"
                    },
                    {
                        "name": "Bernabe",
                        "position": "Tech Lead @ Maniak",
                        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus quam. Curabitur ultricies pretium orci nec finibus. Nullam congue quis tortor a tempus. Morbi rutrum, nunc at hendrerit gravida, tortor turpis molestie nibh, vel varius augue ante eu velit."
                    }
                ]
            }
        },
        error: {
            message: errorMessage
        }
    },
    getPageTwoDataFixture: {
        response: {
            "calculator": {
                "title": "Save more with Bellotero.io",
                "description": "With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety."
            }
        },
        error: {
            message: errorMessage
        }
    }
};
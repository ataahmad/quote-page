import React, { Component } from 'react';
const axios = require('axios');
// require('dotenv').config();
const MockData = require('./quotesStat.json');
// async function queryQuote() {
//     let ind = Math.floor(Math.random() * 1000);
//     let data = JSON.stringify({
//         "collection": "quotes",
//         "database": "myFirstDatabase",
//         "dataSource": "Cluster0",
//         "filter": {
//             "index": String(ind),
//         }
//     });


//     let config = {
//         method: 'post',
//         url: 'https://data.mongodb-api.com/app/data-hxjtl/endpoint/data/beta/action/findOne',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Request-Headers': '*',
//             'api-key': ,
//         },
//         data: data
//     };

//     const response = await axios(config);
//     return response.data;
//     // .catch(function (error) {
//     //     console.log(error);
//     // });
//     // return resData;
// }



class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: MockData[Math.floor(Math.random() * 1000)]["text"],
            author: MockData[Math.floor(Math.random() * 1000)]["author"]
        };
    }

    render() {
        return (

            <p>
                "{this.state.text}" -{this.state.author}
            </p>

        );
    }
}

export default QuoteBox;





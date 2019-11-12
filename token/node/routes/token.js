var rp = require('request-promise');
const jwt = require('jsonwebtoken');

let getToken = async (req, res) => {

    let customData = {
        customDataExample: 'Custom data example.'
    };

    try {

        const request = {
            method: 'POST',
            uri: process.env.UNEEQ_URI + '/api/v1/clients/access/tokens/',
            body: jwt.sign(
                {
                    sid: 'SESSION-ID',
                    'fm-workspace': process.env.UNEEQ_WORKSPACE,
                    'fm-custom-data': JSON.stringify(customData)
                },
                process.env.UNEEQ_SECRET
            ),
            headers:{
                "content-type":"application/jwt",
                "workspace": process.env.UNEEQ_WORKSPACE
            }
        };

        const getTokenResponse = await rp(request);
        res.status(200);
        res.send(getTokenResponse);

    } catch(err) {

        console.log(err);
        res.status(500);
        res.send(err.message);

    }

};

module.exports = getToken;

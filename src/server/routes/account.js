import express from 'express';

export default function account(data) {

    function getIP(req) {
        return req.connection.remoteAddress.split(":").pop();
    }

    const router = express.Router();

    router.post('/', (req, res) => {
        return res.json({user: data.user});
    });

    router.get('/', (req, res) => {
        return res.json({user: data.user});
    });

    return router;

}
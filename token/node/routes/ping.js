let ping = (req, res) => {
    res.status(200);
    res.send("pong");
};

module.exports = ping;

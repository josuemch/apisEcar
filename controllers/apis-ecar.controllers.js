const getHelloWorld = (req, res) => {
    res.send({ Output: "Hello Mundo get version 1.3!" });
};

const postHelloWorld = (req, res) => {
    res.send({ Output: "Hello Mundo post version 1.3!" });
};

const getHolaMundo = (req, res) => {
    res.send("Hola mundo 123");
};



module.exports = {
    getHelloWorld,
    postHelloWorld,
    getHolaMundo,
};
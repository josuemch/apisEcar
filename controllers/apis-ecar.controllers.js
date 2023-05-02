export const getHelloWorld = (req, res) => {
    res.send({ Output: "Hello Mundo get version 1.3!" });
};

export const postHelloWorld = (req, res) => {
    res.send({ Output: "Hello Mundo post version 1.3!" });
};

export const getHolaMundo = (req, res) => {
    res.send("Hola mundo 123");
};
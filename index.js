const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('react-app/dist'));
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/api/pirates/:id", (req, res) => {
    const id = req.params.id;
    const pirate = getPirate(id);
    if (!pirate) {
        res.status(404).send({ error: `Pirate ${id} not found`});
    } else {
        res.send({ data: pirate });
    }
})

function getPirate(id) {
    const pirates = [
        { id: 1, name: 'Jack Sparrow', age: 32 },
        { id: 2, name: 'Blackbeard', age: 55 },
        { id: 3, name: 'Captain Hook', age: 43 },
    ];
    return pirates.find(p => p.id == id);
}
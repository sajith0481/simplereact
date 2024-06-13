const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('react-app/dist'));
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get{"/api/pirates/:id", (req, res) => {
    const id = req.params.id;
    const pirate = pirates.find((pirate) => pirate.id === id);
    if (!pirate) {
        res.status(404).send("Pirate not found");
    } else {
        res.send(pirate);
    }
}
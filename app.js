const color = require("colors");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;

const app = express();
app.use(bodyParser.json());

const contacts = [
    {
        id: 1,
        name: "Sharof",
        phone: "5145820204"
    },
    {
        id: 2,
        name: "Amir",
        phone: "5148650100"
    },
    {
        id: 3,
        name: "Anil",
        phone: "5826154858"
    },
];


app.get("/contacts", (req, res) => {
    res.send(contacts);
});

app.get("/contacts/:id", (req, res) => {
    const newcontact = contacts.find(person => Number(req.params.id) === person.id);
    res.send(newcontact);
});

app.post("/contacts", (req, res) => {
    contacts.push(req.body);
    res.json(req.body);
});

app.put("/contacts/:id", (req, res) => {
    const newcontact = contacts.find(person => Number(req.params.id) === person.id);
    newcontact.name = req.body.name;
    newcontact.phone = req.body.phone;
    res.send(newcontact);
});

app.delete("/contacts/:id", (req, res) => {
    const newcontact = contacts.find(person => Number(req.params.id) === person.id);
    contacts.splice(newcontact, 1);
    res.send(newcontact);
});



app.listen(PORT, function() {
    console.log("Server is started on port: ".yellow + String(PORT).red);
});
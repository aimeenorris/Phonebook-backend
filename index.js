const express = require("express");
const app = express();

app.use(express.json());

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/api/persons", (req, res) => {
  console.log("api/persons");
  res.json(persons);
});

app.get("/info", (req, res) => {
  console.log("info");
  const info = `Phonebook has info for ${persons.length} people`;
  const date = new Date();
  res.send(info + "<br/><br/>" + date);
  //res.send(date.toString());
  /*  res.write(info);
  res.write("\n");
  res.write(date.toString());
  res.end(); */
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

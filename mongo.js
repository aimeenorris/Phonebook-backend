const mongoose = require("mongoose");

/* if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
} */

const numArgs = process.argv.length;
let display = false;

if (numArgs < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}
if (numArgs === 3) {
  display = true;
}
if (numArgs === 4 || numArgs > 5) {
  console.log(
    "Please provide the password, name and phone number as arguments: node mongo.js <password> <name> <phone>"
  );
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://fullstack:${password}@cluster0.msvzw.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
});

const Person = mongoose.model("Person", personSchema);

if (display) {
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person);
    });
    mongoose.connection.close();
  });
} else {
  const username = process.argv[3];
  const phoneNumber = process.argv[4];
  const person = new Person({
    name: username,
    number: phoneNumber,
  });

  person.save().then((result) => {
    console.log("phone entry saved!");
    mongoose.connection.close();
  });
}

/*
Note.find({ important: true a}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
*/

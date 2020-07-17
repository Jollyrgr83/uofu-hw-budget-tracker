let mongoose = require("mongoose");
let db = require("../models/transaction.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let budgetSeed = [
  {
    name: "Transaction 1",
    value: 100,
    date: new Date()
  },
  {
    name: "Transaction 2",
    value: -100,
    date: new Date()
  }
];

db.deleteMany({})
  .then(() => db.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

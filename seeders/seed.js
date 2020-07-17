let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/transaction", {
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

db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

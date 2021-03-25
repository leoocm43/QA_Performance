'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const content= Faker.lorem.words();
  const due_string = Faker.date.future();
  const due_lang = Faker.random.locale();
  const priority = parseInt(Faker.random.number().toString()[0]);
  // add variables to virtual user's context:
  userContext.vars.content = content;
  userContext.vars.due_string = due_string;
  userContext.vars.due_lang = due_lang;
  userContext.vars.priority = priority;
  // continue with executing the scenario:
  return done();
}

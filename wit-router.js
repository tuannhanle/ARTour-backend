'use strict'
require('dotenv').config();
var express = require('express');
var router = express.Router();

const { Wit } = require('node-wit');

const client = new Wit({
  accessToken: process.env.WIT_ACCESS_TOKEN,
});

router.post('/chat', (req, res) => {
  const { message } = req.body;

  console.log("BODY: " + JSON.stringify(req.body));
  console.log("HEADER: " + JSON.stringify(req.headers));
  console.log("PARAMS: " + JSON.stringify(req.params));

  client
    .message(message)
    .then(data => {
      console.log(data);
      res.status(200);

      var result = handleMessage(data)

      res.json({ "result": result , "response": data});
    })
    .catch(error => console.log(error));
});
const responses = {
  ask_dumb: ["Sorry, I don't know what are you talking about", "I didn't get that, can you say again", "I don't have an answer for that, Is there something else I can help with","Sorry, I have no idea"],
  greetings: ["Hi, I'm Portbot, How can I help you?", "Hi", "Hello", "Hi there, How can I help", "Hello, What can I do for you"],
  ask_name: ['I\'m Port bot, Pleased to meet you', 'I\'m Port bot, Here to help', 'My name is Port bot', "Oh, call me Port bot", "Port bot, Dear sir"  ],
  ask_companyName: ["Port & Coastal Consultant", "PORTCOAST", "Vietnam’s Leading Port & Coastal Consultant" ],
  ask_establish: ["Our company have been established for 17 years", "17 years", "Since 2014", "17 years ago"],
  ask_manyEmployees: ["More than 200 employees", "We have more than 200"],
  ask_manyDepartments: ["We have 8 departments"]
};

const firstValue = (obj, key) => {
  const val = obj && obj[key] &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0 &&
    obj[key][0].value
    ;
  if (!val) {
    return null;
  }
  return val;
};

const handleMessage = ({ text, intents, entities, traits }) => {
  // const intents_greeting = firstValue(entities, 'greeting:greeting');
  // const intents_ask_name = firstValue(entities,'ask:ask_name')
  // const intents_ask_company = firstValue(entities,'ask:ask_companyName')

  if (firstValue(entities, 'greeting:greeting')) {
    return responses.greetings.random();
  }
  if (firstValue(entities,'ask:ask_name')) {
    return responses.ask_name.random();
  } 
  if(firstValue(entities,'ask:ask_companyName')){
    return responses.ask_companyName.random();

  }
  if(firstValue(entities,'ask:ask_establish')){
    return responses.ask_establish.random();
  }
  if(firstValue(entities,'ask:ask_manyEmployees')){
    return responses.ask_manyEmployees.random();
  }
  if(firstValue(entities,'ask:ask_manyDepartments')){
    return responses.ask_manyDepartments.random();
  }
  if(firstValue(entities,'ask:ask_dumb')){
    return responses.ask_dumb.random();
  }
  else {
    return responses.ask_dumb.random();
  }
};

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
}
module.exports = router

import React from 'react';

class HelloWorld {
  say(message) {
    console.log(message);
  }
}

var helloWorld = new HelloWorld();
helloWorld.say('Hello React app');

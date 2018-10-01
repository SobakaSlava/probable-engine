const brain = require('brain.js');
const trainingData = require('./trainingdata');

const encode = arg => arg.split('').map(x => (x.charCodeAt(0) / 255));

processTrainingData = data => data.map(d => {
    return {
      input: encode(d.input),
      output: d.output
    }
  });

const aBranNewThirt = 'Is very beautiful';

const network = new brain.NeuralNetwork();

network.train(processTrainingData(trainingData));

const message = "As a matter conference Democrats House";

const name = brain.likely(encode(message), network);

console.log('that is', name);

console.log(network.run(encode(message)));

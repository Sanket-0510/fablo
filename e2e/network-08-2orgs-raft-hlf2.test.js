const { performTests } = require('./performTests');

const label = 'network-08-2orgs-raft-hlf2';

describe(label, () => {
  performTests(label, 'fabricaConfig-2orgs-2channels-1chaincode-tls-raft-hlf2.json');
});
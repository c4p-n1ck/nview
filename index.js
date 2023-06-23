#!/usr/bin/env node

const tools = require("./nostr-tools");
const fs = require("fs");

// NIP-05: https://nostr-check.com/.well-known/nostr.json?name=xadkekopc
console.log(process.env);
console.log(tools);

const third_party_clients = JSON.parse(fs.readFileSync("third-party-clients.json").toString());

console.log(third_party_clients);

// relay = tools.relayInit();

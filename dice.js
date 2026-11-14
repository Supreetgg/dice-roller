#!/usr/bin/env node
// Roll dice using standard notation. Usage: node dice.js 2d6+3
const input = process.argv[2] || "1d6";
const m = input.match(/^(\d+)d(\d+)([+-]\d+)?$/i);

if (!m) {
  console.log("Usage: node dice.js <count>d<sides>[+/-modifier], e.g. 2d6+3");
  process.exit(1);
}

const count = parseInt(m[1], 10);
const sides = parseInt(m[2], 10);
const mod = m[3] ? parseInt(m[3], 10) : 0;

if (count < 1 || count > 100 || sides < 2) {
  console.log("Use 1-100 dice with at least 2 sides.");
  process.exit(1);
}

const rolls = Array.from({ length: count }, () => 1 + Math.floor(Math.random() * sides));
const total = rolls.reduce((a, b) => a + b, 0) + mod;

console.log(`Rolls: ${rolls.join(", ")}${mod ? ` (modifier ${mod > 0 ? "+" : ""}${mod})` : ""}`);
console.log(`Total: ${total}`);

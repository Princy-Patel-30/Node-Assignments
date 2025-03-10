import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const sum = require('./sum.js'); // CommonJS import
import { multiply } from './multiply.mjs'; // ES6 import

console.log('Sum:', sum(5, 3));
console.log('Multiply:', multiply(5, 3));

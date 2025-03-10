// ES6 Modules
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// For __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const sourcePath = path.join(__dirname, 'source.txt');
const destinationPath = path.join(__dirname, 'destination.txt');

console.log('--- Synchronous Method ---');
// ✅ 1. Synchronous
try {
  const data = fs.readFileSync(sourcePath, 'utf8');
  console.log('Source File Content (Sync):', data);
  fs.writeFileSync(destinationPath, data);
  console.log('Data written to destination.txt (Sync)');
} catch (err) {
  console.error('Error (Sync):', err);
}

console.log('\n--- Asynchronous Method ---');
// ✅ 2. Asynchronous
fs.readFile(sourcePath, 'utf8', (err, data) => {
  if (err) {
    return console.error('Error (Async Read):', err);
  }
  console.log('Source File Content (Async):', data);
  fs.writeFile(destinationPath, data, (err) => {
    if (err) {
      return console.error('Error (Async Write):', err);
    }
    console.log('Data written to destination.txt (Async)');
  });
});

console.log('\n--- Streams Method ---');
// ✅ 3. Streams
const readStream = fs.createReadStream(sourcePath, 'utf8');
const writeStream = fs.createWriteStream(destinationPath);

readStream.on('data', (chunk) => {
  console.log('Chunk Read (Stream):', chunk);
});

readStream.pipe(writeStream);

readStream.on('end', () => {
  console.log('Stream Reading Completed!');
});

readStream.on('error', (err) => {
  console.error('Error (Stream Read):', err);
});

writeStream.on('finish', () => {
  console.log('Stream Writing Completed!');
});

writeStream.on('error', (err) => {
  console.error('Error (Stream Write):', err);
});

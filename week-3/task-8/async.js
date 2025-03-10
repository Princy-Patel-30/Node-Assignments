import { readFile } from 'fs/promises';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const readAndProcessAsync = async () => {
  try {
    console.log('Starting asynchronous file read...');
    const startTime = performance.now();
    
    const data = await readFile('input.txt', 'utf8');
    
    const readTime = performance.now() - startTime;
    console.log(`File read complete in ${readTime.toFixed(2)}ms`);

    return data;
  } catch (error) {
    throw new Error(`File read error: ${error.message}`);
  }
};

const analyzeText = async (data) => {
  console.log('Processing data...');
  
  await delay(1500);
  
  return {
    words: data.split(/\s+/).length,
    characters: data.length,
    lines: data.split('\n').length,
    uppercase: data.match(/[A-Z]/g)?.length ?? 0,
    lowercase: data.match(/[a-z]/g)?.length ?? 0,
    numbers: data.match(/\d/g)?.length ?? 0
  };
};

const main = async () => {
  try {
    console.time('Total Execution');
    
    await delay(1000);
    console.log('Program started');

    const fileContent = await readAndProcessAsync();
    const stats = await analyzeText(fileContent);

    console.log('\nFile Statistics:');
    Object.entries(stats).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });

    await delay(1000);
    console.log('\nProgram completed');
    console.timeEnd('Total Execution');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

main();
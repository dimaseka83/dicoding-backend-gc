const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for(let i = 0; i <= 10000; i++){
    // 
}

const currentMemoryUsage = initialMemoryUsage

console.log(`${yourName} is using ${currentMemoryUsage} bytes of memory in ${environment}`);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
    const monkey = process.env.TEST_DOCKER_USERNAME;
    console.log(`My favorite food is ${monkey}`)
  }
}

main();

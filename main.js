// VARIABLES
const car = {
    make: 'Tesla',
    model: 'Roadster',
    color: 'red',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 10;
        alert(`New Mileage: ${this.mileage}`);
    },
}

// FUNCTIONS
// LOGS ALL OF OUR CAR'S CURRENT STATS TO THE CONSOLE
const reWriteStats=()->(
    console.log('make: $(car.make)');
    
/*
FUNCTION reWriteStats(){

}
*/

// MAIN PROCESS
// CAPTURES KEYBOARD INPUT. DEPENDING ON THE LETTER PRESSED IT WILL "call" (execute) DIFFERENT FUNCTIONS.
document.onkeyup = (event) => {
    // CAPUTUES THE KEY PRESS, CONVERTS IT TO LOWERCASE, AND SAVES IT TO A VARIABLE.
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter === "d") {
        car.driveToWork();
        reWriteStats();
    }

}
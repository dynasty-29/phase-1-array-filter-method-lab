// // Code your solution here
// findMatching- This function takes an array of drivers' names and a string as arguments, 
//and returns the matching list of drivers. The function should be case insensitive.
function findMatching(drivers, str){
    const newDriver = [];
    const newStr = str.toLowerCase();

    for (const drive of drivers){
        if(drive.toLowerCase() === newStr){
            newDriver.push(drive);
        }
    }
    return newDriver;
}
// fuzzyMatch - This function takes an array of drivers' names and a string as arguments 
//for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, str){
    const matchDriver = [];
    const strLooking = str.toLowerCase();

    for (const driver of drivers){
        if(driver.toLowerCase().startsWith(strLooking)){
            matchDriver.push(driver);
        }
    }
    return matchDriver;
}
// matchName - This function takes an array of driver objects and a string as arguments. 
//Each driver object has two properties: name and hometown. 
//The function should return each element whose name property matches the provided string argument.
function matchName(driver, str){
    const newObj = [];
    for (const obj of driver){
        if(obj.name === str){
            newObj.push(obj);
        }
    }    
    return newObj;
}
// Code your solution here

/*

function findMatching(drivers, name){
    return name.filter(
        (matchingNames) => matchingNames.toLowerCase() === drivers.toUpperCase()
 }
 */

function findMatching(drivers, name) {
    return drivers.filter((drivers) => name.toLowerCase() === drivers.toLowerCase());
}

function fuzzyMatch(drivers, name) {
return drivers.filter((driver) => driver.startsWith(name, 0));
}

function matchName (person, propertiesByName) {
    return person.filter(
        details => details.name === propertiesByName
    )
}
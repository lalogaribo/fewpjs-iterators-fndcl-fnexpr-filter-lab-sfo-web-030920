function findMatching(drivers, name) {
  let result = drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
  if (!result) {
    return [];
  }
  return result;
}

function fuzzyMatch(drivers, letter) {
  let results = drivers.filter((driver) => driver.charAt(0) === letter.charAt(0));
  if (!results) {
    return [];
  }
  return results;
}

function matchName(drivers, name){
  return drivers.filter((driver) => driver.name === name)
}

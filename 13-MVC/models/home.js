const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

const homeDataPath = path.join(rootDir, 'data', 'homes.json');

class Home {
  constructor(houseName) {
    this.houseName = houseName;
  }

  save() {
    // First, read existing homes
    Home.fetchAll((homes) => {
      homes.push(this); // add new home
      fs.writeFile(homeDataPath, JSON.stringify(homes), (err) => {
        if (err) {
          console.error("Error writing file:", err);
        } else {
          console.log("Home saved successfully!");
        }
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      if (err) {
        // If file doesn’t exist or can’t be read, return empty array
        console.error("Error reading file (returning empty array):", err.message);
        callback([]);
      } else {
        try {
          const homes = JSON.parse(data);
          callback(homes);
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError.message);
          callback([]);
        }
      }
    });
  }
}

module.exports = Home;

const chromedriver = require("chromedriver") // Pulls automatically from 
const geckodriver = require("geckodriver")   // '/node_modules' with these requires
module.exports = {
  "src_folders": "tests",
  "page_objects_path": "pageObjects",

  "test_settings": {
    "test_workers": true,

    "default": {                        // Default settings apply across the board.
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      }
    },

    "chrome": {
      "webdriver": {
        "start_process": true,
        "server_path": chromedriver.path,   // Automatically formatted for Mac/Windows
        "port": 9515                        // Chrome needs a port ¯\_(ツ)_/¯
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "w3c": false
        }
      }
    },

    "firefox": {
      "webdriver": {
        "start_process": true,
        "server_path": geckodriver.path,    // Firefox breaks if you add a port
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "acceptInsecureCerts": true
      }
    }
  }
}
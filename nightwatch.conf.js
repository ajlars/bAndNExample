const chromedriver = require("chromedriver")
const geckodriver = require("geckodriver")
module.exports = {
  "src_folders": "tests",
  "page_objects_path": "pageObjects",

  "test_settings": {
    "test_workers": true,
  
    "default": {
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      }

    },

    "chrome":{
      "webdriver": {
        "start_process": true,
        "server_path": chromedriver.path,
        "port": 9515
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
        "server_path": geckodriver.path,
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "acceptInsecureCerts": true
            }
    }
  }
}
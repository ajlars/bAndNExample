var utilities = require('../testAssets/utilities')
module.exports = {
    url: "http://www.barnesandnoble.com",
    elements: {
        searchBar: "#searchBarBN",
        signInLink: "#signInLink",
        signedInHeader: "a.account-sign-in",
        searchResultHeader: {
            selector: "//h1[contains(text(), 'results\nfor\n')]",
            locateStrategy: "xpath"
        }
    },
    commands: [utilities, {                                // Commands can be created inline
        searchFor: function (searchTerm) {      // *or* referenced externally.
            this.waitForElementVisible("@searchBar")
                .clearValue("@searchBar")
                .setValue("@searchBar", searchTerm)
                .click(".icon-search-2")        // If you only use a selector once
            return this                         // it doesn't hurt to NOT put it in
        },                                      // the elements section.
        pickSearchResult: function (number){
            this.api.useXpath()
            this.waitForElementVisible(`(//div[contains(@class, 'product-shelf-title')])[${number}]`)
                .click(`(//div[contains(@class, 'product-shelf-title')])[${number}]`)
                .api.useCss()
            return this
        },
        openMainCategory: function (categoryName) {
            this.useXpath()
                .click(`//ul[@id='nav']/li/a[text()='${categoryName}']`)
                .useCss()
            return this
        },
        openSubCategory: function (mainCategory, subCategory) {
            this.useXpath()
                .moveToElement(`//ul[@id='nav']/li/a[text()='${mainCategory}']`, 2, 2)
                .click(`//ul[@id='nav']/li/a[text()='${mainCategory}']/..//div[@class='mb-s']/a[text()='${subCategory}']`)
                .useCss()
            return this
        },
        signIn: function (username, password) {
            this.waitForElementVisible("#signInLink")
                .click("#signInLink")
                .waitForElementVisible("iframe[title='Sign in or Create an Account']")
            this.api.element("css selector", "iframe[title='Sign in or Create an Account']", result => {
                this.api.frame(result.value)
            })
            this.waitForElementVisible("#email", 10000)
                .setValue("#email", username)
                .setValue("#password", password)
                .clickButtonByText("Secure Sign In")
                .api.frame(null)
            this.waitForElementNotPresent("#signInLink")
            return this
        },
        signOut: function () {
            this.moveToElement("#myAccountMenu", 2, 2)
                .waitForElementVisible("li.logout-color > a")
                .click("li.logout-color > a")
                .waitForElementVisible("#signInLink")
            return this
        }
    }]
}
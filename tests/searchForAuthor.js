let nav = {}
let item = {}
module.exports = {
    beforeEach: browser => {
        nav = browser.page.navController();        // More than one page object? No problem.
        item = browser.page.itemPage();     // Just initialize both :)
        nav.navigate();
    },
    "Can I search stuff?": browser => {   
        nav.searchFor("Brandon Sanderson")
            .waitForElementVisible("@searchResultHeader")
            .assert.containsText("@searchResultHeader", "Brandon Sanderson")
    },
    "Do I find what I want?": browser => {
        nav.searchFor("Skin Game Jim Butcher")
            .pickSearchResult(1)
        item.waitForElementVisible("@itemTitle")
            .assert.containsText("@itemTitle", "Skin Game")
            .assert.containsText("@authors", "Jim Butcher")
    }
}
let nav = {}
let item = {}
module.exports = {
    beforeEach: browser => {
        nav = browser.page.navBar();
        item = browser.page.itemPage();
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
let nav = {}
module.exports = {
    before: browser => {
        nav = browser.page.navBar();
        nav.navigate();
    },
    "Can I sign in?": browser => {
        nav.signIn("qajlarson@gmail.com", "T3stingForQ@!!")
            .assert.elementNotPresent("@signInLink")
            .assert.containsText("@signedInHeader", "Test")
    },
    "Can I sign out?": browser => {
        nav.signOut()
            .assert.visible("@signInLink")
            .assert.containsText("@signedInHeader", "Sign In")
            .expect.element("@signedInHeader").not.to.contain.text("Test")
    }
}
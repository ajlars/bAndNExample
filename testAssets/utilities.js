module.exports = {
    clickButtonByText: function(text){
        this.api.useXpath()
        this.click(`//button[contains(text(), '${text}')]`)
        this.api.useCss()
        return this
    }
}
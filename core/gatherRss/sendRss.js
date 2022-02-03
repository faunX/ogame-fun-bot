const {Selector} = require('testcafe');
const planetNavigator = require('../navigator/planetNavigator');
const menuNavigator = require('../navigator/menuNavigator');
const setDestination = require('../navigator/setDestination')
module.exports = async function sendRss (t, from, to) {
    await planetNavigator(t, from, true)
    await menuNavigator(t,"fleet");
    var tmp = 0;
    /*tmp = Selector("a").withAttribute('href', "javascript:maxShip('ship202');");
    await t.click(tmp)*/
    await t.click("#ship202_input").pressKey('ctrl+a')
        .typeText("#ship202_input", '1200000')
    await t.click('.green')
    await setDestination(t,to)
    await t.click('.green')
    tmp = Selector("a").withAttribute('href', 'javascript:maxResources()');
    await t.click(tmp)
    /**
        tmp = Selector("input").withAttribute('name', 'metal');
        await t.click(tmp).pressKey('ctrl+a')
        .typeText(tmp, '0')
        tmp = Selector("input").withAttribute('name', 'crystal');
        await t.click(tmp).pressKey('ctrl+a')
        .typeText(tmp, '0')
        tmp = Selector("input").withAttribute('name', 'deuterium');
        await t.click(tmp).pressKey('ctrl+a')
        .typeText(tmp, '0')
     */
    tmp = Selector("label").withAttribute('for', 'radio_3');
    await t.click(tmp)
    await t.click('.green')
    console.log("-------------------");
    console.log("Sent Rss from " + from + " to " + to);
    console.log("-------------------");
}

const {Selector} = require('testcafe');
const menuNavigator = require('../navigator/menuNavigator')
const moonNavigator = require('../navigator/moonNavigator')

module.exports = async function sendExpeditionenFrom(t , from, bar, count) {
    await t.wait(500)
    await moonNavigator(t, from, false);
    await menuNavigator(t, "galaxy")
    await t.wait(500)
    const system = Selector('input').nextSibling(1);
    await t.click(system).pressKey('ctrl+a')
        .typeText(system, (Math.floor(Math.random() * 299) + 1).toString())
    await t.wait(200)
	await t.click('#showbutton')
    await t.wait(200)
    await t.click('#expeditionbutton')
    bar.update(count);
    await t.wait(200)
    await t.click('#ship210_input').pressKey('ctrl+a')
        .typeText('#ship210_input', '5000')
        .click('.green');
    await t.wait(200)
    await t.click('.green')
    await t.wait(200)
    await t.click('.green')
    await t.wait(200)
    await menuNavigator(t, "galaxy")
    await t.wait(200)
    bar.update(count + 1);
}


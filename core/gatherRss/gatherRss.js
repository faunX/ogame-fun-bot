const planetNavigator = require('../navigator/planetNavigator');
const menuNavigator = require('../navigator/menuNavigator');
const sendRss = require('./sendRss')
const login = require("../login");
fixture`Ogame Fun Bot gatherRss`
    .page`https://earth.ogame.fun/`;

test('gatherRss', async t => {
    await login(t)
    let destination = "miner01"
    if(process.argv[4]) {
        destination = process.argv[4];
    }
    //if (destination !== "port02")
    //    await sendRss(t, "port02", destination)
    //if (destination !== "port03")
     //   await sendRss(t, "port03", destination)
    //if (destination !== "port04")
     //   await sendRss(t, "port04", destination)
    if (destination !== "port05")
        await sendRss(t, "port05", destination)
    if (destination !== "moving")
        await sendRss(t, "moving", destination)
    if (destination !== "miner01")
        await sendRss(t, "miner01", destination)
    if (destination !== "miner02")
        await sendRss(t, "miner02", destination)
    if (destination !== "miner03")
        await sendRss(t, "miner03", destination)
    if (destination !== "miner04")
        await sendRss(t, "miner04", destination)
    if (destination !== "miner05")
        await sendRss(t, "miner05", destination)

});

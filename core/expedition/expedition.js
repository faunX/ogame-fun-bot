const login = require('../login');
const sendExpeditionFrom = require('./sendExpeditionFrom');
const planetNavigator = require('../navigator/planetNavigator');
const {Selector} = require('testcafe');
const cliProgress = require('cli-progress');

fixture`Ogame Fun Bot Expedition`
    .page`https://earth.ogame.fun/`;

test('Expedition', async t => {
    /**
     * Log in User
     */
    await login(t)
    console.log("___________________");
    console.log("Logged In User");

    /**
     * Initial Values
     */
    let counter = 1;
    let status = true;
    let overAllStartTime = Date.now();
    let overAllDurationTime = 0;
    let endDate = 0;
    let planetArray = [
        "port02",
        "port03",
        "port04",
        "port05",
        "miner01",
    ]

    const darkMatter = Selector('#current_darkmatter');
    let waveDarkMatter = 0;
    console.log("___________________");
    console.log("Start Expedition Bot");
    let startDarkMatter = parseInt(await darkMatter.getAttribute("data-real"))
    console.log("Current Dark Matter: " + startDarkMatter);
    while (status) {
        console.log("----------------------")
        if (counter === 1)
            console.log("Start " + (counter) + " Expedition wave.");

        const bar = new cliProgress.SingleBar({}, cliProgress.Presets.rect);
        let count = 1;
        bar.start(10, 0)
        // update the current value in your application..
        for (const element of planetArray) {
            await sendExpeditionFrom(t, element, bar, count);
            count = count + 2;
        }
        // stop the progress bar
        bar.stop();

        console.log("Expedition wave sent.");
        console.log("----------------------")
        let endDarkMatter = parseInt(await darkMatter.getAttribute("data-real"))
        endDate = await Date.now();

        if (counter > 1) {
            console.log("Bot gathered " + (endDarkMatter - waveDarkMatter) + " Dark Matter at wave " + (counter - 1));
            overAllDurationTime = (endDate - overAllStartTime);
            console.log("Bot is running for " + millisToMinutesAndSeconds(overAllDurationTime) + "m");
            console.log("Current Dark Matter: " + parseInt(await darkMatter.getAttribute("data-real")));
            console.log("Bot gathered " + (endDarkMatter - startDarkMatter) + " overall");
        }

        await t.navigateTo('https://earth.ogame.fun/game.php?page=fleetTable');
        const fleetTime = Selector('#fleettime_1');
        let time = parseInt(await fleetTime.getAttribute("data-fleet-end-time"))
        console.log("Fleet arriving back at: " + new Date(parseInt(time + "000")));
        let arriveTime = ((parseInt(time + "000") - Date.now()) + 5000)
        await t.wait(arriveTime);

        waveDarkMatter = parseInt(await darkMatter.getAttribute("data-real"))
        endDate = Date.now();
        console.log("----------------------")
        counter++;
        console.log("Start " + (counter) + " Expedition wave.");

        if (counter === 80) {
            status = false;
        }
    }
});

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

async function sendExpeditionBulk(t, planetArray) {
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.rect);
    let count = 1;
    bar.start(10, 0)
    // update the current value in your application..
    for (const element of planetArray) {
        await sendExpeditionFrom(t, element, bar, count);
        count = count + 2;
    }
    // stop the progress bar
    bar.stop();
}

async function waitForFleet(t) {
    await t.navigateTo('https://earth.ogame.fun/game.php?page=fleetTable');
    const fleetTime = Selector('#fleettime_1');
    let time = parseInt(await fleetTime.getAttribute("data-fleet-end-time"))
    console.log("Fleet arriving back at: " + new Date(parseInt(time + "000")));
    let arriveTime = ((parseInt(time + "000") - Date.now()) + 5000)
    await t.wait(arriveTime);
}

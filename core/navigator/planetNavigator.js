module.exports = async function planetNavigator(t, planet, log) {

    switch (planet) {
        case "port02":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=3660');
            break;
        case "port03":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=3682');
            break;
        case "port04":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=3683');
            break;
        case "port05":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=3684');
            break;
        case "moving":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=3736');
            break;
        case "miner01":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=3777');
            break;
        case "miner02":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=4049');
            break;
        case "miner03":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=4086');
            break;
        case "miner04":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=4092');
            break;
        case "miner05":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=4097');
            break;
    }
    if(log)
	console.log("Navigate to " + planet);
}

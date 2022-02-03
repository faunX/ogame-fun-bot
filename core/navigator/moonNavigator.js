module.exports = async function moonNavigator(t, moon, log) {

    switch (moon) {
        case "port02":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=3744');
            break;
        case "port03":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=4114');
            break;
        case "port04":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=4766');
            break;
        case "port05":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=4732');
            break;
        case "moving":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=&cp=4771');
            break;
    }
    if(log)
	console.log("Navigate to " + planet);
}

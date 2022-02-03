module.exports = async function menuNavigator(t, menu) {

    switch (menu) {
        case "overview":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=overview');
            break;
        case "buildings":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=buildings');
            break;
        case "trader":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=trader');
            break;
        case "research":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=research');
            break;
        case "shipyard":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=shipyard&mode=fleet');
            break;
        case "defense":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=shipyard&mode=defense');
            break;
        case "fleet":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=fleetTable');
            break;
        case "galaxy":
            await t.navigateTo('https://earth.ogame.fun/game.php?page=galaxy');
            break;
    }

}

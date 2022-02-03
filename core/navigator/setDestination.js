const {Selector} = require('testcafe');

module.exports = async function setDestination(t, planet) {

    switch (planet) {
        case "port02":
            var tmp = Selector("a").withAttribute('href', 'javascript:setTarget(2,115,7,1);updateVars();');
            await t.click(tmp)
            break;
        case "port03":
            var tmp = Selector("a").withAttribute('href', 'javascript:setTarget(3,154,9,1);updateVars();');
            await t.click(tmp)
            break;
        case "port04":
            var tmp = Selector("a").withAttribute('href', 'javascript:setTarget(4,141,9,1);updateVars();');
            await t.click(tmp)
            break;
        case "port05":
            var tmp = Selector("a").withAttribute('href', 'javascript:setTarget(5,151,10,1);updateVars();');
            await t.click(tmp)
            break;
        case "moving":
            var tmp = Selector("a").withAttribute('href', 'javascript:setTarget(5,151,9,1);updateVars();');
            await t.click(tmp)
            break;
        case "miner01":
            var tmp = Selector("a").withAttribute('href', 'javascript:setTarget(5,290,14,1);updateVars();');
            await t.click(tmp)
            break;
        case "miner02":
            var tmp = Selector("a").withAttribute('href', 'javascript:setTarget(5,294,12,1);updateVars();');
            await t.click(tmp)
            break;
        case "miner03":
            var tmp = Selector("a").withAttribute('href', 'javascript:setTarget(5,294,13,1);updateVars();');
            await t.click(tmp)
            break;
        case "miner04":
            var tmp = Selector("a").withAttribute('href', 'javascript:setTarget(5,294,14,1);updateVars();');
            await t.click(tmp)
            break;
        case "miner05":
            var tmp = Selector("a").withAttribute('href', 'javascript:setTarget(5,294,15,1);updateVars();');
            await t.click(tmp)
            break;

    }

}

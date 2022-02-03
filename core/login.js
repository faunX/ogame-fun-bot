module.exports = async function login (t) {
    await t.typeText('#username', 'Sol')
        .typeText('#password', 'yyZjrU3hxdgH2TH')
        .click('button');
}

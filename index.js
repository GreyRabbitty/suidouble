const SuiMaster = require('./lib/SuiMaster.js');
const SuiInBrowser = require('./lib/SuiInBrowser.js');
const SuiTestScenario = require('./lib/SuiTestScenario.js');
const SuiObject = require('./lib/SuiObject.js');
const SuiLocalTestValidator = require('./lib/SuiLocalTestValidator.js');

const { TransactionBlock,Transactions } = require('@mysten/sui.js/transactions');

module.exports = {
    SuiMaster,
    SuiObject,
    SuiInBrowser,
    SuiTestScenario,
    SuiLocalTestValidator,
    MIST_PER_SUI: SuiMaster.MIST_PER_SUI,

    TransactionBlock: TransactionBlock,
    Transactions: Transactions,
};
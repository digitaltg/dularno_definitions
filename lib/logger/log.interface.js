/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

class LoggerInterface {
    constructor(deps) {}

    /**
     *
     * @param {string} action the action to log
     * @param {string} type  the type
     * @param {*} data associated to the log event
     */
    async log(action, type, data) {}
}

exports.LoggerInterface = LoggerInterface;

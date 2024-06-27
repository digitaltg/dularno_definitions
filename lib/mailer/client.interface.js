/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

/**
 * @class MailerClientInterface
 */
class MailerClientInterface {
    /**
     *Constructor
     * @param {Object} config // TODO: will be used later
     */
    constructor(config) {}

    /**
     * Send message to recipients
     * @param {string} message the content to send in plain text
     * @param {string|Object} to a list of destinations that will receive the mails
     * @param {object} options others values needed to be used. SPecially
     * we have the subject and the html
     */
    async send(message, to, options = {}) {}
}

module.exports.MailerClientInterface = MailerClientInterface;

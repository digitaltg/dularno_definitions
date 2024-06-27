/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

class MailerAgentInterface {
    constructor(config) {
        /**
         * A map of future clients
         * @type {[string]: MailerClientInterface }
         */
        this.clients = {};
    }

    /**
     * Get an instance of client by name
     * @param {string} clientName. It is typically a key from
     * the dictionnary returned the static methods clientNames
     * @returns {MailerClientInterface} a mailer client
     */
    client(clientName) {}

    /**
     * Get the list of all available agents as a map
     * @returns a map of all client supported by the agent
     * @example
     * return { MAILTRAP: "mailtrap"};
     */
    // eslint-disable-next-line getter-return
    static get clientNames() {}
}

module.exports.MailerAgentInterface = MailerAgentInterface;

/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

class MailerInterface {
    constructor(params) {}

    /**
     *
     * @param {string} name the name of the agent we want to get. We recommend to the static acess
     * Mailer.agentNames[name]
     * @returns
     */
    agent(name) {}

    /**
     * Get the list of all available agents
     * return { NODE_MAILER: "nodemailer"};
     */
    // eslint-disable-next-line getter-return
    static get agentNames() {}
}

module.exports.MailerInterface = MailerInterface;

/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

const { DatabaseDaoInterface } = require("./dao.interface");

class DatabaseInterface {
    constructor(config) {
        this.config = config;
    }

    /**
     * Connect
     */
    async connect() { }

    /**
     * Disconnect
     */
    async disconnect() { }

    /**
     *
     * @param {string} name
     * @param {Object} options
     */
    async createCollection(name, options) { }

    /**
     *
     * @param {strubg} name
     */
    async hasCollection(name) {}

    /**
     *
     * @param {string} collection
     * @param {Object} query
     * @param {Object} options
     */
    async find(collection, query, options) {}

    /**
     *
     * @param {string} collection
     * @param {string} id
     * @param {string} options
     */
    async findById(collection, id, options) {}

    /**
     *
     * @param {string} collection
     * @param {string} doc
     */
    async create(collection, doc) {}

    /**
     *
     * @param {string} collection
     * @param {string} query
     * @param {string} options
     */
    async read(collection, query, options) {}

    /**
     *
     * @param {string} collection
     * @param {string} doc
     * @param {Object} context
     */
    async update(collection, doc, context) {}

    /**
     *
     * @param {string} collection
     * @param {Object} query
     */
    async delete(collection, query) {}

    /**
     *
     * @param {string} collection
     * @param {string} id
     */
    async deleteById(collection, id) {}

    /**
     *
     * @param {string} collection
     * @param {Object} query
     * @param {Object} options
     */
    async count(collection, query, options) {}

    /**
     *
     * @param {DatabaseDaoInterface} dao
     * @param {Options} modelOptions
     */
    async initializeModel(dao, modelOptions) { }
}

module.exports.DatabaseInterface = DatabaseInterface;

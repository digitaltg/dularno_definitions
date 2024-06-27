/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

const AbstractDatabase = require("./database.interface");

class DatabaseDaoInterface {
    /**
     * @param {AbstractDatabase} db
     * @param {Object} config
     */
    constructor(db, config) {}

    get options() {
        return {
            name: null,
        };
    }

    /**
     * @param {any} id
     * @returns Promise<any|null>
     */
    async findById(id) {}

    /**
     * @param {Object} criteria
     * @param {Object} order
     * @param {int|null} limit
     * @param {int|null} offset
     * @returns Promise<any[]>
     */
    async findBy(criteria, order, limit, offset) {}

    /**
     * @param {Object} criteria
     * @returns Promise<any|null>
     */
    async findOneBy(criteria) {}

    /**
     * @param {Object} data
     * @returns Promise<any>
     */
    async create(data, options) {}

    /**
     * @param {Object} data
     * @returns Promise<any>
     */
    async update(data, options) {}

    /**
     * @param {Object} query
     * @returns Promise<any>
     */
    async remove(query) {}

    /**
     * @param {Object} query
     * @returns Promise<any>
     */
    async count(query) {}

    /**
     * @param {string} collectionName
     * @param {string} id
     * @returns
     */
    async removeById(id) {}
}

exports.DatabaseDaoInterface = DatabaseDaoInterface;

/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

/**
 * @class CacheInterface
 */
class CacheInterface {
    constructor(config) {}

    /**
     *
     * @param {*} name
     */
    addContainer(name) {}

    /**
     *
     * @param {string} name
     */
    deleteContainer(name) {}

    /**
     *
     * @param {*} key
     * @param {*} value
     * @param {*} containerName
     */
    set(key, value, containerName) {}

    /**
     *
     * @param {*} key
     * @param {*} containerName
     */
    get(key, containerName = undefined) {}

    /**
     *
     * @param {string} key
     * @param {string} containerName
     */
    delete(key, containerName = undefined) {}
}

module.exports.CacheInterface = CacheInterface;

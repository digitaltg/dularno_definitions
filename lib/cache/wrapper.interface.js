/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

/**
 * @class CacheWrapperInterface
 * A singleton like class
 */
class CacheWrapperInterface {
    /**
     *
     * @param {*} config
     */
    constructor(config) {}

    /**
     * Get an instance the wrapper
     *
     * @returns {CacheInterface} the default instance
     */
    // eslint-disable-next-line getter-return
    get instance() {}

    /**
     * Create a new instance of a cache
     *
     * @param {string} key
     * @param {Object} config
     * @returns the created instance
     */
    async createInstance(key, config) {}

    /**
     * Delete an instance by providing its instance
     *
     * @param {string} key
     */
    async deleteInstance(key) {}
}

module.exports.CacheWrapperInterface = CacheWrapperInterface;

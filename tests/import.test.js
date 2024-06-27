/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
const {
    DatabaseInterface, DatabaseDaoInterface,
    MailerAgentInterface, MailerClientInterface, MailerInterface,
    LoggerInterface,
    CacheInterface, CacheWrapperInterface,
} = require("..");

describe("[Dularno] Definition Module", () => {
    test("Should import database interface", () => {
        class TestDatabase extends DatabaseInterface {}
        class TestDatabaseDao extends DatabaseDaoInterface {}

        expect(true).toBe(true);
    });

    test("Should import mailer interface", () => {
        class MailerAgent extends MailerAgentInterface {}
        class MailerClient extends MailerClientInterface {}
        class Mailer extends MailerInterface {}

        expect(true).toBe(true);
    });

    test("Should import cache interface", () => {
        class Cache extends CacheInterface {}
        class CacheWrapper extends CacheWrapperInterface {}

        expect(true).toBe(true);
    });

    test("Should import log interface", () => {
        class Logger extends LoggerInterface {}

        expect(true).toBe(true);
    });
});

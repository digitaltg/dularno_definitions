const { CacheInterface } = require("./cache/cache.interface");
const { CacheWrapperInterface } = require("./cache/wrapper.interface");
const { DatabaseDaoInterface } = require("./database/dao.interface");
const { DatabaseInterface } = require("./database/database.interface");
const { LoggerInterface } = require("./logger/log.interface");
const { MailerAgentInterface } = require("./mailer/agent.interface");
const { MailerClientInterface } = require("./mailer/client.interface");
const { MailerInterface } = require("./mailer/mailer.interface");

exports.DatabaseInterface = DatabaseInterface;
exports.DatabaseDaoInterface = DatabaseDaoInterface;

exports.MailerAgentInterface = MailerAgentInterface;
exports.MailerClientInterface = MailerClientInterface;
exports.MailerInterface = MailerInterface;

exports.CacheInterface = CacheInterface;
exports.CacheWrapperInterface = CacheWrapperInterface;

exports.LoggerInterface = LoggerInterface;

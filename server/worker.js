const{gitHubJobs}= require ("./Api/Api.js")

var CronJob = require('cron').CronJob;
new CronJob('43 * * * *', gitHubJobs, null, true, 'America/Los_Angeles');
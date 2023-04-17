const cucumber = require('cypress-cucumber-preprocessor').default
const { create } = require('cucumber-html-reporter')

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  on('after:run', (results) => {
    const options = {
      theme: 'bootstrap',
      jsonFile: 'cypress/cucumber-json/report.json',
      output: 'cypress/reports/cucumber-html-report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        'App Version': '1.0.0',
        'Test Environment': 'STAGING',
        'Browser': config.browserName,
        'Platform': config.platform,
        'Parallel': 'Scenarios',
        'Executed': 'Remote'
      }
    }

    create(options)
  })
}

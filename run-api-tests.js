const cypress = require('cypress');
var ambiente = process.argv.slice(2);

if (ambiente == "") {
  console.log('Argumento "Ambiente" inválido')
} else {
  console.log("API testes sendo executados em ambiente " + ambiente)
  cypress.run({
    // the wildcard path is relative to the current working directory
    spec: './cypress/integration/api-tests/*.spec.js',
    browser: "electron",
    configFile: `config/${ambiente}.json`,
    env: {
      bDUser: process.env.BD_USER_DEV,
      bDPassword: process.env.BD_PASS_USER_DEV,
    }
  })
}

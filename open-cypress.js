const cypress = require('cypress');
var ambiente = process.argv.slice(2);
let userPass = "";

if (ambiente == "") {
  console.log('Argumento "Ambiente" inválido')
} else {
  if (ambiente == "hml") { userPass = process.env.CARTEIRA_FLUXO_BD_PASSWORD_HML;} 
  else {userPass = process.env.CARTEIRA_FLUXO_BD_PASSWORD_DEV;}

  cypress.open({
    // the wildcard path is relative to the current working directory
    spec: './cypress/integration/**/*.spec.js',
    browser: "electron",
    configFile: `config/${ambiente}.json`,
    env: {
      carteiraFluxoBDUser: process.env.CARTEIRA_FLUXO_BD_USER_DEV,
      carteiraFluxoBDPassword: userPass,
    }
  })
}

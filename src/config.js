require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiServer: process.env.API_SERVER || '/api',
  proxyServer: process.env.PROXY_SERVER || 'http://localhost:8080',
  app: {
    title: 'VEMS Web',
    description: 'Web frontend for VEMS',
    head: {
      titleTemplate: 'VEMS | %s'
    }
  }
}, environment);

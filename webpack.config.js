
const webpackMerge = require('webpack-merge');
const common = require('./webpack/webpack.common');
/**
 * process.env.NODE_ENV should be one of the following
 * 1. dev
 * 3. prod
 * 
 */

const webpackEnv = (environment) => {
  const webpackEnvMap = {
    dev: 'dev',
    prod: 'prod'
  }

  return webpackEnvMap[environment]

}

const env = process.env.NODE_ENV || 'dev'

const envConfig = require(`./webpack/webpack.${webpackEnv(env)}.js`);

module.exports = webpackMerge(common(env), envConfig)

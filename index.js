'use strict'

const gitLabel        = require('git-label')
const labels          = require('./github-labels')
const Promise         = require('bluebird')

/*
{
	api   : '',
	repo  : 'username/repo',
	token : 'yoursupersecretapitoken'
}
*/

const config = require('./.github.api.token')
const api    = config.api
const token  = config.token

module.exports = Promise.map([
	'volebo/dev',
	'volebo/www-wix',
	'volebo/volebo-express'
], repo => {

	const cfg = {
		api,
		token,
		repo
	}

	// add specified labels to a repo
	return gitLabel.add(cfg, labels)
})
	.map(res => {
		console.log('RESULT:', /*repo,*/ res)
		return true
	})
	.catch(err => {
		console.log('error', err)
		throw err
	})

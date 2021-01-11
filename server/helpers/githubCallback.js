const axios = require('axios')
require('dotenv').config();

const githubCallback = (req, res) => {

	const body = {
		client_id: process.env.GH_CLIENT_ID,
		client_secret: process.env.GH_CLIENT_SECRET,
		code: req.query.code
	};
	const opts = { headers: { accept: 'application/json' } };
	

	axios.post(`https://github.com/login/oauth/access_token`, body, opts)
	.then(res => res.data)
		.then(data => {
			// Make Sure That Our Data Came to Us
			res.send("Everything looks fine...");
			console.log('Whole Data: \n' + data);

			// Let's find out user
			axios.post(`https://api.github.com/user`, {},
				{headers: {
					Authorization: `token ${data['access_token']}`, 
					Accept: 'application/json' 
				}}
			)
			.then(data => {
				// Write whole user data
				console.log(data['data'])
			})
			.catch(e => console.log(e))
		})
		.catch(err => res.status(500).json({ message: err.message }));
}

module.exports = {githubCallback}
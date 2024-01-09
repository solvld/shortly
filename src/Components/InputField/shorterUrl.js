const apiKey = '3d1303931840477886b77a3c2d0802e7'

const url = 'https://api.rebrandly.com/v1/links'

const shortenUrl = async () => {
	const urlToShorten = inputField.value
	const data = JSON.stringify({ destination: urlToShorten })
	try {
		const response = await fetch(url, {
			method: 'POST',
			body: data,
			headers: {
				'Content-type': 'application/json',
				apikey: apiKey,
			},
		})
		// add code here
		if (response.ok) {
			const jsonResponse = await response.json()
			renderResponse(jsonResponse)
		}
	} catch (error) {
		console.log(error)
	}
}
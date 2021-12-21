/**
 * 34-promises workshop
 *
 * MINI-WORKSHOP:
 * Skriv om getJSON() till att vara Promise-baserad, så att vi kan skriva:
 *
 * getJSON('data/cats.json')
 *     .then(cats => {
 *         console.log("Got cats?", cats);
 *     })
 *     .catch(err => {
 *         console.log("NO CATS FOR YOU!", err);
 *     })
 */

 const getJSON = (url) => {
	//create new promise
	return new Promise((resolve,reject) => {
		// do stuff that was promised
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
		
		if (request.readyState === 4) {
			if (request.status === 200) {
				const data = JSON.parse(request.responseText);
				resolve(data);	
			} else {
				console.log("Request was *NOT* OK!");

				reject("could not get data");
			}
		}
	});

	request.open('GET', url);
	request.send();
	console.log("Request sent!");
		
	});
	
}

console.log('Getting data...');
getJSON('data/cats.json')
	// console.log('result from getJSON()',result);

	.then(cats => {
		console.log("Got cats?", cats);
		return getJSON('data/dogs.json')
	})
	.then(dogs =>{
		console.log("Got dogs?", dogs);
		return getJSON('data/birds.json')
	})
	.then(birds =>{
		console.log("Got birds?", birds)
	})
	.catch(err =>{
		console.log("No cats for you!", err);
	});

console.log('End of code');

//Get list cats
// getJSON('data/cats.json', (err, cats) => {
// 	if (err) {
// 		console.log("Could not get list of cats! Error was:", err);
// 		return;
// 	}

// 	console.log("Got list of cats:", cats);

// 	// Get list of dogs
// 	getJSON('data/dogs.json', (err, dogs) => {

// 		// Get list of birds
// 		getJSON('data/birds.json', (err, birds) => {

// 			// We finally done?

// 		});

// 	});
// });
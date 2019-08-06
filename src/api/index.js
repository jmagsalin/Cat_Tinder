// the address of our rails backend, saved as a constant value, because we never want to accidentally change it
const BASE = 'http://52.14.224.175:3000'

let getCats = function() {
	return fetch(BASE + '/cats') 
		.then((resp) => {
			let json = resp.json() 
			console.log(json);
			return json
		})
}

export  {
	getCats
}

let createCat = function(cat) {
	return fetch(BASE + '/cats', {
		body: JSON.stringify(cat),  
		headers: {  
			'Content-Type': 'application/json'
		},
		method: "POST"  
	})
		.then((resp) => {
			let json = resp.json()

			return json
		})
}

export  {
	createCat
}

// let updateCat = function(cat) {
// 	return fetch(Base + `/cats/${cat.id}`, {
// 		body: JSON.stringify(cat),  
// 		headers: {  
// 			'Content-Type': 'application/json'
// 		},
// 		method: "PATCH"
// 		})
// 			.then((resp) => {
// 			let json = resp.json()

// 		return json
// 	})
// }

// export {
// 	updateCat
// }
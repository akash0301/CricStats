
// var data
// const fetchSeries = async () => {
// 	try{
// 		let res = await fetch("https://cricket-live-data.p.rapidapi.com/series", {
// 			"method": "GET",
// 			"headers": {
// 				"x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
// 				"x-rapidapi-key": "d8365ba5d8msh3a682bcc2d3e1e3p18bf4bjsn547af9faab9d"
// 			}
// 		})
// 		data = await res.json()
// 		console.log(data.results[0].series[0])
// 		var count = 0;
// 		data.results[0].series.forEach(element => {
// 			console.log(element.series_name)
// 			var ref = document.getElementById('cards');
// 			ref.insertAdjacentHTML('beforeend', `<div class="card text-center mx-auto my-1 col-sm-12 col-md-3"><div class="card-body"><h5 class="card-title">${element.series_name}</h5><p class="card-text">${element.status}<br>${element.season}</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>`)
// 			count=count+1; 
// 		});
// 	}catch(err){
// 		console.log("Error", err)
// 	}
// }		
// fetchSeries()




// `<div class="card"><h3>${element.series_name}</h3>
// 			<p>${element.status}</p><p>${element.season}</p></div>`

// "season":"2020/21"
// "series_id":610
// "series_name":"Border-Gavaskar Trophy"
// "status":"Upcoming"
// "updated_at":"2020-09-20T23:00:02.000000Z"
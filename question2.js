const gamesUrl = "https://api.rawg.io/api/games";

function creatGames(games) {
	console.log(games);

	const gamesResult = document.querySelector(".results");

	let html = "";

	for (let i = 0; i < results.length; i++) {
		if (results[i].name) {
			continue;
		}
		console.log(results[i].name);

		html += `<div>
				<div class="image" style="background-image: url(${results[i].background_image});"></div>
				<h2>${results[i].name}</h2>
			</div>`;
	}

	gamesResult.innerHTML = html;
}

async function fetchGames() {
	try {
		const response = await fetch(gamesUrl);

		const results = await response.json();

		creatGames(results);
	} catch (error) {
		console.log(error);
	}
}
fetchGames();

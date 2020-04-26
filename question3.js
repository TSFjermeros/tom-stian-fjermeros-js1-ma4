const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const name = params.get("name");

const gamesUrl = "https://api.rawg.io/api/games/4200";

async function createGameDetails() {
	const heading = document.querySelector("h1");

	try {
		const response = await fetch(gamesUrl);

		const results = await response.json();
		console.log("details", details);

		heading.innerHTML = details.name;

		const image = document.querySelector(".background_image");
		image.innerHTML = "image" + details.image;

		const released = document.querySelector(".description");
		released.innerHTML = details.released;
	} catch (error) {
		heading.innerHTML = "error";
		console.log(error);
	}
}

createGameDetails();

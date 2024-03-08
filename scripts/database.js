const database = {
	heroes: [
		{
			id: 1,
			name: "Dynoguy",
			power: "Fire blasts",
		},
		{
			id: 2,
			name: "Hyperspeed",
			power: "Super speed",
		},
	],
	villains: [
		{
			id: 1,
			name: "Badhandshaker",
			power: "Doesn't shake hands well",
		},
		{
			id: 2,
			name: "Bookburner",
			power: "Burns books",
		},
	],
}

export const getHeroes = () => {
	return database.heroes.map((hero) => ({ ...hero }))
}

export const getVillains = () => {
	return database.villains.map((villain) => ({ ...villain }))
}

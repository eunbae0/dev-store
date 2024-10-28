function changeTitle(text) {
	return text
		.split(" ")
		.map((i) =>
			i
				.split("")
				.map((item, idx) => (idx === 0 ? item : item.toLowerCase()))
				.join("")
		)
		.join(" ");
}

function changeFileTitle(text) {
	return text
		.split(" ")
		.map((i) => i.toLowerCase())
		.join("_");
}

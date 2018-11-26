module.exports = async ({ Constants: { Colors, Text } }, documents, msg, commandData) => {
	let min = 1;
	let max = 6;
	if (msg.suffix) {
		const choices = msg.suffix.split(" ");
		if (choices.length === 1) {
			max = +choices[0];
		} else if (choices.length > 1) {
			min = +choices[0];
			max = +choices[1];
		}
	}
	if (!isFinite(min) || !isFinite(max)) {
		return msg.send({
			embed: {
				color: Colors.INVALID,
				title: "Those aren't valid numbers! 🔢",
				description: Text.INVALID_USAGE(commandData, msg.guild.commandPrefix),
			},
		});
	}
	if (min > max) [min, max] = [max, min];
	const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
	msg.send({
		embed: {
			color: Colors.SUCCESS,
			description: `You rolled a ${randNum}! 🎲`,
		},
	});
};

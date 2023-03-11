const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('court')
		.setDescription('Base command for discord court management.'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
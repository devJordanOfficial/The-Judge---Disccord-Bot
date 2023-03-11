const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('court')
        .setDescription('Base command for discord court management.')
        .addStringOption(option =>
            option.setName('status')
                .setDescription('Change whether or not the Court Stage is open or closed')
                .setRequired(true)
                .addChoices(
                    { name: 'Open', value: 'open' },
                    { name: 'Close', value: 'close' },
                )),
    async execute(interaction) {
        const status = interaction.options.getString('status')
        const stage = interaction.client.channels.cache.get('1083907530792644729')

        if (status === 'open') {
            stage.permissionOverwrites.edit('680642520509579401', { ViewChannel: true });
            await interaction.reply('The court is now open')
        } else if (status === 'close') {
            stage.permissionOverwrites.edit('680642520509579401', { ViewChannel: false });
            await interaction.reply('The court is now closed')
        }
    },
};
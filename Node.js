const Discord = require('discord.js');
const client = new Discord.Client();
const webhookId = '1397121011542921280';
const webhookToken = '0emrdvcekCRofteODCbg47TsnDCznx5gD6qP4lvGyTW1rNm_5rzDj2q8z7lZSPuCUROO';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    if (message.webhookID === webhookId) {
        // This message is from our webhook
        const channel = client.channels.cache.get(message.channel.id);
        
        // Format the message nicely
        const embed = new Discord.MessageEmbed()
            .setColor('#FFD700')
            .setTitle('تسجيل جديد في البطولة')
            .setDescription(message.content)
            .setTimestamp()
            .setFooter('L9RA3 GAMING | بطولات لقرع');
        
        // Delete the original plain message
        await message.delete();
        
        // Send the formatted embed
        channel.send(embed);
    }
});

client.login('MTM5NzEyMDI1NjM4MzkxNDA1Ng.Gkxb4W.rxsdLZQtkonVT-d0xBnUTiSgpMiU6mzAgSvJZc');
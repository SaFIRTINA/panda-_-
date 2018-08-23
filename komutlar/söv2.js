const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('ananı teflon tavaya oturtup götünü kızartıp portakalsız orospu çocuğu yaparım seni götünü siktiğimin evladı **__Bu Komut Eğlence İçindir Ciddiye Almayınız__**')
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'söv_2',
  description: 'Söver',
  usage: 'söv_2'
};

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
    .setDescription('senin anneni eyfel kulesine çıkarırım orda aşağı düşme tehlikesi içinde sikerim piç. __**Komut Tamamen Eğlence Amaçlıdır Ciddiye Almayınız!**__')
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
  name: 'söv_3',
  description: 'Küfür Eder',
  usage: 'söv_3'
};

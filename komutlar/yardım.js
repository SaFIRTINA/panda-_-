const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
    .setFooter('Hyper Panda-_- Komutlar')
   .addField("**Eğlence Komutları**", `h!eğlence_komutları`)
    .addField("**Müzik Komutları**", `h!müzik_komutları [ENG] = İngilizce`)
   .addField("**Avatar Komutları**", `h!avatar_komutları`)
  .addField("**Yetkili Komutları**", `h!yetkili_komutları`)
  .addField("**Ana Komutlar**", `h!ana_komutlar`)
    .addField("**Kahve-İç Komutları**", `h!kahveiç_komutları`)
  .addField("**Söv Komutları**", `h!söv_komutları`)
  .addField("**Ağlat Komutları**", `h!ağlat_komutları`) 
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};

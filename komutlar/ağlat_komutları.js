const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
    .setFooter('Hyper Panda-_- Komutlar')
  .addField("**Ağlat Komutları**", `\nh!ağlat = İstediğiniz Kişiyi Ağlatır \nh!ağlat_2 = İstediğiniz Kişiyi Ağlatır \nh!ağlat_3 = İstediğiniz Kişiyi Ağlatır \nh!ağlat_4 = İstediğiniz Kişiyi Ağlatır.`) 
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
  name: 'ağlat_komutları',
  description: 'Tüm Ağlat Komutlarını Gösterir.',
  usage: 'ağlat_komutları'
};

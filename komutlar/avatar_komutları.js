const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
    .addField("**Avatar Komutları**", `\nh!avatarım = Avatarınızı Gösterir \nh!isim_kartı_al = Avatarınızın Üstüne İsminiz Yazar \nh!imaj_al = Avatarınızın İmajını Alır \nh!gece_modu = İstediğiniz Bir Resim (url) Nin Gece Modunu Atar \nh!avatarı_döndür = İstediğiniz Bir Resim Url Nin Resmini Ters Döndürür \nh!avatarı_boyutlandır = İstediğiniz Bir Resim Url Sinin Resmini Küçültür`)
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
  name: 'avatar_komutları',
  description: 'Tüm avatar komutlarını gösterir.',
  usage: 'avatar_komutları'
};

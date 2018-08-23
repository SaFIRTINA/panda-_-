const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
    .setFooter('Hyper Panda-_- Komutlar')
  .addField("**Yetkili Komutları**", `h!ban = İstediğiniz Kişiyi Sunucudan Banlar \nh!rol-ekle = Etiketlediğiniz Kişiye Rol Ekler \nh!rol-al = İstediğiniz Kişinin Rolünü Alır  \nh!temizle = İstediğiniz Kadar Mesaj Siler (99)'A Kadar  \nh!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nh!unban = İstediğiniz Kişinin Yasağını Açar. \nh!sustur = İstediğiniz Kişiyi Susturur. \nh!oylama = Oylama Açar. \nh!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
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
  name: 'yetkili_komutları',
  description: 'Yetkili komutlarını gösterir.',
  usage: 'yetkili_komutları'
};

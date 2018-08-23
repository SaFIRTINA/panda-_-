const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
    .setFooter('Hyper Panda-_- Komutlar')
    .addField("**Müzik Komutları**", `\nh!blacklist = İstediğiniz Kişiyi Kara Listeye Alır  \nh!disconnect = Bot Disconnect Olur  \nh!id = Kendi ID Nizi Gösterir \nh!joinserver = Davet Linki Atar  \nh!np = Çalan Müziği Gösterir  \nh!pause = Çalan Müziği Durduru  \nh!play = Müzik Çalar  \nh!queue = Çalan Müzik Adını Gösterir  \nh!resetplaylist = Müzik Listesini Sıfırlar  \nh!restart = Çalan Müziği Yeniden Başlatır \nh!resume = Çalan Müziği Devem Ettirir  \nh!search = İnternet Sitesinden Video Arar  \nh!skip = Video Listesindeki Videoyu Oynatır  \nh!summon = Botu Ses Kanalına Çağırır \nh!volume =  Botun Sesini Arttırır`)
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
  name: 'müzik_komutları',
  description: 'Müzik Komutlarını Gösterir',
  usage: 'müzik_komutları'
};

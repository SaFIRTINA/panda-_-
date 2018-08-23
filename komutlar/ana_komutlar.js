const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
    .setFooter('Hyper Panda-_- Komutlar')
  .addField("**Ana Komutlar**", `\nh!yardım = BOT Komutlarını Atar. \nh!upvote = BOTA Upvote Verirsiniz (Bizi Mutlu Edersiniz) \nh!bot-durum = Botun Durumunu Gösterir \nh!yenilikler = Bot Yenilikleri Gösterir \nh!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nh!ping = BOT Gecikme Süresini Söyler. \nh!davet = BOT Davet Linkini Atar. \nh!istatistik = BOT İstatistiklerini Atar.`)
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
  name: 'ana_komutlar',
  description: 'Ana komutları gösterir.',
  usage: 'ana_komutlar'
};

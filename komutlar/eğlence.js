const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
    .setFooter('Hyper Panda-_- Komutlar')
  .addField("**Eğlence ve Kullanıcı Komutları:**", `\nh!8ball = Soru Sorar Cevaplarınızı Yanıtlar \nh!stresçarkı = Stresçarkı Çevirir \nh!emojiyazı = İstediğiniz Yazıları Emojili Gönderir \nh!banned = Dene ve Gör! \nh!altınım = Kaç Altınınız Olduğunu Gösterir  \nh!kanal_bilgi = Konuştuğunuz Kanalın Bilgisini Gösterir \nh!levelim = Levelinizi Gösterir \nh!rekt-at = İstediğiniz Kişiye Rekt-atar \nh!panda = Kimin Panda Olduğunu Gösterir \nh!öldür = İstediğiniz Kişiyi Öldürür \nh!run = Koşarsınız \nh!yumruK-at = Yumruk Atarsınız \nh!yumruck-at = Yumruk Atar İstediğiniz Kişiye Yumruk Atar  \nh!herkesebendençay = Herkese Çay Alırsınız. \nh!koş = Koşarsınız.\nh!çayiç = Çay İçersiniz. \nh!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nh!çayaşekerat = Çaya Şeker Atarsınız. \nh!yumruh-at = Yumruk Atarsınız. \nh!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nh!sunucuresmi = BOT Sunucunun Resmini Atar. \nh!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nh!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
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
  name: 'eğlence_komutları',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence_komutları'
};

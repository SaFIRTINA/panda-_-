const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix; "h!"

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


// Mustafa Eren'in Kodlaması [Başlangıç]
client.on(`ready`,() => {

client.bot.user.setActivity(`h!yardım | h!davet`, { type: 'WATCHING' });
client.bot.user.setActivity(`Porno`, { type: 'WATCHING' });
client.bot.user.setActivity(`Jüpiteri`, { type: 'WATCHING' });
client.bot.user.setActivity(`Bütün Komutlar Aktif h!davet`, { type: 'WATCHING' });
client.bot.user.setActivity(`Bütün Komutlar Aktif h!davet`, { type: 'WATCHING' });
client.bot.user.setActivity(`Pandasal Power | h!yardım | h!davet`, { type: 'WATCHING' });
client.bot.user.setActivity(`h!yardım| h!rol-ekle h!rol-al`, { type: 'WATCHING' });
client.bot.user.setActivity(`SaFIRTINA'Yı`, { type: 'WATCHING' });
});
// Mustafa Eren'in Kodlaması [Bitiş]

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('**İyidir Moruq Senden ?**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ezik') {
    msg.reply('**Lütfen Kimseyi Kötüleme ! **');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'fuck') {
    msg.reply('**LAN GÖT BENİMİ KANDIRCAN İNGİLİZCEMİZ İYİ EVELALLAH !**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Kimsin lan sen') {
    msg.reply('**Olm Hayırdır Artislik Yapamazsın Burda ! (Kime Yaptıysan)**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kimsin lan sen') {
    msg.reply('**Olm Hayırdır Artislik Yapamazsın Burda ! (Kime Yaptıysan)***');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Fuck') {
	  msg.delete(30)
    msg.reply('**LAN GÖT BENİMİ KANDIRCAN İNGİLİZCEMİZ İYİ EVELALLAH !**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Naber') {
    msg.reply('**İyidir Moruq Senden ?**');
  }
});

client.on('message', msg => {
  if (msg.content === 'h!panda') {
    msg.reply ('** SaFIRTINA#4616 Ve Ben**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'discord.gg') {
   msg.delete(30)
    msg.reply('Reklam Engellendi :no_entry_sign:');
  }
});

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join('h!söv ');
	if (mesaj.length < 1) return message.reply('**Kime Sövmek İstediğin Bana Vahiy Mi Gelecek ? !**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription.random(` ${mesaj} ` + message.author.username + '  Ben Senin Ta ananın amına teletabinin antenlerini sokar göbeğindeki televizyondan ulusal porno yayını yaparımananı özgürlük heykelinin yanmayan meşalesinde siker şehri duman ederimhollywood bulvarında donla gezen ananın amına topuklu ayakkabı sokayımananı ikiz kulelerinin yedinci katına cıkartır amına uçakla girerim..ananın o dazlak kafasına teflon tavayla vurur sersemletir sikerim.ananın buruşmuş amına tefal ütü basar dümdüz ederim.ananın amına windows 7 kurar mavi ekran hatası verinceye kadar sikerim')
    return message.channel.sendEmbed(embed);
};

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' h!yumruck-at');
	if (mesaj.length < 1) return message.reply('**Kime Yumruk Atcağını Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(` ${mesaj} ` + message.author.username + '  wew güzel yumruktu  Canın Acımış Olmalı! https://www.tenor.co/sPoM.gif')

    return message.channel.sendEmbed(embed);
};

client.on('message', msg => {
  if (msg.content === 'h!yumruk-at') {
   msg.delete(30)
    msg.channel.send('Ohh İyi Vurdu Helal Tontişime :D https://www.tenor.co/xzIx.gif ');
  }
});

 client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
   msg.delete(30)
    msg.reply('Küfür Etme ! :no_entry_sign:');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mk') {
   msg.delete(30)
    msg.reply('Küfür Etme ! :no_entry_sign:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mal') {
   msg.delete(30)
    msg.reply('Hakaret Etme ! :no_entry_sign:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'lan') {
   msg.delete(30)
    msg.reply('Argo Kelime Yasak Bunu Bilmiyormusunn :panda_face: :no_entry_sign:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'göt') {
   msg.delete(30)
    msg.reply('Küfür Etme ! :no_entry_sign:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
   msg.delete(30)
    msg.reply('Küfür Etme ! :no_entry_sign:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hayvan') {
   msg.delete(30)
    msg.reply('Lütfen Hayvansal Hakaret Etme !!! :no_entry_sign:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selamun Aleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin :smiley:');
  }
});

client.on('message', msg => {
  if (msg.content === 'h!yenilikler') {
    msg.channel.send('h!söv Komutları Eklendi h!ağlat Komutları Yarın Eklenicektir Yarın Daha Çok Yenilikler Ve Daha Fazlası ! Sende Botumuzu Sunucuna Eklemek İstiyorsan : **https://discordapp.com/api/oauth2/authorize?client_id=474184965635047425&permissions=8&scope=bot**');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin :smirk: ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nbr') {
    msg.reply('**İyidir Moruq Senden ?**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hayırsız bot') {
    msg.reply('**Öyle Olsun :sob: :sob:** ');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

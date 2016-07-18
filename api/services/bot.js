var TelegramBot = require('node-telegram-bot-api');
var token = '234026384:AAGZABaq3rQhKSOyIPkFlHwJMHJ6cfWrPD0';

var bot = new TelegramBot(
    token, {
        polling: true
});

bot.getMe().then(function(me){
    console.log('Hi my name is ' + me.username);
});

bot.onText(/^\Hola/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    bot.sendMessage(msg.chat.id, `¡Hola!, ¿Cómo te llamas?`).then(function (){
        console.log(`Hola`);
    });
});

bot.onText(/^\Soy (.+)$/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    bot.sendMessage(msg.chat.id, `Hola ${name}, soy un bot creado por ManuelOI y me programo ciertos procesos, ¿Quieres verlos?`).then(function (){
        console.log(`Respuesta 1 ${name}`);
    });
});

bot.onText(/^\Si/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    bot.sendMessage(msg.chat.id, `Ok, tengo tres palabras claves: Imagen, Ubicacion y Audio, experimenta escribiendo estas palabras poniendolas una a la vez en tu caja de texto. Escribe cualquiera de las palabras`).then(function (){
        console.log(`Hola`);
    });
});

bot.onText(/^\Imagen/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    var photo='/Users/yofo/Desktop/Salvador/ManuelOIbot/assets/images/persona.jpg';
    bot.sendPhoto(msg.chat.id,photo,{caption: "Imagen de Scarlett Johansson :)"}).then(function (){
       console.log("Envio de Imagen a "+name);
    });
});

bot.onText(/^\Ubicacion/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    var latitude = '20.080560504246307';
    var longitude = '-98.36879789829254';
    bot.sendLocation(msg.chat.id,latitude,longitude).then(function (){
       console.log("Envio de Ubicacion a "+name);
    });
});

bot.onText(/^\Audio/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    var audio = '/Users/yofo/Desktop/Salvador/ManuelOIbot/assets/images/aron.mp3';
    bot.sendAudio(msg.chat.id,audio).then(function (){
       console.log("Envio de Audio a "+name);
    });
});

bot.onText(/^\Adios/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    bot.sendMessage(msg.chat.id, `Regresa pronto. Se despide VeronicaBot, Adios!!`).then(function (){
        console.log(`Despedida`);
    });
});




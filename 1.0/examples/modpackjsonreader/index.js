var fs = require('fs');
var file = fs.readFileSync("modpack.json", "utf8");
var modpack = JSON.parse(file);
fs.writeFile("./modlist.html", "Modlist <br>", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("created .HTML");
});
fs.writeFile("./modlist.txt", "Modlist", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("created .TXT");
}); 
var type = "";
var version = "";
switch (modpack.modpackjson.version) {
    case "1.0":
        version = true;
        break;
    default:
        version = false;
        break;
}
switch (modpack.modpackjson.type) {
    case "modpack":
        type = true;
        break;
    default:
        type = false;
        break;
}
if (version && type) {
    modpack.dependencies.mods.forEach(function(object) {
        var name = object.name;
        fs.appendFile('./modlist.html', " \
    " + name + "<br>", function (err) {
            if (err) throw err;
            console.log(name + 'added to .HTML');
          });
        fs.appendFile('./modlist.txt', " \
    " + name, function (err) {
            if (err) throw err;
            console.log(name + 'added to .TXT');
          });
    });
}else {
    if (version){
        console.log("This is not a Modpack!")
    }else if (modpack){
        console.log("This reader needs modpackJSON version 1.0!")
    }
}




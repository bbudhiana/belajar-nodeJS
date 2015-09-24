var sensorKatakata = ["sedih", "buruk","marah"];

var sensorKostumKatakata = [];

function sensor(inStr) {
    for(idx in sensorKatakata) {
        inStr = inStr.replace(sensorKatakata[idx], "****");
    };
    for(idx in sensorKostumKatakata) {
        inStr = inStr.replace(sensorKostumKatakata[idx], "****");
    };
    return inStr;
}

function tambahSensorKata(kata) {
    sensorKostumKatakata.push(kata);
}

function getSensorKatakata() {
    return sensorKatakata.concat(sensorKostumKatakata);
}

/*
    proses exports dibutuhkan agar aplikasi NodeJS yang menggunakan module ini
    dapat mengakses fungsi-fungsi sensor, tambahSensorKata, getSensorKatakata.
    Setelah program ini dibuat, selanjutnya :
    1. buat package.json nya
       minimal : name, version, dan main harus terisi
       name adalah nama yg akan diload (dalam require) di suatu aplikasi node js lain
    2. buat README.md, isikan instruksi dan infor yang diperlukan
    3. dalam folder aplikasi package ini (folder sensorkan), gunakan konsole untuk membuat
       package (npm=node package module) :
       npm pack
    4. maka akan terbentuk file packagemodule_version.tgz
    5. kemudian selanjutnya misal kita buat aplikasi bacakalimat dengan memanfaatkan
       npm sensor_kata, maka dalam folder bacakalimat lakukan
       npm install ../sensorkan/sensor_kata-0.0.1.tgz
    6. dalam folder bacakalimat akan terbentuk folder node_modules yang isinya adalah package sensor_kata
    7. kemudian buat aplikasi bacakalimat.js dan lakukan
       var sensor = require("sensor_kata")
       ini untuk memanfaatkan fungsi-fungsi yang terdapat dalam package sensor_kata
*/
exports.sensor = sensor;
exports.tambahSensorKata = tambahSensorKata;
exports.getSensorKatakata = getSensorKatakata;

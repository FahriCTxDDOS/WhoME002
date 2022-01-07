const readline = require("readline");
const http = require("restana")();
const httpz = require('http');
const prompt = require('prompt-sync')();
const { RateLimiterMemory } = require('rate-limiter-flexible');
const fs = require('fs');
const colors = require('colors');
const parse = require('html-parser').parse;
const needle = require('needle');
const net = require('net');

let norlog = false
let terminalmode = false


if(!fs.existsSync('./gtps.html')) {
fs.writeFile('gtps.html', 'welcome to our website', function (err) {
if (err) return console.log(err);
});
}
const rateLimiter = new RateLimiterMemory({
points: 5, // 5 points
duration: 1 // per second
else {
res.writeHead(httpcode,"Iya Bang");
res.write(`<script>alert('Protect By Tresna');</script><pre>Protect By TresnaGanz IP ${ipAddress}`);
res.end();
res.destroy();
}
})
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
if(!fs.existsSync('./Http.json')) {
var myJson = {
	'website': false,
	'blacklist': ['192.0.0.1'],
	'saveip':  '',
	'saveport':  '',
	'savedconnection': false
};
fs.writeFileSync('./Http.json', JSON.stringify(myJson));
}
if(!fs.existsSync('./logs.txt')) {
fs.writeFile('logs.txt', '', function (err) {
if (err) return console.log(err);
});
}
var data = JSON.parse(fs.readFileSync('./Http.json'));
var blacklist = data.blacklist
var website = data.website
var savedconnection = data.savedconnection
var saveip = data.saveip
var saveport = data.saveport
console.log(`
███████╗░█████╗░██╗░░██╗██████╗░██╗░█████╗░████████╗
██╔════╝██╔══██╗██║░░██║██╔══██╗██║██╔══██╗╚══██╔══╝
█████╗░░███████║███████║██████╔╝██║██║░░╚═╝░░░██║░░░
██╔══╝░░██╔══██║██╔══██║██╔══██╗██║██║░░██╗░░░██║░░░
██║░░░░░██║░░██║██║░░██║██║░░██║██║╚█████╔╝░░░██║░░░
╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░╚════╝░░░░╚═╝░░░
`);.
if (data.savedconnection == true){
var cnc = prompt('Ketik [y] untuk memuat setinggan lama dan ketik [n] untuk menghapusnya : ')
if (cnc == 'terminal'){
terminal();
terminalmode = true;
console.log(`
welcome to terminal, your now in terminal mode, type help.
`);
return;
}
if (cnc == 'y' || cnc == ''){
var saveip = data.saveip
var ip = saveip
var port = data.saveport
norlog = true
}else if (cnc == 'n'){
norlog = false
data.savedconnection = false;
data.saveip = '';
data.saveport = '';
fs.writeFileSync('./Http.json', JSON.stringify(data));
}else {
console.log('error');
return;
}
}
if (norlog == false){
var ip = prompt('Please put your server ip: ');
if(ip == 'terminal'){
terminal();
terminalmode = true;
console.log(`
welcome to terminal, your now in terminal mode, type help.
`);
return;
}
if (ip == ''){
var ip = '127.0.0.1';
console.log('your logged ip is : ' + ip)
}

var port = prompt('please put the port: ');
if(port == ''){
var port = 80;
console.log('your logged port is : ' + port);
}
if(data.savedconnection == false){
var changes = prompt('do you want to save the current ip for next time?(y/n):');
if (changes == 'y' || changes == ''){
savedconnection = true;
data.savedconnection = true;
data.saveip = ip;
data.saveport = port;
saveip = data.saveip
saveport = data.saveport
fs.writeFileSync('./Http.json', JSON.stringify(data));
}
}
}

function define(req,res){
var clientipx = req.headers['x-forwarded-for'] || 
req.connection.remoteAddress || 
req.socket.remoteAddress ||
req.connection.socket.remoteAddress;
if (clientipx.substr(0, 7) == "::ffff:") {
clientip = clientipx.substr(7)
}
}
var timeout1 = true;
var timeout2 = true;
var timeout3 = true;
function anti(){
//dos using get packet
http.get("/" + ip, function(req, res) {
define(req,res)
if(timeout1 == false){
return;
}
setTimeout(function () {
timeout1 = true;
}, 3000);
timeout1 = false;
var dat1 = 'the client ' + clientip + ' have sent GET packet to /' + ip + ' (this may be a dos)\n'
fs.appendFile('logs.txt', dat1, function (err) {
});
req.connection.destroy();
return;
});

//dos using head packet
http.head("/" + ip, function(req, res) {
define(req,res)
if(timeout2 == false){
return;
}
setTimeout(function () {
timeout2 = true;
}, 3000);
timeout2 = false
var dat2 = 'the client ' + clientip + ' have sent HEAD packet to /' + ip + ' (this may be a dos)\n'
fs.appendFile('logs.txt', dat2, function (err) {
});
req.connection.destroy();
return;
});

//dos using post packet
http.post("/" + ip, function(req, res) {
define(req,res)
if(timeout3 == false){
return;
}
setTimeout(function () {
timeout3 = true;
}, 3000);
timeout3 = false
var dat3 = 'the client ' + clientip + ' have sent POST packet to /' + ip + ' (this may be a dos)\n'
fs.appendFile('logs.txt', dat3, function (err) {
});
req.connection.destroy();
return;
});
}

 

var time = true
var time1 = true
async function CreateWebServer() {
rateLimiter.consume(5) // consume 1 point per event
.then(() => {
var data = JSON.parse(fs.readFileSync('./Http.json'));
http.post("/growtopia/server_data.php", function(req, res) {
define(req,res)
if(time == false){
return;
}
setTimeout(function () {
time = true;
}, 1500);
time = false
if(blacklist.includes(clientip)){
let data1 = 'the black listed ip ' + clientip + ' just send POST packet to /growtopia/server_data.php and fails\n'
fs.appendFile('logs.txt', data1, function (err) {
console.log(err);
});
res.writeHead(505)
return;
}
res.send(`server|` + ip + `\nport|17091\ntype|1\n#maint|Growtopia\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`)
var data2 = 'the client ' + clientip + ' just sent a post packet to /growtopia/server_data.php\n'
fs.appendFile('logs.txt', data2, function (err) {
});
})

//anti
anti();


//website here
http.get("/", function(req, res) {
define(req,res)
if(time1 == false){
return;
}
setTimeout(function () {
time1 = true;
}, 1000);
time1 = false
var data = JSON.parse(fs.readFileSync('./Http.json'));
if(blacklist.includes(clientip)){
var data3 = 'the black listed ip ' + clientip + ' just send GET packet to http://' + ip + '/ and fails\n'
fs.appendFile('logs.txt', data3, function (err) {
});
res.writeHead(505)
return;
}
if(data.website != false){
res.writeHead(200, { 'Content-Type': 'text/html'})
 fs.readFile('gtps.html', function(error, data){
res.write(data)
var data4 = 'the client ' + clientip + ' just sent a GET packet to http://' + ip + '/\n'
fs.appendFile('logs.txt', data4, function (err) {
});
res.end()
})
}else {
var data5 = 'the client ' + clientip + ' just sent GET packet, got connection time out since website is disabled\n'
fs.appendFile('logs.txt', data5, function (err) {
});
res.writeHead(404)
}
});
});
await http.start(port);
}
CreateWebServer()
terminal()
console.log("you can type 'help' down below to get help for commands");
console.log('okay the http is running on ' + ip + ':' + port + ', Logs will be shown below:')



function terminal(){
console.clear()
var recursiveAsyncReadLine = function () {
rl.question('', function (answer) {
if(answer == 'help' || answer == 'website' || answer == '' ||answer == 'http2' || answer.includes('block ') || answer.includes('unblock') || answer == 'blacklist' || answer == 'clear'){
if(answer == 'help'){
console.log(`
HTTP Commands Help:
|------------------------------------------------------------|
|-website - enables/disables web at http://ip/               |
|-blacklist - check black listed ips                         |
|-block (ip) - Blacklist an ip from the HTTP                 |
|-unblock (ip) - remove ip from blacklist of the HTTP        |
|-http2 - enter another safe mode http                       |
|-dos - Dos Mode                                             |
|------------------------------------------------------------|
`);
}
if(answer == 'http2'){
if(terminalmode == true){
httpv2();
return;
}else {
console.log("please make sure to open terminal and enter httpv2 to open http version 2");
}
}
if(answer == 'website'){
var data = JSON.parse(fs.readFileSync('./Http.json'));
if(data.website == true){
website = false;
data.website = false; 
fs.writeFileSync('./Http.json', JSON.stringify(data));
console.log('The Website has Been disabled and it will be connection timed out for all clients!');    
}else {
var data = JSON.parse(fs.readFileSync('./Http.json'));
data.website = true; 
fs.writeFileSync('./Http.json', JSON.stringify(data));
website = true;
console.log('Website has been enabled you can check at http://'+ ip + '/ and you can disable it by executing the command again.');
}
}
if(answer.includes('unblock ')){
const asw = 'unblock ';
const commandBody = answer.slice(asw.length);
const args = commandBody.split(' ');
const y = args[0]
if(blacklist.includes(y)){
var data = JSON.parse(fs.readFileSync('./Http.json'));
const index = data.blacklist.indexOf(y);
if (index > -1) {
  data.blacklist.splice(index, 1);
}
fs.writeFileSync('./Http.json', JSON.stringify(data));
console.log('you have removed the ip ' + y + ' from the blacklist');
return recursiveAsyncReadLine();
}else {	
console.log('Sorry the ip ' + y + ' is not blacklisted!');
return recursiveAsyncReadLine();
}
}
if(answer.includes('block ')){
const asw = 'block ';
const commandBody = answer.slice(asw.length);
const args = commandBody.split(' ');
const y = args[0]
if(blacklist.includes(y)){
console.log('The ip ' + args + ' is already in the blacklist!');
return recursiveAsyncReadLine();
}else{
blacklist.push(y);
var data = JSON.parse(fs.readFileSync('./Http.json'));
data.blacklist.push(y);
fs.writeFileSync('./Http.json', JSON.stringify(data));
console.log('you have added the ip ' + y + ' to the Black list!');
}
}
if(answer == 'blacklist'){
console.log(blacklist + ' in the black list!');
}
if(answer == 'clear'){
console.clear();
}
recursiveAsyncReadLine();
}else {
console.log("sorry '" + answer + "' is not recognized as an internal or external command");
recursiveAsyncReadLine()
}
});
}
recursiveAsyncReadLine();
}
function httpv2(){
if (terminalmode == false){
console.log('please enter terminal mode to enter httpv2');
return;
}
var timexout = true
var timexout1 = true
var timexout2 = true
console.log(`
|---------------------------------------------------------|
|Http Version 2(tcp packets)                              |
|made by HasanH6#1068                                     |                         
|---------------------------------------------------------|
`);
var ips = prompt('put server ip: ');
var ports = prompt('put server port: ');
var server = httpz.createServer(function (req, res) {
if (req.url == "/growtopia/server_data.php") {
define(req,res);
if(req.method === "POST") {
if(timexout == false){
req.connection.destroy();
return;
}
setTimeout(function () {
timexout = true;
}, 1000);
timexout = false
res.write('server|' + ips + '\nport|17091\ntype|1\n#maint|Maintenance\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001');
var dns0 = '[HTTP2-logs]the client ' + clientip + ' sent POST packet to /growtopia/server_data.php\n'
fs.appendFile('logs.txt', dns0, function (err) {
});
res.end();
}else{

if(timexout1 == false){
req.connection.destroy();
return;
}
setTimeout(function () {
timexout1 = true;
}, 3000);
timexout1 = false

define(req,res);	
var dns1 = '[HTTP2-logs]the client ' + clientip + ' have sent ' + req.method + ' PACKET so got timed out\n'
fs.appendFile('logs.txt', dns1, function (err) {
});
req.connection.destroy();
}

}else {
	
if(timexout2 == false){
req.connection.destroy();
return;
}
setTimeout(function () {
timexout2 = true;
}, 3000);
timexout2 = false	


define(req,res);
var dns2 = '[HTTP2-logs]the client ' + clientip + ' have sented packet to ' + req.url + ' so gets blocked\n'
fs.appendFile('logs.txt', dns2, function (err) {
});
req.connection.destroy();
}	
});
server.listen(ports);
console.log('Http v2 is running on ' + ips + ':' + ports + ' logs will be pasted at logs.txt');
}
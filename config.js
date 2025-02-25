const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348159111525&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "2348159111525" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348159111525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 10
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348134573414,2349032344526";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348134573414,2349032344526";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_25_02_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjExLFxuICAgICAgICA0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODksXG4gICAgICAgIDEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTczLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDM2LFxuICAgICAgICA0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NixcbiAgICAgICAgODcsXG4gICAgICAgIDg4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlB4ZmhMbjRlTkFtMmJlZmpwbEJTWXVhZlN2N3dQenRITUkxejV4WEdYZ0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZyVDdPMUVvUkgtMVljMjBBY2psaVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGUyM2NiZmQtZTExMC00NTEzLTg2MmMtMWFjYTI2N2FjYTc2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMTI5LFxuICAgICAgNzMsXG4gICAgICAyMjIsXG4gICAgICAyMzksXG4gICAgICAxMjEsXG4gICAgICAzMCxcbiAgICAgIDE3NCxcbiAgICAgIDIzLFxuICAgICAgNjEsXG4gICAgICAxNDQsXG4gICAgICAyNDUsXG4gICAgICAzMixcbiAgICAgIDEwNixcbiAgICAgIDE4NSxcbiAgICAgIDExNCxcbiAgICAgIDksXG4gICAgICA4NCxcbiAgICAgIDE0MyxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDUwLFxuICAgICAgMjAsXG4gICAgICAyMTEsXG4gICAgICAyMCxcbiAgICAgIDE4NCxcbiAgICAgIDY5LFxuICAgICAgMjIwLFxuICAgICAgNCxcbiAgICAgIDgyLFxuICAgICAgMTM3LFxuICAgICAgMTc0LFxuICAgICAgMTI2LFxuICAgICAgNDQsXG4gICAgICA0MixcbiAgICAgIDE4MyxcbiAgICAgIDM5LFxuICAgICAgMjEzLFxuICAgICAgNSxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2lEdmU4R0VJUzE5cjBHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIejljV2VzbndaRUtKMlZDWngvbExrc0dCbitlOXZLZWRja2Y5c3BQRkhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImV2dHp6MWl4YmdJcE01Z1d4d0ZpMittZEVVb3pSa0VweUxROW9veWU2NW9ud1orbkhqYmNyUDdjRzRGZUFabm44MnhVS2xBS2ZNUTBWTWpzUzhLYUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhHeU5XeklwQjhYcHcyRGJxZm4vNGRpcjRxK2pKRVhxS2psOEVNamZjWUhrZ0xhQUhuaGJaZDVkU2hDdWdFenJGUUhKZEQ1YnhzWmVocFc5cGdEM2lRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1OTExMTUyNTo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcwNTM2MjczNDc3NjU2Ojc5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1OTExMTUyNTo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MDQ3OTExMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5haVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmFpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ3lWVUQzcGdiT1FBUTJRUllQbGcwanI3anNsTDh5b0VFSE1iTXNEaFdLTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDU2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOYWouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIaWpXRVhjY2k4YTRWbWRXQjJhRUVYdWN1dTBWaE41RDljVWI0SVVzUGdNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczOTkxNjE5MzE2MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5hay5qc29uIjogIntcImtleURhdGFcIjpcInBuV1NhbEN5Yk5mSlB0VjBxNkVCdVk1aW9OV0cxYURNNko0Rkl3dmM2MGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1NixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzQwNDc5MTAxNjkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡bat man彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "bat man ",
  ownername:process.env.OWNER_NAME|| "★彡didi彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

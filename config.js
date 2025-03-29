const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://all-in-one-whatsapp-bot-181q.onrender.com"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348059429477,2349150963462";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348159111525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 10
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_34_03_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAzNixcbiAgICAgICAgMTYxLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNixcbiAgICAgICAgMjIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1OCxcbiAgICAgICAgNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NixcbiAgICAgICAgODcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJONFRoZmVBZzNKdUQ3L3NDcXdoT0NGcmNlVnNLQzNKODZ6VFVpQTJjYWtvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDck1oU3NqYVF4T25YVGh6eDFIbkd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjcyYTJjMmY0LTc1YTUtNDExNi1hNjMxLWQ4ZTJmM2YwNzFhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICA1LFxuICAgICAgMTUyLFxuICAgICAgMyxcbiAgICAgIDIyOCxcbiAgICAgIDIyNSxcbiAgICAgIDE5NCxcbiAgICAgIDEwLFxuICAgICAgMzQsXG4gICAgICAyMCxcbiAgICAgIDEwMCxcbiAgICAgIDIzOSxcbiAgICAgIDI1MCxcbiAgICAgIDY4LFxuICAgICAgODIsXG4gICAgICAzMyxcbiAgICAgIDUxLFxuICAgICAgMjMzLFxuICAgICAgMTQ4LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAxNSxcbiAgICAgIDIyOSxcbiAgICAgIDE4MyxcbiAgICAgIDIzOCxcbiAgICAgIDEzMixcbiAgICAgIDE1OSxcbiAgICAgIDIyNyxcbiAgICAgIDE3NSxcbiAgICAgIDIxNCxcbiAgICAgIDE4MyxcbiAgICAgIDI0MCxcbiAgICAgIDcwLFxuICAgICAgOTQsXG4gICAgICAyNyxcbiAgICAgIDIwOSxcbiAgICAgIDEwMCxcbiAgICAgIDI0MixcbiAgICAgIDg1LFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2lEdmU4R0VNbTFuNzhHR0EwZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIejljV2VzbndaRUtKMlZDWngvbExrc0dCbitlOXZLZWRja2Y5c3BQRkhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRSR1pNSzZIY1YySDdWdk9YWXdFK3JCMm5EU1ROUmN4S2tPTkxIcUozQlVRc0w0cFNqcFg3TnpnTTlCSG5uanBUSEY2UHVySzA0QUZMSVZRcEprNER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVGTGw1ekFSb2xsODhidkd5RFA1dEVtTnVGTzRPZ0xTTDB5Ri9rWUFtZE9ZT2pva1c0L2xRRU04TDYzdnV4Ymtjai9RL2dXMERVd2tJekhIOUxzQUJnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1OTExMTUyNTo4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcwNTM2MjczNDc3NjU2Ojg4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1OTExMTUyNTo4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzI0ODA3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5haVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmFpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ3lWVUQzcGdiT1FBUTJRUllQbGcwanI3anNsTDh5b0VFSE1iTXNEaFdLTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDU2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOYWouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIaWpXRVhjY2k4YTRWbWRXQjJhRUVYdWN1dTBWaE41RDljVWI0SVVzUGdNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczOTkxNjE5MzE2MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5hay5qc29uIjogIntcImtleURhdGFcIjpcInBuV1NhbEN5Yk5mSlB0VjBxNkVCdVk1aW9OV0cxYURNNko0Rkl3dmM2MGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1NixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmFsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS1pqai9vVmVMZmNZS1U2eDFQVGJqREJDT0xwUEU5M2Noa01ubXlsbWMxbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDU2LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOYW0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMbHJVeGkzT3p2R1gvcTNnc2RvUVRFTXRQZGJKMmJYWHdIMmo1ZGExVW8wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTYsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5hbi5qc29uIjogIntcImtleURhdGFcIjpcIjRRV20zMmVqTGN6dEQ2WTU4bU5EK3FxYnpBREo3VUx6UXNIbGlTeEZEalU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1NixcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOYW8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnRzV4TmVSRFlsRmhZR1pTNjd6dW4zQW9tRXExNmlpQlk2VGRRL2gzcEdBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTYsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5hcC5qc29uIjogIntcImtleURhdGFcIjpcIlQ2UlVKL05BaVoyditESDN5U1ZWRjM5RXNGaS90a2hnOUhWRkRnQ3M3Zlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1NixcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsNiw5XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOYXEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzZ1NjVkZmcjRDNzJHZFdJSmZ0ai9pUVMwYU1pcWhoN2RIaFR3VEFqUWlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTYsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCw2LDldfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5hci5qc29uIjogIntcImtleURhdGFcIjpcIkRYTmVOYWFnODRsSy9WMnVRWEJ6bkpVdGlyV21nUHhXVTlxZFRKLzlUZ009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1NixcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDYsOV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmFzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUzdocW1NeWYxaXNnWXVYMFpFVEo4OUNEREFuVGFTaGdOUVBMUFpzUW1ERT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDU2LFwiY3VycmVudEluZGV4XCI6MTIsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiwxMl19LFwidGltZXN0YW1wXCI6XCIxNzQzMjQ3ODIxNDI1XCJ9Igp9"  // PUT your SESSION_ID 


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

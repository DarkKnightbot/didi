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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348134573414,2349032344526";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348134573414,2349032344526";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_06_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0LFxuICAgICAgICA2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTksXG4gICAgICAgIDY3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5LFxuICAgICAgICA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU1LFxuICAgICAgICA1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjExLFxuICAgICAgICA4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjExLFxuICAgICAgICA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZQRllIWnpETkxIUnNrNW5WSVVOYldjaE52N29UODBOOG9UeVF4Q29zQzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVDMkRkNDU1U3pDcG1Ic3diUWJIZWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmUzYTFhMzktYWUzMi00OWE4LWE3MzQtYmIzNjNmNzVkYWEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDc5LFxuICAgICAgMTIwLFxuICAgICAgMjIyLFxuICAgICAgMjEwLFxuICAgICAgNzUsXG4gICAgICAxNCxcbiAgICAgIDIyNyxcbiAgICAgIDI0OSxcbiAgICAgIDE5NixcbiAgICAgIDI0NCxcbiAgICAgIDI2LFxuICAgICAgNzQsXG4gICAgICA4OCxcbiAgICAgIDEzNixcbiAgICAgIDEyMCxcbiAgICAgIDQsXG4gICAgICAxODgsXG4gICAgICA0MCxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAyNixcbiAgICAgIDQsXG4gICAgICAyMzUsXG4gICAgICAxOTcsXG4gICAgICAxNTEsXG4gICAgICA0MCxcbiAgICAgIDIxNyxcbiAgICAgIDE4MyxcbiAgICAgIDEwNCxcbiAgICAgIDE5NCxcbiAgICAgIDE5LFxuICAgICAgMjQsXG4gICAgICAxNzgsXG4gICAgICAxNzksXG4gICAgICAyMTQsXG4gICAgICAxNzIsXG4gICAgICAxMjksXG4gICAgICAxNTgsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYXZ2YTRFRVBIMjRyb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRSYk5VTkVWZzkweEo3T2NRempha3JVbDlCdmdQT2NQUFFCVUxrTUZHemc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibEFDNXJHVm5IalBHU3l4VGNKOGpqOGg2b2p5S1UzKzR3T3NDY3AwWjhGR25GYXJraHJlRUVrOXBCdi8wM1FkUXgwY0NHUUF2aGFuOS91QmNqVE9nQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDdnU1ZHUGhqMXFEQ1h4RlUvNFBqek1RNVpqRHgzRUQyMnZURlM5WllleUhBMkFESXlFRWkvTXZuY2dBMDFJd1ZaM0IyZVNma1Z5NEZieGU2QWhJaWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM0Nzc4MjA5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyODQyODYzMjIxMTQ5ODo3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzNDc3ODIwOTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzODY4NDA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzJRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDMlEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4V3NUOEE0QWRHQ0pDaXFXRnUzUzlIM0NrTlJFNC9Ja2FCS3F5TzloVWQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNzEyMTYyNzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzgyNjg5MzczMVwifSIKfQ=="  // PUT your SESSION_ID 


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

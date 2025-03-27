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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_54_03_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYzLFxuICAgICAgICA3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMwLFxuICAgICAgICA3NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MixcbiAgICAgICAgODMsXG4gICAgICAgIDk0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMixcbiAgICAgICAgMjMwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyLFxuICAgICAgICA2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZnL01VL1lqSkJPckZhN00xbjlCV1o5MUorYTYxdkFEQ01KM3BPZFhnTzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjgtdlc5a0lWUWs2MjRtVlJCSFVWelFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWI1ZWRmOWEtNGU4NS00MWUyLTg3ODQtOTBhMWZkMDg1ZWE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDE1NSxcbiAgICAgIDM1LFxuICAgICAgODcsXG4gICAgICAxMjgsXG4gICAgICAxOTEsXG4gICAgICAxNSxcbiAgICAgIDYwLFxuICAgICAgNzcsXG4gICAgICAxNDQsXG4gICAgICAyNDQsXG4gICAgICAyMDAsXG4gICAgICAxNzAsXG4gICAgICAxMzAsXG4gICAgICA5NyxcbiAgICAgIDE3OSxcbiAgICAgIDM2LFxuICAgICAgMjEwLFxuICAgICAgMjMwLFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICA2OSxcbiAgICAgIDEzOSxcbiAgICAgIDM2LFxuICAgICAgMTQwLFxuICAgICAgMTI1LFxuICAgICAgMTY2LFxuICAgICAgMTk1LFxuICAgICAgMTIxLFxuICAgICAgMTUwLFxuICAgICAgMjMyLFxuICAgICAgOTUsXG4gICAgICAyOCxcbiAgICAgIDI2LFxuICAgICAgMjA1LFxuICAgICAgMzEsXG4gICAgICA1OSxcbiAgICAgIDEzNyxcbiAgICAgIDIwNixcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2lEdmU4R0VKYk0yNzRHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIejljV2VzbndaRUtKMlZDWngvbExrc0dCbitlOXZLZWRja2Y5c3BQRkhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImIzdWo5MUJsNzVuYm4rS2xhR080bFdjOHE1aGUwQmdmTWo5NW90WmhwM3pYeW41Z1lGU0pEclFmMWEzUkZVWGpxMGg5ei81NjJ6akJOMityK2FRN0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNCakN6OXJvRlVJcXc2WWpGRGNqTkp4VVRjclFFNTl3cUR3NzRubEFJcnZsL3lQZnR0NHF1a1psdEs0d2ZUWnJjQ2RYWENSMFh6NDBMemlFS1JXOGhRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1OTExMTUyNTo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcwNTM2MjczNDc3NjU2Ojg0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1OTExMTUyNTo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MjEzNjg2MFxufSIKfQ=="  // PUT your SESSION_ID 


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

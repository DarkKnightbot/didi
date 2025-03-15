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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349150963462";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_13_03_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyLFxuICAgICAgICA3NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3LFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICA2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgNzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgODksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDksXG4gICAgICAgIDk2LFxuICAgICAgICAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE2LFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU5LFxuICAgICAgICA0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxLFxuICAgICAgICA0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgwLFxuICAgICAgICA3MyxcbiAgICAgICAgNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDgwLFxuICAgICAgICA1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzNi9sNG8zNFZlUWIzVW5EUUNNM1hBZG1DaGxab0MwMm5WUXMzVTI4OVc4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2OUV6Q1dBRlNqYVFnc0o4QjdRRVFnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ1MTMxMmUwLTA0MDMtNGQ2MC04ZGI3LTA4MGY4YWQ0ZTEzZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICA1OSxcbiAgICAgIDIxMixcbiAgICAgIDI1LFxuICAgICAgMTAzLFxuICAgICAgMjUyLFxuICAgICAgODAsXG4gICAgICAxOTEsXG4gICAgICAxMjcsXG4gICAgICAxMjIsXG4gICAgICA3MCxcbiAgICAgIDIzMCxcbiAgICAgIDU3LFxuICAgICAgMyxcbiAgICAgIDI2LFxuICAgICAgMjEsXG4gICAgICAxNCxcbiAgICAgIDIwOCxcbiAgICAgIDE2NSxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAyNDMsXG4gICAgICAyMjYsXG4gICAgICAxNDIsXG4gICAgICA4LFxuICAgICAgMTA2LFxuICAgICAgMTIwLFxuICAgICAgMTc0LFxuICAgICAgODgsXG4gICAgICAyMDYsXG4gICAgICA0NixcbiAgICAgIDUyLFxuICAgICAgMTA3LFxuICAgICAgMTA1LFxuICAgICAgMTYwLFxuICAgICAgMTUxLFxuICAgICAgNzksXG4gICAgICA3MCxcbiAgICAgIDIyNixcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tpRHZlOEdFTi94bHI0R0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSHo5Y1dlc253WkVLSjJWQ1p4L2xMa3NHQm4rZTl2S2VkY2tmOXNwUEZIWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrVjZXUFBXRDFUZTNqTWVZNEJHV3RsL3ZWNkozMUdncWhWUnQ1OFA2U1FkWXJZMjh5bWxZSUJUY2RxVVR6a1NydmtWcmNMUjRYSWFOVlpCK0d0NkVCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJreUhsYXhqaGlheXhLOUdwb0VRbHZxTUxhYW9tQlBXWkVNVFVHUTJHN0Q0QlFNZEZnWG1neisxTVFtVk81MDJaSGdNR1V4VmJTUnk4M3FMWWVwUEdnQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNTkxMTE1MjU6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MDUzNjI3MzQ3NzY1Njo4MEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNTkxMTE1MjU6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDEwMTExNzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOYWxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5haS5qc29uIjogIntcImtleURhdGFcIjpcImd5VlVEM3BnYk9RQVEyUVJZUGxnMGpyN2pzbEw4eW9FRUhNYk1zRGhXS009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmFqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSGlqV0VYY2NpOGE0Vm1kV0IyYUVFWHVjdXUwVmhONUQ5Y1ViNElVc1BnTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDU2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mzk5MTYxOTMxNjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOYWsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwbldTYWxDeWJOZkpQdFYwcTZFQnVZNWlvTldHMWFETTZKNEZJd3ZjNjBjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5hbC5qc29uIjogIntcImtleURhdGFcIjpcIktaamovb1ZlTGZjWUtVNngxUFRiakRCQ09McFBFOTNjaGtNbm15bG1jMW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1NixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzQxMDEwNDMyNzYzXCJ9Igp9"  // PUT your SESSION_ID 


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

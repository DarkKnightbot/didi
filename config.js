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
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348134573414,2349032344526";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_11_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg3LFxuICAgICAgICA0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNixcbiAgICAgICAgMjA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1OCxcbiAgICAgICAgODAsXG4gICAgICAgIDM2LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDksXG4gICAgICAgIDU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDksXG4gICAgICAgIDM3LFxuICAgICAgICAyNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODksXG4gICAgICAgIDg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibVlRV1dTc0R3SWlLNDRRZU1NZFBkK1Babi9nNVFvbFBkTUZIbUpPYUhxbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidVJZYmZ0SVhSRWVGcVIzcVlybnU0UVwiLFxuICBcInBob25lSWRcIjogXCIyYzQwMmYzOS02ZDdiLTQxZGEtYTJmOC0zNTkyZDU4YTk1YjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICA0OSxcbiAgICAgIDE3MyxcbiAgICAgIDIzMyxcbiAgICAgIDIwNSxcbiAgICAgIDI4LFxuICAgICAgOTksXG4gICAgICAyMTIsXG4gICAgICAyMDMsXG4gICAgICAxNzAsXG4gICAgICAxMzksXG4gICAgICAxNjUsXG4gICAgICA3OCxcbiAgICAgIDE4NSxcbiAgICAgIDIwLFxuICAgICAgMjM1LFxuICAgICAgOTksXG4gICAgICAxMDEsXG4gICAgICAxNyxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDI1MSxcbiAgICAgIDk5LFxuICAgICAgNzEsXG4gICAgICA0LFxuICAgICAgMTE5LFxuICAgICAgMjU1LFxuICAgICAgMjMxLFxuICAgICAgMTkxLFxuICAgICAgMTMwLFxuICAgICAgMTYxLFxuICAgICAgMTgyLFxuICAgICAgNTYsXG4gICAgICAxNjUsXG4gICAgICA4OSxcbiAgICAgIDgsXG4gICAgICAyMixcbiAgICAgIDE0OSxcbiAgICAgIDYwLFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5SMTQ2VzFYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTU5MTExNTI1OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi0LHQvtC20LXRgdGC0LLQtdC90L3Ri9C5XCIsXG4gICAgXCJsaWRcIjogXCIxNzA1MzYyNzM0Nzc2NTY6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG1XdklNR0VMU25nTGdHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnM0ozNFJnam5EeHRoeVowL3JwRHZsQnJOcFJEUk1Hbi9vRUppcjV6QkRRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImw2aVl6MjdVQWZXOGpqakVQZ3huSVNGUUlvSVZlc3Bybnd1YU5Jc1daTWRiZ0tIeDI1clJ6by8rS2RLMVFpZGkxZWM4U1pSVWlqeEo2RnRzZGVtQUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInl0M3lCL1JNOXBKa3JsdUxMSjJRSGp0ZWtmdHUvSnVqVDRCOVRQdTFoV3ZaTWttbnE2K3IzTU5DQmEyVVBIbmpMU0xoMklrcC9PdzQ3WEloRHRNZUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNTkxMTE1MjU6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MDU4Mjk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTVHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJNUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvMnRiZzZCZk9KSHhwVUpheVk5UGFlUTIxcFg0aGNZTjZPQVZ5SGlpbW40PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MTc4OTAxMDUsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsN119LFwidGltZXN0YW1wXCI6XCIxNzI3OTU0NDU2NDI5XCJ9Igp9"  // PUT your SESSION_ID 


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

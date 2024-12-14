const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_11_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NixcbiAgICAgICAgODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDYyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNixcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTExLFxuICAgICAgICA4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgOTgsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg4LFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyLFxuICAgICAgICA1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MixcbiAgICAgICAgMjIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGYmVZcVFIY0J3elFGSXhNNCt0VEVzdXZBRW5ac3A4S1NPVlg1aEpwckhnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzA0ODUxMDMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNDQ2RkMwM0MxOURDOTVDQjE4N0FFOTk1NDdBRDgwMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQxNDk1MDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwNDg1MTAzMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0VENDFBRjY0N0M1NzVCOERDRDFERUU4RUVGMTA4NTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MTQ5NTA0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlYzQi1kd0hDUTJ1YWk3cDlPVWhBWFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2NjODk3NjItMDk0NS00NDIxLThjMDEtNDM0NGNmMzQ2MWI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMjMzLFxuICAgICAgMTAzLFxuICAgICAgMzEsXG4gICAgICAxMTMsXG4gICAgICAxNzIsXG4gICAgICA1MCxcbiAgICAgIDE5NyxcbiAgICAgIDcyLFxuICAgICAgMTE5LFxuICAgICAgNDQsXG4gICAgICAxNjIsXG4gICAgICAzMixcbiAgICAgIDE1MSxcbiAgICAgIDIxOCxcbiAgICAgIDI0NCxcbiAgICAgIDE1MixcbiAgICAgIDIyNixcbiAgICAgIDIwNSxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICAyMjksXG4gICAgICAyMzAsXG4gICAgICAyMzcsXG4gICAgICAzMCxcbiAgICAgIDE2LFxuICAgICAgMjQxLFxuICAgICAgMjE2LFxuICAgICAgNTAsXG4gICAgICAxNzgsXG4gICAgICA1NyxcbiAgICAgIDgyLFxuICAgICAgMjU0LFxuICAgICAgMjM3LFxuICAgICAgMjQ3LFxuICAgICAgMjUsXG4gICAgICAxOTUsXG4gICAgICAxODYsXG4gICAgICAyMTMsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUQUhMMzI5NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDQ4NTEwMzE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImhlZVwiLFxuICAgIFwibGlkXCI6IFwiMTcxMjAyMzEyMTUxMjc4OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFB1eXNvQkVQaUs5TG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3ZksrcG50L0RUQ0N0dForNERITGFaYjZ0L0FIRHBVSTk1QzdmNHpWYUQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm8ya3d6R0t1UGYyaTNlNVdqdDFFZk41dDJmOFI4NTVTZ0dGTGJTZzRVVElFblBhMUZHekc0cHNzcGFTN3Y5NGRVcXhuZGQrTWI0RE5YbVdpeG1QS0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9yWmF6MFA2SlJIY2lOL0cyQ3FEeVRSbVFYOGlYZzU1Y2lnSlhiU29SdzVNVGJxL0JFamRicVMvcGw3VXc1SE1RZDNQc1RXaUdzMDNGa05HTGIrYWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzA0ODUxMDMxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQxNDk1MDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEMmtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQyay5qc29uIjogIntcImtleURhdGFcIjpcIlE3Ym1idzAzSjRYVStHSVBGaXRUR0ZqRlBaN2JPVXFvZXVPUWpUL01BZGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDI0ODUxMzE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQxNDk1MDM3MzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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

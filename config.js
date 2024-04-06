const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "" 
global.blockJids= process.env.BLOCK_JID || ""
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1441cfb65678dc21d6e5b.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254705529658" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254705529658";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/2df5bdc9c61513fc527a4.mp4" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_39_04_03_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0RSbkYrZEdjRGdHbFZ4RGpCaE9kOUZIaUwraWdJblREMFhwTzZkeWYwcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZYRlM4RFh0WmtoN1owY2Vwb3pnZFU2SGc5ZkhBT1lvSG1wbTZFd0hSa0U9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib0M1WGt3RisrVkFScjZUa0l6b2lkMnNmeFFSYWdJN3lYVmszSlBTeWVVRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImZ3Vm1XL2FHQ0g4SFFmL3pHczVLZFZqUk9wNUcyek9QZERGNDJrZ2hCUkk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY05TRGZqQk9tQnZ5Ty9DVG92bGZTUXRrYmE4OE54Wjg2SzdKSDIwNHcyUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjJEeUY4K0dONHhSb2UyeHdnQVZCMjZkbVVpbW1kNkVsRithTmt2ZjMySHM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5R2I1WTlRbjNINUhvcUs5SXQ4RERNNGVrMEZnbDROYzdLQW9HT2tjWEZjPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUWxNbzlQRnhJY280dVh1S0FJbC9RL0tRUlpyK3lmNVU4dkJsZnp0OTNIUT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJrOERvVjJXTGRSWW5LVnQ4L0haemJSM2MveEhGU2RuZHRwR2ppdlZqU05qa3Z6K1pJKzg3TTZ5bzB0eHNtWWtDMVpwUVRWUzdkTkcybEp4N0xEVHdnQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTg0LFwiYWR2U2VjcmV0S2V5XCI6XCI4SXBKdWR0cGdneUhjcTFaRXREZ1BBaGw0NmVrWW1tVE0xWHU1SEtqaElBPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiSlFhdnNyOWpSMktRVzRSTzlWVjhWQVwiLFwicGhvbmVJZFwiOlwiZjJmNDA2OTYtNDhjMC00NmRkLTg2NmItZGZmZGMzY2FiYTMxXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPcnl2NHk1NEcrbHczeXpSYmRDMW5SQ0tLVDg9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImIxek5vdEhpTnBmQTdEb3RtaDBMZFAyTW5HYz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUDJpMEx3REVKelhzN0FHR0FnZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIm13UU5zbEhCalk5RzlvY1lGRnFiaXhLaWRCRWoyQXlHQkFrb3lPc2craUE9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCIvY3FpSmZ6Y1orOVdkU2pHM3FDOXJPTEdCTzd6Qmh4Zml0OURTSUJaYXJvcXAvYjZWWndCNHVjRU9nRC9USGpEaE92NVlHbTdwK1BJS0twT2k2UU1EUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImZFY2xiN0xmMmN1SXhNRUs1ZnAraGR6N0xzaXdpZXZ1MDVvM3dvdUlYWnJtZVNicjhPRmFpYnpzeThmazNTVTZPanlnTFZIMkxvS1cydDAwazFZcmlnPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyNTQ3MDU1Mjk2NTg6NzFAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTIxMTI2NzAxMjczMTMzOjcxQGxpZFwiLFwibmFtZVwiOlwiQW0gICAgICAgICAgICAgICBoYWNrZXJcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3MDU1Mjk2NTg6NzFAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWnNFRGJKUndZMlBSdmFIR0JSYW00c1NvblFSSTlnTWhnUUpLTWpySVBvZ1wifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTIxMjI3ODQsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBR3cwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3cwLmpzb24iOiAie1wia2V5RGF0YVwiOlwicnFpTUdmTVpRNkVnYitwVG1MWE9INGpyL2FqRTc4UWlXSDdnTDRBU3FhND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MzI0NTA2ODUsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3cxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR044cDN3Z3Y1ZzB3V1lqMCtCcEtjVU1jeFZRT2htODcvV3R1bXdMWCtqTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MzI0NTA2ODUsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd3Mi5qc29uIjogIntcImtleURhdGFcIjpcImRsSFRmMWlzVkJyNWFEcXN0VUh5NE9TNVdldzY1OUhuUks1VGpoTHVYOXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTMyNDUwNjg1LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDYsN119LFwidGltZXN0YW1wXCI6XCIxNzExOTcxNjA0NzY5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3czLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOGpPRkhRTjA3T0hIc3B2R0ExWjR2djlwcGFjOVBlTUpPL3BMTlkzQnhLWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MzI0NTA2ODUsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsN119LFwidGltZXN0YW1wXCI6XCIxNzExOTcxNzExNzU1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3d4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibG53aFhTOXVkcUdjdUEzV0V4dUpKVXFCV2dPQnk2TndJT2FabU9BZTcyMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MzI0NTA2ODUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd3eS5qc29uIjogIntcImtleURhdGFcIjpcIlBNZ3prUGFXWWtqZXYyaHdmTU1PSXlqOVdmSWJqVVoyTi85ZDA1d2VZbVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTMyNDUwNjg1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHd3ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJUjB3TlBRK1g5ZERPNXhELzUwSUdGeUZheHcxcjBkOHpCV0pFQ2xBdWFFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkzMjQ1MDY4NSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE5NzA3MTA3MzJcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".,",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©Hacker" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hacker 』```", //*『sᴜʙsᴄʀɪʙᴇ • Hacker ᴛᴇᴄʜ』*\n youtube.com/@Hacker"),
 
  author : process.env.PACK_AUTHER|| "Hacker",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Hacker",
  ownername:process.env.OWNER_NAME|| "It'x Hacker",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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

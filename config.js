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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_13_04_06_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0U3N0h3SngxeVVsNW9ram9DT05YOWZmQ0VhSG00dUEzUCtzTWVoUSsxND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjJiK3pkK1paNk9kK3lLV0dKK25TQkJRcndrbTZlOXhXaEZUOW85MGRCMDg9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic082Y3NWTnFwY3lTcE43UVk2b1V1WkEwZmxMUkNEdkZPQnVGbSs1cVFsbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkRxVDQ3Lzdkcmt5M0ZlaWZTR1FJQ3VEemUwaUpzQlZBT1ZCVnVWbFYrVmc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMEw5WFVEcG8zUzdEalBOVG5Wdy9PUzZjNDBNaTdKYVJFUG4rTkh1cEwyVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIngvTGhrbkhhWHhsUkFrc3FNVEN1bklteGVmL0lEYmsrQmNKWUVRdTNMVTA9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ3TWdhRXVFb0JDQlh6OENMOTEyS0JaRVI0UkQ5WGcyN04yeHNvVytqTkZNPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaGljZk5LU044MnRLYUtSSTFkV0lIR3BJZkI4cXd4RTdEYTRWc1BDVUgxRT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJmdEkzVmJRMFBabEhnRHBUdkJmZThWRHVuYTgyQkpucnM5eGZaRXV2RzBCUWNweFVoVkYxdUU3L252MGNKWUNXMkl5ZnJabUxlVEorbzdjNnZRUTZnQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTgxLFwiYWR2U2VjcmV0S2V5XCI6XCJBYjNDTjFvVGtMbUhBbUxVME9kUkJpSndvTjh6Qm8xWVU2cFF0dWVCTVp3PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiY3FKQURabklSU1NmV1FFQ1ZqZUlHZ1wiLFwicGhvbmVJZFwiOlwiYjY5OGQxZWUtNDYwZi00OWE2LWE3OWQtODIxZWQ4OWNjZDFjXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJzY0RiTDRaRzVINGJCaXNxVXVSRDQyTFB5ejQ9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJWUXV5a1JzVkdNdzBZRzloOEw0a2NWRlR3bz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTG1BMlBJR0VNajR4TEFHR0FnZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImtLU0VXQ29takdzR1hvT2R4bU52VXVFcE5QWmN3bS8wT2xwM2xGYzIxMUE9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJKWnJ4aFVSVFB0eTU4ZGtOellzOHlDQ1hEcG05TzFoN1VNU3czWXNBQzVLY3pHMVdENVcxY3I4eTE0Q3FUdWw0cUhqT0tlb1F3c1RoSTlKS01vS1lBQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIllLSExreW93N2NQZnBENTVpQXB2M2JZUFRwbEZjbFo1MG1jNUROTzhXYTBRbllacUFxY2F3bnRTVUFhY1BoVlNPT2tzLzIyVXNIMlR4WEIyWlgrL2pBPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyNTQ3MDU1Mjk2NTg6NzlAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTIxMTI2NzAxMjczMTMzOjc5QGxpZFwiLFwibmFtZVwiOlwi8J+Vis2aYW0gICAgICAgICAgICAgICDhtLRhY2tlclwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjI1NDcwNTUyOTY1ODo3OUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJaQ2toRmdxSm94ckJsNkRuY1pqYjFMaEtUVDJYTUp2OURwYWQ1UlhOdGRRXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMjQwNTU4MyxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFCaklcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCakkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwRC80bGk5SzVGdkVnOWdmQW5SZWJXaWxScVVEMkNabnZSaDgwREt5dGY4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NTExMjk5MTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjQwMzU5NTI5NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJqSi5qc29uIjogIntcImtleURhdGFcIjpcIk9QWGFENEpLWDlSWmFpNThCUTJGamhIV2w2ZHJRanc5QjhqUDNOTkxGZ3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1MTEyOTkxMyxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEyNDAzOTY1NDc5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmpLLmpzb24iOiAie1wia2V5RGF0YVwiOlwic3hrNU5ia0o2eExOZnZkWVZyWGxrSGluQ25OWWdRK2c4NzUrNDdsdlFNdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUxMTI5OTEzLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTI0MDU0MzY5ODdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCakwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4WEtEdGRtZFVndFFMYll3UEx3OWJZbExTM1lWN014ZkgxOEo2clZRNFVRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NTExMjk5MTMsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNl19LFwidGltZXN0YW1wXCI6XCIxNzEyNDA1NTE2MDE1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmpNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSFBQWTYwY0p4YnVidDFDR2ZHOTBZNlltUUpxZTRpWkxCeVM2blJKQitxRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUxMTI5OTEzLFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDZdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjQwNTU2OTUwN1wifSIKfQ==" ;


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

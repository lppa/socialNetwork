// Copy in your particulars and rename this to mail.js
module.exports = {
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secureConnection: true,
  //name: "servername",
  
  //TODO replace this for a gmail account 
  auth: {
    user: "admin gmail user",
    pass: "admin pass"
  },
  ignoreTLS: false,
  debug: false,
  maxConnections: 5 // Default is 5
}

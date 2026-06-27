module.exports = async (req, res) => {
  res.status(200).json({
    success: true,
    author: "Ruti Medya",
    brand: "Ruti Medya",
    website: "https://rutimedya.com",
    message: "Ruti Medya SMS API",
    status: "online",
    mode: "test",
    note: "vesityphp",
    endpoints: [
      "/api",
      "/api/sms"
    ]
  });
};

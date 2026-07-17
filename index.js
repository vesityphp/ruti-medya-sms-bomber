module.exports = async (req, res) => {
  return res.status(200).json({
    success: true,
    author: "Ruti Medya",
    brand: "Ruti Medya",
    website: "https://rutimedya.com",
    message: "Ruti Medya",
    status: "online",
    mode: "test",
    endpoints: [
      "/",
      "/api",
      "/api/sms"
    ],
    note: "vesityphp"
  });
};
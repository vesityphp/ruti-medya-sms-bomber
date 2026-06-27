const SendSms = require('../app.js');
module.exports = async (req, res) => {
  const phone = req.query.phone;
  if (!phone) {
    return res.status(400).json({ error: 'Phone parametresi zorunlu' });
  }
  try {
    const smsSender = new SendSms(phone);
    await smsSender.KahveDunyasi();
    await smsSender.Wmf();
    await smsSender.Bim();
    await smsSender.Englishhome();
    await smsSender.Suiste();
    await smsSender.KimGb();
    await smsSender.Evidea();
    await smsSender.Ucdortbes();
    await smsSender.TiklaGelsin();
    await smsSender.Naosstars();
    await smsSender.Koton();
    await smsSender.Hayatsu();
    await smsSender.Hizliecza();
    await smsSender.Metro();
    await smsSender.File();
    await smsSender.Akasya();
    await smsSender.Akbati();
    await smsSender.Komagene();
    await smsSender.Porty();
    await smsSender.Tasdelen();
    await smsSender.Uysal();
    await smsSender.Yapp();
    await smsSender.YilmazTicaret();
    await smsSender.Beefull();
    await smsSender.Dominos();
    await smsSender.Baydoner();
    await smsSender.Pidem();
    await smsSender.Frink();
    await smsSender.Bodrum();
    await smsSender.KofteciYusuf();
    await smsSender.Little();
    await smsSender.Orwi();
    await smsSender.Coffy();
    await smsSender.Hamidiye();
    await smsSender.Fatih();
    await smsSender.Sancaktepe();
    await smsSender.Bayrampasa();
    await smsSender.Money();
    await smsSender.Alixavien();
    await smsSender.Jimmykey();
    await smsSender.Ido();
    res.json({
      success: true,
      adet: smsSender.adet,
      phone: phone
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Bir hata oluştu' });
  }
};

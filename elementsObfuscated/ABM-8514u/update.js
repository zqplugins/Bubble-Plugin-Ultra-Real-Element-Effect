function(instance, properties, context){
	function _0xdb97() {
    var _0x2d0bb8 = [
        'replace',
        '\x27Elements\x20ID\x27\x20field\x20is\x20empty!',
        'text/css',
        '\x27Bevel\x20Name\x27\x20field\x20is\x20empty!',
        '1376394FRtIXh',
        '609835tkswwY',
        'split',
        '4534950fAAyJL',
        '25926768gYWfpF',
        '8149192HbMOzG',
        'className',
        'bevelname',
        'head',
        '777768iyXauY',
        'getElementsByTagName',
        '\x0a\x20\x20\x20\x20}',
        '1572181dMrmPz',
        '\x27\x20not\x20found!',
        'message',
        'forEach',
        'innerHTML',
        'toString',
        'bevelelementid',
        '7XbIbTm',
        '60GbaUFq',
        'createElement',
        'type',
        'style',
        'reportDebugger',
        'cssProperties'
    ];
    _0xdb97 = function () {
        return _0x2d0bb8;
    };
    return _0xdb97();
}
function _0xe6ff(_0x4d46c5, _0x593a34) {
    var _0xdb97ff = _0xdb97();
    return _0xe6ff = function (_0xe6ff47, _0x4d1260) {
        _0xe6ff47 = _0xe6ff47 - 0x1c6;
        var _0x1b2f5c = _0xdb97ff[_0xe6ff47];
        return _0x1b2f5c;
    }, _0xe6ff(_0x4d46c5, _0x593a34);
}
(function (_0x3fadba, _0x2e7030) {
    var _0x2412f1 = _0xe6ff, _0x4ecfe2 = _0x3fadba();
    while (!![]) {
        try {
            var _0xbfb5e2 = -parseInt(_0x2412f1(0x1d1)) / 0x1 + -parseInt(_0x2412f1(0x1e3)) / 0x2 + parseInt(_0x2412f1(0x1ce)) / 0x3 + parseInt(_0x2412f1(0x1d9)) / 0x4 * (parseInt(_0x2412f1(0x1c6)) / 0x5) + -parseInt(_0x2412f1(0x1c8)) / 0x6 + -parseInt(_0x2412f1(0x1d8)) / 0x7 * (parseInt(_0x2412f1(0x1ca)) / 0x8) + parseInt(_0x2412f1(0x1c9)) / 0x9;
            if (_0xbfb5e2 === _0x2e7030)
                break;
            else
                _0x4ecfe2['push'](_0x4ecfe2['shift']());
        } catch (_0x4e4346) {
            _0x4ecfe2['push'](_0x4ecfe2['shift']());
        }
    }
}(_0xdb97, 0xe4305));
function update(_0x2a5ca5, _0x35445f, _0x539243) {
    var _0x5b6750 = _0xe6ff;
    if (!_0x35445f['bevelelementid']) {
        _0x539243[_0x5b6750(0x1dd)](_0x5b6750(0x1e0));
        return;
    }
    if (!_0x35445f['bevelname']) {
        _0x539243[_0x5b6750(0x1dd)](_0x5b6750(0x1e2));
        return;
    }
    if (!_0x35445f[_0x5b6750(0x1de)]) {
        _0x539243[_0x5b6750(0x1dd)]('\x27CSS\x20code\x27\x20field\x20is\x20empty!');
        return;
    }
    var _0x4b4a6e = _0x35445f[_0x5b6750(0x1de)][_0x5b6750(0x1df)](/(\r\n|\n|\r)/gm, ''), _0x383388 = _0x4b4a6e[_0x5b6750(0x1df)](/\s+/g, '\x20')['trim']();
    const _0x6b7a91 = '.' + _0x35445f[_0x5b6750(0x1cc)] + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x383388 + _0x5b6750(0x1d0);
    try {
        var _0x5ad159 = document[_0x5b6750(0x1da)](_0x5b6750(0x1dc));
        _0x5ad159[_0x5b6750(0x1db)] = _0x5b6750(0x1e1), _0x5ad159[_0x5b6750(0x1d5)] = _0x6b7a91, document[_0x5b6750(0x1cf)](_0x5b6750(0x1cd))[0x0]['appendChild'](_0x5ad159);
    } catch (_0x30c471) {
        _0x539243[_0x5b6750(0x1dd)](_0x30c471[_0x5b6750(0x1d3)]);
    }
    var _0x233d37 = _0x35445f[_0x5b6750(0x1d7)], _0x2b835b = _0x233d37[_0x5b6750(0x1d6)]()[_0x5b6750(0x1c7)](',');
    _0x2b835b[_0x5b6750(0x1d4)](_0x2c6ab3 => {
        var _0x3e01d6 = _0x5b6750;
        const _0x591b5c = document['getElementById'](_0x2c6ab3[_0x3e01d6(0x1df)](/\s/g, ''));
        if (!_0x591b5c) {
            _0x539243['reportDebugger']('The\x20element\x20with\x20id\x20\x27' + _0x2c6ab3 + _0x3e01d6(0x1d2));
            return;
        }
        _0x591b5c[_0x3e01d6(0x1cb)] += '\x20' + _0x35445f[_0x3e01d6(0x1cc)] + '';
    });
}
	update(instance, properties, context);
}
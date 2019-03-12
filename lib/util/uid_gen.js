async function generate(count = 10) {
    var _sym = 'abcdefghijklmnopqrstuvwxyz1234567890',
    var str = '';

    for(var i = 0; i < count; i++) {
        str += _sym[parseInt(Math.random() * (_sym.length))];
    }
    
    base.getID(str, function(err, res) {
        if(!res.length) {
            return str;
        } 
        else {
            return await generate(count)  // otherwise, recurse on generate
        }
    });
}

module.exports = generate;
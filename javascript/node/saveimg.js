var http = require('http');
var fs = require('fs');

var a = ["http://i.fotoshare.co/eunysjee/20170916_191149_814.mp4","http://i.fotoshare.co/eunysjee/20170916_191149_814.jpg","http://i.fotoshare.co/eunysjee/20170916_190912_618.mp4","http://i.fotoshare.co/eunysjee/20170916_190912_618.jpg","http://i.fotoshare.co/eunysjee/20170916_190623_070.mp4","http://i.fotoshare.co/eunysjee/20170916_190623_070.jpg","http://i.fotoshare.co/eunysjee/20170916_185425_380.mp4","http://i.fotoshare.co/eunysjee/20170916_185425_380.jpg","http://i.fotoshare.co/eunysjee/20170916_185212_111.mp4","http://i.fotoshare.co/eunysjee/20170916_185212_111.jpg","http://i.fotoshare.co/eunysjee/20170916_185034_997.mp4","http://i.fotoshare.co/eunysjee/20170916_185034_997.jpg","http://i.fotoshare.co/eunysjee/20170916_184739_872.mp4","http://i.fotoshare.co/eunysjee/20170916_184739_872.jpg","http://i.fotoshare.co/eunysjee/20170916_184041_901.mp4","http://i.fotoshare.co/eunysjee/20170916_184041_901.jpg","http://i.fotoshare.co/eunysjee/20170916_181825_448.mp4","http://i.fotoshare.co/eunysjee/20170916_181825_448.jpg","http://i.fotoshare.co/eunysjee/20170916_175323_546.mp4","http://i.fotoshare.co/eunysjee/20170916_175323_546.jpg","http://i.fotoshare.co/eunysjee/20170916_175144_244.mp4","http://i.fotoshare.co/eunysjee/20170916_175144_244.jpg","http://i.fotoshare.co/eunysjee/20170916_175044_469.mp4","http://i.fotoshare.co/eunysjee/20170916_175044_469.jpg","http://i.fotoshare.co/eunysjee/20170916_174936_669.mp4","http://i.fotoshare.co/eunysjee/20170916_174936_669.jpg","http://i.fotoshare.co/eunysjee/20170916_174823_817.mp4","http://i.fotoshare.co/eunysjee/20170916_174823_817.jpg","http://i.fotoshare.co/eunysjee/20170916_174705_404.mp4","http://i.fotoshare.co/eunysjee/20170916_174705_404.jpg","http://i.fotoshare.co/eunysjee/20170916_164923_536.mp4","http://i.fotoshare.co/eunysjee/20170916_173922_473.mp4","http://i.fotoshare.co/eunysjee/20170916_164923_536.jpg","http://i.fotoshare.co/eunysjee/20170916_173922_473.jpg","http://i.fotoshare.co/eunysjee/20170916_163945_845.jpg","http://i.fotoshare.co/eunysjee/20170916_161749_451.jpg","http://i.fotoshare.co/eunysjee/20170916_164340_044.mp4","http://i.fotoshare.co/eunysjee/20170916_161154_572.jpg","http://i.fotoshare.co/eunysjee/20170916_164340_044.jpg","http://i.fotoshare.co/eunysjee/20170916_173759_542.mp4","http://i.fotoshare.co/eunysjee/20170916_173759_542.jpg","http://i.fotoshare.co/eunysjee/20170916_162459_707.mp4","http://i.fotoshare.co/eunysjee/20170916_161656_622.jpg","http://i.fotoshare.co/eunysjee/20170916_162459_707.jpg","http://i.fotoshare.co/eunysjee/20170916_163255_927.mp4","http://i.fotoshare.co/eunysjee/20170916_163849_490.mp4","http://i.fotoshare.co/eunysjee/20170916_173605_562.mp4","http://i.fotoshare.co/eunysjee/20170916_173605_562.jpg","http://i.fotoshare.co/eunysjee/20170916_163849_490.jpg","http://i.fotoshare.co/eunysjee/20170916_164743_327.mp4","http://i.fotoshare.co/eunysjee/20170916_164743_327.jpg","http://i.fotoshare.co/eunysjee/20170916_173431_646.mp4","http://i.fotoshare.co/eunysjee/20170916_164241_658.mp4","http://i.fotoshare.co/eunysjee/20170916_173431_646.jpg","http://i.fotoshare.co/eunysjee/20170916_164241_658.jpg","http://i.fotoshare.co/eunysjee/20170916_161454_094.mp4","http://i.fotoshare.co/eunysjee/20170916_163518_290.mp4","http://i.fotoshare.co/eunysjee/20170916_163255_927.jpg","http://i.fotoshare.co/eunysjee/20170916_163518_290.jpg","http://i.fotoshare.co/eunysjee/20170916_164650_776.mp4","http://i.fotoshare.co/eunysjee/20170916_173251_918.mp4","http://i.fotoshare.co/eunysjee/20170916_173251_918.jpg","http://i.fotoshare.co/eunysjee/20170916_164650_776.jpg","http://i.fotoshare.co/eunysjee/20170916_161928_483.mp4","http://i.fotoshare.co/eunysjee/20170916_161154_572.mp4","http://i.fotoshare.co/eunysjee/20170916_161928_483.jpg","http://i.fotoshare.co/eunysjee/20170916_163750_331.mp4","http://i.fotoshare.co/eunysjee/20170916_163750_331.jpg","http://i.fotoshare.co/eunysjee/20170916_172939_876.mp4","http://i.fotoshare.co/eunysjee/20170916_165140_673.mp4","http://i.fotoshare.co/eunysjee/20170916_172939_876.jpg","http://i.fotoshare.co/eunysjee/20170916_165140_673.jpg","http://i.fotoshare.co/eunysjee/20170916_164122_538.mp4","http://i.fotoshare.co/eunysjee/20170916_164122_538.jpg","http://i.fotoshare.co/eunysjee/20170916_161454_094.jpg","http://i.fotoshare.co/eunysjee/20170916_161656_622.mp4","http://i.fotoshare.co/eunysjee/20170916_172749_888.mp4","http://i.fotoshare.co/eunysjee/20170916_172749_888.jpg","http://i.fotoshare.co/eunysjee/20170916_164529_500.mp4","http://i.fotoshare.co/eunysjee/20170916_164529_500.jpg","http://i.fotoshare.co/eunysjee/20170916_162019_277.mp4","http://i.fotoshare.co/eunysjee/20170916_163153_229.mp4","http://i.fotoshare.co/eunysjee/20170916_172636_133.mp4","http://i.fotoshare.co/eunysjee/20170916_161749_451.mp4","http://i.fotoshare.co/eunysjee/20170916_172636_133.jpg","http://i.fotoshare.co/eunysjee/20170916_163153_229.jpg","http://i.fotoshare.co/eunysjee/20170916_162019_277.jpg","http://i.fotoshare.co/eunysjee/20170916_163644_767.mp4","http://i.fotoshare.co/eunysjee/20170916_163347_975.mp4","http://i.fotoshare.co/eunysjee/20170916_163644_767.jpg","http://i.fotoshare.co/eunysjee/20170916_163347_975.jpg","http://i.fotoshare.co/eunysjee/20170916_163945_845.mp4"];

a.map(function(uri, i){
    var file = fs.createWriteStream(i+".jpg");
    if (/jpg/.test(uri)) {
        console.log(uri);
        var request = http.get(uri, function(response) {
            response.pipe(file);
        });
    }
});
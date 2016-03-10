;(function(){
	var config = {
	get_article_list: {
        responseText: {
            value: []
        },
        response: function (rq) {
            var i = 0, list = [];
            while(i++ < 10) {
                this.responseText.value.push({
					id: i + 1,
					title: 'test jquery mockajx_' + i,
					author: 'lzw.me',
					link: 'http://lzw.me',
					dateTime: new Date().getTime()
                });
            }
        }
	}
};

var mzMockjax = require('./mzMockjax.js');
var restList = require('./rest-list.js');

mzMockjax.render(restList, config)
	.run('_article_');
})()

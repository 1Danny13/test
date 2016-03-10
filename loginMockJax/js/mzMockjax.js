;(function(){
	require('./jquery.mockjax');

var responseConfig = {};
var mzMockjax = {
    mockjaxList: {}, //存储当前缓存的对象
    render: function (restapiList, responseConfig) {
        this.getConfig(restapiList, responseConfig);
        return this;
    },
    /**
     * 主要配置项
     * @param {Object} restapiList api 列表，用于通用定义
     * @param {Object} detailConfig 详细的定义
     */
    getConfig: function (restapiList, detailConfig) {
        var item, len, options = {};
        len = restapiList.length;

        //通用返回定义
        for (item in restapiList) {
            if (! restapiList.hasOwnProperty(item)) {
                continue;
            }
            options[item] = {
                url: restapiList[item],
                responseText: {
                    "message": "",
                    "value": true,
                    code: 200
                }
            };
        }

        //特殊接口定义义扩展
        responseConfig = $.extend(true, options, detailConfig);

        return responseConfig;
    },
    /**
     * 执行模拟
     * @param {Object|String} list 允许模拟的url列表，包含 responseConfig 的键名的数组。当为字符串时，尝试作为正则匹配。当部分接口已开发完毕，则可从中移除。可选，无参时模拟所有接口
     */
    run: function (list) {
        var item, regex;

        $.extend(true, $.mockjaxSettings, {
            contentType: "application/json"
        });

        if (typeof list === 'string') {
            try{
                regex = new RegExp(list);
            }catch(e){
                list = null;
            }
        }

        for (item in responseConfig) {
            if (! responseConfig.hasOwnProperty(item)) {
                continue;
            }

            if (!list ||
                $.isArray(list) && $.inArray(item, list) !== -1 ||
                regex && regex.test(item)
            ) {
                this.mockjaxList[item] = $.mockjax(responseConfig[item]);
            }
        }
    }
};

//mzMockjax.run(['get_article_list', 'get_article_content']);
module.exports = mzMockjax;
})()

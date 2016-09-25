function MainService($q) {
    var fastNews = [
        {
            id : '1',
            name: '王健林第二个游乐园开业，王思聪出席被戏称“最大的IP”',
            author:'user1',
            time:'2016-9-26 12:20:32'
        },
        {
            id : '2',
            name: '继顺丰、京东后，中国邮政也开始测试无人机投递',
            author:'user2',
            time:'2016-9-26 12:20:32'
        },{
            id : '3',
            name: '爱国者董事长称银行申请已获批 银监会网站暂无批文',
            author:'user3',
            time:'2016-9-26 12:20:32'
        },{
            id : '4',
            name: '苹果今日向全球30个国家和地区推出iPhone7/7 Plus',
            author:'user4',
            time:'2016-9-26 12:20:32'
        },{
            id : '5',
            name: '卖水也是生态？乐视将向中国供应贝加尔湖水',
            author:'user5',
            time:'2016-9-26 12:20:32'
        },{
            id : '6',
            name: '到底谁要买Twitter？投资者说迪斯尼最应该买入',
            author:'user6',
            time:'2016-9-26 12:20:32'
        },{
            id : '7',
            name: '对话赫斯特集团中国首席代表兼董事总经理邢文宁',
            author:'user7',
            time:'2016-9-26 12:20:32'
        },{
            id : '8',
            name: '6年投过100项目，他像找合伙人一样找创业者，获200倍回报',
            author:'user8',
            time:'2016-9-26 12:20:32'
        }
    ];

    // Promise-based API
    return {
        loadFastNews: function() {
            // Simulate async nature of real remote calls
            return $q.when(fastNews);
        }
    };
}

export default ['$q', MainService];

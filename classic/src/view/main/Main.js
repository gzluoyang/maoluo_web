Ext.define('Admin.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.dashboard.Dashboard',
        //'Ext.ux.StatusBar',
        'Ext.button.Segmented',
        'Ext.list.Tree'
    ],

    controller: 'main',
    viewModel: 'main',

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },

    items: [
        {
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar shadow',
            style: 'border-top: none;',
            height: 64,
            itemId: 'headerBar',
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    html: '<div class="main-logo"><img src="resources/images/logo.png">信息管理平台</div>',
                    width: 250
                },
                {
                    margin: '0 0 0 8',
                    ui: 'header',
                    iconCls:'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },
                '->',
                {
                    xtype: 'segmentedbutton',
                    margin: '0 16 0 0',
                    reference: 'segmentedbutton',
                    listeners: {
                        change: 'changeApp'
                    }
                },
                '-',
                /*
                {
                    iconCls:'x-fa fa-search',
                    ui: 'header',
                    href: '#searchresults',
                    hrefTarget: '_self',
                    tooltip: 'See latest search'
                },
                {
                    iconCls:'x-fa fa-envelope',
                    ui: 'header',
                    href: '#email',
                    hrefTarget: '_self',
                    tooltip: '系统消息'
                },
                */
                {
                    iconCls:'x-fa fa-eraser',
                    ui: 'header',
					handler: 'onClearCache',
                    tooltip: '清空缓存',
                    bind: {
                        hidden: '{!isAdmin}'
                    }
                },
                {
                    iconCls:'x-fa fa-question',
                    ui: 'header',
                    href: '#faq',
                    hrefTarget: '_self',
                    tooltip: '帮助/FAQ'
                },
                {
                    iconCls:'x-fa fa-th-large',
                    ui: 'header',
                    handler: 'goHome',
                    //href: '#dashboard',
                    //hrefTarget: '_self',
                    tooltip: '显示桌面'
                },
                {
                    iconCls:'x-fa fa-power-off',
                    ui: 'header',
					handler: 'onLogout',
                    tooltip: '重新登录'
                },
                {
                    xtype: 'tbtext',
                    text: '张小明',
                    cls: 'top-user-name'
                },
                {
                    xtype: 'image',
                    cls: 'header-right-profile-image',
                    height: 35,
                    width: 35,
                    alt:'current user image',
                    src: 'resources/images/user-profile/2.png'
                }
            ]
        },
        {
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'navigation',
                    width: 250,
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    scrollable: 'y',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
//        Ext.create('Ext.ux.StatusBar',{
//            id: 'statusBar',
//            border: true,
//            defaultText: '默认状态',
//            defaultIconCls: 'fa fa-home',
//            text: '状态',
//            iconCls: 'fa fa-home',
//            items: [
//                {
//                    text: 'hello'
//                },
//                '->',
//                '其它'
//            ]
//        })
    ]
});

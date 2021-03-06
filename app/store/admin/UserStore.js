Ext.define('Admin.store.admin.UserStore', {
    extend: 'Ext.data.Store',

    alias: 'store.users',
    storeId: 'usersStore',

    model: 'Admin.model.admin.UserModel',
	pageSize: 15,
	remoteSort: true,
	proxy: {
		type: 'ajax',
		url: '/api/admin/user/index',
		actionMethods: {
			create: 'POST',
			read: 'POST',
			update: 'POST',
			destroy: 'POST'
		},
		simpleSortMode: true,
		limitParam: 'limit',
		pageParam: 'page',
		sortParam: 'sort',
		directionParam: 'dir',
		startParam: '',
		reader: {
			type: 'json',
			rootProperty: 'data',
			totalProperty: 'total'
		}
	},
	autoLoad: true
});


Ext.define('Admin.view.admin.group.GroupsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.groups',
    data: {
        hasCurrentRecord: false,
        app_id: 0
    },
    stores: {
        apptree: {
            type: 'apptree'
        },
        groups: {
            type: 'groups'
        }
    }
});

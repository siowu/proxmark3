//ssssssssss
1Java.perform(function () {
    function calTime(givenTimestamp) {
    let timestamp = Number(givenTimestamp);
    const now = Date.now();
    const difference = Math.floor((now)/1000)-timestamp;
    if (difference < 60) {
        return `${difference}秒前`;
    } else if (difference < 3600) {
        const minutes = Math.floor(difference / 60);
        return `${minutes}分钟前`;
    } else if (difference < 86400) {
        const hours = Math.floor(difference / 3600);
        return `${hours}小时前`;
    } else if (difference < 2592000) {
        const days = Math.floor(difference / 86400);
        return `${days}天前`;
    } else {
        return `30天前`;
    }
}
    var targetClass = Java.use('com.soft.blued.ui.user.adapter.UserInfoPrivateAlbumAdapter');
    var BluedAlbum = Java.use('com.blued.android.module.common.user.model.BluedAlbum');

    targetClass.a.overload('com.chad.library.adapter.base.BaseViewHolder', 'com.blued.android.module.common.user.model.BluedAlbum').implementation = function (baseViewHolder, bluedAlbum) {
        var applyStatusField = BluedAlbum.class.getDeclaredField('applyStatus');
        applyStatusField.setAccessible(true);
        var originalValue = applyStatusField.getInt(bluedAlbum);
        if (originalValue == 1) {
            applyStatusField.setInt(bluedAlbum, 0);
            this.a(baseViewHolder, bluedAlbum);
            Java.scheduleOnMainThread(function () {
                var Toast = Java.use('android.widget.Toast');
                var context = Java.use('android.app.ActivityThread').currentApplication().getApplicationContext();
                Toast.makeText(context, Java.use('java.lang.String').$new("偷看到咯~"), Toast.LENGTH_SHORT.value).show();
            });
        }
        this.a(baseViewHolder, bluedAlbum);
    };

    var MsgChattingFragment = Java.use('com.soft.blued.ui.msg.MsgChattingFragment');
    MsgChattingFragment.a.overload('com.soft.blued.model.UserInfoBasicModel').implementation = function (userInfoBasicModel) {
        if (userInfoBasicModel.is_hide_distance.value == 1 || userInfoBasicModel.is_hide_last_operate.value == 1) {
            var Toast = Java.use('android.widget.Toast');
            var context = Java.use('android.app.ActivityThread').currentApplication().getApplicationContext();
            var content = "距离: " + userInfoBasicModel.distance.value + "km\n在线时间: " + calTime(userInfoBasicModel.last_operate.value);
            Toast.makeText(context, Java.use('java.lang.String').$new(content), Toast.LENGTH_LONG.value).show();
        }
        this.a(userInfoBasicModel);
    };
});

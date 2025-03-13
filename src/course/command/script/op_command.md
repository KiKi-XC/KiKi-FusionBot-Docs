# 插件管理员命令列表

1. 管理员拥有除所有玩家命令以外的其他命令权限
2. 命令有问题请先参见 [插件常见问题解决](../../faq/script/script_faq.md) 来自行处理
3. 所有命令控制台也可用

## Kisync bossbar命令
1. 此命令可发送全服Bossbar公告，且后加入的玩家也可以看见
2. 使用方法：游戏内输入/kisync bossbar [clear|content] [color] [time] [display]
3. 参数说明：
- clear表示清空当前所有的bossbar
- content表示设置bossbar内容
- color表示设置bossbar颜色,常见颜色[RED|BLUE|PINK|GREEN|YELLOW]需要大写
- time表示设置bossbar显示时间，单位为秒
- display表示设置bossbar是否显示倒计时，true开启false关闭，默认为false

## Kisync title命令
1. 此命令可发送全服弹脸内容
2. 使用方法：游戏内输入/kisync title [content] [color] [time]
3. 参数说明：
- content表示设置title内容
- color表示设置title颜色,常见颜色[RED|BLUE|PINK|GREEN|YELLOW]需要大写
- time表示设置title显示时间，单位为秒

## Kisync reload命令
1. 此命令用于重载KiSyncBridge插件
2. 使用方法：游戏内输入/kisync reload

## Kisync info命令
1. 此命令用于查看插件与数据库的连接状态
2. 使用方法：游戏内输入/kisync info

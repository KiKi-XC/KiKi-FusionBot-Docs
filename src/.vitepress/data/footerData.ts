import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
    author: { name: 'KiKi-Items', link: 'https://github.com/KiKi-XC' },
    group: [
        {
            title: '二次开发',
            icon: 'fa-solid fa-lightbulb',
            links: [
                { name: '标准性能数据接口', link: '/pages/none' },
                { name: '部分开源模块代码', link: '/pages/none' },
            ]
        },
        {
            title: 'KiKi-Items',
            icon: 'fa-solid fa-puzzle-piece',
            links: [
                { name: 'KiraSysPulse-可视化开服性能监视器', link: '/pages/none' },
                { name: 'FluffyTime-统计你的编码时间', link: '/pages/none' },
            ]
        },
        {
            title: '部分技术栈',
            icon: 'fa-solid fa-expand',
            links: [
                { name: 'Nonebot-2', link: 'https://nonebot.dev/' },
                { name: 'Python-312', link: 'https://www.python.org/downloads/release/python-3120/' },
            ]
        }
    ]
}

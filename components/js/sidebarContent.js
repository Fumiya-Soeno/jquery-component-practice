/**
 * サイドバーのアイコン付きテキストリンク
 * <sidebarContent title="@params title" icon="@params icon" href="@params href"></sidebarContent>
 * @params title リンクのタイトル
 * @oarams icon  リンクのアイコン(fontawesome)
 * @params href  リンク先
 */

tagName = document.currentScript.src.split('/').pop(0).split('.')[0]
$(tagName).parent().append(`<link rel="stylesheet" href="components/css/${tagName}.css">`)
$(tagName).filter((i, dom) => {
    $(dom).html(`
    <a href="" class="sidebar-content">
        <i class="${$(tagName).attr('icon')}"></i>
        <span>${$(tagName).attr('title')}</span>
    </a>
    `).children().unwrap()
})

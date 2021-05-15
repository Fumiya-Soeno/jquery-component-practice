/**
 * トップ画面の記事一覧表示テンプレート
 * <myHeader></myHeader>
 */

tagName = document.currentScript.src.split('/').pop(0).split('.')[0]
$(tagName).parent().append(`<link rel="stylesheet" href="components/css/${tagName}.css">`)
$(tagName).filter((i, dom) => {
    $(dom).html(`
    <header>
    <div id="header">
        <p id="header-logo">Kiita</p>
    </div>
    </header>
    `).children().unwrap()
})

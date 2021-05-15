/**
 * トップ画面の記事一覧表示テンプレート
 * <myBody></myBody>
 */

tagName = document.currentScript.src.split('/').pop(0).split('.')[0]
$(tagName).parent().append(`<link rel="stylesheet" href="components/css/${tagName}.css">`)
$(tagName).filter((i, dom) => {
    $(dom).html(`
    <div id="top">
        <div id="top-sidebar">
            <div id="top-sidebar-article">
                <p class="sidebar-title">記事フィード</p>
                <sidebarContent href="" icon="fa  fa-home"       title="ホーム"></sidebarContent>
                <sidebarContent href="" icon="far fa-clock"      title="タイムライン"></sidebarContent>
                <sidebarContent href="" icon="fa  fa-chart-line" title="トレンド"></sidebarContent>
            </div>
            <div id="top-sidebar-question">
                <p class="sidebar-title">質問フィード</p>
                <sidebarContent href="" icon="fa  fa-chart-line" title="トレンド"></sidebarContent>
                <sidebarContent href="" icon="far fa-clock"      title="タイムライン"></sidebarContent>
                <sidebarContent href="" icon="fa  fa-tags"       title="タグ"></sidebarContent>
            </div>
        </div>
        <div id="top-content">
            <div id="top-content-caption">
                <i class="fa fa-home"></i>
                <span>ホーム</span>
                <p id="top-content-caption-explanation">あなたのLGTMデータを元におすすめの記事を表示しています。</p>
                <a href="" id="top-content-caption-link">ホームフィードの詳細はこちら</a>
            </div>
            <topContentArticle
                userName="kiitan"
                createdAt="2021年05月04日"
                title="WEBプログラミング完全ロードマップ【未経験から実務レベルへ】"
                tags="Ruby Rails"
                lgtm="531"
            ></topContentArticle>
            <topContentArticle
                userName="soeno_onseo"
                createdAt="2020年07月30日"
                title="RubyでTwitterを作る全手順【Progateの次はコレ】"
                tags="Ruby Rails"
                lgtm="119"
            ></topContentArticle>
            <topContentArticle
                userName="kiitan"
                createdAt="2021年05月04日"
                title="WEBプログラミング完全ロードマップ【未経験から実務レベルへ】"
                tags="Ruby Rails AWS"
                lgtm="71"
            ></topContentArticle>
            <topContentArticle
                userName="kiitan"
                createdAt="2020年07月04日"
                title="Qiita風ブログアプリを作る全手順【実務レベル】"
                tags="Ruby Rails"
                lgtm="9"
            ></topContentArticle>
            <topContentArticle
                userName="kiitan"
                createdAt="2021年05月04日"
                title="【第16章】マークアップ作業"
                tags="HTML CSS HavaScript"
                lgtm="6"
            ></topContentArticle>
        </div>
        <div id="top-advertise">
            <img src="https://tpc.googlesyndication.com/simgad/6290739499725107350">
            <img src="https://s3-ap-northeast-1.amazonaws.com/qiita-official-event-image/5caffe25d8ecab1d790587a7fb2ff03f629b159c/original.jpg?1616144349">
        </div>
    </div>
    
    `).children().unwrap()
})

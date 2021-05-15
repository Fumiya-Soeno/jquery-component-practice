/**
 * トップページの個別記事リンク
 * <topContentArticle
 *  userName="@param ユーザー名" 
 *  createdAt="@param 投稿日時"
 *  title="@param 記事タイトル"
 *  tags="@param 記事タグ(複数時はスペース区切り)"
 *  lgtm="@param LGTM数"
 * ></topContentArticle>
 */

tagName = document.currentScript.src.split('/').pop(0).split('.')[0]
$(tagName).parent().append(`<link rel="stylesheet" href="components/css/${tagName}.css">`)
$(tagName).filter((i, dom) => {
    $(dom).html(`
    <div class="article">
        <div class="article-header">
            <div class="article-header-usericon">
                <i class="fa fa-user"></i>
            </div>
            <a href="" class="article-header-username">@${$(dom).attr('userName')}</a>
            <span class="article-header-createdat">が${$(dom).attr('createdAt')}に投稿</span>
        </div>
        <a href="" class="article-title">${$(dom).attr('title')}</a>
        <div class="article-tags">
            <i class="fa fa-tags fa-xs"></i>
            <a href="">${$(dom).attr('tags').split(' ').join('<span>,</span></a><a href="">')}</a>
        </div>
        <div class="article-footer">
            <div class="article-footer-left">
                <svg class="article-footer-left-icon" size="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392.81 429" color="rgba(0, 0, 0, 0.6)" class="css-17mv0yr e31pr5q0"><path d="M14.19 5.4h53.86v149.45h90.05v44.87H14.19zM288.4 93.77h100.79q1.29 25-5.66 45.39a96.79 96.79 0 01-20.33 34.89 92 92 0 01-32.13 22.45 104 104 0 01-40.95 7.93 109.71 109.71 0 01-76-29.92 104.05 104.05 0 01-23-32.56 95.46 95.46 0 01-8.47-39.88 94.78 94.78 0 018.47-39.87 104.38 104.38 0 0123-32.42A107.71 107.71 0 01248.23 8a110.79 110.79 0 01118.48 22.49l-35.07 35.08a51.25 51.25 0 00-17.75-15 52.83 52.83 0 00-44.67-1.23 52.92 52.92 0 00-17 12 57.07 57.07 0 00-11.45 18.11 60 60 0 00-4.23 22.77 60 60 0 004.23 22.68 56.57 56.57 0 0011.45 18.19 52.62 52.62 0 0017 12 50.5 50.5 0 0020.9 4.36q20.19 0 31.07-7.51a35.75 35.75 0 0014.46-20.55h-47.39zM51.29 279.55H0v-44.86h156v44.86h-51.13V429H51.29zM283.36 381.71l-41.72-62V429h-53.86V234.69h47.47L290 312l55.9-77.29h46.9V429h-53.86V320.27l-42.43 61.44z"></path></svg>
                <span class="article-footer-left-lgtm">${$(dom).attr('lgtm')}</span>
            </div>
            <div class="article-footer-right">
                <svg size="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353.02 398" color="#6E6F70" class="css-12rp90f e11v00bf0"><path d="M176.72 398c-67.52 0-130.16-29-171.84-79.69l-4.46-5.42V78.05H353v234.84l-4.45 5.42C306.88 369 244.24 398 176.72 398zm-137.2-99.34c34.17 38.37 83.78 60.25 137.2 60.25s103-21.88 137.21-60.25V117.14H39.52zM0 0h351.12v40.94H0z"></path></svg>
            </div>
        </div>
    </div>
    `).children().unwrap()
})

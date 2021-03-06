# pixivCommentsTranslation
#### 入れ方

**手順1** ダウンロード

Download ZIPで自分の好きなディレクトリにファイルをダウンロードし、解凍する。（画像ではドキュメントに展開している。）

![Download ZIP](README_IMAGE/Download.png)

![Defrost](README_IMAGE/Defrost.png)

**手順2** chromeの拡張機能に導入

chromeを起動してchrome://extensions/と打つか、設定の拡張機能のとこから表示する。

参考URL:https://support.google.com/chrome_webstore/answer/2664769

「パッケージ化されていない拡張機能を読み込む」を押し、先ほど展開したファイルを選択する。

![Extensions](README_IMAGE/Extensions.png)

展開の仕方によっては以下のようなディレクトリになるが、取り敢えずREADME_IMAGEが見える状態でフォルダーの選択を押せばOK

![fileSelect](README_IMAGE/fileSelect.png)

成功したら以下のような状態になる。

![success](README_IMAGE/success.png)

#### 使い方

上記の手順に従いchrome拡張機能に導入したらpixivのページを開くと勝手に起動します。

コメントのちょっと下に「翻訳」と表示されているので、その文字を押すと元あったコメントの上に翻訳結果を表示します。翻訳結果にコメントが変わった時に「翻訳」が「戻す」になるのでもう一度押すと元のコメントに戻ります。

![Before](README_IMAGE/Before.png)![After](README_IMAGE/After.png)

#### 注意点

・絵文字などは翻訳できず、戻す時にも表示されません。ページを更新して再度表示をお願いします。

・返信を見るを押した時にでるコメントにはまだ翻訳ボタンがつけれてません。更新をお待ちください。

・翻訳にはGoogle翻訳を使っています。翻訳の精度が悪くなる文章の時はそれ以外の方法をご利用ください。

・翻訳後の言語はお使いのchromeの言語設定で変わります。英語に変換したい時などはchromeの言語設定を変更してください。

#### 参考にしたURL  

・【Chrome拡張】SPAやSSRのWebページでページ遷移を検知する  
https://mem-archive.com/2019/12/09/post-2164/  
・DOM操作(要素の取得, 追加, 削除)  
https://www.wakuwakubank.com/posts/306-javascript-dom/  
・Vue.jsで翻訳も辞書引きもできるブラウザ拡張機能を作りました  
https://qiita.com/maemaemae3/items/3d8ceb5aa8a3bc78fcad

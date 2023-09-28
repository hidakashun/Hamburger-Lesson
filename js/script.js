$(function() {
  $('.menu-trigger').on('click', function(event) {
    // .menu-triggerクリック時に行われる処理
    $(this).toggleClass('active');
    //.toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッドです。
    //トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加されます。
    //クリックされた要素自身を表します。
    $('#sp-menu').fadeToggle();
    //要素のフェードイン・フェードアウトを切り替えるメソッドです。
    //このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定します。
    event.preventDefault();
    //event.preventDefault(); は、aタグの機能を無効にするメソッドです。
  });
});
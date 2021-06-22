$(function() {
 
  // 画面を押したら発動
  $('body').click(function() {
 
    // class'showUp'をdiv要素に追加
    $('body').addClass('showUp');
 
  });
});
 
 
 
 $(function(){
        $("nav").hide();
        $(".menubtn").click(function(){
            $("nav").toggle(250)
        });
     });

  // $('#anime1').animate({ 'opacity': '0' }, 2000);
$(function(){
  $('#anime1').hide().fadeIn(3000).fadeOut(5000).fadeIn(10000);
  $('#anime2').hide().fadeOut(4500).fadeOut(3500).fadeIn(10000);
});
 







// ここからmakingで、遊び

  $('#text').animate({
  'fontSize' : '350px'
    },3500, 'swing');


$('#m1').animate({'bottm': '100%'})
        .animate({'left': '40%'})
        .animate({'fontSize': '80px'})
        .animate({'left': '100%'});

$('#m2').animate({ 'opacity': '0' }, 2000);
// $('#m2').animate({'opacity': 'toggle'}, 8000);

$('#m3').click(function(){
    $('#m3').animate({opacity: 0}, 500,
      function(){
                $('#m3').css('display','none');
                $('#m4').css('display','block');
                $('#m4').animate({opacity: 1}, 500);  
                });
  }); 


  

  $(function() {
    $('.slide').each(function() {
      // スライド（画像）の数を取得
      var currentIdx = 0; // 何番目か
    
      // 最初の画像をフェードイン
      $(".slide img").eq(currentIdx).fadeIn();
    
      // 3秒後に次のスライドを表示
      setTimeout(dispNextSlide, 3000);
    
      // 次のスライドを表示するメソッド
      function dispNextSlide() {
        var nextIdx = currentIdx + 1;
    
        // 最後のスライドの場合ははじめに戻る
        if (nextIdx > (2 - 1)) {
          nextIdx = 0
        }
    
        // 現在のスライドをフェードアウト
        $(".slide img").eq(currentIdx).fadeOut();
    
        // 次のスライドをフェードイン
        $(".slide img").eq(nextIdx).fadeIn();
    
        // インデックスを更新
        currentIdx = nextIdx;
      }
    })
   })
  

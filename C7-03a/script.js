// ページ内の .fade-in を全て取得
const fadeInElements = document.querySelectorAll('.fade-in');

// Intersection Observer のオプション設定
const options = {
  root: null,         // ビューポートをルート要素とする
  rootMargin: '0px',  // オフセット無し
  threshold: 0.1      // 要素が10%見えたら発火
};

// Intersection Observer のコールバック
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 要素が見えたらクラスを追加
      entry.target.classList.add('show');
      // 一度アニメーションが完了したら、再び監視しない場合は unobserve
      observer.unobserve(entry.target);
    }
  });
};

// 上記コールバックとオプションを使ってObserverを生成
const observer = new IntersectionObserver(callback, options);

// 取得した要素それぞれをObserverに登録
fadeInElements.forEach(el => observer.observe(el));
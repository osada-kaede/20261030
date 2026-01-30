// 親要素とライン要素、各メニュー項目を取得
const menu = document.querySelector(".menu-container");
const magicLine = document.querySelector(".magic-line");
const menuItems = document.querySelectorAll(".menu a");

// ラインを特定要素の下に移動させる関数
function moveMagicLine(target) {
  // ターゲット要素の位置と幅を取得
  const targetRect = target.getBoundingClientRect();
  // 親要素(ul) の位置を取得
  const menuRect = menu.getBoundingClientRect();

  // 親要素から見た左位置
  const left = targetRect.left - menuRect.left;
  const width = targetRect.width;

  // 取得した値を使ってマジックラインの position / width を指定
  magicLine.style.left = left + "px";
  magicLine.style.width = width + "px";
}

// 各メニューにマウスエンター時の動きを設定
menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    moveMagicLine(item);
  });
});

// ページ読み込み直後、または最初の状態を設定したい場合（例:先頭メニューに合わせる）
moveMagicLine(menuItems[0]);
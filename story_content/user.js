function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vKMPrWmZh0":
        Script1();
        break;
      case "5mqpFC2MZGn":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();  // Menghubungkan JavaScript dengan Storyline
var scrollContainer = document.querySelector('.scrollarea'); // Ambil Scrolling Panel
var autoScroll = true; // Mengaktifkan auto-scroll

function startScroll() {
    if (autoScroll && scrollContainer) {
        scrollContainer.scrollBy(0, 2); // Scroll turun 2px per interval
        setTimeout(startScroll, 50);  // Loop setiap 50ms
    }
}

startScroll();

}

function Script2()
{
  autoScroll = false; //

}


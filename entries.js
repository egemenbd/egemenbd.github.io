var ENTRIES = [
  { cat: "serra", date: "2026-08-18", file: "original-sense.html", title: "original sense" },
  { cat: "terra", date: "2026-08-18", file: "two-days.html", title: "two days" },
  { cat: "mare", date: "2026-08-18", file: "hart-penumbra.html", title: "gölge ve gerçeğin göstergeleri" }
];

function fillRail() {
  var ol = document.getElementById("rail");
  if (!ol) return;
  var cat = document.documentElement.getAttribute("data-cat") || "";
  var here = document.documentElement.getAttribute("data-file") || "";
  var list = ENTRIES.filter(function (e) { return e.cat === cat; });
  list.sort(function (a, b) {
    if (a.date === b.date) return (b.file > a.file) - (b.file < a.file);
    return a.date < b.date ? 1 : -1;
  });
  ol.innerHTML = list.map(function (e) {
    var cur = e.file === here ? ' class="here"' : "";
    return "<li><time datetime=\"" + e.date + "\">" + e.date + "</time>" +
      "<a" + cur + " href=\"" + e.file + "\">" + e.title.replace(/</g, "&lt;") + "</a></li>";
  }).join("");
}

// Suggest an artist — Urdu site version (/suggest-an-artist/).
//
// POSTs to the main site's API at https://jonathanmccallum.com/api/suggest.
// The Worker sets no CORS headers yet, so a normal cross-origin JSON fetch
// fails at the preflight. The fallback sends the same JSON body with
// mode "no-cors" and a text/plain content-type (a simple request, no
// preflight) — the Worker parses the body as JSON regardless of content
// type, and the suggestion goes through. Once Bobby adds CORS to the
// Worker, the normal fetch works and gives a real success/error answer.
//
// Same pattern as the main site: the button is type="button" on purpose,
// so there is no native submit path that reloads the page and loses the
// visitor's words.
var SUGGEST_API = "https://jonathanmccallum.com/api/suggest";

function bootSuggest() {
  var form = document.getElementById("suggest-form");
  if (!form) return;
  var button = document.getElementById("suggest-button");
  var result = document.getElementById("suggest-result");
  if (!button || !result) return;

  function doSuggest() {
    var artist = document.getElementById("suggest-artist").value.trim();
    var link = document.getElementById("suggest-link").value.trim();
    var why = document.getElementById("suggest-why").value.trim();
    var fromName = document.getElementById("suggest-name").value.trim();
    var fromLink = document.getElementById("suggest-from-link").value.trim();
    var kinds = [];
    var boxes = form.querySelectorAll('input[name="kind"]:checked');
    boxes.forEach(function (box) {
      kinds.push(box.value);
    });
    if (!artist || !link) return;
    if (kinds.length === 0) {
      result.textContent = "کم از کم ایک منتخب کریں — لکھوں، انٹرویو کروں یا ردِّعمل کی ویڈیو بناؤں۔";
      return;
    }
    button.disabled = true;
    result.textContent = "آپ کی تجویز بھیجی جا رہی ہے…";
    var payload = JSON.stringify({
      artist: artist,
      link: link,
      kinds: kinds,
      why: why,
      fromName: fromName,
      fromLink: fromLink,
    });
    function done() {
      button.disabled = false;
      result.textContent = "شکریہ — آپ کی تجویز جوناتھن تک پہنچ گئی۔ جو کچھ آتا ہے، وہ سب پڑھتا ہے۔";
      form.reset();
    }
    function failed() {
      button.disabled = false;
      result.textContent = "تجاویز ابھی کھلی نہیں ہیں — جوناتھن تک پہنچنے کا سب سے تیز راستہ انسٹاگرام یا تھریڈز پر پیغام بھیجنا ہے۔";
    }
    fetch(SUGGEST_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.ok) done();
        else failed();
      })
      .catch(function () {
        // CORS preflight failed (Worker has no CORS headers yet) — retry
        // as a simple no-cors request. The suggestion still goes through;
        // the answer just cannot be read back.
        fetch(SUGGEST_API, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: payload,
        })
          .then(function () { done(); })
          .catch(function () { failed(); });
      });
  }

  button.addEventListener("click", doSuggest);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    doSuggest();
  });

  // Carousel picks: tapping a circle photo fills the form in with that
  // artist's name and profile link, then moves the reader to the "why"
  // box. Nothing is sent until they press "تجویز بھیجیں".
  var picks = document.querySelectorAll(".suggest-pick");
  picks.forEach(function (pick) {
    pick.addEventListener("click", function () {
      var artist = document.getElementById("suggest-artist");
      var link = document.getElementById("suggest-link");
      var why = document.getElementById("suggest-why");
      if (!artist || !link || !why) return;
      artist.value = pick.getAttribute("data-artist") || "";
      link.value = pick.getAttribute("data-link") || "";
      result.textContent = artist.value + " — چند الفاظ میں بتائیں کہ وہ کیوں، اور بھیج دیں۔";
      form.scrollIntoView({ behavior: "smooth", block: "start" });
      why.focus({ preventScroll: true });
    });
  });
}

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", bootSuggest);
} else {
  bootSuggest();
}

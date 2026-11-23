---
title: "کسی فنکار کی تجویز دیں"
slug: suggest-an-artist
---

مجھے یسوع کی پیروی کرنے والے موسیقاروں اور فنکاروں کے بارے میں سن کر بہت خوشی ہوتی ہے۔ اگر آپ کسی ایسے شخص کو جانتے ہیں جس کے بارے میں میں لکھوں، جس کا انٹرویو کروں یا جس پر ردِّعمل کی ویڈیو بناؤں، تو یہاں مجھے بتائیں۔

نام اور ایک لنک کافی ہے — اور چند الفاظ میں یہ بھی کہ وہ کیوں۔ جو کچھ آتا ہے، میں سب پڑھتا ہوں۔ بہت شکریہ۔

کیا آپ ان میں سے کسی کو جانتے ہیں؟ تصویر پر ٹیپ کریں، فارم خود بھر جائے گا — پھر چند الفاظ میں بتائیں کہ وہ کیوں، اور بھیج دیں۔

<div class="suggest-carousel" role="list" aria-label="موسیقار اور فنکار جن کی آپ تجویز دے سکتے ہیں">
{% for artist in suggest_carousel %}
  <button type="button" class="suggest-pick" role="listitem" data-artist="{{ artist.name }}" data-link="{{ artist.profile }}" title="تجویز کریں {{ artist.name }}">
    <img src="{{ artist.img }}" alt="{{ artist.name }}" loading="lazy" width="150" height="150">
    <span class="suggest-pick__name">{{ artist.name }}</span>
    <span class="suggest-pick__note">{{ artist.note }}</span>
  </button>
{% endfor %}
</div>

<p class="suggest-carousel__more">یا نیچے کسی نئے شخص کی تجویز دیں — کوئی بھی جس کے بارے میں آپ کو لگتا ہے کہ مجھے سننا چاہیے۔</p>

یہ سائٹ 18 سال سے کم عمر والوں کے لیے نہیں ہے۔

<form id="suggest-form" class="suggest-form">
  <label for="suggest-artist">فنکار کا نام</label>
  <input id="suggest-artist" name="artist" type="text" maxlength="200" placeholder="میں کسے دیکھوں؟" required>

  <label for="suggest-link">سوشل میڈیا پروفائل کا لنک</label>
  <input id="suggest-link" name="link" type="url" maxlength="500" placeholder="https://www.instagram.com/…" required>

  <fieldset class="suggest-kinds">
    <legend>میں ان کے ساتھ کیا کروں؟</legend>
    <label><input type="checkbox" name="kind" value="write"> ان کے بارے میں لکھوں</label>
    <label><input type="checkbox" name="kind" value="interview"> ان کا انٹرویو کروں</label>
    <label><input type="checkbox" name="kind" value="reaction"> ان پر ردِّعمل کی ویڈیو بناؤں</label>
  </fieldset>

  <label for="suggest-why">وہ کیوں؟</label>
  <textarea id="suggest-why" name="why" rows="3" maxlength="500" placeholder="چند الفاظ کافی ہیں…"></textarea>

  <label for="suggest-name">آپ کا نام <span class="optional">(اختیاری)</span></label>
  <input id="suggest-name" name="fromName" type="text" maxlength="100" placeholder="تاکہ میں آپ کا شکریہ ادا کر سکوں">

  <label for="suggest-from-link">آپ کے سوشل میڈیا پروفائل کا لنک <span class="optional">(اختیاری)</span></label>
  <input id="suggest-from-link" name="fromLink" type="url" maxlength="500" placeholder="https://www.instagram.com/…">

  <button id="suggest-button" type="button">تجویز بھیجیں</button>

  <p id="suggest-result" aria-live="polite"></p>
</form>

import './haberler.less'
import { DATA } from '../menu/data'
// Haberleri üretmek için aşağıdaki data kullanılacak. Önce inceleyin sonra 94. satıra geçin.
// OPSİYONEL: Kendinizi maceracı hissediyorsanız, bu verileri farklı bir modülden dışa aktarmaya çalışın ve buraya aktarın.
// ES6 Modülleri ile ilgili bilgi için bakabilirsiniz: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules


/*
  Adım 1: Haber oluşturmak için 'haberYapici' adında bir bileşen(component) oluşturun.
  Bileşeniniz, argümanı haberleri içeren dizi olarak alan bir fonksiyon olacak,
  ve aşağıdaki gibi görünen bir DOM düğümü döndürecek:

  <div class="article">
    <h2>{haber başlığı}</h2>
    <p class="tarih">{haber tarihi}</p>

    {üç ayrı paragraf elementi}

    <span class="expandButton">+</span>
  </div>

  Adım 2: Hala `haberYapici` içindeyiz, span.expandButton 'a bir click event dinleyici ekleyin.
  Bu dinleyici div.article öğesine 'article-open' class'ını ekleyip/çıkaracak (toogle).

  Adım 3: Fonksiyonunuzdan bir öğe döndürmeyi unutmayın.

  Adım 4: Fonksiyonunuzun dışında, tüm datayı döngüye sokun(loop). Bir div.article öğesi oluşturmak ve bunu div.articles içindeki DOM'a eklemek için
  her yinelemede oluşturduğunuz bileşeninizi kullanacaksınız(bknz. index.html).

  Adım 5: Veri dizisine yeni haber nesnesi eklemeyi deneyin. Diğer verilerle aynı yapıda olmasına dikkat edin.
  Eklediğiniz yeni haberi görmek için sayfayı yenileyin.
*/
// console.log(DATA)

function haberYapici(data) {
  const article = document.createElement('div');
  article.classList.add('article')

  const h2 = document.createElement('h2')
  h2.textContent = data.baslik
  
  const p1 = document.createElement('p')
  p1.classList.add('tarih')
  p1.textContent = data.tarih

  const p2 = document.createElement('p')
  p2.textContent = data.ilkParagraf

  const p3 = document.createElement('p')
  p3.textContent = data.ikinciParagraf

  const p4 = document.createElement('p')
  p4.textContent = data.ucuncuParagraf
  
  const span = document.createElement('span')
  span.classList.add('expandButton')
  span.textContent = '+'
  span.addEventListener('click',()=>{
    article.classList.toggle('article-open')
  })

  article.append(h2,p1,p2,p3,p4,span)
  
  // console.log(article)
  return article;
}
const articles = document.querySelector('.articles')
DATA.forEach(e=>{
  articles.append(haberYapici(e))
})

// haberYapici(DATA[0])

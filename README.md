# IQLC 2026 Web Sitesi

Bu proje, IQLC 2026 konferansı için hazırlanmış iki dilli statik web sitesidir.

## Özellikler

- Türkçe / İngilizce dil desteği
- Çalışan dil değiştirme butonları
- Dile göre değişen hero/slider metinleri
- Dile göre değişen kayan bant metinleri
- Responsive tasarım
- Sade HTML / CSS / JavaScript yapısı

## Dosya Yapısı

- `index.html` → Ana sayfa yapısı
- `styles.css` → Tüm stil dosyası
- `script.js` → Dil yönetimi, slider ve menü davranışları
- `assets/` → Logo ve görseller

## Assets klasörü için önerilen dosyalar

Aşağıdaki görsel isimlerini kullanabilirsiniz:

- `assets/logo.png`
- `assets/slide-1.jpg`
- `assets/slide-2.jpg`
- `assets/slide-3.jpg`

Eğer farklı dosya isimleri kullanıyorsanız, `index.html` ve `script.js` içindeki yolları güncelleyin.

## Yayına alma

Bu proje statik yapıdadır. Doğrudan GitHub Pages, Netlify veya Vercel gibi ortamlarda yayınlanabilir.

## Not

Dil içerikleri `script.js` içindeki `translations` nesnesi üzerinden yönetilmektedir.
Yeni alan eklemek isterseniz hem `tr` hem `en` içine karşılıklarını eklemelisiniz.

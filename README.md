# PMM Hub · GigaCowork

Внутренний хаб продуктового маркетинга: FAQ, конкурентный анализ, ROI-калькулятор.

## Структура

- `index.html` — хаб (FAQ и ROI-калькулятор встроены)
- `competitors/analysis-2026.html` — конкурентный анализ, подгружается в хаб через iframe

## Публикация на GitHub Pages

1. Создайте репозиторий на github.com (например, `pmm-hub`).
2. В этой папке выполните:

```bash
git init
git add .
git commit -m "PMM Hub"
git branch -M main
git remote add origin https://github.com/<username>/pmm-hub.git
git push -u origin main
```

3. На GitHub: Settings → Pages → Source: **Deploy from a branch** → Branch: `main`, папка `/ (root)` → Save.
4. Через 1–2 минуты сайт будет доступен по адресу `https://<username>.github.io/pmm-hub/`.

## Доступ

Обе страницы закрыты паролем (проверка по SHA-256 на клиенте, пароль вводится один раз за сессию браузера).

⚠️ Гейт защищает только от случайного просмотра: в публичном репозитории исходный код и контент страниц технически доступны любому, кто откроет файлы в репо. Для реальной защиты используйте приватный репозиторий (GitHub Pages для приватных репо доступен на платных планах).

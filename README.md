# Лендинг игры Kubercraft

[![hexlet-check](https://github.com/kicha3007-boop/tailwind-project-446/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kicha3007-boop/tailwind-project-446/actions)
[![ci](https://github.com/kicha3007-boop/tailwind-project-446/actions/workflows/ci.yml/badge.svg)](https://github.com/kicha3007-boop/tailwind-project-446/actions/workflows/ci.yml)

Посадочная страница игры Kubercraft про мир из блоков: главный экран, особенности, режимы игры,
кусочек игрового интерфейса, галерея, издания с ценами, системные требования, вопросы и форма предзаказа.
Страница переключается между двумя темами — Верхним и Нижним миром.

Всё интерактивное работает **без единой строчки JavaScript**:

- вкладки режимов и выбор слота хотбара — радиокнопки и модификаторы `peer-checked:` / `has-checked:`;
- подсказки предметов — `group-hover:`;
- мобильное меню и просмотр скриншотов — атрибут `popover` и модификаторы `open:` / `backdrop:`;
- вопросы — элемент `<details>` и `group-open:`;
- форма предзаказа — проверка полей атрибутами HTML, подсказки через `peer-user-invalid:`,
  сообщение об успехе через `:target`;
- смена мира — флажок в шапке и свой модификатор `nether:` (`@custom-variant` на `:root:has(#world-nether:checked)`),
  Нижний мир переопределяет токены темы.

Учебный проект Хекслета: https://ru.hexlet.io/programs/tailwind

## Стек

- HTML
- [Tailwind CSS 4](https://tailwindcss.com/) и плагин `@tailwindcss/forms`
- [Vite](https://vite.dev/) — сборка и локальный сервер
- Make — единые команды для разработки и проверки

## Требования

- Node.js 20.19+ или 22.12+ (на проверке Хекслета — Node.js 26)
- npm
- make

## Установка и запуск

```bash
git clone https://github.com/kicha3007-boop/tailwind-project-446.git
cd tailwind-project-446
make setup   # npm ci + сборка в dist/
```

| Команда        | Что делает                                                        |
| -------------- | ----------------------------------------------------------------- |
| `make install` | ставит зависимости (`npm ci`)                                     |
| `make setup`   | ставит зависимости и собирает страницу (эту цель зовёт проверка)  |
| `make start`   | dev-сервер Vite с горячей перезагрузкой: http://localhost:5173    |
| `make build`   | собирает страницу в каталог `dist/`                               |
| `make serve`   | раздаёт собранный `dist/` на порту 8080: http://localhost:8080    |

Посмотреть страницу так, как её видит проверка: `make build && make serve`, затем открыть
http://localhost:8080 и выключить JavaScript в инструментах разработчика
(в Chrome — команда `Disable JavaScript` в палитре команд).

## Структура

```
index.html      разметка страницы (без <script>)
style.css       тема Tailwind, свои утилиты и компоненты, шрифты
vite.config.ts  сборка: относительные пути (base: './'), раздача на порту 8080
Makefile        цели install / setup / start / build / serve
content.md      тексты страницы
fonts/          пиксельные шрифты Pixel Code и Pixeloid Sans
images/         спрайты 16×16 и сцены 160×90
test-images/    эталонные снимки секций (макет)
```

## Проверки

- `hexlet-check` — автоматические тесты Хекслета: страница собирается через `make setup`,
  раздаётся через `make serve` и проверяется в браузере с выключенным JavaScript
  (функциональность и сравнение снимков секций с эталонами на ширине 1440 и 414 пикселей в обеих темах).
- `ci` — сборка страницы и проверка, что в собранном `dist/index.html` нет тега `<script>`.

## Публикация на GitHub Pages

Воркфлоу `.github/workflows/pages.yml` собирает страницу и выкладывает `dist/` на GitHub Pages.
Перед первым запуском включите Pages: **Settings → Pages → Source: GitHub Actions**, затем запустите
воркфлоу `pages` вручную на вкладке **Actions**. Страница откроется по адресу
https://kicha3007-boop.github.io/tailwind-project-446/

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.

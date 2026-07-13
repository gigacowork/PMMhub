// ===== INDUSTRY DATA =====
const INDUSTRIES = {
  fin: {
    name: 'Финансы',
    sub: 'Банки, МФО, финансовые организации',
    maturity: 88, genai: 90, effect: '15%',
    source: 'Яков и Партнёры × Яндекс 2025',
    saas: { min: 3, max: 10 },
    segments: [
      {
        tier: 'Средний', tierClass: 'mid',
        rev: '3–15 млрд ₽', hc: '500–3 000',
        icp: ['АБС (1С-Банк, Diasoft) внедрена', 'Digital-канал >30% транзакций', 'Аналитическая команда 3–10 чел.'],
        signal: 'Внедряет скоринг и чат-боты', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'ИТ-директор / Зам.Пред.', lvr: 'CDO, CRO'
      },
      {
        tier: 'Крупный', tierClass: 'large',
        rev: '15–100 млрд ₽', hc: '3 000–15 000',
        icp: ['Data Warehouse + BI-система', 'CDO/CDTO в структуре', 'Выделен ИИ-бюджет, первые GenAI-кейсы'],
        signal: '2+ активных пилота GenAI', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / CTO', lvr: 'CISO, CIO, CFO'
      },
      {
        tier: 'Крупнейший', tierClass: 'xlarge',
        rev: '>100 млрд ₽', hc: '>15 000',
        icp: ['Data Lake + MLOps-платформа', 'AI Centre of Excellence', 'Собственный R&D, ищет SaaS-ускорение'],
        signal: 'On-premise / гибрид', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'CDTO + Правление', lvr: 'CEO, CISO, CFO'
      }
    ],
    pains: [
      'Ручная обработка документов — до 40% времени команды',
      '90% сотрудников используют личные GPT (теневое ИИ)',
      'Клиентский support перегружен стандартными запросами'
    ],
    cycle: ['С: 1–2 мес', 'К: 3–4 мес', 'КН: 5–7 мес'],
    trigger: 'Кадровый дефицит + давление конкурентов-финтехов'
  },
  ins: {
    name: 'Страхование',
    sub: 'Страховые компании и брокеры',
    maturity: 85, genai: 80, effect: '15%',
    source: 'Яков и Партнёры × Яндекс 2025',
    saas: { min: 2, max: 8 },
    segments: [
      {
        tier: 'Средний', tierClass: 'mid',
        rev: '3–15 млрд ₽ премий', hc: '300–2 000',
        icp: ['CRM + АИС (Guidewire/SAP IS)', 'Цифровой канал продаж >20%', 'База данных страховых случаев'],
        signal: 'Автоматизирует урегулирование убытков', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CTO / ИТ-директор', lvr: 'CDO, Актуарий'
      },
      {
        tier: 'Крупный', tierClass: 'large',
        rev: '15–50 млрд ₽ премий', hc: '2 000–8 000',
        icp: ['Мультипродуктовая платформа', 'Anti-fraud система', 'Актуарная аналитика'],
        signal: 'Пилотирует GenAI в underwriting', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / CIO', lvr: 'CISO, CFO, CDO'
      },
      {
        tier: 'Крупнейший', tierClass: 'xlarge',
        rev: '>50 млрд ₽ премий', hc: '>8 000',
        icp: ['Экосистема агентов и партнёров', 'Data Lake + предиктивная аналитика', 'AI-driven underwriting'],
        signal: 'СОГАЗ, Ингосстрах, РЕСО — строят AI-стек', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'CDTO + CEO', lvr: 'СРО, CISO, CFO'
      }
    ],
    pains: [
      'Урегулирование убытков: 7–14 дней вместо 1–2 при наличии ИИ',
      'Детекция мошенничества требует ручной проверки экспертом',
      'Underwriting не масштабируется без найма аналитиков'
    ],
    cycle: ['С: 1–2 мес', 'К: 2–4 мес', 'КН: 4–6 мес'],
    trigger: 'Рост убыточности + конкурентное давление insurtech'
  },
  it: {
    name: 'IT и технологии',
    sub: 'Разработчики ПО, IT-сервисные компании',
    maturity: 95, genai: 93, effect: '7%',
    source: 'Яков и Партнёры × Яндекс 2025',
    saas: { min: 2, max: 7 },
    segments: [
      {
        tier: 'Средний', tierClass: 'mid',
        rev: '800 млн – 3 млрд ₽', hc: '100–1 500',
        icp: ['CI/CD + облачная инфра', 'Confluence/Jira в работе', 'Продуктовая команда PM+Dev'],
        signal: 'Уже интегрирует AI-фичи в продукт', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CEO / CTO', lvr: 'CPO, Lead Dev'
      },
      {
        tier: 'Крупный', tierClass: 'large',
        rev: '3–30 млрд ₽', hc: '1 500–8 000',
        icp: ['AI/ML команда 10–50 чел.', 'Экосистема API и интеграций', 'Несколько продуктовых линеек'],
        signal: 'Строит AI-first продуктовую стратегию', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CTO / CPO', lvr: 'CDO, CISO, CEO'
      },
      {
        tier: 'Крупнейший', tierClass: 'xlarge',
        rev: '>30 млрд ₽', hc: '>8 000',
        icp: ['Экосистема SaaS/PaaS/IaaS', 'Enterprise-клиентура с SLA', 'Эксперименты с собственными LLM'],
        signal: '1С, Positive Tech, IBS — ищут готовые решения', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'CTO / CDTO', lvr: 'CEO, VP Product'
      }
    ],
    pains: [
      'Скорость разработки не успевает за конкурентами',
      'Знания разбросаны по Confluence, Slack, почте',
      'Онбординг новых разработчиков занимает 2–3 мес до продуктивности'
    ],
    cycle: ['С: 2–4 нед', 'К: 1–2 мес', 'КН: 2–3 мес'],
    trigger: 'Конкуренция за разработчиков + AI-first продукты'
  },
  tel: {
    name: 'Телеком',
    sub: 'Операторы связи, медиа, интернет-провайдеры',
    maturity: 90, genai: 100, effect: '7%',
    source: 'Яков и Партнёры × Яндекс 2025',
    saas: { min: 5, max: 20 },
    segments: [
      {
        tier: 'Средний', tierClass: 'mid',
        rev: '2–15 млрд ₽', hc: '500–3 000',
        icp: ['BSS/OSS-система (биллинг, CRM)', 'Абонентская база >50 тыс.', 'Contact centre 50–200 операторов'],
        signal: 'Автоматизирует клиентский сервис', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CTO / ИТ-директор', lvr: 'CMO, COO'
      },
      {
        tier: 'Крупный', tierClass: 'large',
        rev: '15–100 млрд ₽', hc: '3 000–20 000',
        icp: ['Мультиканальная BSS/OSS платформа', 'Data-driven маркетинг команда', 'Инфраструктура IoT/5G'],
        signal: 'Строит AI-powered персонализацию', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / CDO', lvr: 'CTO, CMO, CISO'
      },
      {
        tier: 'Крупнейший', tierClass: 'xlarge',
        rev: '>100 млрд ₽', hc: '>20 000',
        icp: ['Data Platform с 50M+ профилями', 'AI-лаборатория внутри компании', 'Экосистемные сервисы (финтех, медиа)'],
        signal: 'МТС, Билайн, Мегафон — CAIO в структуре', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'CDTO / CAIO', lvr: 'CEO, CTO, CFO'
      }
    ],
    pains: [
      'Отток абонентов растёт — NPS падает, ручной анализ не успевает',
      'Contact centre: 60% обращений — стандартные вопросы (FAQ)',
      'Персонализация тарифов требует ручного A/B-тестирования'
    ],
    cycle: ['С: 1–2 мес', 'К: 2–4 мес', 'КН: 4–6 мес'],
    trigger: 'Высокий churn + давление на ARPU'
  },
  ret: {
    name: 'Ритейл',
    sub: 'Розничная торговля, FMCG, e-commerce',
    maturity: 85, genai: 82, effect: '3%',
    source: 'Яков и Партнёры × Яндекс 2025; ЯиП × Nielsen «Цифровизация ритейла и CPG 2025»',
    saas: { min: 3, max: 12 },
    segments: [
      {
        tier: 'Средний', tierClass: 'mid',
        rev: '3–20 млрд ₽', hc: '500–5 000',
        icp: ['ERP + WMS (1С Торговля, SAP)', 'Программа лояльности с данными', 'E-com канал или маркетплейс'],
        signal: 'Внедряет рекомендации и персонализацию', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CEO / ИТ-директор', lvr: 'CMO, Директор по операциям'
      },
      {
        tier: 'Крупный', tierClass: 'large',
        rev: '20–100 млрд ₽', hc: '5 000–30 000',
        icp: ['Омниканальная платформа', 'CRM с 1M+ лояльных покупателей', 'Data-driven merchandising'],
        signal: 'Пилотирует GenAI в маркетинге и supply chain', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / Digital VP', lvr: 'CMO, CFO, COO'
      },
      {
        tier: 'Крупнейший', tierClass: 'xlarge',
        rev: '>100 млрд ₽', hc: '>30 000',
        icp: ['Data Lake + AI-платформа', 'Собственный e-com и логистика', 'Retail media экосистема'],
        signal: 'X5, Магнит, Wildberries — AI-first стратегия', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'CDTO / CDO', lvr: 'CEO, CMO, CFO'
      }
    ],
    pains: [
      'Управление запасами: потери от over/under-stock 5–8% выручки',
      'Персонализация коммуникаций требует ручного сегментирования',
      'Генерация контента и описаний для тысяч SKU'
    ],
    cycle: ['С: 1–2 мес', 'К: 2–3 мес', 'КН: 3–5 мес'],
    trigger: 'Дефицит линейного персонала + e-com давление'
  },
  ind: {
    name: 'Промышленность',
    sub: 'Машиностроение, производство, ОПК',
    maturity: 50, genai: 43, effect: '~2%',
    source: 'Яков и Партнёры × Яндекс 2025',
    saas: { min: 3, max: 10 },
    segments: [
      {
        tier: 'Средний', tierClass: 'mid',
        rev: '1–10 млрд ₽', hc: '500–3 000',
        icp: ['ERP (1С:ERP, SAP) внедрена', 'MES или элементы АСУТП', 'Оцифрованная тех. документация'],
        signal: 'Ищет автоматизацию документооборота', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'CEO / Гл. инженер', lvr: 'ИТ-директор, CFO'
      },
      {
        tier: 'Крупный', tierClass: 'large',
        rev: '10–50 млрд ₽', hc: '3 000–15 000',
        icp: ['MES + SCADA + ERP-интеграция', 'IoT-датчики оборудования', 'Данные ТОиР за 3+ года'],
        signal: 'Пилотирует предиктивное обслуживание', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CTO / ИТ-директор', lvr: 'Гл. инженер, CFO'
      },
      {
        tier: 'Крупнейший', tierClass: 'xlarge',
        rev: '>50 млрд ₽', hc: '>15 000',
        icp: ['Цифровой двойник производства', 'CDTO + AI-команда', 'PLM/PDM + корп. база знаний'],
        signal: 'КАМАЗ, ОАК, Ростех — цифровая трансформация', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / CTO', lvr: 'CEO, Тех.директор'
      }
    ],
    pains: [
      'Тех. документация: поиск нужного файла занимает часы',
      'Незапланированные простои: 8–15% потери производительности',
      'Knowledge drain: уход опытных инженеров = потеря экспертизы'
    ],
    cycle: ['С: 2–4 мес', 'К: 3–6 мес', 'КН: 6–12 мес'],
    trigger: 'Импортозамещение ПО + дефицит технических специалистов'
  },
  met: {
    name: 'Металлургия',
    sub: 'Металл, горная добыча, ГОКи',
    maturity: 81, genai: 67, effect: '20%',
    source: 'Яков и Партнёры × Яндекс 2025',
    saas: { min: 5, max: 20 },
    segments: [
      {
        tier: 'Средний', tierClass: 'mid',
        rev: '5–30 млрд ₽', hc: '1 000–5 000',
        icp: ['АСУТП + базовый MES', 'ERP для управления производством', 'Данные о качестве продукции'],
        signal: 'Внедряет CV-контроль качества', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'ИТ-директор / Тех.директор', lvr: 'Нач. производства'
      },
      {
        tier: 'Крупный', tierClass: 'large',
        rev: '30–150 млрд ₽', hc: '5 000–20 000',
        icp: ['SCADA + предиктивная аналитика', 'Data team в ИТ-дирекции', 'AI-pilot в безопасности/качестве'],
        signal: 'Масштабирует предиктивное ТО, ищет GenAI', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / CTO', lvr: 'CDO, Тех.директор, CISO'
      },
      {
        tier: 'Крупнейший', tierClass: 'xlarge',
        rev: '>150 млрд ₽', hc: '>20 000',
        icp: ['Digital Enterprise: цифровой двойник', 'CDO + AI Centre of Excellence', 'Экосистема партнёров-разработчиков'],
        signal: 'НЛМК, ММК, Северсталь, Норникель — AI first', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / CDO', lvr: 'CEO, COO, CISO'
      }
    ],
    pains: [
      'Инциденты на производстве: ручной контроль безопасности',
      'Анализ качества требует экспертизы дефицитных инженеров',
      'Тысячи технологических параметров — отчётность вручную'
    ],
    cycle: ['С: 2–4 мес', 'К: 4–6 мес', 'КН: 6–12 мес'],
    trigger: 'Безопасность + контроль качества + импортозамещение'
  },
  ene: {
    name: 'Энергетика',
    sub: 'Электрогенерация, сети, сбытовые компании',
    maturity: 75, genai: 43, effect: '4%',
    source: 'Яков и Партнёры × Яндекс 2025',
    saas: { min: 5, max: 20 },
    segments: [
      {
        tier: 'Средний', tierClass: 'mid',
        rev: '5–20 млрд ₽', hc: '500–3 000',
        icp: ['АИИС КУЭ + SCADA', 'Базовая аналитика потребления', 'ERP для ТОиР'],
        signal: 'Интересует прогнозирование нагрузки', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'Тех.директор / ИТ-директор', lvr: 'Гл. инженер'
      },
      {
        tier: 'Крупный', tierClass: 'large',
        rev: '20–100 млрд ₽', hc: '3 000–15 000',
        icp: ['Smart-grid элементы + IoT-датчики', 'Data team для оперативного управления', 'НСИ (нормативно-справочная база)'],
        signal: 'Пилотирует AI для предиктивного ТО', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / CTO', lvr: 'Гл. инженер, CFO'
      },
      {
        tier: 'Крупнейший', tierClass: 'xlarge',
        rev: '>100 млрд ₽', hc: '>15 000',
        icp: ['Централизованная Data Platform', 'CDTO в структуре холдинга', 'Экосистема дочерних обществ'],
        signal: 'Россети, РусГидро, Интер РАО — цифр. стратегия', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / CDO', lvr: 'CEO, COO, CISO'
      }
    ],
    pains: [
      'Аварийность: реактивная модель ТО вместо предиктивной',
      'Тысячи нормативных документов не структурированы',
      'Отчётность в регуляторные органы — значительный ручной труд'
    ],
    cycle: ['С: 2–4 мес', 'К: 4–6 мес', 'КН: 6–12 мес'],
    trigger: 'Надёжность поставки + регуляторные требования'
  },
  oil: {
    name: 'Нефтегаз',
    sub: 'Нефтедобыча, газ, нефтехимия, сервис',
    maturity: 81, genai: 50, effect: '7%',
    source: 'Яков и Партнёры × Яндекс 2025',
    saas: { min: 10, max: 50 },
    segments: [
      {
        tier: 'Средний', tierClass: 'mid',
        rev: '5–30 млрд ₽', hc: '500–3 000',
        icp: ['Базовая АСУТП скважин', 'ERP для учёта добычи', 'Данные о параметрах пластов'],
        signal: 'Ищет оптимизацию режимов добычи', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'Тех.директор / ИТ-директор', lvr: 'Гл. геолог'
      },
      {
        tier: 'Крупный', tierClass: 'large',
        rev: '30–200 млрд ₽', hc: '3 000–20 000',
        icp: ['Цифровые двойники месторождений', 'Data team + геологический AI', 'Интеграция SAP/1С по учёту'],
        signal: 'Масштабирует AI в геологоразведке', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / CTO', lvr: 'CDO, Тех.директор, CISO'
      },
      {
        tier: 'Крупнейший', tierClass: 'xlarge',
        rev: '>200 млрд ₽', hc: '>20 000',
        icp: ['Корпоративная Data Platform', 'CDTO + AI-лаборатория', 'Дочерние ИТ-структуры'],
        signal: 'Роснефть, ЛУКОЙЛ, Новатэк — цифровые стратегии', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'CDTO + Правление', lvr: 'CEO, CISO, CFO'
      }
    ],
    pains: [
      'Геоанализ: огромные данные, острый дефицит экспертов',
      'Тех. документация по скважинам не стандартизирована',
      'HSE-отчётность и соответствие нормативам — ручной труд'
    ],
    cycle: ['С: 3–5 мес', 'К: 5–8 мес', 'КН: 8–14 мес'],
    trigger: 'Импортозамещение ПО + оптимизация добычи'
  },
  agr: {
    name: 'АПК',
    sub: 'Агрохолдинги, пищевая промышленность',
    maturity: 41, genai: 38, effect: '3%',
    source: 'Яков и Партнёры × Яндекс 2025',
    saas: { min: 2, max: 8 },
    segments: [
      {
        tier: 'Средний', tierClass: 'mid',
        rev: '1–10 млрд ₽', hc: '200–2 000',
        icp: ['ERP для агробизнеса (1С:Агро)', 'GPS-данные, дроны по полям', 'Интерес к точному земледелию'],
        signal: 'Внедряет мониторинг полей и стад', readyClass: 'ready-low', readyLabel: '▼ Низкая',
        lpr: 'CEO / ИТ-директор', lvr: 'Агроном, CFO'
      },
      {
        tier: 'Крупный', tierClass: 'large',
        rev: '10–50 млрд ₽', hc: '2 000–10 000',
        icp: ['Платформа точного земледелия', 'Data team / агроном-аналитик', 'Интеграция с логистикой и сбытом'],
        signal: 'Оптимизирует логистику и закупки с AI', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'CEO / CTO', lvr: 'Директор производства'
      },
      {
        tier: 'Крупнейший', tierClass: 'xlarge',
        rev: '>50 млрд ₽', hc: '>10 000',
        icp: ['Вертикально интегрированный холдинг', 'CDTO или ИТ-директор с мандатом', 'Централизованная система управления'],
        signal: 'Мираторг, Русагро, Черкизово — цифровизация', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'CDTO / CEO', lvr: 'CDO, COO, CFO'
      }
    ],
    pains: [
      'Прогнозирование урожайности — экспертные оценки без данных',
      'Управление тысячами документов качества продукции вручную',
      'Потери в логистике «поле–потребитель»: 8–12% из-за неоптимальности'
    ],
    cycle: ['С: 2–4 мес', 'К: 3–6 мес', 'КН: 4–8 мес'],
    trigger: 'Рост себестоимости + острый дефицит агрономов'
  },
  con: {
    name: 'Строительство',
    sub: 'Девелоперы, стройкомпании, управление недвижимостью',
    maturity: 75, genai: 69, effect: '8%',
    source: 'Яков и Партнёры × Яндекс 2025',
    saas: { min: 3, max: 10 },
    segments: [
      {
        tier: 'Средний', tierClass: 'mid',
        rev: '2–15 млрд ₽', hc: '200–2 000',
        icp: ['1С:Строительство или BIM', 'CRM для продаж недвижимости', 'Оцифрованные проектные данные'],
        signal: 'Автоматизирует клиентский путь покупателя', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'CEO / Директор по продажам', lvr: 'ИТ-директор'
      },
      {
        tier: 'Крупный', tierClass: 'large',
        rev: '15–80 млрд ₽', hc: '2 000–8 000',
        icp: ['BIM + MDM платформа', 'Цифровой отдел продаж', 'Аналитика рынка недвижимости'],
        signal: 'Пилотирует AI в продажах и стройнадзоре', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / Digital VP', lvr: 'CMO, COO, CFO'
      },
      {
        tier: 'Крупнейший', tierClass: 'xlarge',
        rev: '>80 млрд ₽', hc: '>8 000',
        icp: ['Цифровая экосистема (продажи, УК)', 'CDTO + data-driven маркетинг', 'Собственная платформа документооборота'],
        signal: 'ПИК, ЛСР, Самолёт — digital-first стратегия', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / CDO', lvr: 'CEO, CMO, CISO'
      }
    ],
    pains: [
      'Клиентский путь: обработка клиента 3–7 дней из-за ручных процессов',
      'Проектная документация: тысячи файлов, поиск нужного — часами',
      'Коммуникация с площадкой: отчёты вручную, постоянные задержки'
    ],
    cycle: ['С: 1–3 мес', 'К: 2–4 мес', 'КН: 3–6 мес'],
    trigger: 'Рост продаж + оптимизация операционных расходов'
  },
  log: {
    name: 'Логистика',
    sub: 'Транспорт, экспресс-доставка, складские операции',
    maturity: 70, genai: 60, effect: '8%',
    source: 'Яков и Партнёры × Яндекс 2025; Белая книга ИИ в сфере транспорта и логистики',
    saas: { min: 3, max: 12 },
    segments: [
      {
        tier: 'Средний', tierClass: 'mid',
        rev: '1–10 млрд ₽', hc: '200–3 000',
        icp: ['TMS + WMS базового уровня', 'GPS-трекинг транспорта', 'Электронный документооборот'],
        signal: 'Оптимизирует маршруты и диспетчеризацию', readyClass: 'ready-med', readyLabel: '◆ Средняя',
        lpr: 'CEO / ИТ-директор', lvr: 'Директор операций'
      },
      {
        tier: 'Крупный', tierClass: 'large',
        rev: '10–50 млрд ₽', hc: '3 000–15 000',
        icp: ['Интегрированная TMS/WMS платформа', 'Data team по операционной аналитике', 'API-интеграции с e-com партнёрами'],
        signal: 'Масштабирует AI в клиентском сервисе', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / ИТ-директор', lvr: 'COO, CMO, CFO'
      },
      {
        tier: 'Крупнейший', tierClass: 'xlarge',
        rev: '>50 млрд ₽', hc: '>15 000',
        icp: ['Национальная сеть + data platform', 'CDTO с полным мандатом', 'Интеграции с маркетплейсами'],
        signal: 'CDEK, Деловые линии, FESCO — AI-трансформация', readyClass: 'ready-high', readyLabel: '▲ Высокая',
        lpr: 'CDTO / CDO', lvr: 'CEO, COO, CISO'
      }
    ],
    pains: [
      'Диспетчеризация: ручная при росте объёмов — невозможна',
      'Клиентский сервис: 70% обращений — статус заказа (типовые)',
      'Прогнозирование спроса и управление складом — экспертные оценки'
    ],
    cycle: ['С: 1–2 мес', 'К: 2–4 мес', 'КН: 3–6 мес'],
    trigger: 'Рост e-com + дефицит водителей и операторов'
  }
};

// ===== INDUSTRY PANEL RENDERER =====
function renderIndustry(key) {
  const d = INDUSTRIES[key];
  if (!d) return;
  const panel = document.getElementById('indPanel');

  const segsHTML = d.segments.map(s => `
    <tr>
      <td><span class="tier-badge tier-${s.tierClass}">${s.tier}</span></td>
      <td>${s.rev}<br><small>${s.hc} чел.</small></td>
      <td>${s.icp.map(c => `<div>• ${c}</div>`).join('')}</td>
      <td><span class="${s.readyClass}">${s.readyLabel}</span><br><small>${s.signal}</small></td>
    </tr>
  `).join('');

  const lprHTML = d.segments.map(s => `
    <div class="lpr-row">
      <div class="lpr-tier-name">${s.tier}</div>
      <div class="lpr-role">${s.lpr}</div>
      <div class="lpr-lvr">ЛВР: ${s.lvr}</div>
    </div>
  `).join('');

  const painsHTML = d.pains.map(p => `<div class="pain-item">${p}</div>`).join('');

  const cycleHTML = d.cycle.map(c => {
    const parts = c.split(': ');
    return `<div class="cycle-item"><span class="cycle-seg">${parts[0]}</span><span class="cycle-val">${parts[1]}</span></div>`;
  }).join('');

  panel.innerHTML = `
    <div class="ind-header">
      <div class="ind-title-block">
        <h3>${d.name}</h3>
        <p>${d.sub}</p>
      </div>
      <div class="ind-metrics">
        <div class="ind-metric">
          <span class="ind-metric-val">${d.maturity}%</span>
          <span class="ind-metric-label">ИИ-зрелость<br><span style="font-size:10px;color:var(--muted)" title="${d.source}">ⓘ ${d.source.split(';')[0]}</span></span>
        </div>
        <div class="ind-metric">
          <span class="ind-metric-val">${d.genai}%</span>
          <span class="ind-metric-label">Внедрили GenAI</span>
        </div>
        <div class="ind-metric">
          <span class="ind-metric-val">${d.effect}</span>
          <span class="ind-metric-label">Эффект к 2030</span>
        </div>
        <div class="ind-metric">
          <span class="ind-metric-val">${d.saas.min}–${d.saas.max}</span>
          <span class="ind-metric-label">млн ₽ SaaS-чек</span>
        </div>
      </div>
    </div>
    <div class="ind-trigger">
      <strong>⚡ Триггер входа:</strong> ${d.trigger}
    </div>
    <div class="ind-body">
      <div class="ind-segs-table">
        <table class="segs-table">
          <thead>
            <tr>
              <th>Сегмент</th>
              <th>Выручка / Команда</th>
              <th>ICP-критерии</th>
              <th>Готовность</th>
            </tr>
          </thead>
          <tbody>${segsHTML}</tbody>
        </table>
      </div>
      <div class="ind-right">
        <div class="ind-lpr-block">
          <div class="ind-block-title">ЛПР и ЛВР</div>
          <div class="lpr-rows">${lprHTML}</div>
        </div>
        <div class="ind-pains-block">
          <div class="ind-block-title">Топ-3 болевые точки</div>
          <div class="pain-list">${painsHTML}</div>
        </div>
        <div class="ind-cycle-block">
          <div class="ind-block-title">Цикл покупки</div>
          <div class="cycle-row">${cycleHTML}</div>
        </div>
      </div>
    </div>
  `;
  panel.style.animation = 'none';
  panel.offsetHeight; // reflow
  panel.style.animation = '';
}

// ===== CLIENT PROFILE CALCULATOR =====

const DELIVERY_DETAILS = {
  saas: {
    desc: 'Данные, модель и платформа в приватном облаке',
    advantages: [
      'Быстрое внедрение: подключение за несколько дней',
      'Минимальные капитальные затраты',
      'Тарификация по пользователям — понятный прогноз расходов'
    ],
    tiers: [
      { name: 'XS-Облако', users: 'до 200 пользователей', price: '2,5 млн ₽/год',  priceVat: '3,05 млн ₽/год' },
      { name: 'S-Облако',  users: 'до 400 пользователей', price: '5 млн ₽/год',    priceVat: '6,1 млн ₽/год'  }
    ],
    features: [
      'Безлимит токенов при использовании продукта',
      'API токены по запросу (для интеграций)',
      'Удалённое обучение в СберУниверситете'
    ]
  },
  hybrid: {
    desc: 'Данные в периметре компании, модель и платформа в приватном облаке',
    advantages: [
      'Оптимальная стоимость владения',
      'Данные и платформа остаются у клиента',
      'Тарификация по пользователям — понятная модель бюджета'
    ],
    tiers: [
      { name: 'M-Гибрид', users: 'до 1 250 пользователей', price: '15 млн ₽/год', priceVat: '18,3 млн ₽/год' },
      { name: 'L-Гибрид', users: 'до 2 500 пользователей', price: '25 млн ₽/год', priceVat: '30,5 млн ₽/год' }
    ],
    features: [
      'Безлимит токенов при использовании продукта',
      'До 100 часов консультаций по ГенИИ',
      'API токены по запросу (для интеграций)',
      'Удалённое обучение в СберУниверситете'
    ]
  },
  pak: {
    desc: 'Данные, модель и платформа на серверах клиента',
    advantages: [
      'Возможна конфигурация моделей и железа в ПАКе под сценарии клиента',
      'Соответствие самым высоким требованиям безопасности'
    ],
    tiers: [
      { name: 'ПАК (8 карт H200)', users: '1-й год · безлимит пользователей', price: '67 млн ₽/год',  priceVat: '81,74 млн ₽/год' },
      { name: '2-й год и далее',   users: 'тех. поддержка и обновление',       price: '35 млн ₽/год',  priceVat: '42,70 млн ₽/год' }
    ],
    features: [
      'Сервер с GPU-картами',
      'Платформа GigaChat Enterprise',
      'Локальное развёртывание',
      'Гарантия и поддержка вендора',
      'Безлимит токенов при использовании продукта',
      'До 200 часов консультаций по ГенИИ',
      'API токены по запросу (для внешних интеграций)',
      'Удалённое обучение в СберУниверситете',
      'Возможна кастомная конфигурация ПАК'
    ]
  }
};

const DKK_POTENTIAL = {
  fin: { pak: 'high', hybrid: 'high', saas: 'low'  },
  ins: { pak: 'mid',  hybrid: 'high', saas: 'low'  },
  it:  { pak: 'low',  hybrid: 'mid',  saas: 'mid'  },
  tel: { pak: 'low',  hybrid: 'mid',  saas: 'mid'  },
  ret: { pak: 'low',  hybrid: 'mid',  saas: 'high' },
  ind: { pak: 'high', hybrid: 'high', saas: 'low'  },
  met: { pak: 'high', hybrid: 'mid',  saas: 'low'  },
  ene: { pak: 'high', hybrid: 'high', saas: 'low'  },
  oil: { pak: 'high', hybrid: 'high', saas: 'low'  },
  agr: { pak: 'mid',  hybrid: 'mid',  saas: 'low'  },
  con: { pak: 'mid',  hybrid: 'high', saas: 'high' },
  log: { pak: 'mid',  hybrid: 'mid',  saas: 'low'  },
};

const STAFF_TO_SEG = {
  small:  'mid',    // closest segment in INDUSTRIES data
  mid:    'mid',
  large:  'large',
  xlarge: 'xlarge'
};

const REV_LABELS  = { small: 'до 800 млн ₽', mid: '800 млн – 2 млрд ₽', large: '2 – 15 млрд ₽', xlarge: '>15 млрд ₽' };
const STAFF_LABELS = { small: 'до 200 сотр.', mid: '200 – 1 000 сотр.', large: '1 000 – 5 000 сотр.', xlarge: '>5 000 сотр.' };

function getSegmentData(ind, staffKey) {
  const segKey = STAFF_TO_SEG[staffKey];
  const segs = INDUSTRIES[ind].segments;
  const map = { mid: 0, large: 1, xlarge: 2 };
  const idx = Math.min(map[segKey] ?? 0, segs.length - 1);
  return segs[idx];
}

function getDeliveryOptions(ind, staffKey, hasIT, security) {
  const dkk = DKK_POTENTIAL[ind] || { pak: 'mid', hybrid: 'mid', saas: 'mid' };
  const isBig = staffKey === 'large' || staffKey === 'xlarge';
  const options = [];

  if (security === 'strict') {
    if (hasIT && isBig && dkk.pak === 'high') {
      options.push({ id: 'pak',    label: 'ПАК · On-Prem', icon: '🖥️', priority: true,  reason: 'Большой штат + собственная ИТ-инфраструктура + строгие требования ИБ (данные, модель и платформа на серверах клиента)' });
      options.push({ id: 'hybrid', label: 'Гибрид',        icon: '🌐', priority: false, reason: 'Альтернатива если ПАК избыточен по бюджету' });
    } else {
      options.push({ id: 'hybrid', label: 'Гибрид',        icon: '🌐', priority: true,  reason: 'Данные и платформа остаются в периметре клиента, модель в облаке — оптимальный баланс' });
      if (hasIT) {
        options.push({ id: 'pak',  label: 'ПАК · On-Prem', icon: '🖥️', priority: false, reason: 'Возможно при наличии у клиента ресурсов на сопровождение (данные, модель и платформа на серверах клиента)' });
      }
    }
  } else {
    if (isBig && (hasIT || dkk.hybrid === 'high')) {
      options.push({ id: 'hybrid', label: 'Гибрид',  icon: '🌐', priority: true,  reason: 'Оптимальный баланс: гибкость облака с изоляцией корпоративных данных на серверах клиента' });
      options.push({ id: 'saas',   label: 'Облако',  icon: '☁️', priority: false, reason: 'Более простой старт без требований к ИТ-инфраструктуре' });
    } else {
      options.push({ id: 'saas',   label: 'Облако',  icon: '☁️', priority: true,  reason: 'Быстрый старт, минимальные требования к ИТ-инфраструктуре' });
      if (dkk.hybrid !== 'low') {
        options.push({ id: 'hybrid', label: 'Гибрид', icon: '🌐', priority: false, reason: 'Альтернатива если ПАК избыточен по бюджету' });
      }
    }
  }
  return options;
}

function renderClientResult(ind, rev, staff, hasIT, security) {
  const indData = INDUSTRIES[ind];
  const seg = getSegmentData(ind, staff);
  const deliveryOpts = getDeliveryOptions(ind, staff, hasIT, security);

  // Summary rows
  const summaryRows = document.getElementById('cpcSummaryRows');
  const secLabel = security === 'strict' ? 'Строго в контуре' : 'Можно в облаке';
  summaryRows.innerHTML = `
    <div class="cpc-sum-row"><span class="cpc-sum-key">Отрасль</span><span class="cpc-sum-val">${indData.name} — ${indData.sub}</span></div>
    <div class="cpc-sum-row"><span class="cpc-sum-key">Выручка</span><span class="cpc-sum-val">${REV_LABELS[rev]}</span></div>
    <div class="cpc-sum-row"><span class="cpc-sum-key">Штат</span><span class="cpc-sum-val">${STAFF_LABELS[staff]}</span></div>
    <div class="cpc-sum-row"><span class="cpc-sum-key">ИТ-инфраструктура</span><span class="cpc-sum-val">${hasIT ? 'Есть собственная' : 'Нет / арендуется'}</span></div>
    <div class="cpc-sum-row"><span class="cpc-sum-key">Требования ИБ</span><span class="cpc-sum-val">${secLabel}</span></div>
  `;

  // Readiness
  document.getElementById('cpcReadiness').innerHTML = `
    <div class="cpc-ready-row">
      <span class="${seg.readyClass} cpc-ready-badge">${seg.readyLabel}</span>
      <span class="cpc-ready-signal">${seg.signal}</span>
    </div>
    <div class="cpc-ready-metrics">
      <div class="cpc-rm"><span class="cpc-rm-val">${indData.maturity}%</span><span class="cpc-rm-lbl">ИИ-зрелость отрасли</span></div>
      <div class="cpc-rm"><span class="cpc-rm-val">${indData.genai}%</span><span class="cpc-rm-lbl">Внедрили GenAI</span></div>
      <div class="cpc-rm"><span class="cpc-rm-val">${indData.effect}</span><span class="cpc-rm-lbl">Эффект к 2030</span></div>
    </div>
  `;

  // Tags row: ЛПР / ЛВР / Триггер / Цикл
  const cycleMap = { mid: 0, large: 1, xlarge: 2 };
  const cycleIdx = Math.min(cycleMap[STAFF_TO_SEG[staff]] ?? 0, indData.cycle.length - 1);
  const cycleVal = indData.cycle[cycleIdx];

  document.getElementById('cpcTagsRow').innerHTML = `
    <span class="cpc-tag cpc-tag-role"><span class="cpc-tag-label">ЛПР</span>${seg.lpr}</span>
    <span class="cpc-tag cpc-tag-role"><span class="cpc-tag-label">ЛВР</span>${seg.lvr}</span>
    <span class="cpc-tag cpc-tag-trigger"><span class="cpc-tag-label">⚡ Триггер</span>${indData.trigger}</span>
    <span class="cpc-tag cpc-tag-cycle"><span class="cpc-tag-label">⏱ Цикл</span>${cycleVal}</span>
  `;

  // Agents — placeholder, tied to each pain
  document.querySelector('#cpcAgents').closest('.cpc-agents-block').querySelector('.cpc-block-subtitle').textContent =
    `Топ-3 боли — ${indData.name}`;

  document.getElementById('cpcAgents').innerHTML = indData.pains.map((p, i) => `
    <div class="cpc-agent-card">
      <div class="cpc-agent-pain-ref"><span class="cpc-agent-pain-num">${i + 1}</span><span class="cpc-agent-pain-text">${p}</span></div>
      <div class="cpc-agent-body">
        <div class="cpc-agent-icon">🤖</div>
        <div class="cpc-agent-info">
          <div class="cpc-agent-solution-label">Есть готовое решение:</div>
          <div class="cpc-agent-name">Агент ${i + 1}</div>
        </div>
        <div class="cpc-agent-placeholder">Плейсхолдер</div>
      </div>
    </div>
  `).join('');

  // ── Flexible pricing helpers ──────────────────────────────────────────────
  function fmtMoney(n) {
    return new Intl.NumberFormat('ru-RU').format(Math.round(n)) + ' ₽';
  }

  function buildFlexPanel(id) {
    if (id === 'saas') {
      return `
        <div class="fp-note">12 500 ₽ за пользователя в год · диапазон 100–2 000 чел.</div>
        <div class="fp-row">
          <span class="fp-row-label">Количество пользователей</span>
          <div class="fp-control">
            <input type="range" class="fp-slider" min="100" max="2000" step="50" value="400" data-fp="saas-slider">
            <input type="number" class="fp-num" min="100" max="2000" step="50" value="400" data-fp="saas-num">
          </div>
        </div>
        <div class="fp-result">
          <div class="fp-result-row"><span>Итого без НДС</span><strong data-fp="saas-ex">5 000 000 ₽/год</strong></div>
          <div class="fp-result-row fp-result-accent"><span>Итого с НДС</span><strong data-fp="saas-inc">6 100 000 ₽/год</strong></div>
        </div>`;
    }
    if (id === 'hybrid') {
      return `
        <div class="fp-note">Базовая лицензия 5 млн ₽ + 8 000 ₽ за пользователя · 500–5 000 чел.</div>
        <div class="fp-row">
          <span class="fp-row-label">Количество пользователей</span>
          <div class="fp-control">
            <input type="range" class="fp-slider" min="500" max="5000" step="100" value="1000" data-fp="hybrid-slider">
            <input type="number" class="fp-num" min="500" max="5000" step="100" value="1000" data-fp="hybrid-num">
          </div>
        </div>
        <div class="fp-result">
          <div class="fp-result-row"><span>Базовая лицензия</span><strong>5 000 000 ₽/год</strong></div>
          <div class="fp-result-row"><span>Пользователи (<span data-fp="hybrid-users">1 000</span> × 8 000 ₽)</span><strong data-fp="hybrid-ucost">8 000 000 ₽/год</strong></div>
          <div class="fp-result-divider"></div>
          <div class="fp-result-row"><span>Итого без НДС</span><strong data-fp="hybrid-ex">13 000 000 ₽/год</strong></div>
          <div class="fp-result-row fp-result-accent"><span>Итого с НДС</span><strong data-fp="hybrid-inc">15 860 000 ₽/год</strong></div>
        </div>`;
    }
    if (id === 'pak') {
      return `
        <div class="fp-note">Выберите конфигурацию сервера</div>
        <div class="fp-pak-cards">
          <div class="fp-pak-card active" data-pak="8gpu">
            <div class="fp-pak-name">ПАК 8 GPU H200</div>
            <div class="fp-pak-tier">1-й год — <b>67 млн ₽</b></div>
            <div class="fp-pak-tier fp-pak-sub">2-й год и далее — <b>35 млн ₽</b></div>
          </div>
          <div class="fp-pak-card" data-pak="4gpu">
            <div class="fp-pak-name">ПАК 4 GPU H200</div>
            <div class="fp-pak-tier">1-й год — <b>49 млн ₽</b> <span class="fp-indicative">индикативно</span></div>
            <div class="fp-pak-tier fp-pak-sub">2-й год и далее — <b>25,6 млн ₽</b> <span class="fp-indicative">индикативно</span></div>
          </div>
        </div>
        <div class="fp-result">
          <div class="fp-result-row"><span>1-й год без НДС</span><strong data-fp="pak-y1-ex">67 000 000 ₽</strong></div>
          <div class="fp-result-row fp-result-accent"><span>1-й год с НДС</span><strong data-fp="pak-y1-inc">81 740 000 ₽</strong></div>
          <div class="fp-result-divider"></div>
          <div class="fp-result-row"><span>2-й год и далее без НДС</span><strong data-fp="pak-y2-ex">35 000 000 ₽</strong></div>
          <div class="fp-result-row fp-result-accent"><span>2-й год и далее с НДС</span><strong data-fp="pak-y2-inc">42 700 000 ₽</strong></div>
        </div>`;
    }
    return '';
  }

  function initFlexPanel(panel, id) {
    if (id === 'saas') {
      const slider = panel.querySelector('[data-fp="saas-slider"]');
      const num    = panel.querySelector('[data-fp="saas-num"]');
      function calcSaas() {
        const u = Math.min(2000, Math.max(100, parseInt(slider.value) || 400));
        slider.value = u; num.value = u;
        const ex = u * 12500;
        panel.querySelector('[data-fp="saas-ex"]').textContent = fmtMoney(ex) + '/год';
        panel.querySelector('[data-fp="saas-inc"]').textContent = fmtMoney(ex * 1.22) + '/год';
      }
      slider.addEventListener('input', calcSaas);
      num.addEventListener('change', () => { slider.value = num.value; calcSaas(); });
      calcSaas();
    }
    if (id === 'hybrid') {
      const slider = panel.querySelector('[data-fp="hybrid-slider"]');
      const num    = panel.querySelector('[data-fp="hybrid-num"]');
      function calcHybrid() {
        const u = Math.min(5000, Math.max(500, parseInt(slider.value) || 1000));
        slider.value = u; num.value = u;
        const base = 5000000, per = u * 8000, total = base + per;
        panel.querySelector('[data-fp="hybrid-users"]').textContent = u.toLocaleString('ru-RU');
        panel.querySelector('[data-fp="hybrid-ucost"]').textContent = fmtMoney(per) + '/год';
        panel.querySelector('[data-fp="hybrid-ex"]').textContent = fmtMoney(total) + '/год';
        panel.querySelector('[data-fp="hybrid-inc"]').textContent = fmtMoney(total * 1.22) + '/год';
      }
      slider.addEventListener('input', calcHybrid);
      num.addEventListener('change', () => { slider.value = num.value; calcHybrid(); });
      calcHybrid();
    }
    if (id === 'pak') {
      const pakData = {
        '8gpu': { y1: 67000000, y2: 35000000 },
        '4gpu': { y1: 49000000, y2: 25600000 }
      };
      function calcPak(cfg) {
        const d = pakData[cfg];
        panel.querySelector('[data-fp="pak-y1-ex"]').textContent = fmtMoney(d.y1);
        panel.querySelector('[data-fp="pak-y1-inc"]').textContent = fmtMoney(d.y1 * 1.22);
        panel.querySelector('[data-fp="pak-y2-ex"]').textContent = fmtMoney(d.y2);
        panel.querySelector('[data-fp="pak-y2-inc"]').textContent = fmtMoney(d.y2 * 1.22);
      }
      panel.querySelectorAll('.fp-pak-card').forEach(card => {
        card.addEventListener('click', () => {
          panel.querySelectorAll('.fp-pak-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          calcPak(card.dataset.pak);
        });
      });
      calcPak('8gpu');
    }
  }

  // ── Delivery cards ─────────────────────────────────────────────────────────
  const deliveryCards = document.getElementById('cpcDeliveryCards');
  deliveryCards.innerHTML = deliveryOpts.map(opt => {
    const d = DELIVERY_DETAILS[opt.id] || {};
    const tiersHtml = (d.tiers || []).map(t => `
      <div class="cpc-dc-tier">
        <div class="cpc-dc-tier-left">
          <span class="cpc-dc-tier-name">${t.name}</span>
          <span class="cpc-dc-tier-users">${t.users}</span>
        </div>
        <div class="cpc-dc-tier-right">
          <span class="cpc-dc-tier-price">${t.price}</span>
          ${t.priceVat ? `<span class="cpc-dc-tier-vat">${t.priceVat} с НДС</span>` : ''}
        </div>
      </div>`).join('');
    const advHtml = (d.advantages || []).map(a => `<li>${a}</li>`).join('');
    const featHtml = (d.features || []).map(f => `<li>${f}</li>`).join('');
    return `
    <div class="cpc-dc ${opt.priority ? 'cpc-dc-primary' : 'cpc-dc-secondary'}">
      ${opt.priority ? '<div class="cpc-dc-badge">Приоритет</div>' : ''}
      <div class="cpc-dc-header">
        <div class="cpc-dc-icon">${opt.icon}</div>
        <div class="cpc-dc-label">${opt.label}</div>
      </div>
      <div class="cpc-dc-reason">${opt.reason}</div>
      ${advHtml ? `<div class="cpc-dc-adv-title">Преимущества</div><ul class="cpc-dc-advantages">${advHtml}</ul>` : ''}
      ${tiersHtml ? `<div class="cpc-dc-tiers">${tiersHtml}</div>` : ''}
      ${featHtml ? `<div class="cpc-dc-feat-title">В стоимость включено</div><ul class="cpc-dc-features">${featHtml}</ul>` : ''}
      <button class="cpc-flex-btn" data-delivery="${opt.id}">Гибкое ценообразование ↗</button>
      <div class="cpc-flex-panel" id="flexPanel-${opt.id}" style="display:none">
        ${buildFlexPanel(opt.id)}
      </div>
    </div>`;
  }).join('');

  // Wire flexible pricing toggle
  deliveryCards.querySelectorAll('.cpc-flex-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.delivery;
      const panel = document.getElementById('flexPanel-' + id);
      const open = panel.style.display !== 'none';
      // Close all panels first
      deliveryCards.querySelectorAll('.cpc-flex-panel').forEach(p => { p.style.display = 'none'; });
      deliveryCards.querySelectorAll('.cpc-flex-btn').forEach(b => b.classList.remove('active'));
      if (!open) {
        panel.style.display = 'block';
        btn.classList.add('active');
        initFlexPanel(panel, id);
      }
    });
  });

  document.getElementById('cpcDeliveryNote').innerHTML =
    'Рекомендация основана на: штате, ИТ-инфраструктуре, требованиях ИБ и отраслевой оценке ДКК.';

  // Next steps — reset state
  const nsToggle = document.getElementById('cpcNsToggle');
  const nsActions = document.getElementById('cpcNsActions');
  nsActions.style.display = 'none';
  nsActions.innerHTML = '';
  nsToggle.querySelectorAll('.cpc-ns-btn').forEach(b => b.classList.remove('active'));

  nsToggle.querySelectorAll('.cpc-ns-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      nsToggle.querySelectorAll('.cpc-ns-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      nsActions.style.display = 'flex';

      if (btn.dataset.ns === 'yes') {
        nsActions.innerHTML = `
          <a class="cpc-ns-action-btn cpc-ns-primary" href="https://app.sbercrm.com/form-builder-web/form.html?organizationId=d42d4a86-5978-11f0-9036-7ffb1d66559d&formId=7bc9f342-0325-11f1-9657-176c23baf263" target="_blank">Заполнить бриф КСБ →</a>
          <a class="cpc-ns-action-btn cpc-ns-primary" href="https://app.sbercrm.com/form-builder-web/form.html?organizationId=d42d4a86-5978-11f0-9036-7ffb1d66559d&formId=a60ce78e-37ca-11f1-8a46-afbffb399840" target="_blank">Заполнить бриф ММБ →</a>
        `;
      } else {
        nsActions.innerHTML = `
          <a class="cpc-ns-action-btn cpc-ns-secondary" href="#" target="_blank">Скачать актуальные материалы</a>
          <a class="cpc-ns-action-btn cpc-ns-secondary" href="#" target="_blank">Презентация Облако</a>
          <a class="cpc-ns-action-btn cpc-ns-secondary" href="#" target="_blank">Презентация Гибрид</a>
          <a class="cpc-ns-action-btn cpc-ns-secondary" href="#" target="_blank">Презентация ПАК</a>
        `;
      }
    });
  });
}

function initClientCalc() {
  let selInd = null, selRev = null, selStaff = null, selIT = 'yes', selSec = null;

  // Industry buttons
  document.querySelectorAll('#cpcIndustryGrid .cpc-ind-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#cpcIndustryGrid .cpc-ind-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selInd = btn.dataset.ind;
    });
  });

  // Revenue pills
  document.querySelectorAll('#cpcRevenueGroup .cpc-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#cpcRevenueGroup .cpc-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selRev = btn.dataset.rev;
    });
  });

  // Staff pills
  document.querySelectorAll('#cpcStaffGroup .cpc-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#cpcStaffGroup .cpc-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selStaff = btn.dataset.staff;
    });
  });

  // IT toggle
  document.querySelectorAll('#cpcItToggle .cpc-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#cpcItToggle .cpc-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selIT = btn.dataset.it;
    });
  });

  // Security pills
  document.querySelectorAll('#cpcSecurityGroup .cpc-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#cpcSecurityGroup .cpc-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selSec = btn.dataset.sec;
    });
  });

  // Popup helpers
  function showPopup(missing) {
    const labels = { ind: '1. Отрасль', rev: '2. Годовая выручка', staff: '3. Штат сотрудников', sec: '5. Требования к безопасности' };
    const body = document.getElementById('cpcPopupBody');
    body.innerHTML = missing.map(k => `<div class="cpc-popup-missing">${labels[k]}</div>`).join('');
    document.getElementById('cpcPopupOverlay').classList.add('active');
  }
  document.getElementById('cpcPopupClose').addEventListener('click', () => {
    document.getElementById('cpcPopupOverlay').classList.remove('active');
  });
  document.getElementById('cpcPopupOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('active');
  });

  // Submit
  document.getElementById('cpcSubmitBtn').addEventListener('click', () => {
    const missing = [];
    if (!selInd)   missing.push('ind');
    if (!selRev)   missing.push('rev');
    if (!selStaff) missing.push('staff');
    if (!selSec)   missing.push('sec');
    if (missing.length) {
      showPopup(missing);
      return;
    }
    renderClientResult(selInd, selRev, selStaff, selIT === 'yes', selSec);
    const result = document.getElementById('cpcResult');
    result.style.display = 'block';
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Reset
  document.getElementById('cpcResetBtn').addEventListener('click', () => {
    document.getElementById('cpcResult').style.display = 'none';
    document.querySelectorAll('.cpc-ind-btn, .cpc-pill').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('#cpcItToggle .cpc-toggle-btn').forEach((b, i) => {
      b.classList.toggle('active', i === 0);
    });
    selInd = selRev = selStaff = selSec = null;
    selIT = 'yes';
    window.scrollTo({ top: document.getElementById('client-calc').offsetTop - 80, behavior: 'smooth' });
  });
}

// ===== NAV SCROLL HIGHLIGHT =====
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = '';
          a.style.background = '';
        });
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) {
          active.style.color = 'var(--accent)';
          active.style.background = 'rgba(0,231,188,0.06)';
        }
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ===== API TOKEN CALCULATOR =====
const API_RATES = {
  sync:  { lite: 0.065,  pro: 0.5,  max: 0.65  },
  async: { lite: 0.0325, pro: 0.25, max: 0.325 }
};

const EMBED_RATES = {
  sync:  0.014,
  async: 0.007
};

const API_MAX_TOKENS = 100_000_000_000;
const API_STEP       = 1_000_000;
const MIN_TOTAL      = 300_000;

const MODE_HINTS = {
  sync:  'Стандартный режим — ответ ждёт запрос',
  async: 'Асинхронный режим — запросы обрабатываются в очереди, вдвое дешевле'
};

const RU = new Intl.NumberFormat('ru-RU');

function apicGetRate(mode, model) {
  return API_RATES[mode][model];
}

function apicCalcMinTokens(rate) {
  const raw = Math.ceil(MIN_TOTAL / rate * 1000);
  return Math.ceil(raw / API_STEP) * API_STEP;
}

function apicFormatRate(rate) {
  return rate.toLocaleString('ru-RU', { minimumFractionDigits: 3, maximumFractionDigits: 4 }) + ' ₽ / 1 000 токенов';
}

function initApiCalc() {
  // === Режим / модель ===
  const modeGroup  = document.getElementById('apicModeGroup');
  const modelGroup = document.getElementById('apicModelGroup');
  const modeHint   = document.getElementById('apicModeHint');

  // === Токены ===
  const slider       = document.getElementById('apicSlider');
  const numInput     = document.getElementById('apicNumber');
  const tokensDisp   = document.getElementById('apicTokensDisplay');
  const sliderMin    = document.getElementById('apicSliderMin');
  const tokenSubRate = document.getElementById('apicTokenSubRate');

  // === Embeddings ===
  const embedSlider  = document.getElementById('apicEmbedSlider');
  const embedNumber  = document.getElementById('apicEmbedNumber');
  const embedDisp    = document.getElementById('apicEmbedDisplay');
  const embedSubRate = document.getElementById('apicEmbedSubRate');

  // === Результат ===
  const amountEl     = document.getElementById('apicAmount');
  const tokensCostEl = document.getElementById('apicTokensCost');
  const embedCostEl  = document.getElementById('apicEmbedCost');

  // === Rate-карточки моделей ===
  const rateCards = {
    lite: document.getElementById('rateCardLite'),
    pro:  document.getElementById('rateCardPro'),
    max:  document.getElementById('rateCardMax')
  };

  if (!modeGroup) return;

  let currentMode        = 'sync';
  let currentModel       = 'lite';
  let currentTokens;
  let currentEmbedTokens = 0;

  function updateRateCards() {
    Object.keys(rateCards).forEach(m => {
      if (rateCards[m]) {
        rateCards[m].textContent = apicFormatRate(API_RATES[currentMode][m]);
      }
    });
  }

  function applyTokensMinMax() {
    const rate   = apicGetRate(currentMode, currentModel);
    const minTok = apicCalcMinTokens(rate);

    slider.min   = minTok;
    slider.max   = API_MAX_TOKENS;
    numInput.min = minTok;
    numInput.max = API_MAX_TOKENS;

    if (currentTokens < minTok) currentTokens = minTok;
    if (currentTokens > API_MAX_TOKENS) currentTokens = API_MAX_TOKENS;

    sliderMin.textContent = RU.format(minTok);
    return rate;
  }

  function recalc() {
    const tokenRate = applyTokensMinMax();
    const embedRate = EMBED_RATES[currentMode];

    // Синхронизация ползунков
    slider.value      = currentTokens;
    numInput.value    = currentTokens;
    if (embedSlider) embedSlider.value = currentEmbedTokens;
    if (embedNumber) embedNumber.value = currentEmbedTokens;

    // Отображение токенов
    tokensDisp.textContent = RU.format(currentTokens) + ' токенов';
    if (embedDisp) {
      embedDisp.textContent = currentEmbedTokens > 0
        ? RU.format(currentEmbedTokens) + ' токенов'
        : '0 токенов';
    }

    // Стоимости
    const tokensCost = (currentTokens / 1000) * tokenRate;
    const embedCost  = (currentEmbedTokens / 1000) * embedRate;
    const total      = Math.max(tokensCost + embedCost, MIN_TOTAL);

    amountEl.textContent = RU.format(Math.round(total)) + ' ₽';
    if (tokensCostEl) tokensCostEl.textContent = RU.format(Math.round(tokensCost)) + ' ₽';
    if (embedCostEl)  embedCostEl.textContent  = RU.format(Math.round(embedCost))  + ' ₽';

    // Тарифы под слайдерами
    if (tokenSubRate) tokenSubRate.textContent = apicFormatRate(tokenRate);
    if (embedSubRate) embedSubRate.textContent = apicFormatRate(embedRate);

    updateRateCards();
  }

  // Инициализация
  const initRate = apicGetRate(currentMode, currentModel);
  currentTokens  = apicCalcMinTokens(initRate);
  recalc();

  // Обработчики режима
  modeGroup.querySelectorAll('.apic-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      modeGroup.querySelectorAll('.apic-toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMode = btn.dataset.mode;
      modeHint.textContent = MODE_HINTS[currentMode];
      recalc();
    });
  });

  // Обработчики модели
  modelGroup.querySelectorAll('.apic-model-card').forEach(card => {
    card.addEventListener('click', () => {
      modelGroup.querySelectorAll('.apic-model-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      currentModel = card.dataset.model;
      recalc();
    });
  });

  // Слайдер токенов
  slider.addEventListener('input', () => {
    currentTokens = parseInt(slider.value) || parseInt(slider.min);
    recalc();
  });

  numInput.addEventListener('input', () => {
    const val = parseInt(numInput.value);
    if (!isNaN(val)) tokensDisp.textContent = RU.format(val) + ' токенов';
  });

  function commitTokenNumber() {
    const rate   = apicGetRate(currentMode, currentModel);
    const minTok = apicCalcMinTokens(rate);
    let val = parseInt(numInput.value) || minTok;
    val = Math.round(val / API_STEP) * API_STEP;
    val = Math.max(minTok, Math.min(API_MAX_TOKENS, val));
    currentTokens = val;
    recalc();
  }

  numInput.addEventListener('change', commitTokenNumber);
  numInput.addEventListener('keydown', e => { if (e.key === 'Enter') commitTokenNumber(); });

  // Слайдер embeddings
  if (embedSlider) {
    embedSlider.addEventListener('input', () => {
      currentEmbedTokens = parseInt(embedSlider.value) || 0;
      recalc();
    });
  }

  if (embedNumber) {
    embedNumber.addEventListener('input', () => {
      const val = parseInt(embedNumber.value);
      if (!isNaN(val) && embedDisp) embedDisp.textContent = RU.format(Math.max(0, val)) + ' токенов';
    });

    function commitEmbedNumber() {
      let val = parseInt(embedNumber.value);
      if (isNaN(val) || val < 0) val = 0;
      val = Math.round(val / API_STEP) * API_STEP;
      val = Math.min(API_MAX_TOKENS, val);
      currentEmbedTokens = val;
      recalc();
    }

    embedNumber.addEventListener('change', commitEmbedNumber);
    embedNumber.addEventListener('keydown', e => { if (e.key === 'Enter') commitEmbedNumber(); });
  }
}

// ===== FAQ =====
const FAQ_DATA = {
  'Общие вопросы': [
    { q: 'Для организации совместной ВКС с клиентом для уточнения потребностей обязательно заполнять бриф?', a: 'Да. Это обязательный этап, закреплённый в операционном процессе (согласованном с банком).' },
    { q: 'Клиент сам обучает ГигаЧат своим материалам: ВНД, базе знаний и т. д. Как это работает?', a: 'ГигаЧат (модель) не обучается на данных клиента и не хранит историю запросов. ВНД и база знаний передаются вместе с запросом (в промпте) или при создании агента/ассистента.' },
    { q: 'Сколько пользователей может быть в компании при покупке GigaChat Enterprise? Есть ли ограничение?', a: 'Указано максимальное количество пользователей для каждого пакета. При превышении блокировки нет: мы фиксируем количество пользователей и обсуждаем с клиентом дальнейшие шаги.' },
    { q: 'Нужно ли подписывать NDA с клиентом при продаже Облако и Гибрид?', a: 'По желанию клиента возможно заключение NDA, но это не обязательно. В договор уже включены все необходимые положения о коммерческой информации и персональных данных.' },
    { q: 'У ГигаЧат бывают ошибки?', a: 'Да. У ГигаЧат (модели), как и у любых больших языковых моделей, возможны «галлюцинации». Для контроля качества используются бенчмарки.' },
    { q: 'Есть ли в продукте готовые ИИ‑агенты для типовых бизнес‑сценариев?', a: 'Да. В первой версии доступны агенты: оценка резюме (HR), проверка общих рисков по договору (юрист), помощник по ответам на деловые письма, редактор текста, суммаризатор неструктурированных документов, помощник по математическим формулам, генерация структуры слайдов презентаций, описание структуры данных и диаграмм, создатель опросов, а также помощник для создания промпта для настройки собственного агента.' },
    { q: 'Может ли команда клиента сама создавать ИИ‑агентов на базе ПАК GigaChat Enterprise (ГигаЧат Бизнес)?', a: 'Да. В продукте есть конструктор ИИ‑агентов, в том числе RAG.' },
    { q: 'Может ли GigaChat Enterprise (ГигаЧат Бизнес) брать данные из внешних ресурсов, например для отчёта о конкурентах?', a: 'Да. Есть функция парсинга публичных ссылок при условии, что ресурс открыт и не запрещает парсинг. Глубина парсинга — 1 уровень.' },
    { q: 'Чем отличается GigaChat Enterprise (ГигаЧат Бизнес) от бесплатной версии GigaChat?', a: 'GigaChat Enterprise — это единый корпоративный контур с авторизацией через корпоративную учётную запись. Платформа работает с корпоративными данными, обеспечивает безопасность и управление правами доступа, чего нет в GigaChat API. В GigaChat Enterprise вы можете создавать и делиться агентами, накапливать и использовать отраслевую экспертизу компании. Загружать конфиденциальные данные в бесплатные личные чаты нельзя: их невозможно отозвать при увольнении сотрудника — это нарушает политики безопасности и создаёт риск утечки корпоративной тайны.' },
    { q: 'Можно ли подгружать ВНД и другие документы? Какие форматы поддерживает чат?', a: 'Да, можно. Принимаются документы в форматах .txt, .docx, .xlsx, .pptx, .csv, .pdf, а также изображения .png, .jpg, .gif. Возможность загрузки ВНД и документов с персональными данными определяется регламентами заказчика.' },
    { q: 'Кто проводит обучение для клиента и входит ли оно в поставки ПАК, Гибрид и Облако?', a: 'Обучение входит в предложение по любому из указанных решений. Его проводит СберУниверситет.' },
  ],
  'Облако': [
    { q: 'В чём отличие продукта GigaChat Enterprise Облако от GigaChat API (когда юрлицо покупает токены)?', a: 'Продукт Облако подразумевает предоставление доступа к GigaChat Enterprise (ГигаЧат для Бизнеса) и созданию агентов знаний для пользователя, а не доступ к API моделей. В рамках Облака клиент получает неограниченное количество токенов.' },
    { q: 'Чем отличается S-облако от XS-облака?', a: 'Отличие в количестве пользователей: S — 400 пользователей, XS — 200 пользователей.' },
    { q: 'Есть ли ограничение по потреблению токенов в поставке Облако?', a: 'В поставке Облако тарификация рассчитывается по пользователям, а не по токенам.' },
    { q: 'Есть ли ограничение по количеству потоков (одновременная обработка запросов) в поставке Облако?', a: 'Да. Скорость работы рассчитана по среднему профилю пользователя. При нетиповой активности (повышенное количество запросов за период) возможно замедление скорости ответов и увеличение времени ожидания.' },
    { q: 'Какие модели входят в состав поставки Облако (Lite, Pro, Max)?', a: 'По умолчанию доступна модель ГигаЧат Макс.' },
    { q: 'Предполагается ли предоставление клиенту каких-либо лицензий?', a: 'Нет, договор заключается на услугу предоставления доступа к облачным сервисам.' },
    { q: 'Облачные ресурсы тарифицируются отдельно?', a: 'Нет, они отдельно не тарифицируются.' },
    { q: 'Как происходит авторизация каждого сотрудника при обращении к платформе?', a: 'После заключения договора предоставляется индивидуальная ссылка на GigaChat Enterprise и доступ администратору клиента. Далее администратор предоставляет права сотрудникам.' },
    { q: 'Как происходит администрирование и управление учётными записями сотрудников?', a: 'Через систему администрирования, к которой есть доступ у роли «админ» клиента. Сотрудников можно добавлять в самой платформе (по одному или массово). По запросу может быть проработана интеграция с Keycloak.' },
    { q: 'Как происходит отключение доступа к сервису по окончании оплаченного периода?', a: 'За 1 месяц до окончания оплаченного периода клиенту направляется уведомление. Если продление не подтверждается, доступ к модели блокируется.' },
    { q: 'Есть ли доступ у администратора к архиву переписки сотрудников?', a: 'По умолчанию данные пользователей логируются. Администратор клиента может посмотреть, что спрашивают сотрудники, их активность и названия загружаемых документов.' },
    { q: 'Полная стоимость владения GigaChat Enterprise Облако из чего складывается? Как оплачиваются токены?', a: 'Оплачивается только доступ к продукту GigaChat Enterprise. Токены и модель входят в стоимость.' },
    { q: 'Как осуществляется техподдержка GigaChat Enterprise Облако?', a: 'При затруднениях с доступом к сервису заказчик вправе направить обращение по адресу: support_b2b@gigab2b.ru.' },
    { q: 'Возможен ли пакет XXS-облако на меньшее количество пользователей и с меньшей стоимостью?', a: 'Нет, 2,5 млн ₽ за XS-облако (200 пользователей) — это минимальная цена.' },
    { q: 'SaaS XS-облако за 2,5 млн рублей можно купить на одно юридическое лицо, а пользователи будут из разных компаний одного холдинга?', a: 'Нет, договор не предусматривает использование на группу компаний.' },
    { q: 'S-облако — до 400 пользователей или одновременных запросов?', a: 'До 400 пользователей продукта в системе учёта пользователей (администрирование).' },
  ],
  'Гибрид': [
    { q: 'Как организуется защищённый канал передачи данных?', a: 'Базовый вариант: mTLS + API Gateway. Авторизация по HTTPS (TLS 1.3+) через интернет на API-шлюз (OAuth2/OIDC). Доступ к cloud LLM API по HTTPS с взаимной аутентификацией (mTLS): проверка клиентских сертификатов, PKI и ротация сертификатов.\n\nПо запросу клиента доступен Site-to-Site VPN (IPsec): приватный доступ к cloud API через IPsec VPN (1–3 Gbps) с шифрованием всего трафика между on-prem и VPC/VNet облака.' },
    { q: 'Облачные ресурсы тарифицируются отдельно?', a: 'Использование облачных ресурсов включено в стоимость продукта и не тарифицируется отдельно.' },
    { q: 'Есть ли ограничение по потреблению токенов в продукте Гибрид?', a: 'Ограничений по количеству токенов нет в рамках использования платформы.' },
    { q: 'Есть ли ограничение по количеству потоков (одновременная обработка запросов) в продукте Гибрид?', a: 'Да, нагрузка рассчитывается на основе количества пользователей и среднего профиля активности. При пиковых нагрузках возможно незначительное увеличение времени ответа.' },
    { q: 'Какие модели входят в состав продукта GigaChat Enterprise Гибрид (Lite, Pro, Max)?', a: 'По умолчанию доступна модель GigaChat Max 2.0.' },
    { q: 'Предполагается ли предоставление клиенту каких-либо лицензий в Гибриде?', a: 'Предоставляется простая (неисключительная) лицензия на программный продукт «ГигаЧат для бизнеса» сроком на 1 год.' },
    { q: 'Как гибрид работает?', a: 'GigaChat Enterprise развёрнут в контуре компании, все файлы и история общения хранятся в этом контуре. Клиент сам управляет всеми загруженными базами знаний и выдаёт права на доступ к информации. Все запросы идут через сервер компании — их можно контролировать. Модель находится в облаке и не хранит данные.' },
    { q: 'Какая ширина канала необходима?', a: '1 Гбит.' },
    { q: 'Нужен ли канал управления для админки, чтобы ООО «Салют для Бизнеса» мог обновлять и настраивать систему?', a: 'На текущий момент не требуется. Обновления устанавливает клиент.' },
    { q: 'Сколько человеко-часов заложено на консультации в поставке Гибрид?', a: '100 часов.' },
    { q: 'Какое шифрование используется при Гибриде?', a: 'Базовый вариант: mTLS + API Gateway (TLS 1.3+, OAuth2/OIDC). По запросу — Site-to-Site IPsec VPN (1–3 Gbps) с шифрованием всего трафика между on-prem и облаком.' },
    { q: 'Полная стоимость владения продукта Гибрид из чего складывается? Как оплачиваются токены?', a: 'Использование токенов включено в стоимость продукта и не тарифицируется отдельно.' },
    { q: 'За счёт чего Гибрид дороже Облака? В чём разница наполнения?', a: 'В расчёте на одного пользователя цена в Гибриде и в Облаке одинаковая — 1 000 ₽/мес/пользователь. Разница итоговой цены связана с более высоким уровнем минимального пакета пользователей в Гибриде.' },
    { q: 'В какой форме юридическая гарантия не хранения данных клиента в Гибриде?', a: 'Это прописано в договоре на поставку Гибрид. В редакции Облако данные хранятся, но модель на них не обучается, следовательно, риск утечки отсутствует.' },
  ],
  'ПАК': [
    { q: 'Какие модели входят в состав продукта ПАК (Lite, Pro, Max)?', a: 'По умолчанию предустанавливается модель ГигаЧат Макс плюс цензор. Каждый ПАК перед поставкой комплектуется необходимыми программными продуктами по результатам аудита потребностей клиента.' },
    { q: 'Предполагается ли предоставление клиенту каких-либо лицензий в ПАК?', a: 'В составе ПАК передаются права на лицензии на операционную систему, программное обеспечение и модель с бессрочным периодом использования, с обновлением и поддержкой на 12 месяцев.' },
    { q: 'Как планируется обновление модели, если ПАК находится в периметре клиента?', a: 'Обновление модели возможно передачей ссылки для скачивания новой версии либо на физическом носителе.' },
    { q: 'Кто гарантирует, что модель после обновления будет корректно отрабатывать ранее написанный системный промпт?', a: 'Гарантий нет. После обновления модели может потребоваться обновление системного промпта.' },
    { q: 'Что входит в ПАК?', a: 'Базовая конфигурация ПАК включает сервер с 8 GPU H200 и бессрочные лицензии на ГигаЧат (ПО «ГигаЧат для бизнеса», ПО «GigaChat», операционная система СберЛинукс), а также консультационные часы. При поставке дополнительно оказывается техническая поддержка в первые 12 месяцев.' },
    { q: 'Сколько человеко-часов заложено на консультации в пакет ПАК?', a: 'До 200 часов консультаций / консалтинга.' },
    { q: 'Из чего собирается ПАК? Если клиент относится к КИИ, нужно ли российское оборудование?', a: 'Типовая конфигурация сервера представлена в спецификации к договору ПАК. ПАК не включён в реестр Минпромторга и Единый реестр ПО. Вопрос включения в реестр Минпромторга находится в проработке.' },
    { q: 'Какой срок замены / ремонта ПАК, если он выйдет из строя?', a: 'Согласно SLA, указанному в договоре: до 15 рабочих дней — для всех комплектующих, кроме GPU.' },
    { q: 'Какие условия по сроку лицензии в случае выхода из строя сервера и простоя услуги?', a: 'В составе ПАК лицензии на ГигаЧат и операционную систему предоставляются бессрочно.' },
    { q: 'Полная стоимость владения ПАК из чего складывается? Как оплачиваются токены?', a: 'В стоимость первого года входит: продажа сервера, бессрочные лицензии на ГигаЧат, ГигаЧат для Бизнеса, ОС, токены (безлимит). Сопровождение на второй и последующие годы — 35 млн ₽/год (+НДС).' },
    { q: 'Клиент купил ПАК. Что будет через год — аппаратное и программное обновление?', a: 'На второй год — только при заключении отдельного договора сопровождения (35 млн ₽ + НДС) — проводится обновление программной части (ссылка для скачивания либо физический носитель). Аппаратная часть не обновляется, так как находится в собственности клиента.' },
    { q: 'Можно ли собрать мини-ПАК в пределах 30–40 млн рублей с возможностью масштабирования?', a: 'Да. При необходимости масштабирования собирается и продаётся другой ПАК.' },
    { q: 'Клиент хочет купить только ПО — железо у него уже есть. Возможно ли это?', a: 'Продажа лицензий обсуждается индивидуально, не в рамках стандартного продукта.' },
    { q: 'Есть ли рассрочка на ПАК?', a: 'По умолчанию — 100% предоплата. Другой порядок оплаты обсуждается индивидуально.' },
    { q: 'Будет ли работать ПАК без продления на второй и третий годы?', a: 'Да, ПАК будет работать: лицензии бессрочные, сервер передаётся в собственность клиента, но программная часть не будет обновляться.' },
    { q: 'Может ли клиент не платить второй и третий год?', a: 'Да, может. ПАК продолжит работать без обновлений.' },
    { q: 'Имеется ли аппаратное и программное резервирование в случае поставки ПАК?', a: 'В ПАК входит только один сервер. Для резерва требуется покупать второй ПАК.' },
    { q: 'Работает ли GigaChat Enterprise «из коробки» с MCP и к чему есть API?', a: 'ПАК имеет возможность работать «из коробки» с MCP, API включён в стоимость.' },
  ],
  'Консалтинг и PoC': [
    { q: 'Сколько стоит и есть ли возможность организовать стратегическую сессию с привлечением Салют для Бизнеса?', a: 'Нужно обсуждать в индивидуальном порядке, в зависимости от потенциала клиента и планируемых бюджетов и сроков реализации проекта.' },
    { q: 'Есть ли прайс на дополнительные консультации (более 200 / 100 часов) и разработку MVP?', a: 'Прайс предоставляется по запросу при обсуждении конкретного клиента и кейса.' },
    { q: 'Сколько стоит 200 часов консультации с реализацией 2 концептов? Что считается за 1 концепт?', a: 'На текущий момент нет утверждённой ценовой политики за консультации. Метрики и MVP обсуждаются на отдельных встречах. Концепт — это детально проработанный MVP желаемого решения, который в будущем будет реализован.' },
    { q: 'Сколько человеко-часов заложено на консультации в каждом пакете?', a: 'В ПАК входит 200 часов, в Гибрид — 100 часов консультаций для создания PoC.' },
    { q: 'Если потребуется консультация по созданию сложных агентов — это платно?', a: 'Вопрос расчёта и оценки стоимости разработки решается с конкретным выбранным партнёром индивидуально.' },
  ],
  'Триал': [
    { q: 'Какой бесплатный пробный период для тестирования продукта существует?', a: 'Бесплатный доступ для тестирования GigaChat Enterprise (ГигаЧат Бизнес) предоставляется клиентам сроком на 1 неделю в рамках поставки Облако.' },
    { q: 'Как клиенту-юрлицу получить триал-доступ к GigaChatMax2 на 50–100 потоков для нагрузочного тестирования?', a: 'Варианты нагрузочного тестирования и оценки производительности обсуждаются в частном порядке.' },
  ],
  'API': [
    { q: 'API по запросу будет предоставляться клиенту платно?', a: 'Мы обсуждаем возможность включения определённого количества токенов API в продукт.' },
    { q: 'Можно ли GigaChat API использовать для переключения ранее созданных решений на GigaChat в рамках ПАК?', a: 'Да, в рамках партнёра или собственной разработки. GigaChat API в облаке и ПАК совместимы, есть некоторые технические отличия.' },
    { q: 'Какой принцип интеграции GigaChat Enterprise с внутренними системами заказчика? Возможна ли интеграция с CRM, ERP?', a: 'Интеграция осуществляется через открытый API (планируется реализация во 2 квартале 2026 года). Возможность интеграции зависит от особенностей архитектуры внутренних систем заказчика.' },
  ],
  'Безопасность': [
    { q: 'Планируется ли получение сертификата ФСТЭК?', a: 'Сертификата ФСТЭК у продукта «ГигаЧат для бизнеса» на сегодняшний день нет, ведётся работа по его оформлению. В ближайшее время планируется пройти аудит по кибербезопасности.\n\nЛицензии ФСТЭК ООО «Салют для Бизнеса»:\nЛ024-00107-00/00582499\nЛ050-00107-00/00584112.' },
    { q: 'Где хранится информация, введённая пользователями в GigaChat Enterprise, и как обеспечивается её безопасность?', a: 'Информация хранится либо в облаке (для облачной редакции), либо в контуре заказчика (для Гибрид). Безопасность обеспечивается шифрованием и контролем доступа.' },
    { q: 'Как реализована система авторизации и разграничения прав доступа при работе сотрудников с разными ИИ-агентами?', a: 'При создании агента пользователь или администратор выбирает, кому из сотрудников или какой команде (группе пользователей) предоставляется доступ к информации. При использовании агента доступ предоставляется на основе прав пользователя.' },
  ],
};

function faqEscape(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}

function faqHighlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

function renderFaqItems(items, query) {
  if (!items.length) {
    return '<div class="faq-empty">Ничего не найдено. Попробуйте изменить запрос.</div>';
  }
  return items.map((item, idx) => {
    const q = faqHighlight(faqEscape(item.q), query ? faqEscape(query) : '');
    const a = faqHighlight(faqEscape(item.a), query ? faqEscape(query) : '');
    const cat = item._cat ? `<span class="faq-item-cat">${faqEscape(item._cat)}</span>` : '';
    return `
      <div class="faq-item" data-idx="${idx}">
        <button class="faq-q" onclick="faqToggle(this)">
          ${cat}
          <span class="faq-q-text">${q}</span>
          <span class="faq-arrow">›</span>
        </button>
        <div class="faq-a">${a}</div>
      </div>
    `;
  }).join('');
}

function faqToggle(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

function initFaq() {
  const tabs     = document.getElementById('faqTabs');
  const list     = document.getElementById('faqList');
  const search   = document.getElementById('faqSearch');
  const countEl  = document.getElementById('faqSearchCount');
  if (!tabs) return;

  let currentCat = 'Общие вопросы';

  function renderCat(cat) {
    currentCat = cat;
    const items = FAQ_DATA[cat] || [];
    list.innerHTML = renderFaqItems(items, '');
    if (countEl) countEl.textContent = '';
  }

  function renderSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      renderCat(currentCat);
      return;
    }
    const results = [];
    Object.entries(FAQ_DATA).forEach(([cat, items]) => {
      items.forEach(item => {
        if (item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)) {
          results.push({ ...item, _cat: cat });
        }
      });
    });
    list.innerHTML = renderFaqItems(results, query);
    if (countEl) {
      countEl.textContent = results.length
        ? `Найдено: ${results.length} ${results.length === 1 ? 'вопрос' : results.length < 5 ? 'вопроса' : 'вопросов'}`
        : '';
    }
    // hide/show tabs
    tabs.style.opacity = q ? '0.4' : '1';
    tabs.style.pointerEvents = q ? 'none' : 'auto';
  }

  // Tab clicks
  tabs.querySelectorAll('.faq-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.querySelectorAll('.faq-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (search) { search.value = ''; tabs.style.opacity = '1'; tabs.style.pointerEvents = 'auto'; if (countEl) countEl.textContent = ''; }
      renderCat(btn.dataset.cat);
    });
  });

  // Search
  if (search) {
    search.addEventListener('input', () => renderSearch(search.value));
  }

  // Initial render
  renderCat(currentCat);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initClientCalc();
  initNavHighlight();
  initApiCalc();
  initFaq();
});

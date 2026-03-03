// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Dynamic year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealEls.forEach((el) => observer.observe(el));

// i18n: EN (from DOM) + AR dictionary

const translations = {
  ar: {
    "skip.to.content": "تخطي إلى المحتوى",
    "nav.projects": "المشاريع",
    "nav.accounts": "الحسابات",
    "nav.it": "تقنية المعلومات",
    "nav.media": "الوسائط",
    "nav.about": "نبذة",
    "nav.contact": "التواصل",

    "btn.download.cv": "تحميل السيرة الذاتية",

    "hero.eyebrow": "تقنية معلومات · حسابات · توثيق",
    "hero.title": "مزيج من مسؤول وثائق، محاسب، ومشغّل نظم تقنية معلومات في شخص واحد.",
    "hero.subtitle": "إضافة قوية لسير العمل في شركتكم، أدمج بين تقنية المعلومات والحسابات وضبط الوثائق لضمان سير العمليات بسلاسة.",
    "hero.see.projects": "عرض المشاريع",
    "hero.get.in.touch": "تواصل معي",
    "hero.location": "مقيم في مكة المكرمة · متاح للعمل في تقنية المعلومات، الحسابات، الإدارة، وضبط الوثائق",
    "hero.role.title": "الملف التشغيلي",
    "hero.role.item1": "SAP Business One (المالية والموردون)",
    "hero.role.item2": "خوادم NAS، أنظمة NVR، الشبكات وأبواب الدخول",
    "hero.role.item3": "العقود، التوثيق، والتقارير",
    "hero.role.link": "تحميل السيرة الذاتية الكاملة (PDF)",

    "projects.title": "المشاريع الرئيسية",
    "projects.subtitle": "شركة الراجحي للبناء والتعمير · 2022 → حتى الآن",

    "projects.makkah.meta": "ديسمبر 2023 → حتى الآن · نظام تبريد الحريق بمكة",
    "projects.makkah.title": "مشروع نظام تبريد الحريق بمكة",
    "projects.makkah.para1": "عملت مساعداً لقسم الحسابات بالتعاون مع شركة كدانة وأكثر من 900 مقاول فرعي لتسليم المشروع في الوقت المحدد استعداداً لحج 2024. توليت إدارة السجلات المالية والتوثيق والتنسيق بما يضمن سرعة الوصول للمعلومات.",
    "projects.makkah.para2": "أدرت العقود والفواتير وسجلات الموظفين والرواتب. سجلت جميع المعاملات في نظام SAP Business One بالتنسيق مع المستودع (الفواتير، العهد، المعاملات البنكية) مع الإشراف على الخادم، نظام البصمة، وكاميرات المراقبة.",
    "projects.client.label": "الهيئة الملكية كدانة و مجموعة بن لادن",
    "projects.makkah.client.text": "عملت عن قرب مع شركة كدانة في عدة مشاريع مرتبطة بالحج وتوسعات مكة.",

    "projects.center3.meta": "أبريل 2022 → نوفمبر 2023 · مركز البيانات سنتر‑3، الدمام",
    "projects.center3.title": "مركز البيانات سنتر‑3، الدمام",
    "projects.center3.para1": "دعمت التوثيق وتقنية المعلومات والعمليات بالتنسيق مع شركات كبرى لضمان استقرار سير العمل وجودته. توليت مهام مسؤول الموقع الإداري، وسجلت جميع المعاملات في SAP (الفواتير والمعاملات البنكية).",
    "projects.center3.para2": "أدرت الوثائق والسجلات والتقارير، وتهيئة الشبكات لمكاتب الموقع والاستشاريين. أدرت كاميرات الموقع وقدمت فيديوهات شهرية وسنوية توضح تقدم العمل للعميل.",
    "projects.center3.para3": "حللت مشكلات الطابعات والواي فاي والخوادم، وأعددت طلبات الشراء الشهرية وطلبات الخرسانة اليومية، وعملت كمسؤول مستودع لإتمام التسليمات للعميل والمقاول الرئيسي.",
    "projects.center3.media.caption": "إدارة عمليات مركز البيانات وبنية تقنية المعلومات.",

    "projects.hq.meta": "يناير 2022 → مارس 2022 · المقر الرئيسي، الرياض",
    "projects.hq.title": "المقر الرئيسي – قسم العقود وتقنية المعلومات، الرياض",
    "projects.hq.para1": "عملت مساعداً لمدير العقود، ترجمت وراجعت وحللت عقود المشاريع وقدمت ملخصات واضحة بالنقاط الرئيسية والمزايا والمخاطر.",
    "projects.hq.para2": "قدمت تقارير العقود ووثائق المشاريع لاعتمادها من العملاء وحافظت على أرشيف منظم وسهل البحث.",
    "projects.hq.para3": "دعمت قسم تقنية المعلومات في تهيئة البريد الإلكتروني للشركة، وبرامج الحماية، والأجهزة لمواقع المشاريع، مع تثبيت البرمجيات والطابعات وحل مشكلات أنظمة التشغيل.",
    "projects.hq.para4": "قدمت الدعم اليومي لحوالي 900 موظف في الشركة والشركات التابعة في مشاكل الأجهزة والطابعات.",
    "projects.hq.media.caption": "دعم قسم العقود وتقنية المعلومات في المقر الرئيسي.",

    "accounts.title": "الحسابات والمالية",
    "accounts.subtitle": "SAP Business One · الموردون، المقاولون الفرعيون، العهد، وإقفال السنة.",
    "accounts.vendors.title": "الموردون",
    "accounts.vendors.text": "إدارة وتسجيل فواتير الموردين ومطابقة أوامر التسليم مع بيانات المستودع في SAP لضمان دقة النتائج وكشوف حساب واضحة.",
    "accounts.subcontractors.title": "المقاولون الفرعيون",
    "accounts.subcontractors.text": "تسجيل مستخلصات المقاولين الفرعيين ومخالفاتهم ومدفوعاتهم للحفاظ على كشوف حساب محدثة.",
    "accounts.bank.title": "المعاملات البنكية",
    "accounts.bank.text": "تسجيل المعاملات البنكية اليومية وتنفيذ التسويات الشهرية بين كشوف الحساب البنكي ونظام SAP.",
    "accounts.custody.title": "العهد / المصروفات النثرية",
    "accounts.custody.text": "فحص وتسجيل العهد والمصروفات النثرية للموظفين والمهندسين للحفاظ على رقابة قوية وإصدار كشوف واضحة لكل حساب.",
    "accounts.closing.title": "الإقفال السنوي",
    "accounts.closing.text": "مراجعة حسابات الموردين والمقاولين الفرعيين وتصحيح الأرصدة وإعداد تقارير التكلفة والربحية للمشاريع في نهاية السنة.",
    "warehouse.closing.title": "مراجعة وجرد المستودع",
    "warehouse.closing.text": "المساهمة في مراجعة و تدقيق المستودع، وآخر عمليات الاستلام ومشاكل المستودع، والجرد السنوي، ومراجعة عمليات التسليم الأخيرة الصادرة للمقاولين، والتحقق من كميات المستودع، والتحقق من شحنات الموردين وفواتيرهم مع الكميات المستلمة من المستودع.",
    "management.title": "الدعم الإداري",
    "management.badge": "إدارة",
    "management.employees.title": "الموظفون",
    "management.employees.text": "تسجيل وأرشفة تسويات الموظفين والجداول الزمنية وبصمة الحضور والمكافآت والسلف والمخالفات والخصومات، مع مراجعة الرواتب والإجازات السنوية والتذاكر.",
    "management.purchase.title": "تنسيق المشتريات",
    "management.purchase.text": "إعداد تقارير يومية وشهرية للمشتريات، تتبع المدفوعات والفواتير والتنسيق مع المستودع والمشتريات حول توريد المواد ووصولها.",
    "management.labor.title": "دعم العمالة",
    "management.labor.text": "متابعة سكن العمال والنقل، بما في ذلك اتفاقيات الحافلات، لضمان استقرار الإقامة والتنقل.",

    "it.title": "حلول تقنية المعلومات",
    "it.badge.backup": "نسخ احتياطي وفيديو",
    "it.badge.connectivity": "اتصال",
    "it.badge.mycloud": "NAS",
    "it.badge.synology": "NAS",
    "it.badge.accessdoor": "أبواب الدخول",
    "it.badge.attendance": "الحضور",
    "it.nvr.title": "نظام NVR",
    "it.nvr.text": "فحوصات يومية لأجهزة NVR واتصال الشبكة مع التحقق من سلامة البيانات وأخذ نسخ احتياطية شهرية على الخوادم وأقراص SSD.",
    "it.camera.title": "الكاميرات",
    "it.camera.text": "تهيئة الكاميرات للتسجيل والبث إلى أجهزة NVR لضمان تسجيل واسترجاع موثوق في الموقع والمكاتب.",
    "it.mycloud.text": "تهيئة وإدارة أجهزة WD MyCloud NAS لتوفير مشاركة ملفات منظمة بين فرق الموقع والعملاء.",
    "it.synology.text": "تهيئة وإدارة خوادم Synology DiskStation لفرع مكة لتبادل بيانات آمن ومنظم بين الأقسام والعملاء.",
    "it.accessdoor.title": "أنظمة أبواب الدخول",
    "it.accessdoor.text": "إدارة أنظمة أبواب الدخول والمستخدمين والصلاحيات وتكويد البطاقات لتأمين حركة الدخول والخروج.",
    "it.attendance.title": "نظام البصمة للحضور",
    "it.attendance.text": "إدارة أنظمة الحضور بما يشمل المستخدمين، الورديات، العمل الإضافي والتأخير، وإصدار تقارير كاملة وجداول زمنية للأقسام.",

    "design.title": "الوسائط والتصميم",
    "design.subtitle": "دعم بصري: بطاقات، شعارات، ملصقات، وتحرير فيديو.",
    "design.id.title": "بطاقات تعريف الموظفين",
    "design.id.text": "تصميم بطاقات الموظفين بما يتوافق مع هوية الشركة ومتطلبات التصميم.",
    "design.logo.title": "الشعارات",
    "design.logo.text": "تصميم وتحسين شعارات الشركات والمشاريع الناشئة حسب الهوية البصرية.",
    "design.video.title": "تحرير الفيديو",
    "design.video.text": "تحرير وتجميع الفيديوهات، قص ودمج وإضافة مؤثرات لعرض التقدم والرسائل بوضوح.",
    "design.posters.title": "الملصقات",
    "design.posters.text": "تصميم ملصقات ومواد دعائية للمناسبات والحملات التسويقية.",
    "design.businesscards.title": "بطاقات الأعمال",
    "design.businesscards.text": "تصميم بطاقات أعمال احترافية متوافقة مع هوية الشركة.",
    "design.quote": "الاستثمار في الموظف يعني <strong>التزاماً وموثوقية واستعداداً لدعم أدوار متعددة لحل مشكلات الشركة.</strong>",

    "skills.title": "المهارات والمؤهلات",
    "skills.it.kicker": "تقنية المعلومات",
    "skills.it.title": "حل المشكلات التقنية",
    "skills.it.text": "خبرة عملية في تقنية المعلومات لحل مشكلات الأجهزة والشبكات والأنظمة يومياً في المكاتب والمواقع.",
    "skills.doc.kicker": "ضبط الوثائق",
    "skills.doc.title": "سجلات منظمة",
    "skills.doc.text": "سجلات مستقرة وقابلة للبحث للعقود والمالية والعمليات تمنح الفريق سرعة ووضوحاً في اتخاذ القرار.",
    "skills.content.kicker": "المحتوى",
    "skills.content.title": "وضوح العرض",
    "skills.content.text": "تحرير ملفات PDF والتقارير والفيديوهات لتكون مناسبة للعرض على العملاء والطباعة.",
    "skills.quote": "لا مهمة كبيرة ولا مهمة صغيرة. <strong>يمكنكم الاعتماد علي.</strong>",

    "background.title": "نبذة",
    "background.para1": "أنا من السودان. درست هندسة البرمجيات في جامعة SEGi بماليزيا ضمن شراكة مع جامعة سنترال لانكشير في المملكة المتحدة.",
    "background.para2": "عملت في مجالات العقود وتقنية المعلومات والتوثيق والمالية والمستودعات، إضافة إلى دور مساعد إداري حسب احتياج المشروع. خدمت الراجحي للبناء والتعمير والراجحي للاتصالات منذ 2021 (دوام جزئي) و2022 (دوام كامل).",
    "background.uclan.title": "كلية العلوم الفيزيائية والحوسبة",
    "background.uclan.link": "جامعة سنترال لانكشير",
    "background.segi.title": "بكالوريوس هندسة البرمجيات",
    "background.segi.link": "جامعة SEGi",

    "contact.title": "التواصل",
    "contact.subtitle": "مقيم في مكة المكرمة، المملكة العربية السعودية. متاح للعمل في تقنية المعلومات والحسابات والإدارة وضبط الوثائق.",
    "contact.email.label": "البريد الإلكتروني",
    "contact.phone.label": "رقم الهاتف",
    "contact.linkedin.label": "لينكد إن"
  }
};

// Capture original EN text from DOM once
const translatableEls = document.querySelectorAll('[data-i18n]');
const enTexts = {};
translatableEls.forEach((el) => {
  const key = el.getAttribute('data-i18n');
  enTexts[key] = el.innerHTML;
});

const langButtons = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
  document.body.classList.toggle('lang-ar', lang === 'ar');
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const dict = lang === 'ar' ? translations.ar : enTexts;

  translatableEls.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict && dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang || 'en';
    setLanguage(lang);
  });
});

// Default language
setLanguage('en');

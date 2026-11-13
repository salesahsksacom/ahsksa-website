import { SITE, type Lang, type T } from "@/config/site";

const t = (ar: string, en: string): T => ({ ar, en });

/** Interface strings and the copy of the non-catalogue pages. Arabic first; the English meaning sits beside each line. */
export const UI = {
  skip: t("تخطَّ إلى المحتوى", "Skip to content"),
  nav: {
    services: t("الخدمات", "Services"),
    products: t("المنتجات", "Products"),
    testing: t("فحص المضخات", "Pump testing"),
    about: t("من نحن", "About"),
    contact: t("اتصل بنا", "Contact"),
    menu: t("القائمة", "Menu"),
  },
  call: t("اتصل الآن", "Call now"),
  close: t("إغلاق", "Close"),
  directions: t("الاتجاهات", "Directions"),
  // Times below must match SITE.open (07:30 to 18:30, Saturday to Thursday).
  status: {
    open: t("مفتوح الآن", "Open now"),
    closesAt: t("يغلق 6:30 م", "Closes 6:30 PM"),
    closed: t("مغلق الآن", "Closed now"),
    opensToday: t("يفتح اليوم 7:30 ص", "Opens today 7:30 AM"),
    opensTomorrow: t("يفتح غدًا 7:30 ص", "Opens tomorrow 7:30 AM"),
    opensOn: (day: T): T => t(`يفتح ${day.ar} 7:30 ص`, `Opens ${day.en} 7:30 AM`),
    days: [
      t("الأحد", "Sunday"), t("الاثنين", "Monday"), t("الثلاثاء", "Tuesday"), t("الأربعاء", "Wednesday"),
      t("الخميس", "Thursday"), t("الجمعة", "Friday"), t("السبت", "Saturday"),
    ],
  },
  whatsapp: t("واتساب", "WhatsApp"),
  quote: t("اطلب عرض سعر", "Request a quote"),
  langName: t("English", "العربية"),
  langLabel: t("Switch to English", "التبديل إلى العربية"),
  home: t("الرئيسية", "Home"),
  waGeneral: t("السلام عليكم، أرغب بعرض سعر.", "Hello, I would like a quote."),
  waFloat: t("تواصل عبر واتساب", "Chat on WhatsApp"),
  more: t("التفاصيل", "Details"),
  related: t("خدمات ومنتجات ذات صلة", "Related services and products"),
  signs: t("متى تحتاج إلى صيانة؟", "Signs it needs attention"),
  scope: t("ما نقدمه", "What we do"),
  scopeProduct: t("ما نوفّره", "What we supply"),
  specs: t("المواصفات حسب الكتالوج", "Specifications from our catalogue"),
  faq: t("أسئلة شائعة", "Frequently asked questions"),
  askQuote: t("اطلب عرض سعر لهذه الخدمة", "Ask for a quote on this service"),
  askQuoteProduct: t("اسأل عن هذا المنتج", "Ask about this product"),
  quoteNote: t("الأسعار تُعطى عند الطلب. أرسل صورًا وتفاصيل المعدة.", "Prices are given on request. Send photos and machine details."),
  breadcrumbHome: t("الرئيسية", "Home"),
  pickup: t("استلام وخدمة موقعية في جميع مدن المملكة", "Pickup and on-site service in all Saudi cities"),
  rights: t("جميع الحقوق محفوظة", "All rights reserved"),
  cr: t("السجل التجاري", "Commercial registration"),
  vat: t("الرقم الضريبي", "VAT number"),
  since: (y: number): T => t(`منذ ${y}`, `Since ${y}`),
  address: t("العنوان", "Address"),
  hoursLabel: t("ساعات العمل", "Working hours"),
  phoneLabel: t("الهاتف وواتساب", "Phone and WhatsApp"),
  emailLabel: t("البريد الإلكتروني", "Email"),
  openMap: t("افتح الموقع في خرائط جوجل", "Open in Google Maps"),
  supportAnytime: t("الدعم الفني متاح في أي وقت", "Technical support is available at any time"),
  form: {
    title: t("أرسل طلبك عبر واتساب", "Send your request on WhatsApp"),
    help: t("املأ الحقول القليلة التالية ثم اضغط الزر: يفتح واتساب ورسالتك جاهزة، وتستطيع إرفاق الصور هناك.", "Fill in the few fields, then tap the button: WhatsApp opens with your message ready, and you can attach photos there."),
    need: t("ما الذي تحتاجه؟", "What do you need?"),
    pick: t("اختر...", "Choose..."),
    other: t("أخرى", "Other"),
    city: t("المدينة", "City"),
    machine: t("المعدة أو الماكينة", "Equipment or machine"),
    details: t("تفاصيل العطل أو الطلب", "Fault or request details"),
    name: t("الاسم", "Name"),
    send: t("أرسل عبر واتساب", "Send on WhatsApp"),
    hi: t("السلام عليكم، أرغب بعرض سعر.", "Hello, I would like a quote."),
    testing: t("فحص المضخات على الجهاز", "Pump testing on the test rig"),
    kindService: t("خدمة", "Service"),
    kindProduct: t("منتج", "Product"),
    needError: t("اختر ما تحتاجه", "Choose what you need"),
    detailsError: t("اكتب سطرًا واحدًا على الأقل عن العطل أو الطلب", "Write at least one line about the fault or request"),
    optional: t("اختياري", "optional"),
    counter: t("حرف", "characters"),
    cityHint: t("اكتب اسم المدينة أو اخترها من القائمة", "Type your city or pick from the list"),
    sendHint: t("سيفتح واتساب برسالتك جاهزة. لن يُرسل شيء حتى تضغط إرسال هناك.", "WhatsApp opens with your message ready. Nothing is sent until you press send there."),
  },
  updated: t("آخر تحديث", "Last updated"),
  keyFacts: t("معلومات سريعة", "Key facts"),
  shortAnswer: t("باختصار", "In short"),
  area: t("منطقة الخدمة", "Service area"),
  workshop: t("الورشة", "Workshop"),
  quoteLabel: t("عرض السعر", "Quote"),
  quoteValue: t("عند الطلب: أرسل الصور والتفاصيل على واتساب", "On request: send photos and details on WhatsApp"),
  coverage: t("جميع مدن المملكة", "All Saudi cities"),
  type: t("النوع", "Type"),
  typeService: t("خدمة صيانة وتصنيع", "Repair and manufacturing service"),
  typeProduct: t("منتج للبيع", "Product for sale"),
  supportLabel: t("الدعم الفني", "Technical support"),
  supportValue: t("متاح في أي وقت", "Available at any time"),
  notFoundTitle: t("الصفحة غير موجودة", "Page not found"),
  notFoundText: t("الرابط الذي فتحته غير موجود. يمكنك العودة إلى الرئيسية أو التواصل معنا مباشرة.", "The link you opened does not exist. Go back to the home page or contact us directly."),
};

export const HOME = {
  metaTitle: t("صيانة وتصنيع هيدروليك في الرياض", "Hydraulic Repair & Manufacturing in Riyadh"),
  desc: t(
    "ورشة صيانة وتصنيع السلندرات والمضخات والصمامات ووحدات القدرة الهيدروليكية في الرياض، مع استلام وخدمة موقعية في كل مدن المملكة.",
    "Workshop for repair and manufacturing of hydraulic cylinders, pumps, valves and power packs in Riyadh, with pickup and on-site service in all Saudi cities.",
  ),
  eyebrow: t("ورشة هيدروليك في الرياض", "Hydraulic workshop in Riyadh"),
  whatTitle: t("ما هو مركز النظام المتطور للهيدروليك؟", "What is Advanced Hydraulics?"),
  what: t(
    "مركز النظام المتطور للهيدروليك ورشة هيدروليك في الصناعية القديمة بالرياض. نصلح ونصنّع السلندرات الهيدروليكية والمضخات والصمامات ووحدات القدرة، ونصلح الرافعات والشاحنات المزوّدة برافعة، ونفحص المضخات ونصدر تقرير الفحص. نستلم القطعة أو نحضر إلى المعدة في جميع مدن المملكة، والأسعار تُعطى عند الطلب.",
    "Advanced Hydraulics is a hydraulic workshop in the Old Industrial Area of Riyadh. We repair and manufacture hydraulic cylinders, pumps, valves and power packs, repair cranes and boom trucks, and test pumps with a written report. We collect parts or visit the machine in all Saudi cities, and prices are given on request.",
  ),
  areaTitle: t("نخدم جميع مدن المملكة", "We serve every city in the Kingdom"),
  areaText: t(
    "الورشة في الرياض، والاستلام والصيانة الموقعية متاحان في جميع مدن المملكة، ومنها المدن التالية.",
    "The workshop is in Riyadh. Pickup and on-site service cover every city in the Kingdom, including the cities below.",
  ),
  h1: t("صيانة وتصنيع الأنظمة الهيدروليكية في الرياض، وخدمة في كل مدن المملكة", "Hydraulic repair and manufacturing in Riyadh, with service across the Kingdom"),
  lead: t(
    "نصلح ونصنّع السلندرات والمضخات والصمامات ووحدات القدرة، ونصلح الرافعات والشاحنات المزوّدة برافعة. نستلم القطعة من موقعك أو نحضر إلى المعدة.",
    "We repair and manufacture cylinders, pumps, valves and power packs, and repair cranes and boom trucks. We collect the part from your site or come to the machine.",
  ),
  facts: [
    { t: t("استلام وخدمة موقعية", "Pickup and on-site service"), d: t("في جميع مدن المملكة", "In all Saudi cities") },
    { t: t("فحص المضخات", "Pump testing"), d: t("مع إصدار تقرير الفحص", "With a test report") },
    { t: t("عرض سعر عند الطلب", "Quote on request"), d: t("أرسل الصور والتفاصيل على واتساب", "Send photos and details on WhatsApp") },
    { t: t("دعم فني", "Technical support"), d: t("متاح في أي وقت", "Available at any time") },
  ],
  servicesTitle: t("خدمات الصيانة والتصنيع", "Repair and manufacturing services"),
  servicesLead: t("اختر المعدة أو القطعة لترى ما نقدمه لها.", "Pick the equipment or part to see what we do for it."),
  productsTitle: t("منتجات نوفّرها لعملاء الورشة والمحال", "Products we supply"),
  productsLead: t("نبيع للزبائن الذين يزورون الورشة أو يطلبون عبر الهاتف وواتساب.", "We sell to walk-in customers and to those who order by phone and WhatsApp."),
  testTitle: t("فحص المضخات الهيدروليكية مع تقرير الفحص", "Hydraulic pump testing with a test report"),
  testText: t(
    "لدينا تجهيزات لفحص جميع أنواع المضخات الهيدروليكية وإصدار تقرير الفحص، فتعرف حالة المضخة قبل أن تقرر الإصلاح أو الاستبدال.",
    "We have facilities to test all types of hydraulic pumps and issue a test report, so you know the pump's condition before deciding to repair or replace it.",
  ),
  stepsTitle: t("كيف نعمل معك", "How we work with you"),
  steps: [
    { t: t("تواصل معنا", "Get in touch"), d: t("اتصل أو أرسل صور القطعة والمعدة على واتساب.", "Call, or send photos of the part and the machine on WhatsApp.") },
    { t: t("عرض السعر", "Quote"), d: t("نراجع التفاصيل ونعطيك عرض سعر عند الطلب.", "We review the details and give you a quote on request.") },
    { t: t("استلام أو زيارة", "Pickup or visit"), d: t("نستلم القطعة من موقعك أو نحضر إلى المعدة.", "We collect the part from your site or come to the machine.") },
    { t: t("صيانة أو تصنيع", "Repair or manufacture"), d: t("نصلح القطعة أو نصنّع البديل في ورشتنا.", "We repair the part or manufacture the replacement in our workshop.") },
  ],
  faqTitle: t("أسئلة شائعة", "Frequently asked questions"),
  faq: [
    {
      q: t("هل تعملون خارج الرياض؟", "Do you work outside Riyadh?"),
      a: t("نعم، الاستلام والصيانة الموقعية متاحان في جميع مدن المملكة. اتصل بنا لتحديد الموعد.", "Yes. Pickup and on-site service are available in all cities of the Kingdom. Call us to arrange it."),
    },
    {
      q: t("كيف أحصل على السعر؟", "How do I get a price?"),
      a: t("الأسعار تُعطى عند الطلب. أرسل صور القطعة وتفاصيل المعدة على واتساب أو اتصل بنا.", "Prices are given on request. Send photos of the part and the machine details on WhatsApp, or call us."),
    },
    {
      q: t("ما أنواع المعدات التي تصلحونها؟", "What kinds of equipment do you repair?"),
      a: t("نصلح المعدات الهيدروليكية والهوائية الصناعية والمتنقلة، ومنها الشاحنات المزوّدة برافعة والرافعات ومنها رافعات أطلس.", "We repair industrial and mobile hydraulic and pneumatic equipment, including boom trucks and cranes, Atlas cranes among them."),
    },
    {
      q: t("هل تفحصون المضخات؟", "Do you test pumps?"),
      a: t("نعم، نفحص جميع أنواع المضخات الهيدروليكية ونصدر تقرير الفحص.", "Yes, we test all types of hydraulic pumps and issue a test report."),
    },
    {
      q: t("هل تصنّعون قطعًا جديدة؟", "Do you manufacture new parts?"),
      a: t("نصنّع السلندرات الهيدروليكية والهوائية القياسية بجميع أنواعها، ووحدات القدرة للتطبيقات الخاصة، ومضخات التروس، والأختام الخاصة.", "We manufacture all standard hydraulic and pneumatic cylinders, power packs for special applications, gear pumps and special seals."),
    },
    {
      q: t("ما ساعات العمل؟", "What are your working hours?"),
      a: t("من السبت إلى الخميس من 7:30 صباحًا إلى 6:30 مساءً، والجمعة إجازة. الدعم الفني متاح في أي وقت.", "Saturday to Thursday, 7:30 AM to 6:30 PM, closed Friday. Technical support is available at any time."),
    },
  ],
};

export const TESTING = {
  metaTitle: t("فحص المضخات الهيدروليكية وتقرير الفحص", "Hydraulic Pump Testing & Test Report, Riyadh"),
  desc: t(
    "نفحص جميع أنواع المضخات الهيدروليكية في ورشتنا بالرياض ونصدر تقرير الفحص. استلام وخدمة موقعية في جميع مدن المملكة.",
    "We test all types of hydraulic pumps in our Riyadh workshop and issue a test report. Pickup and on-site service in all Saudi cities.",
  ),
  h1: t("فحص المضخات الهيدروليكية وإصدار تقرير الفحص في الرياض", "Hydraulic pump testing and test reports in Riyadh"),
  lead: t(
    "فحص المضخة يخبرك بحالتها الفعلية قبل أن تدفع ثمن إصلاح أو استبدال قد لا يكون لازمًا. لدينا تجهيزات لفحص جميع أنواع المضخات الهيدروليكية وإصدار تقرير الفحص.",
    "Testing a pump tells you its actual condition before you pay for a repair or replacement that may not be needed. We have facilities to test all types of hydraulic pumps and issue a test report.",
  ),
  why: [
    t("تعرف هل المضخة سليمة أم تحتاج إصلاحًا قبل قرار الشراء أو الاستبدال", "Know whether the pump is sound or needs repair before deciding to buy or replace"),
    t("تقرير مكتوب يوثّق نتيجة الفحص", "A written report documenting the test result"),
    t("يناسب المضخات الصناعية ومضخات المعدات المتنقلة", "Suitable for industrial pumps and pumps from mobile equipment"),
  ],
  faq: [
    {
      q: t("هل تفحصون مضخة اشتريتها من جهة أخرى؟", "Do you test a pump I bought elsewhere?"),
      a: t("نعم، نفحص جميع أنواع المضخات الهيدروليكية. أرسل صورة المضخة على واتساب لنحدد الموعد.", "Yes, we test all types of hydraulic pumps. Send a photo of the pump on WhatsApp and we will arrange a time."),
    },
    {
      q: t("ماذا يتضمن التقرير؟", "What does the report contain?"),
      a: t("هو تقرير يوثّق نتيجة الفحص. نؤكد لك تفاصيله عند الطلب.", "It is a report documenting the test result. We confirm the details when you ask."),
    },
    {
      q: t("هل تفحصون المضخة في موقعي؟", "Do you test the pump at my site?"),
      a: t("الفحص يتم في ورشتنا، ونستلم المضخة من موقعك في جميع مدن المملكة.", "Testing is done in our workshop, and we collect the pump from your site in all Saudi cities."),
    },
  ],
};

export const ABOUT = {
  metaTitle: t("من نحن: مركز النظام المتطور للهيدروليك", "About Advanced Hydraulics, Riyadh"),
  desc: t(
    "ورشة هيدروليك في الصناعية القديمة بالرياض: صيانة وتصنيع السلندرات والمضخات والصمامات ووحدات القدرة، وتوريد قطع هيدروليكية.",
    "A hydraulic workshop in the Old Industrial Area of Riyadh: repair and manufacturing of cylinders, pumps, valves and power packs, plus hydraulic supplies.",
  ),
  h1: t("من نحن", "About us"),
  lead: t(
    "مركز النظام المتطور للهيدروليك ورشة في الصناعية القديمة بالرياض، تجمع الصيانة والتصنيع وتوريد القطع الهيدروليكية والهوائية في مكان واحد.",
    "Advanced Hydraulics is a workshop in the Old Industrial Area of Riyadh, bringing repair, manufacturing and the supply of hydraulic and pneumatic parts under one roof.",
  ),
  blocks: [
    {
      t: t("ما نقوم به", "What we do"),
      p: t(
        "نصلح السلندرات والمضخات والصمامات الهيدروليكية، ونصنّع السلندرات الهيدروليكية والهوائية ووحدات القدرة ومضخات التروس والأختام الخاصة، ونصلح الرافعات والشاحنات المزوّدة برافعة.",
        "We repair hydraulic cylinders, pumps and valves, and we manufacture hydraulic and pneumatic cylinders, power packs, gear pumps and special seals. We also repair cranes and boom trucks.",
      ),
    },
    {
      t: t("الفحص والدعم", "Testing and support"),
      p: t(
        "نفحص جميع أنواع المضخات الهيدروليكية ونصدر تقرير الفحص، والدعم الفني متاح في أي وقت.",
        "We test all types of hydraulic pumps and issue a test report, and technical support is available at any time.",
      ),
    },
    {
      t: t("في جميع مدن المملكة", "Across the Kingdom"),
      p: t(
        "الاستلام والصيانة الموقعية متاحان في جميع مدن المملكة، وفي الرياض يمكنك زيارة الورشة مباشرة.",
        "Pickup and on-site service are available in all cities of the Kingdom, and in Riyadh you can visit the workshop directly.",
      ),
    },
    {
      t: t("للزبائن الذين يشترون فقط", "For customers who only want to buy"),
      p: t(
        "نبيع الليات والأختام والماسورة المصقولة وأعمدة الكروم ووحدات PTO ومقاييس الضغط والمنتجات الهوائية للزبائن الذين يزورون الورشة أو يطلبون عبر الهاتف وواتساب.",
        "We sell hoses, seals, honed tube, chrome rods, PTO units, pressure gauges and pneumatic products to walk-in customers and to those who order by phone and WhatsApp.",
      ),
    },
  ],
  sisterTitle: t("قطع غيار مضخات الخرسانة والخلاطات", "Spare parts for concrete pumps and mixers"),
  sisterText: t(
    "إن كنت تبحث عن قطع غيار مضخات الخرسانة والخلاطات ومحطات الخلط، فراجع موقع مؤسسة بيت المنتج للتجارة في الرياض.",
    "If you are looking for spare parts for concrete pumps, mixers and batching plants, see the website of Product House Trading Est. in Riyadh.",
  ),
  sisterLink: t("موقع مؤسسة بيت المنتج للتجارة", "Product House Trading Est. website"),
};

export const CONTACT = {
  metaTitle: t("اتصل بنا: ورشة هيدروليك في الرياض", "Contact Advanced Hydraulics, Riyadh"),
  desc: t(
    "اتصل أو راسلنا عبر واتساب على 0591355137، أو زر ورشتنا في الصناعية القديمة بالرياض. السبت إلى الخميس من 7:30 ص إلى 6:30 م.",
    "Call or message us on WhatsApp at 059 135 5137, or visit our workshop in the Old Industrial Area of Riyadh. Saturday to Thursday, 7:30 AM to 6:30 PM.",
  ),
  h1: t("اتصل بنا", "Contact us"),
  lead: t(
    "أسرع طريقة للحصول على عرض سعر هي إرسال صور القطعة وتفاصيل المعدة على واتساب.",
    "The fastest way to get a quote is to send photos of the part and the machine details on WhatsApp.",
  ),
};

export const pick = <K extends string>(o: Record<K, T>, k: K, lang: Lang) => o[k][lang];
export const tx = (x: T, lang: Lang) => x[lang];
export const SINCE = SITE.since;

// Site-wide FAQ page: the single source of truth for every general, cross-cutting question.
// Every field is bilingual: { ar, en }. Written from general hydraulic practice plus the business
// facts already published on the home, about and pump-testing pages. Nothing here states a price,
// a delivery time, a warranty, a statistic or a brand partnership beyond what those pages already say.

import type { T } from "@/config/site";
import type { Faq } from "@/content/entries";

export type FaqCategory = { id: string; label: T };
export type FaqEntry = Faq & { id: string; category: string };

const t = (ar: string, en: string): T => ({ ar, en });

export const FAQ_CATEGORIES: FaqCategory[] = [
  { id: "pricing", label: t("الأسعار والتواصل", "Pricing & getting in touch") },
  { id: "service-area", label: t("منطقة الخدمة والاستلام", "Service area & pickup") },
  { id: "pumps", label: t("المضخات الهيدروليكية", "Hydraulic pumps") },
  { id: "cylinders", label: t("السلندرات الهيدروليكية", "Hydraulic cylinders") },
  { id: "seals", label: t("الأختام والحلقات (السيلات)", "Seals & O-rings") },
  { id: "hoses", label: t("الخراطيم الهيدروليكية", "Hydraulic hoses") },
  { id: "oil", label: t("الزيت الهيدروليكي", "Hydraulic oil & fluid") },
  { id: "power-packs", label: t("وحدات القدرة والهوائيات", "Power packs & pneumatics") },
  { id: "equipment", label: t("الرافعات والمعدات الثقيلة", "Cranes & heavy equipment") },
  { id: "manufacturing", label: t("التصنيع وقطع الغيار", "Manufacturing & parts") },
  { id: "general", label: t("عام والدعم الفني", "General & support") },
];

export const FAQS: FaqEntry[] = [
  /* ---------------------------------------------------------- pricing */
  {
    id: "how-to-get-a-price",
    category: "pricing",
    q: t("كيف أحصل على السعر؟", "How do I get a price?"),
    a: t(
      "الأسعار تُعطى عند الطلب. أرسل صور القطعة وتفاصيل المعدة على واتساب أو اتصل بنا.",
      "Prices are given on request. Send photos of the part and the machine details on WhatsApp, or call us.",
    ),
  },
  {
    id: "what-to-send-for-a-quote",
    category: "pricing",
    q: t("ما المعلومات التي أرسلها للحصول على سعر دقيق؟", "What should I send to get an accurate quote?"),
    a: t(
      "صور واضحة للقطعة من عدة زوايا، ولوحة البيانات إن وُجدت، ووصف للعطل (تسريب، ضعف ضغط، صوت، حرارة). كلما كانت التفاصيل أوضح كان السعر أدق.",
      "Clear photos of the part from several angles, its nameplate if it has one, and a description of the fault (leak, low pressure, noise, heat). Clearer details give a more accurate price.",
    ),
  },
  {
    id: "price-before-visiting",
    category: "pricing",
    q: t("هل يمكن معرفة السعر قبل زيارة الورشة؟", "Can I get a price before visiting the workshop?"),
    a: t(
      "نعم، أرسل صور القطعة والتفاصيل على واتساب ونعطيك السعر، ثم نتفق على الاستلام أو الزيارة.",
      "Yes. Send photos of the part and the details on WhatsApp and we will give you a price, then arrange pickup or a visit.",
    ),
  },

  /* ---------------------------------------------------- service area */
  {
    id: "work-outside-riyadh",
    category: "service-area",
    q: t("هل تعملون خارج الرياض؟", "Do you work outside Riyadh?"),
    a: t(
      "نعم، الاستلام والصيانة الموقعية متاحان في جميع مدن المملكة. اتصل بنا لتحديد الموعد.",
      "Yes. Pickup and on-site service are available in all cities of the Kingdom. Call us to arrange it.",
    ),
  },
  {
    id: "how-pickup-works",
    category: "service-area",
    q: t("كيف يعمل الاستلام إذا كنت في مدينة أخرى؟", "How does pickup work if I'm in another city?"),
    a: t(
      "نستلم القطعة من موقعك في أي مدينة بالمملكة، تصلح في ورشتنا بالرياض، ثم تُعاد إليك. اتفق معنا على الموعد عبر واتساب أو الهاتف.",
      "We collect the part from your site anywhere in the Kingdom, repair it in our Riyadh workshop, then return it to you. Arrange the timing with us on WhatsApp or by phone.",
    ),
  },
  {
    id: "visit-site-for-mounted-equipment",
    category: "service-area",
    q: t("هل تحضرون إلى موقعي لمعدة لا يمكن نقلها؟", "Do you come to my site for equipment that can't be moved?"),
    a: t(
      "نعم، للمعدات المركّبة كالرافعات والشاحنات المزوّدة برافعة نحضر إلى المعدة نفسها بدلًا من فك القطعة ونقلها.",
      "Yes. For mounted equipment such as cranes and boom trucks, we come to the machine itself instead of removing the part and transporting it.",
    ),
  },
  {
    id: "workshop-location",
    category: "service-area",
    q: t("أين تقع الورشة؟", "Where is the workshop located?"),
    a: t(
      "الورشة في الصناعية القديمة بالرياض. الاستلام والخدمة الموقعية متاحان في بقية مدن المملكة دون الحاجة لزيارة الورشة.",
      "The workshop is in the Old Industrial Area of Riyadh. Pickup and on-site service cover the rest of the Kingdom without needing a visit to the workshop.",
    ),
  },

  /* --------------------------------------------------------- pumps */
  {
    id: "do-you-test-pumps",
    category: "pumps",
    q: t("هل تفحصون المضخات؟", "Do you test pumps?"),
    a: t(
      "نعم، نفحص جميع أنواع المضخات الهيدروليكية ونصدر تقرير الفحص.",
      "Yes, we test all types of hydraulic pumps and issue a test report.",
    ),
  },
  {
    id: "what-is-a-hydraulic-pump",
    category: "pumps",
    q: t("ما هي المضخة الهيدروليكية؟", "What is a hydraulic pump?"),
    a: t(
      "المضخة الهيدروليكية تحوّل الحركة الميكانيكية من المحرك أو الموتور إلى تدفق زيت مضغوط، وهذا الزيت هو الذي يحرّك السلندرات والموتورات الهيدروليكية في المعدة.",
      "A hydraulic pump converts mechanical motion from an engine or electric motor into a flow of pressurised oil, and that oil is what drives the cylinders and hydraulic motors on the machine.",
    ),
  },
  {
    id: "how-to-tell-pump-is-weak",
    category: "pumps",
    q: t("كيف أعرف أن المضخة ضعيفة؟", "How can I tell if a pump is weak?"),
    a: t(
      "علاماتها: حركة بطيئة للسلندرات أو الموتور تحت الحمل، ضعف واضح في الضغط، صوت أعلى من المعتاد، أو حرارة زيت مرتفعة. فحص المضخة على جهاز الاختبار يؤكد السبب بدقة.",
      "Signs include actuators moving slowly under load, a clear drop in pressure, louder-than-normal noise, or high oil temperature. Testing the pump on a test rig confirms the exact cause.",
    ),
  },
  {
    id: "why-pump-wont-build-pressure",
    category: "pumps",
    q: t("لماذا لا تبني المضخة ضغطًا كافيًا؟", "Why won't a pump build enough pressure?"),
    a: t(
      "الأسباب الشائعة: تآكل داخلي في المضخة يسمح بتسرّب الزيت بدل دفعه، صمام تحكم بالضغط مضبوط خطأ أو تالف، تسريب خارجي في النظام، أو مستوى زيت منخفض في الخزان. الفحص يحدد أيّها السبب.",
      "Common causes: internal wear in the pump that lets oil bypass instead of being pushed forward, a pressure-control valve set wrong or failed, an external leak in the system, or a low oil level in the tank. Testing identifies which one applies.",
    ),
  },
  {
    id: "repair-or-replace-pump",
    category: "pumps",
    q: t("هل يمكن إصلاح المضخة أم يجب استبدالها؟", "Can a pump be repaired, or does it need replacing?"),
    a: t(
      "يعتمد على حالة الأجزاء الداخلية بعد الفك والفحص. كثير من المضخات الصناعية والمتنقلة يمكن إصلاحها بتغيير الأجزاء المتآكلة، وأحيانًا يكون الاستبدال أوفر حسب حالة الجسم الخارجي ومدى توفر القطع.",
      "It depends on the condition of the internal parts once the pump is stripped and inspected. Many industrial and mobile pumps can be repaired by replacing the worn parts; sometimes replacement is more economical depending on the housing's condition and parts availability.",
    ),
  },
  {
    id: "what-is-a-hydraulic-motor",
    category: "pumps",
    q: t("ما هو الموتور الهيدروليكي وما الفرق بينه وبين المضخة؟", "What is a hydraulic motor, and how is it different from a pump?"),
    a: t(
      "الموتور الهيدروليكي يعمل بعكس اتجاه المضخة: يستقبل الزيت المضغوط ويحوّله إلى حركة دورانية تدير جزءًا في المعدة، بينما المضخة تحوّل الحركة الميكانيكية إلى ضغط زيت في البداية.",
      "A hydraulic motor works in the opposite direction from a pump: it receives pressurised oil and converts it into rotary motion that drives a part on the machine, while a pump converts mechanical motion into oil pressure in the first place.",
    ),
  },

  /* ------------------------------------------------------ cylinders */
  {
    id: "what-is-a-hydraulic-cylinder",
    category: "cylinders",
    q: t("ما هو السلندر الهيدروليكي وكيف يعمل؟", "What is a hydraulic cylinder and how does it work?"),
    a: t(
      "السلندر الهيدروليكي يحوّل ضغط الزيت إلى حركة مستقيمة: يدخل الزيت المضغوط أحد جانبي المكبس فيدفعه، فيتحرك العمود ويولّد قوة دفع أو سحب حسب اتجاه دخول الزيت.",
      "A hydraulic cylinder converts oil pressure into straight-line motion: pressurised oil enters one side of the piston and pushes it, moving the rod to produce a pushing or pulling force depending on which side the oil enters.",
    ),
  },
  {
    id: "double-acting-cylinder",
    category: "cylinders",
    q: t("ما هو السلندر ثنائي الفعل؟", "What is a double-acting hydraulic cylinder?"),
    a: t(
      "هو سلندر يُدخل فيه الزيت المضغوط من الجانبين بالتبادل، فيدفع العمود للخارج ويسحبه للداخل هيدروليكيًا في الاتجاهين، على عكس السلندر أحادي الفعل الذي يعتمد على وزن الحمل أو نابض للعودة.",
      "It is a cylinder where pressurised oil is fed alternately to both sides of the piston, so the rod is pushed out and pulled back hydraulically in both directions, unlike a single-acting cylinder which relies on the load's weight or a spring to retract.",
    ),
  },
  {
    id: "telescopic-cylinder-rebuild",
    category: "cylinders",
    q: t("ما السلندر التلسكوبي، وهل يمكن إعادة تصنيعه؟", "What is a telescopic cylinder, and can it be rebuilt?"),
    a: t(
      "السلندر التلسكوبي مكوّن من عدة مراحل أنابيب متداخلة تمتد الواحدة من الأخرى، فيعطي شوطًا طويلًا بطول مطوي قصير، وهو شائع في شاحنات القلاب. يمكن فكه ومراجعة كل مرحلة وأختامها وتغيير التالف منها.",
      "A telescopic cylinder has several nested tube stages that extend one from another, giving a long stroke with a short collapsed length, and it is common on tipper trucks. It can be stripped down, each stage and its seals checked, and the damaged ones replaced.",
    ),
  },
  {
    id: "why-strip-a-cylinder",
    category: "cylinders",
    q: t("لماذا يلزم فك السلندر عند التسريب؟", "Why does a leaking cylinder need to be stripped down?"),
    a: t(
      "لأن سبب التسريب قد يكون ختم العمود أو ختم المكبس أو خدشًا في الماسورة أو العمود، ولا يمكن معرفة أيّها دون الفك والفحص. تغيير الأختام دون فحص قد يكرر نفس العطل سريعًا.",
      "Because the cause of a leak could be the rod seal, the piston seal, or scoring on the tube or rod, and there is no way to know which one without stripping it down and inspecting it. Changing the seals without an inspection can let the same fault recur quickly.",
    ),
  },
  {
    id: "sync-two-cylinders",
    category: "cylinders",
    q: t("هل يمكن مزامنة حركة سلندرين معًا؟", "Can two hydraulic cylinders be synchronised to move together?"),
    a: t(
      "نعم، تتم المزامنة عادة بصمام مقسّم للتدفق أو بتوصيل السلندرات على التوالي بحيث يدفع خروج أحدهما دخول الآخر، وهذا شائع في أنظمة الرفع ثنائية السلندر.",
      "Yes, synchronisation is usually done with a flow divider valve or by connecting the cylinders in series so that one cylinder's output feeds the other's inlet, which is common in two-cylinder lifting systems.",
    ),
  },
  {
    id: "what-is-a-boom-cylinder",
    category: "cylinders",
    q: t("ما هو سلندر البوم في الرافعات؟", "What is a boom cylinder on a crane?"),
    a: t(
      "سلندر البوم هو السلندر الذي يرفع ذراع الرافعة (البوم) ويخفضها، ويتحمل حملًا جانبيًا وانحناءً أكبر من سلندرات الرفع المستقيم، لذا يتآكل عموده وأختامه بشكل مختلف ويحتاج فحصًا دقيقًا عند التسريب.",
      "The boom cylinder is the cylinder that raises and lowers the crane's boom arm. It carries more side load and bending than a straight lifting cylinder, so its rod and seals wear differently and need careful inspection when it leaks.",
    ),
  },

  /* ---------------------------------------------------------- seals */
  {
    id: "what-is-a-hydraulic-seal",
    category: "seals",
    q: t("ما وظيفة الختم (السيل) الهيدروليكي؟", "What does a hydraulic seal do?"),
    a: t(
      "يمنع تسرّب الزيت المضغوط بين الأجزاء المتحركة والثابتة داخل السلندر أو المضخة، مثل بين المكبس وجدار الأسطوانة أو حول العمود عند خروجه. تآكله هو السبب الأكثر شيوعًا لتسرّب الزيت من السلندر.",
      "It stops pressurised oil from leaking between the moving and fixed parts inside a cylinder or pump, such as between the piston and the bore wall or around the rod where it exits. A worn seal is the most common cause of oil leaking from a cylinder.",
    ),
  },
  {
    id: "signs-seal-needs-replacing",
    category: "seals",
    q: t("ما علامات الحاجة لتغيير أختام السلندر؟", "What are the signs a cylinder's seals need replacing?"),
    a: t(
      "تسرّب زيت حول العمود أو من توصيلات السلندر، حركة أبطأ أو أضعف من المعتاد تحت الحمل، أو عدم قدرة السلندر على الثبات في وضعه تحت حمل ثابت فينزلق تدريجيًا.",
      "Oil leaking around the rod or from the cylinder's ports, motion that is slower or weaker than normal under load, or the cylinder failing to hold its position under a steady load, drifting gradually instead.",
    ),
  },
  {
    id: "seal-kit-vs-single-seal",
    category: "seals",
    q: t("هل يُستبدل الختم وحده أم طقم الأختام كاملًا؟", "Is a single seal replaced on its own, or the whole seal kit?"),
    a: t(
      "عادة يُستبدل طقم الأختام كاملًا عند فتح السلندر، لأن بقية الأختام تكون قد تآكلت بقدر مقارب، وتفكيك السلندر مرة ثانية قريبًا لتغيير ختم آخر غير مجدٍ.",
      "Usually the whole seal kit is replaced once a cylinder is opened up, because the other seals have typically worn to a similar degree, and stripping the cylinder again soon after to replace one more seal isn't worthwhile.",
    ),
  },

  /* ---------------------------------------------------------- hoses */
  {
    id: "what-is-a-hydraulic-hose",
    category: "hoses",
    q: t("ما هو الخرطوم الهيدروليكي ولماذا يتلف؟", "What is a hydraulic hose, and why does it fail?"),
    a: t(
      "هو أنبوب مرن مصنوع من طبقات مطاط وأسلاك تسليح، ينقل الزيت المضغوط بين أجزاء النظام المتحركة. يتلف بالتقادم وتشقق الطبقة الخارجية، أو بالاحتكاك والانحناء الحاد، أو بضغط أعلى من تصنيفه.",
      "It is a flexible tube made of rubber layers reinforced with wire or fibre braid, carrying pressurised oil between the moving parts of a system. It fails from age and outer-layer cracking, from rubbing or a sharp bend radius, or from pressure above its rating.",
    ),
  },
  {
    id: "how-to-pick-hose-size",
    category: "hoses",
    q: t("كيف أعرف المقاس والنوع المناسب للخرطوم؟", "How do I know the right hose size and type?"),
    a: t(
      "يُحدَّد المقاس بقطر الوصلة ومعدل التدفق المطلوب، ويُحدَّد النوع بضغط العمل الأقصى للنظام. الطريقة الأضمن هي إحضار الخرطوم التالف أو صورة واضحة لوصلتيه حتى نطابقه.",
      "Size is set by the fitting diameter and the required flow rate, and the type is set by the system's maximum working pressure. The safest way is to bring the failed hose, or a clear photo of its two fittings, so we can match it.",
    ),
  },
  {
    id: "what-is-hose-crimping",
    category: "hoses",
    q: t("ما معنى كبس الخرطوم الهيدروليكي؟", "What does crimping a hydraulic hose mean?"),
    a: t(
      "الكبس هو تثبيت الوصلة المعدنية على طرف الخرطوم بآلة كبس تضغطها حول طبقات التسليح بإحكام محدد، فتصمد أمام الضغط دون أن تنفصل أو تسرّب.",
      "Crimping is fitting the metal end onto the hose with a crimping machine that compresses it around the reinforcement layers to a set tightness, so it withstands pressure without coming loose or leaking.",
    ),
  },
  {
    id: "when-to-replace-hoses",
    category: "hoses",
    q: t("متى يجب استبدال الخرطوم حتى لو بدا سليمًا؟", "When should a hose be replaced even if it looks fine?"),
    a: t(
      "عند ظهور تشقق أو انتفاخ أو تغيّر لون في الطبقة الخارجية، أو بعد سنوات طويلة من الخدمة في بيئة حارة أو معرّضة للاحتكاك، حتى لو لم يظهر تسريب بعد؛ المطاط يتعب من الداخل قبل أن يظهر ذلك من الخارج.",
      "When the outer layer shows cracking, bulging or a colour change, or after many years of service in a hot or abrasive environment, even with no visible leak yet; the rubber fatigues from the inside before it shows on the outside.",
    ),
  },
  {
    id: "hose-pressure-ratings",
    category: "hoses",
    q: t("ما الفرق بين تصنيفات الخراطيم مثل R1 وR2؟", "What's the difference between hose ratings like R1 and R2?"),
    a: t(
      "الرقم يشير إلى عدد طبقات التسليح السلكي وبالتالي ضغط العمل الأقصى الذي يتحمله الخرطوم. R2 بطبقتين من السلك يتحمل ضغطًا أعلى من R1 بطبقة واحدة بنفس المقاس تقريبًا، لذا يجب اختيار التصنيف المناسب لضغط النظام لا المقاس فقط.",
      "The number refers to how many wire-braid reinforcement layers the hose has, and so its maximum working pressure. An R2 hose, with two wire layers, holds a higher pressure than an R1 with one layer at roughly the same size, so the rating must match the system's pressure, not just the diameter.",
    ),
  },
  {
    id: "what-are-hydraulic-fittings",
    category: "hoses",
    q: t("ما هي وصلات الهيدروليك وما أنواعها؟", "What are hydraulic fittings, and what types are there?"),
    a: t(
      "هي القطع المعدنية التي تربط الخرطوم بالمضخة أو السلندر أو الصمام، وتُصنع بمقاسات وأشكال ربط مختلفة مثل BSP وJIC وORFS؛ استخدام شكل الربط الخاطئ سبب شائع لتسرّب الزيت من التوصيلة لا من الخرطوم نفسه.",
      "These are the metal end pieces that connect a hose to a pump, cylinder or valve, made in different sizes and thread or connection types such as BSP, JIC and ORFS; using the wrong connection type is a common cause of oil leaking from the fitting rather than the hose itself.",
    ),
  },

  /* ------------------------------------------------------------- oil */
  {
    id: "why-hydraulic-oil-overheats",
    category: "oil",
    q: t("لماذا يسخن الزيت الهيدروليكي وكيف يُخفَّض؟", "Why does hydraulic oil overheat, and how can it be reduced?"),
    a: t(
      "أسبابه الشائعة: مستوى زيت منخفض، مبرّد مسدود أو ضعيف، مضخة متآكلة تحوّل جزءًا من الطاقة إلى حرارة، أو تحميل النظام فوق طاقته باستمرار. الحل يبدأ بفحص المستوى والمبرّد قبل الشك في المضخة نفسها.",
      "Common causes: a low oil level, a clogged or undersized cooler, a worn pump turning some of the energy into heat, or continually loading the system beyond its capacity. Fixing it starts with checking the level and the cooler before suspecting the pump itself.",
    ),
  },
  {
    id: "mixing-oil-viscosity-grades",
    category: "oil",
    q: t("هل يمكن خلط زيوت بلزوجة مختلفة مثل ISO 46 وISO 68؟", "Can hydraulic oils with different viscosity grades, like ISO 46 and 68, be mixed?"),
    a: t(
      "لا يُنصح به. كل نظام مصمّم على لزوجة معيّنة تناسب حرارة تشغيله ومسافات الأجزاء الداخلية في المضخة؛ خلط لزوجتين يغيّر الأداء المتوقع وقد يسرّع تآكل المضخة أو يرفع حرارة التشغيل.",
      "It is not recommended. Each system is designed around a specific viscosity that suits its operating temperature and the internal clearances inside the pump; mixing two viscosities changes the expected performance and can speed up pump wear or raise the operating temperature.",
    ),
  },
  {
    id: "how-to-check-system-oil",
    category: "oil",
    q: t("كيف أفحص زيت النظام الهيدروليكي؟", "How do I check the oil in a hydraulic system?"),
    a: t(
      "تحقق من مستوى الزيت في الخزان، ولونه (الزيت الداكن جدًا أو الحليبي علامة تلوث)، ورائحته (رائحة احتراق تشير لحرارة زائدة)، ومن وجود رغوة أو جسيمات معدنية تدل على تآكل داخلي.",
      "Check the oil level in the tank, its colour (very dark or milky oil signals contamination), its smell (a burnt smell points to overheating), and whether there is foam or metal particles, which indicate internal wear.",
    ),
  },
  {
    id: "oil-quality-and-seal-life",
    category: "oil",
    q: t("هل يؤثر نوع الزيت على عمر المضخة والأختام؟", "Does the type of oil affect pump and seal life?"),
    a: t(
      "نعم، زيت غير مناسب للزوجة النظام أو متسخ أو ملوّث بالماء يسرّع تآكل أختام المضخة والسلندر وأجزائهما الداخلية، ويقصّر عمرها بشكل ملحوظ حتى لو كانت القطع نفسها سليمة التصنيع.",
      "Yes. Oil with the wrong viscosity for the system, or oil that is dirty or contaminated with water, speeds up wear on pump and cylinder seals and their internal parts, noticeably shortening their life even when the parts themselves were made correctly.",
    ),
  },
  {
    id: "hydraulic-oil-leak-causes",
    category: "oil",
    q: t("ما أكثر أسباب تسرّب الزيت الهيدروليكي شيوعًا؟", "What are the most common causes of a hydraulic oil leak?"),
    a: t(
      "أختام متآكلة في السلندر أو المضخة، خرطوم أو توصيلة تالفة، مشبك أو صمولة ربط غير محكمة، أو شق في جسم المكوّن نفسه بعد عمر طويل أو ضربة. تحديد نقطة التسرّب بدقة هو الخطوة الأولى قبل الإصلاح.",
      "Worn seals in a cylinder or pump, a damaged hose or fitting, a loose clamp or connection nut, or a crack in the component's own body after long service or an impact. Pinpointing exactly where the leak is coming from is the first step before any repair.",
    ),
  },
  {
    id: "what-does-a-hydraulic-filter-do",
    category: "oil",
    q: t("ما وظيفة فلتر الزيت الهيدروليكي ومتى يُستبدل؟", "What does a hydraulic oil filter do, and when should it be replaced?"),
    a: t(
      "يحبس الجسيمات المعدنية والأوساخ التي تتولّد داخل النظام أو تدخله، وهي السبب الرئيسي لتآكل المضخة والصمامات من الداخل. يُستبدل حسب جدول ساعات التشغيل أو عند تغيير الزيت، ويُفحص أقرب من ذلك إذا كان الزيت متسخًا بشكل ملحوظ.",
      "It traps the metal particles and dirt that form inside the system or enter it, which is the main cause of internal wear in pumps and valves. It is replaced on a running-hours schedule or whenever the oil is changed, and checked sooner if the oil looks noticeably dirty.",
    ),
  },

  /* ------------------------------------------------------ power packs */
  {
    id: "what-is-a-power-pack",
    category: "power-packs",
    q: t("ما هي وحدة القدرة الهيدروليكية وكيف تعمل؟", "What is a hydraulic power pack and how does it work?"),
    a: t(
      "وحدة القدرة تجمع الموتور أو المحرك والمضخة والخزان والصمامات في مجموعة واحدة، تولّد الزيت المضغوط الذي يشغّل السلندرات والموتورات الهيدروليكية الموصولة بها.",
      "A power pack combines the motor or engine, the pump, the tank and the valves into one unit, generating the pressurised oil that drives the hydraulic cylinders and motors connected to it.",
    ),
  },
  {
    id: "valve-arrangement-in-power-pack",
    category: "power-packs",
    q: t("كيف تُركَّب الصمامات داخل وحدة القدرة؟", "How are the valves arranged inside a power pack?"),
    a: t(
      "تُركَّب عادة بالتسلسل بين المضخة والمخرج: صمام تحكم بالضغط لحماية النظام، ثم صمام تحكم اتجاهي يوجّه الزيت للسلندر أو الموتور، وأحيانًا صمام تحكم بالتدفق لضبط سرعة الحركة.",
      "They are usually arranged in sequence between the pump and the outlet: a pressure-control valve to protect the system, then a directional-control valve to route the oil to the cylinder or motor, and sometimes a flow-control valve to set the speed of motion.",
    ),
  },
  {
    id: "what-is-a-hydraulic-control-valve",
    category: "power-packs",
    q: t("ما هو صمام التحكم الهيدروليكي؟", "What is a hydraulic control valve?"),
    a: t(
      "هو الجزء الذي يوجّه الزيت المضغوط أو يضبط كمّه أو ضغطه: صمام اتجاهي يحدد إلى أي سلندر أو موتور يذهب الزيت، صمام تحكم بالضغط يحمي النظام من تجاوز الحد الأقصى، وصمام تحكم بالتدفق يضبط سرعة الحركة.",
      "It is the part that routes pressurised oil or controls its amount or pressure: a directional valve decides which cylinder or motor the oil goes to, a pressure-control valve protects the system from exceeding its limit, and a flow-control valve sets the speed of motion.",
    ),
  },
  {
    id: "hydraulic-vs-pneumatic-cylinder",
    category: "power-packs",
    q: t("ما الفرق بين السلندر الهيدروليكي والهوائي؟", "What is the difference between a hydraulic and a pneumatic cylinder?"),
    a: t(
      "الهيدروليكي يعمل بزيت مضغوط فيعطي قوة أعلى بكثير وحركة أكثر ثباتًا تحت الحمل، بينما الهوائي يعمل بهواء مضغوط فيعطي حركة أسرع وأخف لكن بقوة أقل وثبات أقل تحت الأحمال المتغيرة.",
      "A hydraulic cylinder runs on pressurised oil, giving much higher force and steadier motion under load, while a pneumatic cylinder runs on compressed air, giving faster, lighter motion but less force and less stability under varying loads.",
    ),
  },
  {
    id: "custom-power-pack",
    category: "power-packs",
    q: t("هل يمكن تصنيع وحدة قدرة مخصصة لتطبيق معيّن؟", "Can a power pack be custom-built for a specific application?"),
    a: t(
      "نعم، نصنّع وحدات قدرة للتطبيقات الخاصة بحسب الضغط والتدفق والمساحة المطلوبة للتركيب.",
      "Yes, we manufacture power packs for special applications, sized to the pressure, flow and installation space the application needs.",
    ),
  },

  /* ---------------------------------------------------------- equipment */
  {
    id: "what-equipment-you-repair",
    category: "equipment",
    q: t("ما أنواع المعدات التي تصلحونها؟", "What kinds of equipment do you repair?"),
    a: t(
      "نصلح المعدات الهيدروليكية والهوائية الصناعية والمتنقلة، ومنها الشاحنات المزوّدة برافعة والرافعات ومنها رافعات أطلس.",
      "We repair industrial and mobile hydraulic and pneumatic equipment, including boom trucks and cranes, Atlas cranes among them.",
    ),
  },
  {
    id: "crane-and-boom-truck-hydraulics",
    category: "equipment",
    q: t("هل تصلحون هيدروليك الرافعات والشاحنات المزوّدة برافعة؟", "Do you repair the hydraulics on cranes and boom trucks?"),
    a: t(
      "نعم، نصلح سلندرات ومضخات وصمامات هيدروليك الرافعات والشاحنات المزوّدة برافعة، ونحضر إلى موقع المعدة عند الحاجة.",
      "Yes, we repair the cylinders, pumps and valves in the hydraulics of cranes and boom trucks, and we come to the machine's site when needed.",
    ),
  },
  {
    id: "tipper-truck-tipping-systems",
    category: "equipment",
    q: t("هل تصلحون نظام الرفع (Wet Kit) في شاحنات القلاب؟", "Do you repair the lifting (wet kit) system on tipper trucks?"),
    a: t(
      "نعم، نظام الرفع الهيدروليكي المركّب على شاحنات القلاب من ضمن المعدات المتنقلة التي نصلحها، بما في ذلك السلندر التلسكوبي والمضخة المرتبطة به.",
      "Yes, the hydraulic lifting system fitted on tipper trucks is among the mobile equipment we repair, including the telescopic cylinder and the pump connected to it.",
    ),
  },
  {
    id: "atlas-cranes",
    category: "equipment",
    q: t("هل تصلحون رافعات أطلس تحديدًا؟", "Do you repair Atlas cranes specifically?"),
    a: t(
      "نعم، رافعات أطلس من ضمن الرافعات التي نصلح هيدروليكها.",
      "Yes, Atlas cranes are among the cranes whose hydraulics we repair.",
    ),
  },
  {
    id: "excavator-hydraulic-system",
    category: "equipment",
    q: t("كيف يعمل النظام الهيدروليكي في الحفار؟", "How does the hydraulic system in an excavator work?"),
    a: t(
      "محرك الحفار يدير مضخة أو أكثر تولّد زيتًا مضغوطًا، يوزَّع عبر صمامات اتجاهية إلى سلندرات الذراع والمرفق والدلو وموتورات الدوران والجنزير، فتتحرك جميعها بتناسق حسب تحكم المشغّل.",
      "The excavator's engine drives one or more pumps that generate pressurised oil, which is routed through directional valves to the boom, arm and bucket cylinders and to the slew and track motors, so they all move in coordination as the operator controls them.",
    ),
  },
  {
    id: "loader-hydraulic-circuit",
    category: "equipment",
    q: t("هل تصلحون دائرة الهيدروليك في اللودر؟", "Do you repair the hydraulic circuit on a loader?"),
    a: t(
      "نعم، سلندرات الرفع والإمالة ومضخاتها وصماماتها في معدات اللودر من ضمن المعدات المتنقلة التي نصلح هيدروليكها.",
      "Yes, the lift and tilt cylinders, pumps and valves on loader equipment are among the mobile equipment whose hydraulics we repair.",
    ),
  },
  {
    id: "forklift-hydraulics",
    category: "equipment",
    q: t("هل تصلحون هيدروليك الرافعات الشوكية؟", "Do you repair forklift hydraulics?"),
    a: t(
      "نعم، سلندرات الرفع والإمالة ومضخاتها في الرافعات الشوكية من ضمن المعدات المتنقلة التي نصلح هيدروليكها.",
      "Yes, the lift and tilt cylinders and their pumps on forklifts are among the mobile equipment whose hydraulics we repair.",
    ),
  },

  /* ------------------------------------------------------ manufacturing */
  {
    id: "do-you-manufacture-parts",
    category: "manufacturing",
    q: t("هل تصنّعون قطعًا جديدة؟", "Do you manufacture new parts?"),
    a: t(
      "نصنّع السلندرات الهيدروليكية والهوائية القياسية بجميع أنواعها، ووحدات القدرة للتطبيقات الخاصة، ومضخات التروس، والأختام الخاصة.",
      "We manufacture all standard hydraulic and pneumatic cylinders, power packs for special applications, gear pumps and special seals.",
    ),
  },
  {
    id: "custom-cylinder-dimensions",
    category: "manufacturing",
    q: t("هل يمكن تصنيع سلندر بأبعاد مخصصة بدل إصلاح القديم؟", "Can you manufacture a cylinder to custom dimensions instead of repairing the old one?"),
    a: t(
      "نعم، نصنّع سلندرات هيدروليكية وهوائية قياسية بالأبعاد المطلوبة، وهذا خيار بديل للإصلاح عندما يكون جسم السلندر القديم تالفًا بدرجة لا تستحق الإصلاح.",
      "Yes, we manufacture standard hydraulic and pneumatic cylinders to the dimensions needed, which is an alternative to repair when the old cylinder's body is damaged beyond what is worth repairing.",
    ),
  },
  {
    id: "gear-pumps-and-seals-in-house",
    category: "manufacturing",
    q: t("هل تصنّعون مضخات التروس والأختام الخاصة داخل الورشة؟", "Do you manufacture gear pumps and special seals in-house?"),
    a: t(
      "نعم، من ضمن ما نصنّعه في الورشة مضخات التروس والأختام الخاصة التي لا تتوفر كقطعة قياسية جاهزة.",
      "Yes, gear pumps and special seals that are not available as a ready standard part are among what we manufacture in the workshop.",
    ),
  },
  {
    id: "repair-vs-manufacture-new",
    category: "manufacturing",
    q: t("متى يكون الإصلاح أفضل من التصنيع من جديد؟", "When is repair better than manufacturing a new part?"),
    a: t(
      "عندما يكون جسم القطعة الأساسي (الماسورة أو جسم المضخة) سليمًا ويحتاج فقط لتغيير الأختام أو الأجزاء المتآكلة. أما إذا كان الجسم نفسه تالفًا أو مخدوشًا بعمق، فالتصنيع الجديد يكون الخيار الأنسب. الفحص بعد الفك يحدد ذلك.",
      "When the part's main body (the tube or pump housing) is sound and only the seals or worn internal parts need changing. If the body itself is damaged or deeply scored, manufacturing a new one is the more suitable option. Inspection after stripping it down determines which applies.",
    ),
  },

  /* --------------------------------------------------------- general */
  {
    id: "working-hours",
    category: "general",
    q: t("ما ساعات العمل؟", "What are your working hours?"),
    a: t(
      "من السبت إلى الخميس من 7:30 صباحًا إلى 6:30 مساءً، والجمعة إجازة. الدعم الفني متاح في أي وقت.",
      "Saturday to Thursday, 7:30 AM to 6:30 PM, closed Friday. Technical support is available at any time.",
    ),
  },
  {
    id: "support-outside-hours",
    category: "general",
    q: t("كيف أتواصل مع الدعم الفني خارج أوقات الدوام؟", "How do I reach technical support outside working hours?"),
    a: t(
      "الدعم الفني متاح في أي وقت عبر واتساب أو الاتصال، حتى خارج ساعات العمل الرسمية للورشة.",
      "Technical support is available at any time on WhatsApp or by phone, even outside the workshop's official working hours.",
    ),
  },
  {
    id: "written-test-report",
    category: "general",
    q: t("هل أحصل على تقرير فحص مكتوب؟", "Do I get a written test report?"),
    a: t(
      "نعم، عند فحص المضخة نصدر تقرير فحص مكتوب يوثّق نتيجة الفحص، تستطيع مشاركته مع عميلك أو مديرك.",
      "Yes. When we test a pump we issue a written test report documenting the result, which you can share with your client or manager.",
    ),
  },
  {
    id: "can-everything-be-arranged-remotely",
    category: "general",
    q: t("هل يمكن إتمام كل شيء عن بُعد دون زيارة؟", "Can everything be arranged remotely, without a visit?"),
    a: t(
      "غالبًا نعم: السعر وتفاصيل العطل تُرسل عبر واتساب، واستلام القطعة أو زيارة المعدة تُنسَّق بالهاتف. لا حاجة لزيارة الورشة لبدء الطلب.",
      "Usually yes: the price and fault details are sent over WhatsApp, and collecting the part or visiting the machine is arranged by phone. There is no need to visit the workshop to start a request.",
    ),
  },
];

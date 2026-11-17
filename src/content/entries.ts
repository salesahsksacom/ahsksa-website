// Service and product pages. Every field is bilingual: { ar, en }.
// Facts come only from the client's catalogue, business card and WhatsApp message (Oct-Nov 2026).
// Nothing here states a price, a delivery time, a brand partnership, a certification or a warranty.

import { SITE, type T } from "@/config/site";

export type Faq = { q: T; a: T };
export type Entry = {
  slug: string;
  kind: "service" | "product";
  icon: string;
  image?: string; // /img/<slug>.webp, optional product/service photo
  imageAlt?: T;
  title: T; // short name, used in cards, nav and breadcrumbs
  card: T; // one line under the title in cards
  metaTitle: T; // before " | brand"
  desc: T; // meta description, 100-160 characters
  h1: T;
  lead: T;
  signs?: T[]; // signs the part needs attention
  scope: T[]; // what we do / what we supply
  specs?: T[]; // catalogue specifications
  faq: Faq[];
  related: string[];
};

const t = (ar: string, en: string): T => ({ ar, en });

const SERVICES: Entry[] = [
  {
    slug: "hydraulic-cylinder",
    kind: "service",
    icon: "cylinder",
    image: "/img/hydraulic-cylinder.webp",
    imageAlt: t("سلندرات هيدروليكية مصنّعة", "Manufactured hydraulic cylinders"),
    title: t("السلندرات الهيدروليكية", "Hydraulic cylinders"),
    card: t("صيانة وتصنيع السلندرات الهيدروليكية القياسية", "Repair and manufacturing of standard hydraulic cylinders"),
    metaTitle: t("صيانة سلندر هيدروليك في الرياض", "Hydraulic Cylinder Repair, Riyadh"),
    desc: t(
      "نصلح ونصنّع السلندرات الهيدروليكية في الرياض، مع استلام وخدمة موقعية في جميع مدن المملكة. اطلب عرض سعر عبر واتساب.",
      "We repair and manufacture hydraulic cylinders in Riyadh, with pickup and on-site service in all Saudi cities. Ask for a quote on WhatsApp.",
    ),
    h1: t("صيانة وتصنيع السلندرات الهيدروليكية في الرياض", "Hydraulic cylinder repair and manufacturing in Riyadh"),
    lead: t(
      "نفكّ السلندر ونفحص الماسورة والعمود والمكبس والأختام، ثم نصلحه أو نصنّع بديلًا له. نصنّع السلندرات الهيدروليكية القياسية بجميع أنواعها، ونستلم السلندر من موقعك أو نأتي إلى المعدة في أي مدينة بالمملكة.",
      "We strip the cylinder and inspect the tube, rod, piston and seals, then repair it or manufacture a replacement. We manufacture all standard types of hydraulic cylinders, and we collect the cylinder from your site or come to the machine in any city in the Kingdom.",
    ),
    signs: [
      t("تسريب زيت من جهة العمود أو الغطاء", "Oil leaking at the rod gland or cap"),
      t("هبوط السلندر تحت الحمل وهو ساكن", "The cylinder drifts down under load while holding"),
      t("حركة بطيئة أو متقطعة", "Slow or jerky movement"),
      t("خدوش أو انحناء أو تآكل في العمود المطلي بالكروم", "Scoring, bending or wear on the chrome-plated rod"),
    ],
    scope: [
      t("فك السلندر وفحص الماسورة والعمود والمكبس (توضيب كامل عند الحاجة)", "Stripping the cylinder and inspecting tube, rod and piston (a full overhaul when needed)"),
      t("تغيير الأختام: جاهزة أو مصنّعة حسب المقاس", "Seal replacement, with ready-made seals or seals made to size"),
      t("توريد أعمدة مطلية بالكروم الصلب وماسورة مصقولة (Honed tube) عند الحاجة", "Supply of hard-chrome rods and honed tube when needed"),
      t("تصنيع السلندرات الهيدروليكية القياسية بجميع أنواعها", "Manufacturing of all standard types of hydraulic cylinders"),
      t("استلام من موقعك أو صيانة موقعية في جميع مدن المملكة", "Pickup from your site, or on-site service, in all Saudi cities"),
    ],
    faq: [
      {
        q: t("هل يمكن تصنيع سلندر جديد إذا تعذّر إصلاح القديم؟", "Can you manufacture a new cylinder if the old one cannot be repaired?"),
        a: t(
          "نعم، نصنّع السلندرات الهيدروليكية القياسية بجميع أنواعها. أرسل صورة السلندر ومقاساته على واتساب وسنوضح لك الخيارات.",
          "Yes, we manufacture all standard types of hydraulic cylinders. Send a photo of the cylinder and its dimensions on WhatsApp and we will outline the options.",
        ),
      },
      {
        q: t("كيف أعرف تكلفة إصلاح السلندر؟", "How do I find out what a cylinder repair costs?"),
        a: t(
          "الأسعار تُعطى عند الطلب بعد معرفة نوع السلندر وحالته. أرسل صورًا وتفاصيل المعدة على واتساب لنعطيك عرض سعر.",
          "Prices are given on request once we know the cylinder type and its condition. Send photos and machine details on WhatsApp and we will quote.",
        ),
      },
      {
        q: t("هل تستلمون السلندر من مدينة غير الرياض؟", "Do you collect cylinders from cities other than Riyadh?"),
        a: t(
          "نعم، الاستلام والصيانة الموقعية متاحان في جميع مدن المملكة. اتصل بنا لتحديد الموعد.",
          "Yes. Pickup and on-site service are available in all cities of the Kingdom. Call us to arrange it.",
        ),
      },
    ],
    related: ["pneumatic-cylinder", "hydraulic-seals", "honed-tubes-chrome-rods"],
  },
  {
    slug: "hydraulic-pump",
    kind: "service",
    icon: "pump",
    image: "/img/hydraulic-pump.webp",
    imageAlt: t("مضخة هيدروليكية مكبسية", "Hydraulic piston pump"),
    title: t("المضخات الهيدروليكية", "Hydraulic pumps"),
    card: t("صيانة جميع أنواع المضخات (الطرمبات) مع تقرير الفحص", "Repair of all pump types, with a test report"),
    metaTitle: t("صيانة مضخة هيدروليك (طرمبة) في الرياض", "Hydraulic Pump Repair & Testing, Riyadh"),
    desc: t(
      "صيانة جميع أنواع المضخات الهيدروليكية (الطرمبات) وفحصها وإصدار تقرير الفحص، مع استلام وخدمة موقعية في جميع مدن المملكة.",
      "Repair of all hydraulic pump types, with testing and a test report. Pickup and on-site service in all Saudi cities. Quote on request.",
    ),
    h1: t("صيانة المضخات الهيدروليكية (الطرمبات) وفحصها في الرياض", "Hydraulic pump repair and testing in Riyadh"),
    lead: t(
      "نصلح جميع أنواع المضخات الهيدروليكية للمعدات الصناعية والمعدات الثقيلة والمتنقلة. ولدينا تجهيزات لفحص جميع أنواع المضخات الهيدروليكية وإصدار تقرير الفحص، حتى تعرف حالة المضخة بدل التخمين.",
      "We repair all types of hydraulic pumps for industrial, heavy and mobile equipment. We also have facilities to test all types of hydraulic pumps and issue a test report, so you know the pump's condition instead of guessing.",
    ),
    signs: [
      t("ضعف الضغط أو بطء حركة المعدة", "Low pressure or slow movement of the machine"),
      t("صوت غير طبيعي أثناء التشغيل", "Abnormal noise while running"),
      t("ارتفاع حرارة الزيت", "Oil running hot"),
      t("وجود برادة معدنية في الزيت أو الفلتر", "Metal particles in the oil or filter"),
    ],
    scope: [
      t("صيانة المضخات الهيدروليكية بجميع أنواعها", "Repair of hydraulic pumps of all types"),
      t("فحص المضخة وإصدار تقرير الفحص", "Pump testing with a test report"),
      t("توريد مضخات للاستخدام الصناعي والمتنقل: مضخات تروس ومكبسية وريشية ومضخات نقل الحركة للخلاطات", "Supply of pumps for industrial and mobile use: gear, piston and vane pumps and transmission pumps for mixers"),
      t("استلام من موقعك أو فحص موقعي في جميع مدن المملكة", "Pickup from your site, or on-site checks, in all Saudi cities"),
    ],
    faq: [
      {
        q: t("ما هو تقرير الفحص؟", "What is the test report?"),
        a: t(
          "هو تقرير يوثّق نتيجة فحص المضخة في ورشتنا. تفاصيل الفحص وما يتضمنه التقرير نؤكدها لك عند الطلب.",
          "It is a report documenting the result of testing the pump in our workshop. We confirm the details of the test and what the report contains when you ask.",
        ),
      },
      {
        q: t("هل تصلحون مضخات الخلاطات والمعدات المتنقلة؟", "Do you repair pumps from mixers and mobile equipment?"),
        a: t(
          "نعم، نتعامل مع المضخات الصناعية ومضخات المعدات المتنقلة. أرسل صورة لوحة المضخة أو رقمها على واتساب.",
          "Yes, we handle industrial pumps and pumps from mobile equipment. Send a photo of the pump nameplate or its number on WhatsApp.",
        ),
      },
      {
        q: t("هل أحتاج إلى فك المضخة قبل إحضارها؟", "Do I need to remove the pump before bringing it?"),
        a: t(
          "يمكننا الاستلام من موقعك أو الحضور إلى المعدة. اتصل بنا لنحدد الأنسب لحالتك.",
          "We can collect it from your site or come to the machine. Call us and we will decide what suits your case.",
        ),
      },
    ],
    related: ["pump-testing", "gear-pump", "control-valve"],
  },
  {
    slug: "control-valve",
    kind: "service",
    icon: "valve",
    image: "/img/control-valve.webp",
    imageAlt: t("صمام تحكم اتجاه كهربائي هيدروليكي", "Hydraulic solenoid directional control valve"),
    title: t("صمامات التحكم والموزعات", "Control valves and distributors"),
    card: t("صيانة صمامات التحكم والموزعات الهيدروليكية", "Repair of hydraulic control valves and distributors"),
    metaTitle: t("صيانة صمامات التحكم الهيدروليكية", "Hydraulic Control Valve Repair, Riyadh"),
    desc: t(
      "صيانة صمامات التحكم والموزعات الهيدروليكية في الرياض، مع توريد الصمامات، واستلام وخدمة موقعية في جميع مدن المملكة.",
      "Repair of hydraulic control valves and distributors in Riyadh, plus valve supply. Pickup and on-site service in all Saudi cities.",
    ),
    h1: t("صيانة صمامات التحكم والموزعات الهيدروليكية في الرياض", "Hydraulic control valve and distributor repair in Riyadh"),
    lead: t(
      "الصمام هو الذي يوجّه الزيت إلى السلندر أو المحرك، وعندما يتعطل تتحرك المعدة ببطء أو بشكل غير منتظم. نصلح الصمامات والموزعات الهيدروليكية ونوفّرها عند الحاجة.",
      "The valve directs oil to the cylinder or motor, and when it fails the machine moves slowly or erratically. We repair hydraulic valves and distributors and supply them when needed.",
    ),
    signs: [
      t("تسرّب داخلي وعدم القدرة على حمل الضغط", "Internal leakage and inability to hold pressure"),
      t("التصاق الذراع أو الحركة غير المنتظمة", "A sticking spool or erratic movement"),
      t("عدم استجابة الملف الكهربائي (في الصمامات الكهربائية)", "No response from the coil on solenoid valves"),
      t("تسريب زيت من جسم الصمام", "Oil leaking from the valve body"),
    ],
    scope: [
      t("صيانة الصمامات والموزعات الهيدروليكية", "Repair of hydraulic valves and distributors"),
      t("توريد موزعات التحكم بالاتجاه بأقسام وسعات مختلفة، من 40 إلى 120 لترًا", "Supply of directional control valves with different sections and flows, from 40 to 120 liters"),
      t("صمامات كهربائية بتكوينات وجهود ملفات مختلفة", "Solenoid valves with different configurations and coil voltages"),
      t("صمامات التحكم بالتدفق وضبط الضغط وصمامات التفريغ", "Flow control, pressure setting and relief valves"),
    ],
    faq: [
      {
        q: t("هل توفّرون الصمامات أم تصلحونها فقط؟", "Do you supply valves or only repair them?"),
        a: t(
          "نفعل الأمرين: نصلح الصمامات القائمة، ونوفّر موزعات وصمامات تحكم جديدة. أرسل موديل الصمام أو صورته على واتساب.",
          "Both: we repair existing valves and supply new distributors and control valves. Send the valve model or a photo on WhatsApp.",
        ),
      },
      {
        q: t("هل تتعاملون مع الصمامات الكهربائية؟", "Do you handle solenoid valves?"),
        a: t(
          "نعم، نوفّر الصمامات الكهربائية بتكوينات وجهود ملفات مختلفة. اذكر جهد الملف المطلوب عند الطلب.",
          "Yes, we supply solenoid valves with different configurations and coil voltages. State the coil voltage you need when you ask.",
        ),
      },
      {
        q: t("هل تعملون خارج الرياض؟", "Do you work outside Riyadh?"),
        a: t(
          "نعم، الاستلام والصيانة الموقعية متاحان في جميع مدن المملكة.",
          "Yes. Pickup and on-site service are available in all cities of the Kingdom.",
        ),
      },
    ],
    related: ["hydraulic-pump", "power-pack", "boom-truck"],
  },
  {
    slug: "power-pack",
    kind: "service",
    icon: "powerpack",
    image: "/img/power-pack.webp",
    imageAlt: t("وحدة باور باك هيدروليكية", "Hydraulic power pack unit"),
    title: t("وحدات القدرة الهيدروليكية", "Hydraulic power packs"),
    card: t("تصنيع وصيانة وحدات القدرة (باور باك) للتطبيقات الخاصة", "Manufacturing and repair of power packs for special applications"),
    metaTitle: t("تصنيع وصيانة باور باك هيدروليك", "Hydraulic Power Pack Manufacturing, Riyadh"),
    desc: t(
      "نصنّع ونصلح وحدات القدرة الهيدروليكية (باور باك) للتطبيقات الخاصة في الرياض، مع استلام وخدمة موقعية في جميع مدن المملكة.",
      "We manufacture and repair hydraulic power packs for special applications in Riyadh, with pickup and on-site service in all Saudi cities.",
    ),
    h1: t("تصنيع وصيانة وحدات القدرة الهيدروليكية (باور باك) في الرياض", "Hydraulic power pack manufacturing and repair in Riyadh"),
    lead: t(
      "وحدة القدرة الهيدروليكية هي مصدر الضغط الذي يشغّل السلندرات والمحركات. نصنّع وحدات القدرة للتطبيقات الخاصة حسب حاجتك، ونصلح الوحدات القائمة ونعالج أعطالها.",
      "A hydraulic power pack is the source of pressure that drives cylinders and motors. We manufacture power packs for special applications to your need, and repair and troubleshoot existing units.",
    ),
    signs: [
      t("ضعف الضغط أو انخفاض أداء المعدة", "Low pressure or reduced machine performance"),
      t("ارتفاع حرارة الزيت", "Oil overheating"),
      t("ضجيج غير معتاد من الوحدة", "Unusual noise from the unit"),
      t("تسريب زيت من الوصلات أو الخزان", "Oil leaks at fittings or the tank"),
    ],
    scope: [
      t("تصنيع وحدات القدرة للتطبيقات الخاصة", "Manufacturing of power packs for special applications"),
      t("صيانة وحدات القدرة الصناعية واستكشاف الأعطال", "Maintenance and troubleshooting of industrial power packs"),
      t("توريد المضخات والصمامات والليات والمقاييس المتصلة بالوحدة", "Supply of the pumps, valves, hoses and gauges that go with the unit"),
      t("استلام من موقعك أو صيانة موقعية في جميع مدن المملكة", "Pickup from your site, or on-site service, in all Saudi cities"),
    ],
    faq: [
      {
        q: t("ماذا أرسل لتصنيع وحدة قدرة؟", "What should I send to have a power pack made?"),
        a: t(
          "صف لنا التطبيق: ما الذي ستشغّله الوحدة، وصورًا أو مخططًا إن وُجد. نراجع التفاصيل معك ثم نعطيك عرض سعر.",
          "Describe the application: what the unit will drive, and photos or a drawing if you have them. We review the details with you and then quote.",
        ),
      },
      {
        q: t("هل تصلحون وحدات قدرة صنعتها جهات أخرى؟", "Do you repair power packs built by other companies?"),
        a: t(
          "نعم، نصلح المعدات الهيدروليكية الصناعية ونستكشف أعطالها. أرسل صورة الوحدة وما تعانيه على واتساب.",
          "Yes, we repair industrial hydraulic equipment and troubleshoot faults. Send a photo of the unit and the problem on WhatsApp.",
        ),
      },
      {
        q: t("هل السعر ثابت؟", "Is there a fixed price?"),
        a: t(
          "لا، السعر يُعطى عند الطلب حسب المواصفات. اطلب عرض سعر عبر واتساب أو الاتصال.",
          "No, the price is given on request based on the specification. Ask for a quote on WhatsApp or by phone.",
        ),
      },
    ],
    related: ["hydraulic-pump", "control-valve", "hydraulic-hoses"],
  },
  {
    slug: "pneumatic-cylinder",
    kind: "service",
    icon: "pneumatic",
    image: "/img/pneumatic-cylinder.webp",
    imageAlt: t("سلندر هوائي", "Pneumatic cylinder"),
    title: t("السلندرات الهوائية", "Pneumatic cylinders"),
    card: t("صيانة وتصنيع السلندرات الهوائية (نيوماتيك)", "Repair and manufacturing of pneumatic cylinders"),
    metaTitle: t("صيانة وتصنيع سلندر هوائي في الرياض", "Pneumatic Cylinder Repair, Riyadh"),
    desc: t(
      "صيانة وتصنيع السلندرات الهوائية (نيوماتيك) في الرياض، مع توريد ملحقات الهواء المضغوط، واستلام وخدمة موقعية في كل المدن.",
      "Repair and manufacturing of pneumatic cylinders in Riyadh, plus compressed-air accessories. Pickup and on-site service in all cities.",
    ),
    h1: t("صيانة وتصنيع السلندرات الهوائية (نيوماتيك) في الرياض", "Pneumatic cylinder repair and manufacturing in Riyadh"),
    lead: t(
      "نصلح السلندرات الهوائية ونصنّع السلندرات الهوائية القياسية بجميع أنواعها، ونوفّر وحدات تجهيز الهواء (FRL) وملحقات الهواء المضغوط.",
      "We repair pneumatic cylinders and manufacture all standard types of pneumatic cylinders. We also supply FRL air-preparation units and compressed-air accessories.",
    ),
    signs: [
      t("تسرّب هواء من العمود أو الغطاء", "Air leaking at the rod or end cap"),
      t("بطء الشوط أو ضعف القوة", "Slow stroke or weak force"),
      t("تآكل الأختام أو خدوش في الماسورة", "Worn seals or scoring in the tube"),
    ],
    scope: [
      t("صيانة السلندرات الهوائية وتغيير الأختام", "Repair of pneumatic cylinders and seal replacement"),
      t("تصنيع السلندرات الهوائية القياسية بجميع أنواعها", "Manufacturing of all standard types of pneumatic cylinders"),
      t("توريد وحدات FRL والسلندرات الهوائية وجميع الملحقات", "Supply of FRL units, pneumatic cylinders and all accessories"),
    ],
    faq: [
      {
        q: t("ما هي وحدة FRL؟", "What is an FRL unit?"),
        a: t(
          "وحدة تجهيز الهواء: فلتر ومنظّم ضغط وموزّع زيت، تحمي الأجهزة الهوائية وتضبط الهواء الداخل إليها.",
          "An air-preparation unit: filter, regulator and lubricator. It protects pneumatic equipment and conditions the air going into it.",
        ),
      },
      {
        q: t("هل تصنّعون سلندرًا هوائيًا بمقاس محدد؟", "Can you make a pneumatic cylinder to a specific size?"),
        a: t(
          "نصنّع السلندرات الهوائية القياسية بجميع أنواعها. أرسل المقاسات على واتساب لنؤكد لك.",
          "We manufacture all standard types of pneumatic cylinders. Send the dimensions on WhatsApp and we will confirm.",
        ),
      },
      {
        q: t("هل تقدمون خدمة موقعية؟", "Do you offer on-site service?"),
        a: t(
          "نعم، في جميع مدن المملكة إضافة إلى الاستلام من موقعك.",
          "Yes, in all cities of the Kingdom, as well as pickup from your site.",
        ),
      },
    ],
    related: ["hydraulic-cylinder", "pneumatic-products", "hydraulic-seals"],
  },
  {
    slug: "gear-pump",
    kind: "service",
    icon: "gear",
    image: "/img/gear-pump.webp",
    imageAlt: t("مضخة هيدروليكية تروس", "Hydraulic gear pump"),
    title: t("مضخات التروس (الجير)", "Gear pumps"),
    card: t("تصنيع وتوريد مضخات التروس الهيدروليكية", "Manufacturing and supply of hydraulic gear pumps"),
    metaTitle: t("تصنيع مضخات تروس (جير) هيدروليك", "Hydraulic Gear Pump Manufacturing, Riyadh"),
    desc: t(
      "تصنيع وتوريد مضخات التروس (الجير) الهيدروليكية للاستخدام الصناعي والمتنقل في الرياض، واستلام وخدمة موقعية في كل مدن المملكة.",
      "Manufacturing and supply of hydraulic gear pumps for industrial and mobile use in Riyadh. Pickup and on-site service in all Saudi cities.",
    ),
    h1: t("تصنيع وتوريد مضخات التروس (الجير) الهيدروليكية في الرياض", "Hydraulic gear pump manufacturing and supply in Riyadh"),
    lead: t(
      "مضخة التروس من أكثر المضخات الهيدروليكية استخدامًا في المعدات المتنقلة والتطبيقات الصناعية. نصنّع مضخات التروس ونوفّر أنواعًا مختلفة منها للاستخدام الصناعي والمتنقل.",
      "The gear pump is among the most widely used hydraulic pumps on mobile equipment and in industrial applications. We manufacture gear pumps and supply different types for industrial and mobile use.",
    ),
    scope: [
      t("تصنيع مضخات التروس الهيدروليكية", "Manufacturing of hydraulic gear pumps"),
      t("توريد مضخات التروس للتطبيقات الصناعية والمتنقلة", "Supply of gear pumps for industrial and mobile applications"),
      t("صيانة وفحص المضخات مع تقرير الفحص", "Pump repair and testing with a test report"),
    ],
    faq: [
      {
        q: t("هل تصنّعون مضخة تروس بمواصفات معينة؟", "Can you make a gear pump to a given specification?"),
        a: t(
          "أرسل المواصفات أو صورة المضخة الحالية على واتساب، ونراجع معك ما يمكن تصنيعه ثم نعطيك عرض سعر.",
          "Send the specification or a photo of the existing pump on WhatsApp. We review what can be made with you and then quote.",
        ),
      },
      {
        q: t("هل يمكن فحص المضخة بعد التصنيع؟", "Can the pump be tested after manufacturing?"),
        a: t(
          "لدينا تجهيزات لفحص جميع أنواع المضخات الهيدروليكية وإصدار تقرير الفحص.",
          "We have facilities to test all types of hydraulic pumps and issue a test report.",
        ),
      },
      {
        q: t("هل تبيعون المضخات لمن يرغب بالشراء فقط؟", "Do you sell pumps to customers who only want to buy?"),
        a: t(
          "نعم، نبيع للزبائن الذين يزورون الورشة أو يطلبون عبر الهاتف وواتساب.",
          "Yes, we sell to walk-in customers and to those who order by phone and WhatsApp.",
        ),
      },
    ],
    related: ["hydraulic-pump", "pump-testing", "power-pack"],
  },
  {
    slug: "boom-truck",
    kind: "service",
    icon: "boomtruck",
    image: "/img/boom-truck.webp",
    imageAlt: t("شاحنة رافعة بذراع هيدروليكي", "Truck-mounted boom crane"),
    title: t("الشاحنات المزوّدة برافعة", "Boom trucks"),
    card: t("صيانة هيدروليك الشاحنات المزوّدة برافعة (ونش / بوم ترك)", "Hydraulic repair for boom trucks (truck-mounted cranes)"),
    metaTitle: t("صيانة هيدروليك شاحنة ونش (بوم ترك)", "Boom Truck Hydraulic Repair, Riyadh"),
    desc: t(
      "صيانة النظام الهيدروليكي للشاحنات المزوّدة برافعة (ونش / بوم ترك) وتشخيص أعطاله في الرياض، مع خدمة موقعية في جميع مدن المملكة.",
      "Hydraulic system repair and troubleshooting for boom trucks in Riyadh, with on-site service in all Saudi cities. Quote on request.",
    ),
    h1: t("صيانة هيدروليك الشاحنات المزوّدة برافعة (ونش / بوم ترك)", "Boom truck hydraulic repair in Riyadh"),
    lead: t(
      "نصلح النظام الهيدروليكي في المعدات المتنقلة ونشخّص أعطاله، ومنها الشاحنات المزوّدة برافعة. نأتي إلى الشاحنة في موقعها في أي مدينة بالمملكة، أو نستلم الأجزاء المعطّلة إلى الورشة.",
      "We repair the hydraulic system on mobile equipment and troubleshoot its faults, boom trucks included. We come to the truck at its location in any city in the Kingdom, or collect the faulty parts to the workshop.",
    ),
    signs: [
      t("هبوط الذراع أو عدم ثباته", "The boom drops or will not hold position"),
      t("بطء في مدّ الذراع أو رفعه", "Slow boom extension or lift"),
      t("تسريب زيت من سلندرات الذراع أو الليات", "Oil leaking from boom cylinders or hoses"),
      t("عدم استجابة بعض الحركات", "Some movements do not respond"),
    ],
    scope: [
      t("استكشاف أعطال الهيدروليك في المعدات المتنقلة", "Troubleshooting hydraulics on mobile equipment"),
      t("صيانة سلندرات الذراع والمضخات والصمامات", "Repair of boom cylinders, pumps and valves"),
      t("تغيير الليات والأختام", "Replacement of hoses and seals"),
      t("خدمة موقعية في جميع مدن المملكة", "On-site service in all Saudi cities"),
    ],
    faq: [
      {
        q: t("هل تأتون إلى موقع الشاحنة؟", "Do you come to the truck's location?"),
        a: t(
          "نعم، الخدمة الموقعية متاحة في جميع مدن المملكة. اتصل بنا وحدد المدينة والعطل.",
          "Yes, on-site service is available in all Saudi cities. Call us with the city and the fault.",
        ),
      },
      {
        q: t("ماذا أخبركم عند الاتصال؟", "What should I tell you when I call?"),
        a: t(
          "نوع الشاحنة والرافعة، ما الحركة المتعطلة، وصور للعطل إن أمكن. هذا يوفّر الوقت على الطرفين.",
          "The truck and crane type, which movement has failed, and photos of the fault if possible. This saves time for both sides.",
        ),
      },
      {
        q: t("هل تصلحون سلندرات الذراع في الورشة؟", "Do you repair the boom cylinders in the workshop?"),
        a: t(
          "نعم، نصلح السلندرات الهيدروليكية ونصنّعها. راجع صفحة السلندرات الهيدروليكية.",
          "Yes, we repair and manufacture hydraulic cylinders. See the hydraulic cylinders page.",
        ),
      },
    ],
    related: ["crane", "hydraulic-cylinder", "hydraulic-hoses"],
  },
  {
    slug: "crane",
    kind: "service",
    icon: "crane",
    image: "/img/crane.webp",
    imageAlt: t("رافعة هيدروليكية في موقع عمل", "Hydraulic crane on a worksite"),
    title: t("الرافعات (الكرينات)", "Cranes"),
    card: t("صيانة الرافعات الهيدروليكية، ومنها رافعات أطلس", "Hydraulic crane repair, including Atlas cranes"),
    metaTitle: t("صيانة كرين هيدروليك وكرين أطلس", "Hydraulic Crane & Atlas Crane Repair, Riyadh"),
    desc: t(
      "صيانة الرافعات الهيدروليكية (الكرينات) ومنها رافعات أطلس في الرياض، مع خدمة موقعية في جميع مدن المملكة. اطلب عرض سعر.",
      "Repair of hydraulic cranes, including Atlas cranes, in Riyadh, with on-site service in all Saudi cities. Request a quote.",
    ),
    h1: t("صيانة الرافعات الهيدروليكية (الكرينات) ورافعات أطلس في الرياض", "Hydraulic crane and Atlas crane repair in Riyadh"),
    lead: t(
      "من خدماتنا صيانة رافعات أطلس وغيرها من الرافعات الهيدروليكية. نتعامل مع سلندرات الرافعة ومضخاتها وصماماتها وليّاتها، ونحضر إلى موقع الرافعة عند الحاجة.",
      "Atlas crane repair is among our listed services, along with other hydraulic cranes. We work on the crane's cylinders, pumps, valves and hoses, and come to the crane's location when needed.",
    ),
    signs: [
      t("تسريب زيت في الذراع أو السلندرات", "Oil leaks on the boom or cylinders"),
      t("حركة بطيئة أو غير ثابتة تحت الحمل", "Slow or unsteady movement under load"),
      t("هبوط الذراع وهو ساكن", "The boom sinks while stationary"),
    ],
    scope: [
      t("صيانة رافعات أطلس والرافعات الهيدروليكية الأخرى", "Repair of Atlas cranes and other hydraulic cranes"),
      t("صيانة السلندرات والمضخات والصمامات الخاصة بالرافعة", "Repair of the crane's cylinders, pumps and valves"),
      t("تغيير الليات والأختام", "Replacement of hoses and seals"),
      t("خدمة موقعية في جميع مدن المملكة", "On-site service in all Saudi cities"),
    ],
    faq: [
      {
        q: t("هل تصلحون رافعات أطلس؟", "Do you repair Atlas cranes?"),
        a: t(
          "نعم، رافعات أطلس من الخدمات المدرجة لدينا. أرسل موديل الرافعة وصورة العطل على واتساب.",
          "Yes, Atlas cranes are among the services we list. Send the crane model and a photo of the fault on WhatsApp.",
        ),
      },
      {
        q: t("هل تتعاملون مع ماركات رافعات أخرى؟", "Do you work on other crane makes?"),
        a: t(
          "نعمل على مختلف أنواع المعدات الهيدروليكية. أخبرنا بالماركة والموديل لنؤكد لك.",
          "We work on all types of hydraulic equipment. Tell us the make and model and we will confirm.",
        ),
      },
      {
        q: t("هل تأتون إلى الموقع؟", "Do you come to the site?"),
        a: t(
          "نعم، في جميع مدن المملكة.",
          "Yes, in all cities of the Kingdom.",
        ),
      },
    ],
    related: ["boom-truck", "hydraulic-cylinder", "hydraulic-pump"],
  },
];

const hoses: Entry = {
  slug: "hydraulic-hoses",
  kind: "product",
  icon: "hose",
  image: "/img/hydraulic-hoses.webp",
  imageAlt: t("خراطيم هيدروليكية بوصلات مكبوسة", "Hydraulic hoses with crimped fittings"),
  title: t("الليات الهيدروليكية", "Hydraulic hoses"),
  card: t("ليات (خراطيم) هيدروليكية للمعدات", "Hydraulic hoses for equipment"),
  metaTitle: t("ليات هيدروليك في الرياض", "Hydraulic Hoses in Riyadh"),
  desc: t(
    "نوفّر الليات (الخراطيم) الهيدروليكية للمعدات في الرياض، ونغيّرها ضمن صيانة المعدات في موقعك. اطلب السعر عبر واتساب.",
    "We supply hydraulic hoses for equipment in Riyadh, and replace them during on-site equipment repair. Ask for the price on WhatsApp.",
  ),
  h1: t("ليات (خراطيم) هيدروليك في الرياض", "Hydraulic hoses in Riyadh"),
  lead: t(
    "الليات الهيدروليكية من المنتجات المدرجة في كتالوج الورشة. أرسل لنا مواصفات اللي المطلوب أو صورة اللي القديم ونعطيك السعر.",
    "Hydraulic hoses are listed in the workshop's product catalogue. Send us the specification of the hose you need, or a photo of the old one, and we will quote.",
  ),
  scope: [
    t("توريد ليات هيدروليكية للمعدات", "Supply of hydraulic hoses for equipment"),
    t("تغيير الليات ضمن صيانة المعدات المتنقلة والصناعية", "Hose replacement as part of mobile and industrial equipment repair"),
  ],
  faq: [
    {
      q: t("ما المعلومات التي أحتاجها لطلب لي هيدروليك؟", "What do I need to know to order a hydraulic hose?"),
      a: t(
        "الطول والقطر (المقاس) ونوع الوصلات في الطرفين وضغط التشغيل. وإن لم تعرفها فأرسل صورة اللي القديم أو ما هو مكتوب عليه.",
        "The length, the diameter (size), the end fittings and the working pressure. If you do not know them, send a photo of the old hose or of what is printed on it.",
      ),
    },
    {
      q: t("هل تبيعون للأفراد والورش؟", "Do you sell to individuals and workshops?"),
      a: t(
        "نعم، نبيع للزبائن الذين يزورون الورشة أو يطلبون عبر الهاتف وواتساب.",
        "Yes, we sell to walk-in customers and to those who order by phone and WhatsApp.",
      ),
    },
    {
      q: t("كيف أعرف السعر؟", "How do I get the price?"),
      a: t(
        "السعر يُعطى عند الطلب. أرسل المواصفات على واتساب.",
        "The price is given on request. Send the specification on WhatsApp.",
      ),
    },
  ],
  related: ["boom-truck", "power-pack", "hydraulic-seals"],
};

if (SITE.features.hoseCrimping) {
  hoses.card = t("ليات هيدروليك وكبس الليات حسب الطلب", "Hydraulic hoses and hose crimping made to order");
  hoses.metaTitle = t("كبس ليات هيدروليك وبيع ليات في الرياض", "Hydraulic Hose Crimping & Supply, Riyadh");
  hoses.desc = t(
    "كبس الليات الهيدروليكية وبيعها في الرياض بالمقاس المطلوب، مع استلام وخدمة موقعية في جميع مدن المملكة. اطلب السعر عبر واتساب.",
    "Hydraulic hose crimping and supply in Riyadh, made to the size you need. Pickup and on-site service in all Saudi cities. Quote on WhatsApp.",
  );
  hoses.h1 = t("كبس ليات هيدروليك وبيعها في الرياض", "Hydraulic hose crimping and supply in Riyadh");
  hoses.lead = t(
    "نقصّ ونكبس الليات الهيدروليكية بالمقاس الذي تحتاجه، ونوفّر الليات للمعدات الصناعية والمعدات الثقيلة والزراعية. أحضر اللي القديم إلى الورشة، أو أرسل مواصفاته أو صورته على واتساب ونعطيك السعر.",
    "We cut and crimp hydraulic hoses to the size you need, and supply hoses for industrial, heavy and agricultural equipment. Bring the old hose to the workshop, or send its specification or photo on WhatsApp, and we will quote.",
  );
  hoses.scope.unshift(
    t("قصّ وكبس الليات الهيدروليكية بالطول والوصلات المطلوبة", "Cutting and crimping hydraulic hoses to the length and fittings you need"),
    t("كبس لي بديل على نفس مقاس اللي القديم", "Crimping a replacement hose to the same size as the old one"),
  );
  hoses.faq.unshift({
    q: t("هل تكبسون لي هيدروليك أحضره معي؟", "Can you crimp a hydraulic hose I bring in?"),
    a: t(
      "نعم، أحضر اللي القديم إلى الورشة ونكبس لك بديلًا على نفس المقاس والوصلات. وإن لم تستطع الحضور فأرسل صورته ومواصفاته على واتساب.",
      "Yes. Bring the old hose to the workshop and we crimp a replacement to the same size and fittings. If you cannot come, send its photo and specification on WhatsApp.",
    ),
  });
}

const PRODUCTS: Entry[] = [
  hoses,
  {
    slug: "hydraulic-seals",
    kind: "product",
    icon: "seal",
    image: "/img/hydraulic-seals.webp",
    imageAlt: t("مجموعة أختام هيدروليكية", "Assorted hydraulic seals"),
    title: t("الأختام الهيدروليكية (السيلات)", "Hydraulic seals"),
    card: t("أختام جاهزة ومصنّعة حسب الطلب للهيدروليك والنيوماتيك", "Ready-made and made-to-order seals for hydraulic and pneumatic use"),
    metaTitle: t("أختام (سيلات) هيدروليك في الرياض", "Hydraulic Seals & Seal Manufacturing, Riyadh"),
    desc: t(
      "نوفّر الأختام الهيدروليكية والهوائية الجاهزة ونصنّع الأختام الخاصة وغير القياسية في الرياض. اطلب السعر عبر واتساب.",
      "We supply ready-made hydraulic and pneumatic seals and manufacture special and non-standard seals in Riyadh. Ask for a price on WhatsApp.",
    ),
    h1: t("الأختام الهيدروليكية (السيلات): توريد وتصنيع في الرياض", "Hydraulic seals: supply and manufacturing in Riyadh"),
    lead: t(
      "نصنّع جميع أنواع الأختام الهيدروليكية بالخراطة، ومنها الأختام الخاصة وغير القياسية. ونوفّر أختامًا مقولبة جاهزة للهيدروليك والنيوماتيك.",
      "We manufacture all types of hydraulic seals by turning, including special and non-standard seals. We also supply ready-made molded seals for hydraulic and pneumatic use.",
    ),
    scope: [
      t("أختام مخروطة (Turned seals) بجميع الأنواع", "Turned seals of all types"),
      t("أختام خاصة وغير قياسية حسب العينة أو المقاس", "Special and non-standard seals made to your sample or size"),
      t("أختام مقولبة جاهزة: أختام المكبس والعمود والمنظّف وحلقات O والأختام المدمجة", "Ready-made molded seals: piston seals, rod seals, wipers, O-rings and compact seals"),
      t("للأنظمة الهيدروليكية والهوائية", "For hydraulic and pneumatic systems"),
    ],
    faq: [
      {
        q: t("هل تصنّعون ختمًا غير موجود جاهزًا؟", "Can you make a seal that is not available ready-made?"),
        a: t(
          "نعم، نصنّع الأختام الخاصة وغير القياسية. أحضر العينة أو أرسل صورة ومقاسات على واتساب.",
          "Yes, we manufacture special and non-standard seals. Bring the sample or send a photo and dimensions on WhatsApp.",
        ),
      },
      {
        q: t("ما معلومات الختم التي أحتاجها؟", "What seal details do I need?"),
        a: t(
          "القطر الداخلي والخارجي والعرض، ونوع الختم (مكبس، عمود، منظّف)، وإن كان لسلندر هيدروليكي أو هوائي.",
          "Inside and outside diameter and width, the seal type (piston, rod, wiper), and whether it is for a hydraulic or pneumatic cylinder.",
        ),
      },
      {
        q: t("هل تغيّرون الأختام ضمن إصلاح السلندر؟", "Do you replace the seals as part of a cylinder repair?"),
        a: t(
          "نعم، تغيير الأختام جزء من صيانة السلندرات الهيدروليكية والهوائية.",
          "Yes, seal replacement is part of hydraulic and pneumatic cylinder repair.",
        ),
      },
    ],
    related: ["hydraulic-cylinder", "pneumatic-cylinder", "honed-tubes-chrome-rods"],
  },
  {
    slug: "honed-tubes-chrome-rods",
    kind: "product",
    icon: "rod",
    image: "/img/honed-tubes-chrome-rods.webp",
    imageAlt: t("ماسورة مصقولة وعمود مطلي بالكروم", "Honed tube and chrome-plated rod"),
    title: t("الماسورة المصقولة وأعمدة الكروم", "Honed tubes and chrome rods"),
    card: t("ماسورة مصقولة من 30 إلى 230 مم وأعمدة كروم من 24 إلى 140 مم", "Honed tube 30–230 mm and chrome rods 24–140 mm"),
    metaTitle: t("ماسورة مصقولة وأعمدة كروم صلب", "Honed Tubes & Hard Chrome Rods, Riyadh"),
    desc: t(
      "نوفّر أعمدة مطلية بالكروم الصلب من 24 إلى 140 مم وماسورة مصقولة من 30 إلى 230 مم بالمقاسين المتري والإنش في الرياض.",
      "We supply hard-chrome plated rods from 24 to 140 mm and honed tube from 30 to 230 mm, metric and inch, from Riyadh.",
    ),
    h1: t("ماسورة مصقولة وأعمدة مطلية بالكروم الصلب في الرياض", "Honed tubes and hard chrome rods in Riyadh"),
    lead: t(
      "المادة الخام لتصنيع السلندر هي الماسورة المصقولة من الداخل والعمود المطلي بالكروم. نوفّرهما بمقاسات متعددة بالمتري والإنش.",
      "The raw material for building a cylinder is a honed tube and a chrome-plated rod. We supply both in many sizes, metric and inch.",
    ),
    specs: [
      t("أعمدة مطلية بالكروم الصلب: من 24 مم إلى 140 مم", "Hard-chrome plated rods: 24 mm to 140 mm"),
      t("ماسورة مصقولة (Honed tube): من 30 مم إلى 230 مم", "Honed tube: 30 mm to 230 mm"),
      t("المقاسان المتري والإنش متوفران للنوعين", "Metric and inch sizes for both"),
    ],
    scope: [
      t("توريد أعمدة الكروم الصلب (Piston rods)", "Supply of hard-chrome rods (piston rods)"),
      t("توريد الماسورة المصقولة للسلندرات", "Supply of honed tube for cylinders"),
      t("تصنيع السلندرات الهيدروليكية من هذه المواد", "Manufacturing hydraulic cylinders from these materials"),
    ],
    faq: [
      {
        q: t("هل تقطعون الماسورة أو العمود بالطول المطلوب؟", "Do you cut the tube or rod to length?"),
        a: t(
          "أرسل المقاس والطول المطلوب على واتساب ونؤكد لك ما يمكن توفيره.",
          "Send the size and the length you need on WhatsApp and we will confirm what we can supply.",
        ),
      },
      {
        q: t("هل المقاسات بالمتري فقط؟", "Are the sizes metric only?"),
        a: t(
          "لا، المقاسان المتري والإنش متوفران حسب الكتالوج.",
          "No, both metric and inch sizes are listed in our catalogue.",
        ),
      },
      {
        q: t("هل تصنّعون سلندرًا كاملًا بدل بيع المواد؟", "Can you build a complete cylinder instead of selling the material?"),
        a: t(
          "نعم، نصنّع السلندرات الهيدروليكية القياسية بجميع أنواعها.",
          "Yes, we manufacture all standard types of hydraulic cylinders.",
        ),
      },
    ],
    related: ["hydraulic-cylinder", "hydraulic-seals", "tipping-systems"],
  },
  {
    slug: "tipping-systems",
    kind: "product",
    icon: "tipper",
    image: "/img/tipping-systems.webp",
    imageAlt: t("طقم قلاب هيدروليكي مركّب على شاحنة", "Hydraulic wet-kit tipping system on a truck"),
    title: t("أنظمة القلاب", "Tipping systems"),
    card: t("أنظمة قلاب كاملة (Wet kit) مع السلندر", "Complete tipping systems (wet kit) with cylinder"),
    metaTitle: t("أنظمة قلاب هيدروليك (ويت كيت)", "Hydraulic Tipping Systems (Wet Kit), Riyadh"),
    desc: t(
      "نوفّر أنظمة القلاب الهيدروليكية كاملة مع الويت كيت والسلندر في الرياض، مع استلام وخدمة موقعية في جميع مدن المملكة.",
      "We supply complete hydraulic tipping systems with wet kit and cylinder in Riyadh. Pickup and on-site service in all Saudi cities.",
    ),
    h1: t("أنظمة القلاب الهيدروليكية (ويت كيت) في الرياض", "Hydraulic tipping systems (wet kit) in Riyadh"),
    lead: t(
      "نوفّر نظام القلاب كاملًا مع الويت كيت والسلندر للشاحنات والقلابات. أرسل نوع المركبة وحمولتها على واتساب لنحدد لك المناسب.",
      "We supply the tipping system complete with wet kit and cylinder for trucks and tippers. Send the vehicle type and its load on WhatsApp and we will advise what suits.",
    ),
    scope: [
      t("نظام قلاب كامل مع الويت كيت", "A complete tipping system with wet kit"),
      t("السلندر الخاص بالقلاب", "The tipping cylinder"),
      t("صيانة السلندرات والأختام والليات", "Repair of cylinders, seals and hoses"),
    ],
    faq: [
      {
        q: t("ما هو الويت كيت؟", "What is a wet kit?"),
        a: t(
          "مجموعة هيدروليكية تشمل عادة المضخة والخزان والصمام والليات اللازمة لتشغيل القلاب من المركبة. نؤكد لك محتوى المجموعة حسب الطلب.",
          "A hydraulic set that usually includes the pump, tank, valve and hoses needed to run the tipper from the vehicle. We confirm the contents of the set when you ask.",
        ),
      },
      {
        q: t("هل أحتاج إلى معلومات عن المركبة؟", "Do I need to give details of the vehicle?"),
        a: t(
          "نعم: نوع الشاحنة، والصندوق، والحمولة التقريبية. كلما كانت التفاصيل أوضح كان العرض أدق.",
          "Yes: the truck type, the body, and the approximate load. The clearer the details, the more accurate the quote.",
        ),
      },
      {
        q: t("هل تركّبون في موقعي؟", "Do you install at my site?"),
        a: t(
          "الخدمة الموقعية متاحة في جميع مدن المملكة. اتصل بنا لنتفق على التفاصيل.",
          "On-site service is available in all Saudi cities. Call us to agree the details.",
        ),
      },
    ],
    related: ["hydraulic-cylinder", "hydraulic-hoses", "pto"],
  },
  {
    slug: "pto",
    kind: "product",
    icon: "pto",
    image: "/img/pto.webp",
    imageAlt: t("وحدة نقل حركة PTO", "PTO power take-off unit"),
    title: t("وحدات نقل الحركة (PTO)", "Power take-off (PTO)"),
    card: t("جميع أنواع PTO للتطبيقات الهيدروليكية", "All types of PTO for hydraulic applications"),
    metaTitle: t("وحدات PTO للتطبيقات الهيدروليكية", "PTO Units for Hydraulic Systems, Riyadh"),
    desc: t(
      "نوفّر جميع أنواع وحدات نقل الحركة (PTO) للتطبيقات الهيدروليكية في الرياض. اطلب السعر عبر واتساب أو الاتصال.",
      "We supply all types of power take-off (PTO) units for hydraulic applications in Riyadh. Ask for a price on WhatsApp or by phone.",
    ),
    h1: t("وحدات نقل الحركة (PTO) للتطبيقات الهيدروليكية في الرياض", "Power take-off (PTO) units for hydraulic applications in Riyadh"),
    lead: t(
      "وحدة نقل الحركة (PTO) تنقل قدرة محرك الشاحنة إلى المضخة الهيدروليكية. نوفّر جميع أنواع الـ PTO للتطبيقات الهيدروليكية.",
      "A power take-off (PTO) transfers engine power from the truck to the hydraulic pump. We supply all types of PTO for hydraulic applications.",
    ),
    scope: [
      t("توريد جميع أنواع PTO للتطبيقات الهيدروليكية", "Supply of all types of PTO for hydraulic applications"),
      t("مضخات هيدروليكية مناسبة للتركيب مع الوحدة", "Hydraulic pumps to fit with the unit"),
    ],
    faq: [
      {
        q: t("كيف أحدد الـ PTO المناسب؟", "How do I choose the right PTO?"),
        a: t(
          "يعتمد على ناقل الحركة في الشاحنة والمضخة المطلوب تشغيلها. أرسل نوع الشاحنة وموديل الناقل ونرشدك.",
          "It depends on the truck's gearbox and the pump you need to drive. Send the truck type and gearbox model and we will guide you.",
        ),
      },
      {
        q: t("هل توفّرون المضخة مع الـ PTO؟", "Do you supply the pump with the PTO?"),
        a: t(
          "نوفّر المضخات الهيدروليكية بأنواعها، ونرشدك للمناسب منها.",
          "We supply hydraulic pumps of various types and will guide you to the suitable one.",
        ),
      },
      {
        q: t("هل يمكن الشراء هاتفيًا؟", "Can I buy by phone?"),
        a: t(
          "نعم، نبيع للزبائن الذين يزورون الورشة أو يطلبون عبر الهاتف وواتساب.",
          "Yes, we sell to walk-in customers and to those who order by phone and WhatsApp.",
        ),
      },
    ],
    related: ["hydraulic-pump", "tipping-systems", "gear-pump"],
  },
  {
    slug: "pressure-gauges",
    kind: "product",
    icon: "gauge",
    image: "/img/pressure-gauges.webp",
    imageAlt: t("مقياس ضغط هيدروليكي", "Hydraulic pressure gauge"),
    title: t("مقاييس الضغط", "Pressure gauges"),
    card: t("مقاييس ضغط للأنظمة الهيدروليكية والهوائية", "Pressure gauges for hydraulic and pneumatic systems"),
    metaTitle: t("مقاييس ضغط للهيدروليك والنيوماتيك", "Pressure Gauges for Hydraulic Systems, Riyadh"),
    desc: t(
      "نوفّر مقاييس الضغط بأنواعها للتطبيقات الهيدروليكية والهوائية في الرياض. اطلب السعر عبر واتساب أو الاتصال بنا.",
      "We supply pressure gauges of different types for hydraulic and pneumatic applications in Riyadh. Ask for a price on WhatsApp or by phone.",
    ),
    h1: t("مقاييس الضغط للأنظمة الهيدروليكية والهوائية في الرياض", "Pressure gauges for hydraulic and pneumatic systems in Riyadh"),
    lead: t(
      "مقياس الضغط يكشف ما يحدث داخل النظام ويساعد على ضبط الصمامات وتشخيص الأعطال. نوفّر مقاييس ضغط مختلفة للتطبيقات الهيدروليكية والهوائية.",
      "A pressure gauge shows what is happening inside the system and helps in setting valves and diagnosing faults. We supply different gauges for hydraulic and pneumatic applications.",
    ),
    scope: [
      t("مقاييس ضغط للتطبيقات الهيدروليكية", "Pressure gauges for hydraulic applications"),
      t("مقاييس ضغط للتطبيقات الهوائية", "Pressure gauges for pneumatic applications"),
    ],
    faq: [
      {
        q: t("ماذا أحتاج لاختيار مقياس الضغط؟", "What do I need to choose a gauge?"),
        a: t(
          "أقصى ضغط تشغيل في النظام، ونوع وصلة التركيب. أرسل صورة المقياس القديم أو مواصفات النظام.",
          "The maximum working pressure of the system and the connection type. Send a photo of the old gauge or the system details.",
        ),
      },
      {
        q: t("هل المقاييس للهيدروليك فقط؟", "Are the gauges for hydraulics only?"),
        a: t(
          "لا، نوفّر مقاييس للتطبيقات الهيدروليكية والهوائية.",
          "No, we supply gauges for both hydraulic and pneumatic applications.",
        ),
      },
      {
        q: t("هل أستطيع الشراء من الورشة مباشرة؟", "Can I buy directly at the workshop?"),
        a: t(
          "نعم، يمكنك زيارة الورشة أو الطلب عبر الهاتف وواتساب.",
          "Yes, you can visit the workshop or order by phone and WhatsApp.",
        ),
      },
    ],
    related: ["control-valve", "power-pack", "pneumatic-products"],
  },
  {
    slug: "pneumatic-products",
    kind: "product",
    icon: "frl",
    image: "/img/pneumatic-products.webp",
    imageAlt: t("وحدة تجهيز هواء FRL (فلتر ومنظّم وموزّع زيت)", "FRL air-preparation unit (filter, regulator, lubricator)"),
    title: t("المنتجات الهوائية (نيوماتيك)", "Pneumatic products"),
    card: t("وحدات FRL وسلندرات هوائية وجميع الملحقات", "FRL units, pneumatic cylinders and all accessories"),
    metaTitle: t("منتجات نيوماتيك وFRL في الرياض", "Pneumatic Products & FRL Units, Riyadh"),
    desc: t(
      "نوفّر وحدات FRL والسلندرات الهوائية وجميع ملحقات النيوماتيك في الرياض. اطلب السعر عبر واتساب أو زر الورشة.",
      "We supply FRL units, pneumatic cylinders and all pneumatic accessories in Riyadh. Ask for a price on WhatsApp or visit the workshop.",
    ),
    h1: t("المنتجات الهوائية (نيوماتيك) ووحدات FRL في الرياض", "Pneumatic products and FRL units in Riyadh"),
    lead: t(
      "نوفّر وحدات تجهيز الهواء (FRL) والسلندرات الهوائية وجميع ملحقات الهواء المضغوط. وللسلندرات الهوائية خدمة صيانة وتصنيع في ورشتنا.",
      "We supply air-preparation (FRL) units, pneumatic cylinders and all compressed-air accessories. Pneumatic cylinders also have a repair and manufacturing service in our workshop.",
    ),
    scope: [
      t("وحدات FRL (فلتر، منظّم، موزّع زيت)", "FRL units (filter, regulator, lubricator)"),
      t("السلندرات الهوائية", "Pneumatic cylinders"),
      t("جميع الملحقات الهوائية", "All pneumatic accessories"),
    ],
    faq: [
      {
        q: t("هل تصنّعون السلندرات الهوائية أم تبيعونها جاهزة فقط؟", "Do you manufacture pneumatic cylinders or only sell them ready-made?"),
        a: t(
          "الأمران: نوفّر سلندرات جاهزة ونصنّع السلندرات الهوائية القياسية ونصلحها.",
          "Both: we supply ready cylinders and also manufacture and repair standard pneumatic cylinders.",
        ),
      },
      {
        q: t("ما هو الـ FRL؟", "What is an FRL?"),
        a: t(
          "وحدة من ثلاثة أجزاء: فلتر ومنظّم ضغط وموزّع زيت، تجهّز الهواء قبل دخوله الأجهزة الهوائية.",
          "A three-part unit: filter, pressure regulator and lubricator, preparing the air before it enters pneumatic equipment.",
        ),
      },
      {
        q: t("هل أطلب هاتفيًا؟", "Can I order by phone?"),
        a: t(
          "نعم، عبر الهاتف أو واتساب أو بزيارة الورشة.",
          "Yes, by phone, WhatsApp, or by visiting the workshop.",
        ),
      },
    ],
    related: ["pneumatic-cylinder", "pressure-gauges", "hydraulic-seals"],
  },
];

export const ENTRIES: Entry[] = [...SERVICES, ...PRODUCTS];
export const SERVICE_LIST = ENTRIES.filter((e) => e.kind === "service");
export const PRODUCT_LIST = ENTRIES.filter((e) => e.kind === "product");
export const entryBySlug = (slug: string) => ENTRIES.find((e) => e.slug === slug);
export const entryPath = (e: Entry) => `/${e.kind === "service" ? "services" : "products"}/${e.slug}/`;
export const slugPath = (slug: string) => {
  const e = entryBySlug(slug);
  return e ? entryPath(e) : slug === "pump-testing" ? "/pump-testing/" : "/";
};
export const slugTitle = (slug: string): T => entryBySlug(slug)?.title ?? (slug === "pump-testing" ? t("فحص المضخات", "Pump testing") : t("", ""));

// pump-testing isn't a catalogue Entry, but it appears in mixed lists
// (ServicesIndex, Related) alongside real entries, so it needs its own image.
export const slugImage = (slug: string): string | undefined =>
  entryBySlug(slug)?.image ?? (slug === "pump-testing" ? "/img/pump-testing.webp" : undefined);
export const slugImageAlt = (slug: string, lang: "ar" | "en"): string | undefined =>
  entryBySlug(slug)?.imageAlt?.[lang] ??
  (slug === "pump-testing" ? (lang === "ar" ? "فني يفحص مضخة على طاولة اختبار" : "Technician checking a pump on a test rig") : undefined);

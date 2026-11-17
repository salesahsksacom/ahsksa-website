// Guide articles. Every field is bilingual: { ar, en }.
// Written from general hydraulic practice. Nothing here states a price, a delivery time, a warranty, a statistic or a
// brand partnership; business facts (what the workshop does) match the service pages in entries.ts.

import { SITE, type T } from "@/config/site";
import type { Faq } from "@/content/entries";

export type GuideSection = { h: T; p?: T; list?: T[] };
export type Guide = {
  slug: string;
  title: T; // short name for cards and breadcrumbs
  card: T; // one line under the title in lists
  metaTitle: T; // before " | brand"
  desc: T; // meta description, 100-160 characters
  h1: T;
  answer: T; // self-contained direct answer, 40-60 words in English
  sections: GuideSection[];
  note?: T; // safety note shown after the answer
  faq: Faq[];
  related: string[]; // entry slugs (services and products) or "pump-testing"
  ask: T; // WhatsApp pre-filled message
  published: string; // ISO date
};

const t = (ar: string, en: string): T => ({ ar, en });

const SAFETY = t(
  "قبل أي فحص: أوقف المعدة وأفرغ الضغط من النظام. لا تتحسّس موضع التسريب بيدك، فالزيت المضغوط قد يخترق الجلد.",
  "Before any inspection: stop the machine and release the pressure. Never feel for a leak with your hand; pressurised oil can penetrate the skin.",
);

export const GUIDES: Guide[] = [
  /* ---------------------------------------------------------------- 1 */
  {
    slug: "hydraulic-cylinder-leaking",
    published: "2026-11-13",
    title: t("تسريب زيت السلندر الهيدروليكي", "Hydraulic cylinder leaking oil"),
    card: t("أسباب التسريب الخارجي والداخلي وما تفحصه أولًا", "Causes of external and internal leaks, and what to check first"),
    metaTitle: t("تسريب زيت سلندر هيدروليك: الأسباب والحل", "Hydraulic Cylinder Leaking Oil: Causes & Fix"),
    desc: t(
      "أسباب تسريب (تهريب) زيت السلندر الهيدروليكي: أختام العمود وخدوش الكروم وختم المكبس. كيف تفرّق بين التسريب الخارجي والداخلي ومتى يلزم الفك والفحص.",
      "Why a hydraulic cylinder leaks oil: worn rod seals, scored chrome rods, failed piston seals. How to tell external from internal leaks and when to strip it.",
    ),
    h1: t("سلندر هيدروليك يسرّب زيت: الأسباب وما يجب فعله", "Hydraulic cylinder leaking oil: causes and what to do"),
    answer: t(
      "يسرّب السلندر الهيدروليكي عادةً لأن ختم العمود أو ماسح الغبار متآكل، أو لأن العمود المطلي بالكروم مخدوش أو متآكل، أو لأن ختم الغطاء أو المكبس تالف. الزيت على العمود تسريب خارجي، وهبوط السلندر تحت الحمل تسريب داخلي. في الحالتين يلزم فك السلندر وفحصه، لا تغيير الأختام دون فحص.",
      "A hydraulic cylinder usually leaks because the rod seal or wiper is worn, the chrome rod is scored or pitted, or the gland or piston seal has failed. Oil on the rod is an external leak; a cylinder that drifts under load is leaking internally. Either way, the cylinder has to be stripped and inspected, not just re-sealed blindly.",
    ),
    note: SAFETY,
    sections: [
      {
        h: t("تسريب خارجي أم داخلي؟", "External or internal leak?"),
        p: t(
          "التسريب الخارجي، أو التهريب كما يسمّيه كثيرون، يظهر زيتًا على العمود أو حول الغطاء أو على الماسورة. أما التسريب الداخلي فلا يُرى: يمرّ الزيت من أمام المكبس إلى الجهة الأخرى، فيهبط السلندر تحت الحمل أو يتحرك ببطء وبقوة أقل.",
          "An external leak shows as oil on the rod, around the gland or on the tube. An internal leak cannot be seen: oil passes the piston to the other side, so the cylinder drifts under load or moves slowly with less force.",
        ),
      },
      {
        h: t("الأسباب الشائعة", "Common causes"),
        list: [
          t("ختم العمود أو ماسح الغبار متآكل بعد مدة تشغيل طويلة", "A worn rod seal or wiper after long service"),
          t("خدوش أو حفر أو صدأ على العمود المطلي بالكروم تقطع الختم الجديد بسرعة", "Scores, pits or rust on the chrome rod, which cut a new seal quickly"),
          t("غبار وطين يدخلان مع العمود عندما لا يعمل الماسح جيدًا", "Dust and mud dragged in on the rod when the wiper no longer works"),
          t("حمل جانبي أو عدم استقامة في التركيب يضغط الأختام والعمود من جهة واحدة", "Side load or poor alignment, pressing the seals and rod to one side"),
          t("زيت متسخ أو ساخن جدًا يقصّر عمر الأختام", "Dirty or very hot oil, which shortens seal life"),
          t("ختم المكبس تالف أو ماسورة مخدوشة من الداخل (تسريب داخلي)", "A failed piston seal or a scored tube bore (internal leak)"),
        ],
      },
      {
        h: t("تأكد أن الزيت يخرج من السلندر نفسه", "Make sure the oil is coming from the cylinder itself"),
        p: t(
          "كثيرًا ما يكون مصدر الزيت وصلة أو ليًّا (خرطومًا) قريبًا من السلندر ثم يسيل عليه. نظّف المنطقة جيدًا، وشغّل المعدة لحظات، ثم راقب من أين يظهر الزيت أول مرة.",
          "The oil often comes from a fitting or hose near the cylinder and runs down onto it. Clean the area well, run the machine briefly, then watch where the oil first appears.",
        ),
      },
      {
        h: t("لماذا يتكرر التسريب بعد تغيير الأختام؟", "Why the leak comes back after re-sealing"),
        p: t(
          "إذا بقي العمود مخدوشًا أو الماسورة متآكلة من الداخل فسيتلف الختم الجديد بسرعة. لذلك نفحص العمود والماسورة والمكبس عند الفك قبل أن نقرر: تغيير أختام فقط، أو إصلاح العمود أو استبداله، أو تصنيع سلندر بديل.",
          "If the rod stays scored or the tube bore is worn, the new seal fails quickly. That is why we inspect the rod, tube and piston when we strip the cylinder, before deciding: seals only, a repaired or replaced rod, or a manufactured replacement cylinder.",
        ),
      },
      {
        h: t("ماذا ترسل لنا", "What to send us"),
        list: [
          t("صورة للسلندر وهو مركّب على المعدة، وصورة قريبة لمكان التسريب", "A photo of the cylinder fitted on the machine and a close-up of the leak"),
          t("نوع المعدة وموديلها", "The machine type and model"),
          t("هل الزيت ظاهر على السلندر أم أن السلندر يهبط تحت الحمل", "Whether oil shows on the cylinder or the cylinder drifts under load"),
          t("المقاسات إن توفرت: قطر الماسورة وقطر العمود والشوط", "Dimensions if you have them: tube bore, rod diameter and stroke"),
        ],
      },
    ],
    faq: [
      {
        q: t("هل يكفي تغيير الأختام؟", "Is changing the seals enough?"),
        a: t(
          "إذا كان العمود والماسورة سليمين فتغيير الأختام يكفي. وإذا وُجد خدش أو تآكل فيجب إصلاحه أو استبدال الجزء وإلا عاد التسريب. نحدد ذلك بعد الفك والفحص.",
          "If the rod and tube are sound, new seals are enough. If there is scoring or wear, that part must be repaired or replaced or the leak returns. We decide after stripping and inspecting.",
        ),
      },
      {
        q: t("هل أستمر في تشغيل المعدة مع تسريب بسيط؟", "Can I keep running the machine with a small leak?"),
        a: t(
          "لا ننصح بذلك. التسريب الصغير يكبر مع الوقت، وقد يدخل الغبار مع العمود فيتلف الماسورة، وإذا نزل مستوى الزيت في الخزان تضررت المضخة. والزيت على الأرض خطر انزلاق أيضًا.",
          "We do not advise it. A small leak grows, dust can be dragged in on the rod and damage the tube, and if the oil level in the tank drops the pump is put at risk. Oil on the floor is also a slip hazard.",
        ),
      },
      {
        q: t("كيف أعرف تكلفة إصلاح السلندر؟", "How do I find out what a cylinder repair costs?"),
        a: t(
          "الأسعار تُعطى عند الطلب بعد معرفة نوع السلندر وحالته. أرسل صورًا وتفاصيل المعدة على واتساب لنعطيك عرض سعر.",
          "Prices are given on request once we know the cylinder type and its condition. Send photos and machine details on WhatsApp and we will quote.",
        ),
      },
    ],
    related: ["hydraulic-cylinder", "hydraulic-seals", "honed-tubes-chrome-rods"],
    ask: t("السلام عليكم، السلندر الهيدروليكي يسرّب زيت وأرغب بعرض سعر.", "Hello, my hydraulic cylinder is leaking oil and I would like a quote."),
  },

  /* ---------------------------------------------------------------- 2 */
  {
    slug: "hydraulic-pump-no-pressure",
    published: "2026-11-13",
    title: t("ضعف ضغط المضخة الهيدروليكية", "Hydraulic pump low or no pressure"),
    card: t("ما تفحصه قبل الحكم بأن المضخة تالفة", "What to check before deciding the pump is worn"),
    metaTitle: t("ضعف ضغط المضخة الهيدروليكية: الأسباب", "Hydraulic Pump Low Pressure: Causes & Checks"),
    desc: t(
      "المضخة الهيدروليكية ضعيفة أو بدون ضغط؟ افحص الزيت والمصفاة ودخول الهواء وصمام التنفيس قبل الحكم على المضخة، ومتى تحتاج فحصًا في الورشة.",
      "Hydraulic pump with low or no pressure? Check oil level, suction strainer, air leaks and the relief valve before blaming the pump, and know when to test it.",
    ),
    h1: t("المضخة الهيدروليكية ضعيفة أو بدون ضغط: الأسباب وخطوات الفحص", "Hydraulic pump low or no pressure: causes and checks"),
    answer: t(
      "ضعف الضغط لا يعني دائمًا أن المضخة تالفة. افحص الأمور البسيطة أولًا: مستوى الزيت، ومصفاة الشفط المسدودة، ودخول الهواء في خط الشفط، وضبط صمام التنفيس، وأي تسريب داخلي في سلندر أو صمام. إذا سلمت هذه الأمور فالأرجح أن المضخة متآكلة من الداخل وتحتاج إلى فحص.",
      "Low pressure does not always mean a worn pump. Check the simple things first: oil level, a blocked suction strainer, air entering the suction line, the relief valve setting, and a leaking cylinder or valve downstream. If those are fine, the pump is likely worn internally and should be tested.",
    ),
    note: SAFETY,
    sections: [
      {
        h: t("ابدأ بالأسباب البسيطة", "Start with the simple causes"),
        list: [
          t("مستوى الزيت في الخزان منخفض", "Low oil level in the tank"),
          t("مصفاة الشفط أو الفلتر مسدودة", "A blocked suction strainer or filter"),
          t("دخول هواء من وصلة الشفط أو ليّ الشفط (يظهر زبد في الزيت)", "Air entering through a suction fitting or hose (foam shows in the oil)"),
          t("زيت بلزوجة غير مناسبة، أو شديد السخونة", "Oil of the wrong viscosity, or very hot oil"),
          t("وصلة التوصيل (الكبلنج) بين المحرك والمضخة تالفة أو اتجاه الدوران خاطئ", "A damaged coupling between motor and pump, or the wrong direction of rotation"),
        ],
      },
      {
        h: t("صمام تنفيس الضغط", "The pressure relief valve"),
        p: t(
          "إذا كان صمام التنفيس عالقًا مفتوحًا أو مضبوطًا على ضغط منخفض فسيعود الزيت إلى الخزان ولن يرتفع الضغط، والمضخة سليمة. لا ترفع ضبط الصمام فوق الضغط المحدد في دليل المعدة.",
          "If the relief valve is stuck open or set too low, the oil returns to the tank and pressure will not build, even though the pump is sound. Never raise the valve setting above the pressure given in the machine manual.",
        ),
      },
      {
        h: t("المضخة نفسها", "The pump itself"),
        p: t(
          "يسمح التآكل الداخلي في أجزاء المضخة (الأتراس أو الريش أو المكابس أو الألواح الجانبية) بتسرّب الزيت داخلها، فيقل التدفق ويضعف الضغط. ومن علاماته: ضعف الضغط مع ارتفاع حرارة الزيت وصوت غير طبيعي وبرادة معدنية في الزيت أو الفلتر.",
          "Internal wear in the pump (gears, vanes, pistons or side plates) lets oil slip inside it, so flow drops and pressure weakens. Typical signs: low pressure with hot oil, abnormal noise, and metal particles in the oil or filter.",
        ),
      },
      {
        h: t("فرّق بين المضخة وبقية النظام", "Separate the pump from the rest of the system"),
        p: t(
          "قد تكون المضخة سليمة والتسريب الداخلي في سلندر أو صمام تحكم. الفحص على جهاز اختبار يبيّن حالة المضخة الفعلية دون تخمين، ولهذا نفحص المضخة في ورشتنا ونصدر تقرير الفحص.",
          "The pump may be fine while a cylinder or control valve leaks internally. Testing the pump on a test rig shows its real condition instead of guessing, which is why we test pumps in our workshop and issue a test report.",
        ),
      },
      {
        h: t("ماذا ترسل لنا", "What to send us"),
        list: [
          t("صورة لوحة المضخة أو الرقم المطبوع عليها", "A photo of the pump nameplate or the number stamped on it"),
          t("نوع المعدة وموديلها", "The machine type and model"),
          t("الأعراض: هل الضغط ضعيف دائمًا أم عند ارتفاع الحرارة فقط", "The symptoms: is pressure always low, or only once the oil is hot"),
          t("هل تغيّر الزيت أو الفلتر مؤخرًا", "Whether the oil or filter was changed recently"),
        ],
      },
    ],
    faq: [
      {
        q: t("هل أستبدل المضخة مباشرة؟", "Should I just replace the pump?"),
        a: t(
          "ننصح بفحصها أولًا. فقد يكون السبب صمامًا أو سلندرًا أو زيتًا، والفحص يجنّبك استبدال مضخة سليمة.",
          "We advise testing it first. The cause may be a valve, a cylinder or the oil, and a test spares you replacing a pump that is sound.",
        ),
      },
      {
        q: t("كيف أعرف نوع المضخة؟", "How do I identify the pump?"),
        a: t(
          "غالبًا توجد لوحة معدنية أو رقم مطبوع على جسم المضخة. صوّره وأرسله على واتساب، وإن لم تجده فأرسل صور المضخة من أكثر من زاوية.",
          "There is usually a metal plate or a number stamped on the pump body. Photograph it and send it on WhatsApp; if you cannot find one, send photos of the pump from several angles.",
        ),
      },
      {
        q: t("هل تصلحون مضخات المعدات المتنقلة والخلاطات؟", "Do you repair pumps from mobile equipment and mixers?"),
        a: t(
          "نعم، نتعامل مع المضخات الصناعية ومضخات المعدات المتنقلة. أرسل صورة لوحة المضخة أو رقمها على واتساب.",
          "Yes, we handle industrial pumps and pumps from mobile equipment. Send a photo of the pump nameplate or its number on WhatsApp.",
        ),
      },
    ],
    related: ["hydraulic-pump", "pump-testing", "gear-pump"],
    ask: t("السلام عليكم، المضخة الهيدروليكية ضغطها ضعيف وأرغب بفحصها وعرض سعر.", "Hello, my hydraulic pump has low pressure and I would like it tested and a quote."),
  },

  /* ---------------------------------------------------------------- 3 */
  {
    slug: "hydraulic-pump-noise",
    published: "2026-11-13",
    title: t("صوت المضخة الهيدروليكية العالي", "Noisy hydraulic pump"),
    card: t("التكهف ودخول الهواء وأسباب أخرى للصوت", "Cavitation, air in the oil and other causes of noise"),
    metaTitle: t("صوت مضخة هيدروليك عالٍ: الأسباب", "Noisy Hydraulic Pump: Causes & What to Check"),
    desc: t(
      "صوت المضخة الهيدروليكية العالي غالبًا من التكهف أو دخول الهواء. تعرّف على الأسباب وما تفحصه أولًا ومتى يلزم فحص المضخة في الورشة.",
      "A noisy hydraulic pump is often cavitation or air in the oil. Learn the causes, what to check first, and when the pump needs testing in a workshop.",
    ),
    h1: t("صوت مضخة هيدروليك عالٍ: التكهف ودخول الهواء وأسباب أخرى", "Noisy hydraulic pump: cavitation, air in the oil and other causes"),
    answer: t(
      "المضخة الهيدروليكية التي تصفّر أو تطقطق أو يشبه صوتها الحصى تكون غالبًا محرومة من الزيت أو تسحب هواءً. التكهف (عدم وصول زيت كافٍ إلى المدخل) ودخول الهواء في الزيت أكثر سببين شيوعًا. افحص مستوى الزيت ومصفاة الشفط وليّ الشفط ووصلاته أولًا، فإن استمر الصوت فقد تكون المضخة متآكلة.",
      "A hydraulic pump that whines, rattles or sounds like gravel is usually starved of oil or sucking air. Cavitation (not enough oil reaching the inlet) and aeration (air in the oil) are the most common causes. Check the oil level, suction strainer, suction hose and fittings first; if the noise continues, the pump may be worn.",
    ),
    note: t(
      "أوقف المعدة وأفرغ الضغط قبل فحص خطوط الشفط أو الضغط. لا تقرّب يدك من وصلة تسرّب زيتًا وهي تعمل.",
      "Stop the machine and release the pressure before checking suction or pressure lines. Never put your hand near a fitting that is leaking oil while the machine runs.",
    ),
    sections: [
      {
        h: t("ماذا يعني الصوت؟", "What the sound can tell you"),
        p: t(
          "الصفير أو الأنين المرتفع يدل غالبًا على تكهف أو دخول هواء. والصوت الذي يشبه الحصى أو الطقطقة قد يدل على تكهف أو على تلف داخلي. أما الطرق أو الاهتزاز عند منطقة التوصيل فقد يكون من الكبلنج أو عدم استقامة المحور.",
          "A high whine usually points to cavitation or air in the oil. A gravel-like rattle can mean cavitation or internal damage. Knocking or vibration at the drive end may come from the coupling or from shaft misalignment.",
        ),
      },
      {
        h: t("التكهف (Cavitation)", "Cavitation"),
        p: t(
          "يحدث عندما لا يصل إلى مدخل المضخة زيت كافٍ، فتتكوّن فقاعات تنهار داخل المضخة وتأكل أسطحها مع الوقت. من أسبابه:",
          "It happens when not enough oil reaches the pump inlet, so bubbles form and collapse inside the pump and slowly erode its surfaces. Typical causes:",
        ),
        list: [
          t("مصفاة شفط مسدودة", "A blocked suction strainer"),
          t("خط شفط طويل أو ضيّق أو مطويّ", "A suction line that is long, narrow or kinked"),
          t("زيت شديد اللزوجة، خصوصًا عند البرودة", "Oil that is too thick, especially when cold"),
          t("مستوى زيت منخفض في الخزان", "A low oil level in the tank"),
        ],
      },
      {
        h: t("دخول الهواء (Aeration)", "Air in the oil (aeration)"),
        p: t(
          "يدخل الهواء من وصلة شفط مرتخية أو من ختم عمود المضخة أو من ليّ شفط متشقق، فيظهر زبد في الزيت داخل الخزان ويرتفع الصوت. راقب الزيت في الخزان: الزبد الدائم علامة على دخول هواء.",
          "Air gets in through a loose suction fitting, the pump shaft seal or a cracked suction hose, so foam shows in the oil in the tank and the noise rises. Watch the oil in the tank: constant foam is a sign of air entering.",
        ),
      },
      {
        h: t("أسباب أخرى", "Other causes"),
        list: [
          t("كبلنج تالف أو محور غير مستقيم بين المحرك والمضخة", "A worn coupling or misaligned shaft between motor and pump"),
          t("تثبيت مرتخٍ للمضخة أو الحامل", "A loose pump mount or bracket"),
          t("ضغط أعلى من المعتاد بسبب ضبط الصمام أو انسداد في الدائرة", "Higher pressure than normal from valve settings or a blockage in the circuit"),
          t("تلف داخلي في المضخة نفسها", "Internal damage in the pump itself"),
        ],
      },
      {
        h: t("متى توقف المعدة", "When to stop the machine"),
        p: t(
          "الصوت العالي المستمر يتلف المضخة تدريجيًا. إذا لم تجد السبب بالفحص البسيط فأوقف المعدة وافحص المضخة قبل أن يزيد الضرر.",
          "Constant loud noise damages the pump gradually. If the simple checks do not find the cause, stop the machine and have the pump checked before the damage grows.",
        ),
      },
    ],
    faq: [
      {
        q: t("هل الصوت العالي يعني أن المضخة تالفة؟", "Does a loud pump mean it is damaged?"),
        a: t(
          "ليس دائمًا. كثيرًا ما يكون السبب مصفاة مسدودة أو هواء في خط الشفط أو زيت غير مناسب، وتزول المشكلة بإصلاحه. لكن الاستمرار في التشغيل بالصوت العالي يضر المضخة، فافحصها مبكرًا.",
          "Not always. The cause is often a blocked strainer, air in the suction line or unsuitable oil, and the noise goes once that is fixed. But running on with loud noise harms the pump, so check it early.",
        ),
      },
      {
        q: t("هل تفحصون المضخة وتحددون سبب الصوت؟", "Can you test the pump and find the cause of the noise?"),
        a: t(
          "نفحص جميع أنواع المضخات الهيدروليكية في ورشتنا ونصدر تقرير الفحص. أرسل صورة المضخة على واتساب، ويفيدنا تسجيل قصير للصوت.",
          "We test all types of hydraulic pumps in our workshop and issue a test report. Send a photo of the pump on WhatsApp; a short recording of the noise also helps.",
        ),
      },
      {
        q: t("هل يؤثر نوع الزيت في الصوت؟", "Does the type of oil affect the noise?"),
        a: t(
          "نعم. الزيت شديد اللزوجة، خصوصًا عند البرودة، يصعّب امتلاء المضخة فيرتفع الصوت. استخدم النوع الذي يحدده دليل المعدة.",
          "Yes. Oil that is too thick, especially when cold, makes it harder for the pump to fill and the noise rises. Use the type given in the machine manual.",
        ),
      },
    ],
    related: ["hydraulic-pump", "pump-testing", "hydraulic-hoses"],
    ask: t("السلام عليكم، المضخة الهيدروليكية صوتها عالٍ وأرغب بفحصها وعرض سعر.", "Hello, my hydraulic pump is noisy and I would like it tested and a quote."),
  },

  /* ---------------------------------------------------------------- 4 */
  {
    slug: "hydraulic-oil-overheating",
    published: "2026-11-13",
    title: t("ارتفاع حرارة زيت الهيدروليك", "Hydraulic oil overheating"),
    card: t("لماذا يسخن الزيت وما الذي تفحصه", "Why the oil runs hot and what to check"),
    metaTitle: t("ارتفاع حرارة زيت الهيدروليك: الأسباب", "Hydraulic Oil Overheating: Causes & Prevention"),
    desc: t(
      "ارتفاع حرارة زيت الهيدروليك يأتي من تسريب داخلي أو صمام تنفيس يفتح باستمرار أو مبرّد مسدود. تعرّف على الأسباب والعلامات وما تفحصه أولًا.",
      "Hydraulic oil overheating comes from internal leakage, a relief valve dumping oil or a clogged cooler. Causes, warning signs and what to check first.",
    ),
    h1: t("ارتفاع حرارة زيت الهيدروليك: الأسباب وكيف تتجنبه", "Hydraulic oil overheating: causes and prevention"),
    answer: t(
      "يسخن زيت الهيدروليك عندما ينتج النظام حرارة أكثر مما يستطيع التخلص منه. من أسبابه المعتادة التسريب الداخلي في مضخة أو سلندر أو صمام متآكل، وصمام تنفيس يعيد الزيت باستمرار، ومبرّد أو فلتر مسدود، ونقص الزيت، وحرارة الجو. الحرارة العالية تقصّر عمر الزيت والأختام معًا.",
      "Hydraulic oil overheats when the system makes more heat than it can shed. Typical causes are internal leakage in a worn pump, cylinder or valve, a relief valve that keeps dumping oil, a clogged cooler or filter, low oil level, and a hot working environment. Heat shortens the life of both the oil and the seals.",
    ),
    note: t(
      "لا تفتح خطوط الزيت أو غطاء الخزان والزيت ساخن أو تحت الضغط. أوقف المعدة واتركها تبرد وأفرغ الضغط أولًا.",
      "Never open oil lines or the tank cap while the oil is hot or under pressure. Stop the machine, let it cool and release the pressure first.",
    ),
    sections: [
      {
        h: t("لماذا ترتفع الحرارة؟", "Why does the oil get hot?"),
        p: t(
          "كل ضغط يُفقد دون أن يؤدي عملًا مفيدًا يتحول إلى حرارة. عندما يمرّ الزيت من فجوة متآكلة أو من صمام مفتوح أكثر من اللازم، يتحول فرق الضغط إلى حرارة داخل الزيت.",
          "Pressure that is lost without doing useful work turns into heat. When oil slips through a worn gap or past a valve that is open more than it should be, the pressure drop becomes heat in the oil.",
        ),
      },
      {
        h: t("الأسباب الشائعة", "Common causes"),
        list: [
          t("تآكل داخلي في المضخة أو السلندر أو الصمام (تسريب داخلي)", "Internal wear in the pump, cylinder or valve (internal leakage)"),
          t("صمام تنفيس يعمل باستمرار بسبب ضبط منخفض أو حمل زائد", "A relief valve working constantly because of a low setting or an overload"),
          t("مبرّد زيت متسخ أو مروحته لا تعمل", "A dirty oil cooler or a fan that is not working"),
          t("مستوى زيت منخفض أو خزان صغير على المعدة", "A low oil level, or a small tank on the machine"),
          t("زيت بلزوجة غير مناسبة أو زيت متدهور", "Oil of the wrong viscosity, or degraded oil"),
          t("تشغيل متواصل بأحمال عالية في جو حار", "Continuous heavy work in a hot environment"),
        ],
      },
      {
        h: t("علامات أن الحرارة تضر بالنظام", "Signs that heat is harming the system"),
        list: [
          t("زيت داكن أو رائحة محروقة", "Dark oil or a burnt smell"),
          t("أختام وليّات متصلبة أو متشققة", "Seals and hoses that are hard or cracked"),
          t("بطء المعدة بعد أن تسخن", "The machine slowing down once it warms up"),
          t("تكرار تسريب الأختام", "Seals that keep leaking again"),
        ],
      },
      {
        h: t("ماذا تفحص أولًا", "What to check first"),
        list: [
          t("مستوى الزيت في الخزان", "The oil level in the tank"),
          t("نظافة المبرّد وعمل المروحة", "Cooler cleanliness and fan operation"),
          t("حالة الفلتر ومواعيد تغييره في دليل المعدة", "The filter and its change interval in the machine manual"),
          t("هل ترتفع الحرارة مع حركة معينة فقط؟ قد يدل ذلك على سلندر أو صمام بعينه", "Whether the heat rises with one particular movement only; that can point to one cylinder or valve"),
          t("إذا استمر الارتفاع: فحص المضخة والصمامات لمعرفة وجود تسريب داخلي", "If it persists: test the pump and valves to find internal leakage"),
        ],
      },
    ],
    faq: [
      {
        q: t("ما درجة الحرارة الآمنة لزيت الهيدروليك؟", "What oil temperature is safe?"),
        a: t(
          "تختلف حسب المعدة ونوع الزيت، فارجع إلى دليل المعدة أو بيانات الزيت لمعرفة الحد الأقصى. وإذا بدأت المعدة تتباطأ أو ظهرت رائحة زيت محروق فأوقفها وافحصها.",
          "It depends on the machine and the oil, so check the machine manual or the oil data sheet for the limit. If the machine starts to slow down or you smell burnt oil, stop it and inspect it.",
        ),
      },
      {
        q: t("هل تغيير الزيت وحده يحل المشكلة؟", "Does changing the oil alone fix it?"),
        a: t(
          "فقط إذا كان الزيت نفسه هو السبب، كزيت متدهور أو بلزوجة غير مناسبة. وإذا كان السبب تآكلًا داخليًا أو صمامًا فسيعود الارتفاع، فيلزم فحص المضخة والصمامات.",
          "Only if the oil itself is the cause, such as degraded oil or the wrong viscosity. If the cause is internal wear or a valve, the heat returns, so the pump and valves need checking.",
        ),
      },
      {
        q: t("هل تفحصون مضخة ترتفع حرارتها؟", "Can you test a pump that runs hot?"),
        a: t(
          "نعم، نفحص جميع أنواع المضخات الهيدروليكية ونصدر تقرير الفحص، كما نصلح صمامات التحكم والموزعات.",
          "Yes, we test all types of hydraulic pumps and issue a test report, and we also repair control valves and distributors.",
        ),
      },
    ],
    related: ["hydraulic-pump", "control-valve", "power-pack"],
    ask: t("السلام عليكم، زيت الهيدروليك في معدتي ترتفع حرارته وأرغب بالفحص وعرض سعر.", "Hello, the hydraulic oil on my machine overheats and I would like an inspection and a quote."),
  },

  /* ---------------------------------------------------------------- 5 */
  {
    slug: "repair-or-replace-hydraulic-cylinder",
    published: "2026-11-13",
    title: t("صيانة السلندر أم استبداله", "Repair or replace a hydraulic cylinder"),
    card: t("كيف تقرر بين الصيانة والاستبدال وتصنيع بديل", "How to choose between repair, replacement and a new-made cylinder"),
    metaTitle: t("صيانة السلندر الهيدروليكي أم استبداله", "Repair or Replace a Cylinder: How to Decide"),
    desc: t(
      "كيف تقرر بين صيانة السلندر الهيدروليكي واستبداله أو تصنيع بديل: حالة الأختام والعمود والماسورة، وما الذي يحسمه الفك والفحص.",
      "How to choose between repairing, replacing or manufacturing a new hydraulic cylinder: seals, rod and tube condition, and what a strip-down inspection decides.",
    ),
    h1: t("صيانة السلندر الهيدروليكي أم استبداله: كيف تقرر", "Repair or replace a hydraulic cylinder: how to decide"),
    answer: t(
      "الصيانة مناسبة عادةً عندما يكون الضرر في الأختام أو سطح العمود أو جزء يمكن تصنيعه أو استبداله. أما الاستبدال أو تصنيع سلندر جديد فيناسب عندما تكون الماسورة متشققة أو متآكلة بعمق، أو العمود منحنيًا بشدة، أو يتعذر توفير أجزاء ذلك الموديل. الذي يحسم القرار هو فك السلندر وفحصه.",
      "Repair is usually reasonable when the damage is in the seals, the rod surface or a part that can be made or replaced. Replacement, or a newly made cylinder, makes sense when the tube is cracked or deeply worn, the rod is badly bent, or parts for that model cannot be found. A strip-down inspection decides it.",
    ),
    sections: [
      {
        h: t("ما الذي يمكن إصلاحه عادةً", "What can usually be repaired"),
        list: [
          t("الأختام وماسح الغبار", "Seals and the wiper"),
          t("عمود مخدوش أو متآكل: يُستبدل بعمود مطلي بالكروم الصلب", "A scored or worn rod: replaced with a hard-chrome rod"),
          t("مكبس أو غطاء تالف: يمكن تصنيع بديل له", "A damaged piston or gland: a replacement can be made"),
          t("الوصلات ومنافذ الزيت", "Fittings and oil ports"),
        ],
      },
      {
        h: t("متى يصعب الإصلاح", "When repair gets difficult"),
        list: [
          t("ماسورة متشققة أو منتفخة أو متآكلة من الداخل بعمق", "A tube that is cracked, bulged or deeply worn inside"),
          t("عمود منحنٍ بشدة", "A badly bent rod"),
          t("تلف في نقاط التثبيت أو اللحام", "Damage to the mounting eyes or the welds"),
          t("أضرار متعددة تجعل الإصلاح أقرب إلى تصنيع سلندر جديد", "Several kinds of damage that bring the repair close to making a new cylinder"),
        ],
      },
      {
        h: t("الخيار الثالث: تصنيع سلندر بديل", "The third option: a manufactured replacement"),
        p: t(
          "نصنّع السلندرات الهيدروليكية القياسية بجميع أنواعها. إذا تعذّر إصلاح السلندر القديم أو لم يعد متوفرًا، يمكن تصنيع بديل وفق مقاسات القديم، والأختام تُوفَّر جاهزة أو تُصنَّع حسب المقاس.",
          "We manufacture all standard types of hydraulic cylinders. If the old cylinder cannot be repaired or is no longer available, a replacement can be made to its dimensions, with seals supplied ready-made or made to size.",
        ),
      },
      {
        h: t("ما الذي يحسم القرار", "What decides it"),
        p: t(
          "لا يمكن الحكم من الخارج. نفك السلندر ونفحص الماسورة من الداخل والعمود والمكبس، ثم نوضح لك: أختام فقط، أو إصلاح جزء، أو تصنيع بديل.",
          "It cannot be judged from the outside. We strip the cylinder and inspect the tube bore, rod and piston, then tell you which it is: seals only, a repaired part, or a manufactured replacement.",
        ),
      },
      {
        h: t("معلومات تساعدنا على تحديد الخيارات", "Information that helps us outline the options"),
        list: [
          t("صور للسلندر من عدة زوايا ولمكان الضرر", "Photos of the cylinder from several angles and of the damage"),
          t("قطر الماسورة وقطر العمود والشوط والطول وهو مغلق ونوع التثبيت", "Tube bore, rod diameter, stroke, closed length and mounting type"),
          t("نوع المعدة وموديلها", "The machine type and model"),
        ],
      },
    ],
    faq: [
      {
        q: t("هل الإصلاح أرخص من الاستبدال؟", "Is repair cheaper than replacing?"),
        a: t(
          "الأسعار تُعطى عند الطلب بعد معرفة حالة السلندر، ولا نستطيع المقارنة قبل الفحص. أرسل الصور والمقاسات على واتساب.",
          "Prices are given on request once we know the condition of the cylinder, and we cannot compare before inspection. Send photos and dimensions on WhatsApp.",
        ),
      },
      {
        q: t("هل تصلحون سلندرًا قديمًا يصعب إيجاد أجزائه؟", "Can you repair an old cylinder when parts are hard to find?"),
        a: t(
          "نفك السلندر ونفحصه ثم نصلحه أو نصنّع بديلًا له. والأختام تُوفَّر جاهزة أو تُصنَّع حسب المقاس.",
          "We strip and inspect it, then repair it or manufacture a replacement. Seals are supplied ready-made or made to size.",
        ),
      },
      {
        q: t("هل تستلمون السلندر من خارج الرياض؟", "Do you collect cylinders from outside Riyadh?"),
        a: t(
          "نعم، الاستلام والصيانة الموقعية متاحان في جميع مدن المملكة. اتصل بنا لتحديد الموعد.",
          "Yes. Pickup and on-site service are available in all cities of the Kingdom. Call us to arrange it.",
        ),
      },
    ],
    related: ["hydraulic-cylinder", "honed-tubes-chrome-rods", "hydraulic-seals"],
    ask: t("السلام عليكم، أرغب بفحص سلندر هيدروليكي وتحديد هل يُصلح أم يُستبدل.", "Hello, I would like a hydraulic cylinder inspected to decide whether to repair or replace it."),
  },

  /* ---------------------------------------------------------------- 6 */
  {
    slug: "hydraulic-repair-quote-checklist",
    published: "2026-11-13",
    title: t("ماذا ترسل لعرض سعر صيانة هيدروليك", "What to send for a hydraulic repair quote"),
    card: t("الصور والمقاسات والمعلومات التي تسرّع عرض السعر", "The photos, dimensions and details that speed up a quote"),
    metaTitle: t("عرض سعر صيانة هيدروليك: ماذا ترسل", "Hydraulic Repair Quote: What to Send"),
    desc: t(
      "ماذا ترسل لتحصل على عرض سعر صيانة سلندر أو مضخة أو صمام هيدروليك: الصور والمقاسات ورقم اللوحة ووصف العطل، عبر واتساب.",
      "What to send for a hydraulic cylinder, pump or valve repair quote: photos, dimensions, nameplate number and fault description, by WhatsApp.",
    ),
    h1: t("كيف تطلب عرض سعر لصيانة سلندر أو مضخة أو صمام هيدروليك", "How to request a quote for hydraulic cylinder, pump or valve repair"),
    answer: t(
      `للحصول على عرض سعر مفيد بسرعة، أرسل صورًا واضحة للقطعة وللمعدة، ونوع المعدة وموديلها، ووصفًا قصيرًا للعطل، وأي رقم أو مقاس تستطيع قراءته. أرسلها على واتساب إلى ${SITE.phoneDisplay}. الأسعار تُعطى عند الطلب بعد أن نرى القطعة.`,
      `To get a useful quote quickly, send clear photos of the part and of the machine, the machine make and model, a short description of the fault, and any nameplate number or dimension you can read. Send them on WhatsApp to ${SITE.phoneDisplay}. Prices are given on request once we have seen the part.`,
    ),
    sections: [
      {
        h: t("الصور المطلوبة", "The photos we need"),
        list: [
          t("القطعة كاملة من عدة زوايا", "The whole part from several angles"),
          t("مكان العطل عن قرب", "A close-up of the damage"),
          t("اللوحة المعدنية أو الأرقام المطبوعة على القطعة", "The nameplate or any numbers stamped on the part"),
          t("القطعة وهي مركّبة على المعدة، إن أمكن", "The part fitted on the machine, if possible"),
        ],
      },
      {
        h: t("معلومات المعدة والعطل", "Machine and fault details"),
        list: [
          t("نوع المعدة والماركة والموديل", "The machine type, make and model"),
          t("ما الذي يحدث تحديدًا: تسريب، ضعف، صوت، حرارة، هبوط", "What exactly happens: leak, weakness, noise, heat or drift"),
          t("متى بدأ العطل، وهل سبقه حدث مثل ضربة أو تغيير زيت", "When it started, and whether something preceded it such as an impact or an oil change"),
        ],
      },
      {
        h: t("إذا كانت القطعة سلندرًا", "If the part is a cylinder"),
        list: [
          t("قطر الماسورة الداخلي وقطر العمود", "Tube bore and rod diameter"),
          t("الشوط، والطول وهو مغلق", "Stroke, and the closed length"),
          t("نوع التثبيت", "The mounting type"),
        ],
      },
      {
        h: t("إذا كانت القطعة مضخة أو صمامًا", "If the part is a pump or a valve"),
        list: [
          t("الرقم المطبوع على اللوحة", "The number on the nameplate"),
          t("نوع المضخة إن عرفته: تروس أو ريش أو مكابس", "The pump type if you know it: gear, vane or piston"),
          t("الضغط والتدفق إن كانا مكتوبين على اللوحة", "Pressure and flow if they are printed on the plate"),
        ],
      },
      {
        h: t("بعد إرسال التفاصيل", "After you send the details"),
        p: t(
          "نراجع التفاصيل ونعطيك عرض سعر عند الطلب. نستلم القطعة من موقعك أو نحضر إلى المعدة في أي مدينة بالمملكة، ثم نصلحها أو نصنّع البديل في ورشتنا بالرياض.",
          "We review the details and give you a quote on request. We collect the part from your site, or come to the machine, in any city in the Kingdom, then repair it or manufacture the replacement in our Riyadh workshop.",
        ),
      },
    ],
    faq: [
      {
        q: t("هل أحتاج إلى فك القطعة قبل إرسال الصور؟", "Do I need to remove the part before sending photos?"),
        a: t(
          "لا. أرسل صورًا للقطعة وهي مركّبة إن لم تستطع فكها. نستلم القطعة من موقعك أو نحضر إلى المعدة.",
          "No. Send photos of the part while it is fitted if you cannot remove it. We collect the part from your site or come to the machine.",
        ),
      },
      {
        q: t("هل يمكن الاتصال بدل المراسلة؟", "Can I call instead of messaging?"),
        a: t(
          `نعم، اتصل على ${SITE.phoneDisplay}. وإرسال الصور على واتساب يسرّع عرض السعر لأنه يوضح حالة القطعة.`,
          `Yes, call ${SITE.phoneDisplay}. Sending photos on WhatsApp speeds up the quote because it shows the condition of the part.`,
        ),
      },
      {
        q: t("ما ساعات العمل؟", "What are your working hours?"),
        a: t(
          `${SITE.hours.ar}. والدعم الفني متاح في أي وقت.`,
          `${SITE.hours.en}. Technical support is available at any time.`,
        ),
      },
    ],
    related: ["hydraulic-cylinder", "hydraulic-pump", "control-valve"],
    ask: t("السلام عليكم، أرسل لكم صور القطعة وتفاصيل المعدة لعرض سعر صيانة.", "Hello, I am sending photos of the part and the machine details for a repair quote."),
  },
  /* ---------------------------------------------------------------- 7 */
  {
    slug: "hydraulic-hose-repair-fittings",
    published: "2026-11-17",
    title: t("إصلاح خرطوم الهيدروليك ووصلاته", "Hydraulic hose repair and fittings"),
    card: t("متى يُصلح الخرطوم بتركيب وصلة جديدة ومتى يُستبدل كاملًا", "When a new fitting fixes a hose and when the whole hose needs replacing"),
    metaTitle: t("إصلاح خرطوم هيدروليك ووصلاته في الرياض", "Hydraulic Hose Repair & Fittings, Riyadh"),
    desc: t(
      "إصلاح خرطوم الهيدروليك: تركيب وصلة (كرمبة) جديدة، أو قص الجزء التالف وإعادة التوصيل، أو استبدال الخرطوم كاملًا. كيف تختار ومتى يلزم كل خيار.",
      "Hydraulic hose repair: a new crimped fitting, cutting out the damaged section, or replacing the whole hose. How to choose, and when each applies.",
    ),
    h1: t("إصلاح خرطوم الهيدروليك ووصلاته: الخيارات ومتى تختار كلًا منها", "Hydraulic hose repair and fittings: the options and when each applies"),
    answer: t(
      "إذا كان التلف في الوصلة فقط والخرطوم نفسه سليمًا، يمكن قص الوصلة القديمة وتركيب وصلة (كرمبة) جديدة بنفس المقاس. أما إذا كان الخرطوم متشققًا أو منتفخًا أو متآكلًا من الداخل على طول أجزاء منه، فالاستبدال الكامل أسلم. المقاس وضغط التشغيل ونوع الوصلة هي ما يحدد القطعة الصحيحة.",
      "If only the fitting has failed and the hose itself is sound, the old fitting can be cut off and a new crimped fitting fitted to the same size. If the hose is cracked, bulged or worn through along its length, full replacement is safer. Bore size, working pressure and fitting type decide the correct part.",
    ),
    note: SAFETY,
    sections: [
      {
        h: t("هل المشكلة في الخرطوم أم في الوصلة؟", "Is the problem the hose or the fitting?"),
        p: t(
          "تسريب عند طرف الخرطوم فقط، حول الوصلة المعدنية، غالبًا سببه وصلة مرتخية أو كرمبة ضعيفة أو O-ring تالف، ويُحل بإعادة التوصيل. أما التسريب أو الانتفاخ في منتصف الخرطوم فمصدره الخرطوم نفسه، ولا يُصلح بتشديد أو بوصلة جديدة.",
          "A leak only at the hose end, around the metal fitting, is usually a loose fitting, a weak crimp or a failed O-ring, and is fixed by re-coupling. A leak or bulge along the middle of the hose comes from the hose itself, and is not fixed by tightening or a new fitting.",
        ),
      },
      {
        h: t("علامات تستدعي استبدال الخرطوم كاملًا", "Signs that call for full replacement"),
        list: [
          t("انتفاخ في الغلاف الخارجي عند الضغط", "A bulge in the outer cover under pressure"),
          t("تشقق الغلاف الخارجي أو تصلّبه، خصوصًا بعد سنوات من التعرض للحرارة أو الشمس", "A cracked or hardened outer cover, especially after years of heat or sun exposure"),
          t("ظهور خيوط التسليح المعدني من تحت الغلاف", "Exposed wire reinforcement showing through the cover"),
          t("تسريب رذاذ دقيق على طول الخرطوم وليس عند طرف واحد فقط", "A fine mist leak along the hose, not only at one end"),
          t("الخرطوم أكبر سنًا من عمر الخدمة الموصى به لنوعه أو تطبيقه", "The hose is older than the service life recommended for its type or application"),
        ],
      },
      {
        h: t("لماذا المقاس والضغط أهم من الشكل", "Why bore size and pressure rating matter more than appearance"),
        p: t(
          "خرطومان متشابهان بالشكل قد يختلفان في القطر الداخلي أو في ضغط التشغيل الأقصى أو في نوع خيوط التسليح. وصلة بمقاس خاطئ أو خرطوم بتصنيف ضغط أقل من المطلوب يفشلان بسرعة حتى لو بدا التركيب سليمًا. لذلك نحدد المقاس والضغط من الخرطوم القديم نفسه أو من دليل المعدة قبل التصنيع.",
          "Two hoses that look alike can differ in bore diameter, maximum working pressure or reinforcement type. A wrong-size fitting or a hose rated below what the system needs fails quickly even if the assembly looks correct. That is why we confirm bore size and pressure rating from the old hose itself, or from the machine manual, before making the replacement.",
        ),
      },
      {
        h: t("ماذا ترسل لنا", "What to send us"),
        list: [
          t("صورة للخرطوم كاملًا وصورة قريبة لمكان التلف أو التسريب", "A photo of the whole hose and a close-up of the damage or leak"),
          t("القياس الموجود على الخرطوم إن كان ظاهرًا (الرقم المطبوع على الغلاف)", "Any size marking printed on the hose cover, if visible"),
          t("نوع الوصلتين على الطرفين وزاويتهما", "The fitting type at each end and its angle"),
          t("الطول التقريبي ونوع المعدة", "The approximate length and the machine type"),
        ],
      },
    ],
    faq: [
      {
        q: t("هل يمكن إصلاح الخرطوم دون قصه بالكامل؟", "Can a hose be repaired without replacing it entirely?"),
        a: t(
          "إذا كان التلف عند أحد الطرفين فقط يمكن قص ذلك الجزء وتركيب وصلة جديدة، فيقصر الخرطوم قليلًا. أما تلف المنتصف فيستدعي استبدالًا كاملًا.",
          "If the damage is only at one end, that section can be cut off and a new fitting crimped on, which shortens the hose slightly. Damage in the middle calls for full replacement.",
        ),
      },
      {
        q: t("هل تصنعون خراطيم بمقاسات وأطوال مخصصة؟", "Do you make hoses to custom size and length?"),
        a: t(
          "نعم، نصنّع خراطيم الهيدروليك بالمقاس والطول والوصلات المطلوبة. أرسل الخرطوم القديم أو مقاساته على واتساب.",
          "Yes, we make hydraulic hoses to the bore, length and fittings needed. Send the old hose or its dimensions on WhatsApp.",
        ),
      },
      {
        q: t("كم يستغرق تصنيع خرطوم جديد؟", "How long does making a new hose take?"),
        a: t(
          "يعتمد على توفر المقاس والوصلة. أرسل التفاصيل وسنوضح لك الوقت المتوقع.",
          "It depends on availability of that bore and fitting. Send the details and we will give you the expected time.",
        ),
      },
    ],
    related: ["hydraulic-hoses", "hydraulic-cylinder", "hydraulic-pump"],
    ask: t("السلام عليكم، لدي خرطوم هيدروليك يسرّب وأرغب بعرض سعر إصلاح أو استبدال.", "Hello, I have a hydraulic hose that is leaking and would like a quote to repair or replace it."),
  },

  /* ---------------------------------------------------------------- 8 */
  {
    slug: "hydraulic-hose-failure-causes",
    published: "2026-11-17",
    title: t("أسباب تلف خراطيم الهيدروليك", "Why hydraulic hoses fail"),
    card: t("الحرارة والاحتكاك والالتواء وكيف تمنع تكرار التلف", "Heat, abrasion, twisting, and how to stop it happening again"),
    metaTitle: t("أسباب تلف خرطوم الهيدروليك وكيف تمنعه", "Why Hydraulic Hoses Fail & How to Prevent It"),
    desc: t(
      "لماذا يتلف خرطوم الهيدروليك قبل أوانه: الاحتكاك والحرارة والالتواء وخطأ المقاس. علامات التلف المبكر وكيف يمنع التركيب الصحيح تكراره.",
      "Why a hydraulic hose fails early: abrasion, heat, twisting and the wrong bore size. Early warning signs, and how correct routing prevents it happening again.",
    ),
    h1: t("لماذا يتلف خرطوم الهيدروليك قبل أوانه", "Why hydraulic hoses fail before their time"),
    answer: t(
      "خرطوم الهيدروليك الذي يتلف قبل عمره الطبيعي يكون غالبًا نتيجة احتكاكه بسطح معدني أثناء الحركة، أو التواء عند التركيب، أو حرارة عالية قريبة من مصدر حراري، أو ضغط يتجاوز تصنيف الخرطوم. هذه الأسباب تتكرر إذا لم يُعالج التركيب نفسه، وليس فقط استبدال الخرطوم.",
      "A hydraulic hose that fails before its normal life usually does so from rubbing against a metal surface during movement, from being twisted at installation, from heat near a hot component, or from pressure beyond the hose's rating. These causes repeat if only the hose is replaced and the routing itself is not corrected.",
    ),
    note: SAFETY,
    sections: [
      {
        h: t("الاحتكاك (Abrasion)", "Abrasion"),
        p: t(
          "عندما يلامس الخرطوم إطارًا أو هيكلًا معدنيًا ويتحرك معه الذراع أو السلندر باستمرار، يتآكل الغلاف الخارجي تدريجيًا حتى تظهر خيوط التسليح، ثم يتسرب الزيت. الحل غالبًا تثبيت الخرطوم بمشابك إضافية أو تغيير مساره، وليس فقط استبداله بنفس التركيب.",
          "When a hose rubs against a tyre or frame as an arm or cylinder moves, its outer cover wears through gradually until the reinforcement shows, and then oil leaks. The fix is usually extra clamps or a different routing, not just a replacement hose in the same path.",
        ),
      },
      {
        h: t("الالتواء عند التركيب", "Twisting at installation"),
        p: t(
          "خرطوم مركّب وهو ملتوٍ (الخطوط المطبوعة على طوله غير مستقيمة) يتحمل إجهادًا إضافيًا مع كل دورة ضغط، فيقصر عمره كثيرًا حتى لو كان المقاس والتصنيف صحيحين. عند التركيب تأكد أن الخط المطبوع يسير مستقيمًا بلا لفّ.",
          "A hose fitted while twisted (the printed line along its length is not straight) carries extra stress with every pressure cycle, which shortens its life greatly even when the bore and rating are correct. When fitting a hose, make sure the printed line runs straight with no twist.",
        ),
      },
      {
        h: t("الحرارة وخطأ المقاس أو التصنيف", "Heat, and the wrong bore or rating"),
        list: [
          t("مسار قريب جدًا من العادم أو المحرك دون حماية حرارية", "Routing too close to an exhaust or engine without heat protection"),
          t("خرطوم بمقاس داخلي أصغر من اللازم، فترتفع سرعة الزيت وحرارته", "A bore smaller than needed, which raises oil velocity and heat"),
          t("خرطوم بتصنيف ضغط أقل من ضغط النظام الفعلي", "A pressure rating below the system's actual working pressure"),
          t("طول زائد يسمح باهتزاز الخرطوم وضربه لأجزاء أخرى", "Excess slack that lets the hose vibrate and strike other parts"),
        ],
      },
      {
        h: t("كيف تمنع تكرار التلف", "How to stop it happening again"),
        p: t(
          "عند تغيير خرطوم متكرر التلف، نفحص مساره الفعلي على المعدة قبل تصنيع البديل: هل يحتك بشيء، هل طوله مناسب لحركة الذراع كاملة، وهل مقاسه وتصنيفه مطابقان لمتطلبات الدائرة. تصحيح المسار غالبًا أهم من نوع الخرطوم نفسه.",
          "When replacing a hose that keeps failing, we check its actual routing on the machine before making the replacement: whether it rubs on something, whether its length suits the full arm travel, and whether its bore and rating match what the circuit needs. Correcting the routing usually matters more than the hose itself.",
        ),
      },
    ],
    faq: [
      {
        q: t("خرطومي يتلف في نفس المكان كل مرة، لماذا؟", "The same hose keeps failing in the same spot — why?"),
        a: t(
          "هذا يدل على سبب متكرر مثل الاحتكاك أو الالتواء أو الحرارة في ذلك المكان، لا على صدفة. نفحص المسار كاملًا ونصحح التثبيت عند تصنيع البديل.",
          "That points to a repeating cause such as abrasion, twisting or heat at that spot, not coincidence. We check the whole routing and correct the mounting when we make the replacement.",
        ),
      },
      {
        q: t("هل عمر الخرطوم محدد بسنوات؟", "Is a hose's life fixed in years?"),
        a: t(
          "يعتمد على التطبيق والظروف أكثر من عدد السنوات وحدها: الحرارة والاحتكاك وعدد دورات الضغط كلها تقصّر العمر الفعلي حتى داخل نفس العمر الافتراضي.",
          "It depends more on application and conditions than years alone: heat, abrasion and the number of pressure cycles all shorten the real service life, even within the same nominal lifespan.",
        ),
      },
      {
        q: t("هل تفحصون مسار الخراطيم على المعدة قبل التصنيع؟", "Do you check hose routing on the machine before making a replacement?"),
        a: t(
          "نعم، نطلب صورًا لمسار الخرطوم على المعدة عند تكرار التلف، لنحدد السبب الفعلي قبل تصنيع البديل.",
          "Yes, we ask for photos of the hose routing on the machine when failure repeats, to find the real cause before making the replacement.",
        ),
      },
    ],
    related: ["hydraulic-hoses", "hydraulic-cylinder", "hydraulic-pump"],
    ask: t("السلام عليكم، خرطوم الهيدروليك عندي يتلف بشكل متكرر وأرغب بمعرفة السبب وعرض سعر.", "Hello, my hydraulic hose keeps failing and I would like to know the cause and get a quote."),
  },

  /* ---------------------------------------------------------------- 9 */
  {
    slug: "hydraulic-hose-sizing-fitting-types",
    published: "2026-11-17",
    title: t("مقاسات خراطيم الهيدروليك وأنواع وصلاتها", "Hydraulic hose sizing and fitting types"),
    card: t("القطر الداخلي وتصنيف الضغط وأشكال الوصلات الشائعة", "Bore diameter, pressure rating and the common fitting shapes"),
    metaTitle: t("مقاسات خرطوم الهيدروليك وأنواع الوصلات", "Hydraulic Hose Sizes & Fitting Types Explained"),
    desc: t(
      "دليل مبسّط لمقاسات خراطيم الهيدروليك (القطر الداخلي وتصنيف الضغط) وأشكال الوصلات الشائعة JIC وBSP وORFS، ولماذا لا يصح تبديلها عشوائيًا.",
      "A plain guide to hydraulic hose sizing (bore diameter, pressure rating) and the common fitting types — JIC, BSP, ORFS — and why they cannot be mixed.",
    ),
    h1: t("مقاسات خراطيم الهيدروليك وأنواع الوصلات: دليل مبسّط", "Hydraulic hose sizing and fitting types: a plain guide"),
    answer: t(
      "يُحدَّد خرطوم الهيدروليك بثلاثة أرقام رئيسية: القطر الداخلي (البور)، وتصنيف الضغط الأقصى، وعدد طبقات التسليح المعدني. أما الوصلة فتُحدَّد بشكلها (مستقيمة أو زاوية) ونوع تدريجها (JIC، BSP، ORFS، متري) الذي يجب أن يطابق الجهة المقابلة تمامًا، فلا يصح خلط الأنواع حتى لو بدت متشابهة.",
      "A hydraulic hose is defined by three main figures: bore diameter, maximum pressure rating, and the number of wire-reinforcement layers. A fitting is defined by its shape (straight or angled) and its thread standard — JIC, BSP, ORFS, metric — which must match the mating side exactly; thread standards cannot be mixed even when they look similar.",
    ),
    sections: [
      {
        h: t("القطر الداخلي (البور)", "Bore diameter"),
        p: t(
          "هو المقاس الذي يحدد كمية الزيت التي يمرّرها الخرطوم. خرطوم بقطر أصغر من المطلوب يرفع سرعة الزيت وحرارته ويقلل الأداء، وخرطوم أكبر من اللازم ليس خطأً تقنيًا دائمًا لكنه أثقل وأغلى بلا داعٍ. القطر الصحيح يُؤخذ من الخرطوم القديم أو من دليل المعدة.",
          "This is the figure that decides how much oil the hose can pass. A bore smaller than needed raises oil speed and heat and reduces performance; a bore larger than needed is not always a technical fault but adds unnecessary weight and cost. The correct bore is taken from the old hose or the machine manual.",
        ),
      },
      {
        h: t("تصنيف الضغط", "Pressure rating"),
        p: t(
          "يحدده عدد طبقات التسليح المعدني (سلك واحد، أو سلكان، أو ضفيرة متعددة الطبقات للضغط العالي جدًا). يجب أن يكون تصنيف الخرطوم مساويًا لضغط النظام الفعلي أو أعلى منه، لا أقل، حتى عند ضغوط الذروة اللحظية.",
          "This is set by the number of wire-reinforcement layers (single wire, double wire, or multi-spiral for very high pressure). The hose rating must equal or exceed the system's actual working pressure, not fall short of it, even during momentary pressure spikes.",
        ),
      },
      {
        h: t("أنواع الوصلات الشائعة", "Common fitting standards"),
        list: [
          t("JIC: وصلة أمريكية الأصل بزاوية 37 درجة، شائعة جدًا في المعدات الصناعية", "JIC: a US-origin 37° flare fitting, very common on industrial equipment"),
          t("BSP: تدريج بريطاني، يُستخدم غالبًا في المعدات الأوروبية وبعض الآلات", "BSP: British thread, common on European equipment and some machinery"),
          t("ORFS: وصلة بحلقة O-ring مسطحة، تُستخدم عند الحاجة إلى إحكام أعلى ومنع التسريب عند الاهتزاز", "ORFS: an O-ring face-seal fitting, used where a tighter seal is needed and vibration risks a leak"),
          t("وصلات مترية ونمساوية الصنع، شائعة في بعض المعدات الأوروبية والصينية", "Metric and DIN-style fittings, common on some European and Chinese equipment"),
        ],
      },
      {
        h: t("لماذا لا يصح الخلط بين الأنواع", "Why thread standards cannot be mixed"),
        p: t(
          "وصلتان بزاوية مختلفة قليلًا (مثل JIC وBSP) قد تبدوان متطابقتين بصريًا ويمكن لفّهما ببعض، لكنهما لا تحكمان الإغلاق فعليًا فيحدث تسريب بعد فترة قصيرة من التشغيل. عند الشك في النوع، نقيس الزاوية والتدريج فعليًا قبل التصنيع.",
          "Two fittings with slightly different flare angles, such as JIC and BSP, can look alike and even thread together partway, but they do not actually seal, and a leak appears after a short time running. When the standard is in doubt, we measure the angle and thread pitch directly before making the replacement.",
        ),
      },
    ],
    faq: [
      {
        q: t("كيف أعرف نوع الوصلة في معدتي؟", "How do I know which fitting standard my machine uses?"),
        a: t(
          "أرسل صورة قريبة وواضحة للوصلة، ويفضّل مع مسطرة أو عملة معدنية بجانبها للمقارنة، وسنحدد النوع.",
          "Send a clear close-up photo of the fitting, ideally with a ruler or a coin next to it for scale, and we will identify the standard.",
        ),
      },
      {
        q: t("هل يمكن تغيير نوع الوصلة عند تصنيع خرطوم جديد؟", "Can the fitting type be changed when making a new hose?"),
        a: t(
          "نعم، إذا كانت الجهة المقابلة ثابتة يمكن تصنيع الخرطوم بوصلة تطابقها تمامًا حتى لو اختلفت عن الخرطوم القديم.",
          "Yes, if the mating side is fixed, the new hose can be made with a fitting that matches it exactly, even if that differs from the old hose's fitting.",
        ),
      },
      {
        q: t("هل تصنعون خراطيم بجميع أنواع الوصلات؟", "Do you make hoses with all these fitting types?"),
        a: t(
          "نعم، نصنّع خراطيم الهيدروليك بالمقاس والضغط والوصلة المطلوبة. أرسل التفاصيل أو الخرطوم القديم على واتساب.",
          "Yes, we make hydraulic hoses to the bore, pressure rating and fitting needed. Send the details or the old hose on WhatsApp.",
        ),
      },
    ],
    related: ["hydraulic-hoses", "hydraulic-cylinder", "control-valve"],
    ask: t("السلام عليكم، أحتاج تصنيع خرطوم هيدروليك بمقاس ووصلة محددة وأرغب بعرض سعر.", "Hello, I need a hydraulic hose made to a specific size and fitting and would like a quote."),
  },

  /* --------------------------------------------------------------- 10 */
  {
    slug: "hydraulic-cylinder-repair-kit-cost",
    published: "2026-11-17",
    title: t("طقم أختام السلندر الهيدروليكي وتكلفة إصلاحه", "Hydraulic cylinder seal kits and what repair involves"),
    card: t("ما الذي يتضمنه طقم الأختام وما الذي يحدد تكلفة الإصلاح", "What a seal kit includes, and what actually decides repair cost"),
    metaTitle: t("طقم أختام سلندر هيدروليك وتكلفة الإصلاح", "Hydraulic Cylinder Seal Kits & Repair Cost"),
    desc: t(
      "ما الذي يتضمنه طقم أختام السلندر الهيدروليكي، والفرق بين الطقم الجاهز والمصنّع حسب المقاس، وما الذي يحدد تكلفة إصلاح السلندر فعليًا.",
      "What a cylinder seal kit includes, the difference between a ready-made kit and one made to size, and what decides the real repair cost.",
    ),
    h1: t("طقم أختام السلندر الهيدروليكي: ما يتضمنه وما يحدد تكلفة الإصلاح", "Hydraulic cylinder seal kits: what they include and what decides repair cost"),
    answer: t(
      "طقم أختام السلندر يشمل عادة ختم العمود وماسح الغبار وختم المكبس وحلقات O-ring وأحيانًا حلقات دعم (باك-أب رينغ)، بحسب تصميم السلندر. الطقم الجاهز يتوفر للمقاسات الشائعة، أما المقاسات غير القياسية أو القديمة فتُصنَّع أختامها حسب المقاس. تكلفة الإصلاح الفعلية تتحدد بعد الفك والفحص، لا من نوع الطقم وحده.",
      "A cylinder seal kit usually includes a rod seal, a wiper, a piston seal, O-rings and sometimes back-up rings, depending on the cylinder's design. Ready-made kits cover common sizes; non-standard or older sizes are made to order. The real repair cost is set after the cylinder is stripped and inspected, not from the kit alone.",
    ),
    note: SAFETY,
    sections: [
      {
        h: t("ما الذي يتضمنه الطقم عادة", "What a kit usually includes"),
        list: [
          t("ختم العمود (Rod seal): يمنع تسرب الزيت حول العمود المتحرك", "Rod seal: keeps oil from leaking around the moving rod"),
          t("ماسح الغبار (Wiper): يمنع دخول الغبار والرطوبة مع عودة العمود", "Wiper: keeps dust and moisture from being dragged in as the rod returns"),
          t("ختم المكبس (Piston seal): يمنع مرور الزيت من جهة إلى أخرى داخل الماسورة", "Piston seal: stops oil passing from one side of the tube to the other"),
          t("حلقات O-ring وحلقات دعم عند الحاجة", "O-rings and back-up rings where the design needs them"),
        ],
      },
      {
        h: t("طقم جاهز أم مصنّع حسب المقاس؟", "Ready-made kit or made to size?"),
        p: t(
          "المقاسات الشائعة لسلندرات معروفة تتوفر لها أطقم جاهزة بسرعة. أما السلندرات القديمة أو غير القياسية أو المصنّعة محليًا فقد لا يتوفر لها طقم جاهز، فتُصنَّع الأختام حسب مقاسات الماسورة والعمود والمكبس الفعلية بعد القياس المباشر.",
          "Common sizes for well-known cylinders have ready-made kits available quickly. Older, non-standard or locally manufactured cylinders may have no ready-made kit, so the seals are made to the actual measured dimensions of the tube, rod and piston after direct measurement.",
        ),
      },
      {
        h: t("ما الذي يحدد تكلفة الإصلاح الفعلية", "What actually decides the real repair cost"),
        list: [
          t("هل الأختام فقط تالفة أم أن العمود مخدوش والماسورة متآكلة أيضًا", "Whether only the seals are worn, or the rod is scored and the tube worn too"),
          t("توفر الطقم جاهزًا أو الحاجة إلى تصنيعه حسب المقاس", "Whether a kit is available ready-made or has to be made to size"),
          t("حاجة العمود إلى إعادة طلاء بالكروم الصلب أو استبدال كامل", "Whether the rod needs re-chroming or full replacement"),
          t("حالة الماسورة من الداخل وحاجتها إلى تقويم أو تصنيع ماسورة مصقولة جديدة (Honed tube)", "The tube bore's condition, and whether it needs reworking or a new honed tube"),
        ],
      },
      {
        h: t("ماذا ترسل لنا", "What to send us"),
        list: [
          t("صور للسلندر من عدة زوايا ولمكان التسريب أو العطل", "Photos of the cylinder from several angles and of the leak or fault"),
          t("قطر الماسورة وقطر العمود والشوط والطول وهو مغلق", "Tube bore, rod diameter, stroke and closed length"),
          t("نوع المعدة وموديلها، ورقم السلندر إن كان مطبوعًا عليه", "The machine type and model, and the cylinder's number if it is stamped on it"),
        ],
      },
    ],
    faq: [
      {
        q: t("هل سعر طقم الأختام هو سعر الإصلاح الكامل؟", "Is the seal kit price the full repair cost?"),
        a: t(
          "لا بالضرورة. إذا احتاج العمود أو الماسورة إصلاحًا إضافيًا فتُضاف تكلفته. نوضح لك ذلك بعد الفك والفحص.",
          "Not necessarily. If the rod or tube needs additional work, that cost is added. We make this clear after stripping and inspecting the cylinder.",
        ),
      },
      {
        q: t("هل يمكن تصنيع طقم أختام لسلندر قديم لا يتوفر له طقم جاهز؟", "Can a seal kit be made for an old cylinder with no ready-made kit?"),
        a: t(
          "نعم، نقيس الماسورة والعمود والمكبس مباشرة ونصنّع الأختام حسب تلك المقاسات.",
          "Yes, we measure the tube, rod and piston directly and make the seals to those exact dimensions.",
        ),
      },
      {
        q: t("كم يستغرق إصلاح السلندر عادة؟", "How long does a typical cylinder repair take?"),
        a: t(
          "يعتمد على نتيجة الفحص وتوفر الأختام أو العمود. أرسل تفاصيل السلندر على واتساب وسنوضح لك الوقت المتوقع بعد الفحص.",
          "It depends on the inspection result and the availability of seals or a rod. Send the cylinder details on WhatsApp and we will give you the expected time after inspection.",
        ),
      },
    ],
    related: ["hydraulic-cylinder", "hydraulic-seals", "honed-tubes-chrome-rods"],
    ask: t("السلام عليكم، أرغب بعرض سعر لتغيير أختام سلندر هيدروليكي.", "Hello, I would like a quote to re-seal a hydraulic cylinder."),
  },

  /* --------------------------------------------------------------- 11 */
  {
    slug: "hydraulic-seal-kit-selection",
    published: "2026-11-17",
    title: t("اختيار طقم أختام الهيدروليك الصحيح", "Choosing the right hydraulic seal kit"),
    card: t("كيف تحدد المقاس والمادة الصحيحين قبل الطلب", "How to confirm the right size and material before ordering"),
    metaTitle: t("اختيار طقم أختام هيدروليك صحيح", "Choosing the Right Hydraulic Seal Kit"),
    desc: t(
      "كيف تختار طقم أختام الهيدروليك الصحيح: القياس المباشر بدل الاعتماد على رقم الموديل، ومتى تلزم مادة أختام مختلفة عن الأصلية.",
      "How to choose the right hydraulic seal kit: why direct measurement beats a model number alone, and when a different seal material is actually needed.",
    ),
    h1: t("كيف تختار طقم أختام الهيدروليك الصحيح", "How to choose the right hydraulic seal kit"),
    answer: t(
      "الطريقة الأضمن لاختيار أختام صحيحة هي القياس المباشر لقطر الماسورة والعمود وعرض مجرى الختم، لا الاعتماد على رقم الموديل وحده، لأن موديلات كثيرة تُصنَّع بمقاسات مختلفة قليلًا عبر السنين. مادة الختم (نيتريل، بوليي يوريثان، فيتون) تُختار حسب نوع الزيت ودرجة الحرارة، ولا تُستبدل الأصلية إلا لسبب فني واضح.",
      "The safest way to choose the right seals is direct measurement of tube bore, rod diameter and the seal groove width, not relying on a model number alone, since many models were made in slightly different sizes over the years. Seal material (nitrile, polyurethane, Viton) is chosen for the oil type and temperature, and the original material is only changed for a clear technical reason.",
    ),
    sections: [
      {
        h: t("لماذا القياس المباشر أدق من رقم الموديل", "Why direct measurement beats a model number"),
        p: t(
          "رقم موديل واحد قد يُصنَّع بمقاسات مجرى مختلفة قليلًا عبر سنوات الإنتاج أو بين مصانع مختلفة. الاعتماد على الرقم وحده قد يجلب طقمًا أقرب للمقاس لا مطابقًا له، فيتسرب بسرعة. القياس المباشر لقطر الماسورة والعمود وعرض المجرى يزيل هذا الاحتمال.",
          "A single model number may have been produced with slightly different groove sizes across production years or between factories. Relying on the number alone can bring a kit that is close to the size but not an exact match, which leaks quickly. Direct measurement of tube bore, rod diameter and groove width removes that risk.",
        ),
      },
      {
        h: t("مادة الختم: نيتريل أم بوليي يوريثان أم فيتون", "Seal material: nitrile, polyurethane or Viton"),
        list: [
          t("النيتريل (NBR): مادة شائعة ومناسبة لمعظم زيوت الهيدروليك المعدنية في درجات الحرارة العادية", "Nitrile (NBR): a common material suited to most mineral hydraulic oils at ordinary temperatures"),
          t("بوليي يوريثان (PU): مقاومة أعلى للتآكل والضغط العالي، شائعة في أختام العمود والمكبس", "Polyurethane (PU): higher wear and extrusion resistance, common for rod and piston seals"),
          t("فيتون (Viton/FKM): لدرجات حرارة أعلى أو سوائل خاصة لا يتحملها النيتريل", "Viton (FKM): for higher temperatures or special fluids that nitrile cannot handle"),
        ],
      },
      {
        h: t("متى تُغيَّر مادة الختم عن الأصلية", "When to change the seal material from the original"),
        p: t(
          "إذا تكرر تلف الأختام رغم سلامة الماسورة والعمود، وكانت المعدة تعمل في حرارة عالية أو مع زيت غير معتاد، فقد يكون تغيير مادة الختم هو الحل الفعلي، لا تكرار نفس المادة التي تفشل. نحدد ذلك بعد معرفة ظروف التشغيل الفعلية.",
          "If seals keep failing even though the tube and rod are sound, and the machine runs in high heat or with an unusual oil, changing the seal material may be the real fix rather than repeating the same material that keeps failing. We decide this once we know the actual operating conditions.",
        ),
      },
      {
        h: t("ماذا ترسل لنا", "What to send us"),
        list: [
          t("قطر الماسورة الداخلي وقطر العمود، مقاسين مباشرة إن أمكن", "Tube bore and rod diameter, measured directly if possible"),
          t("الأختام القديمة نفسها إن توفرت، للمقارنة", "The old seals themselves, if available, for comparison"),
          t("نوع الزيت المستخدم ودرجة حرارة التشغيل التقريبية", "The oil type used and the approximate operating temperature"),
        ],
      },
    ],
    faq: [
      {
        q: t("هل يكفي رقم موديل السلندر لطلب الأختام؟", "Is the cylinder's model number enough to order seals?"),
        a: t(
          "يساعد كبداية، لكن القياس المباشر أضمن لأن نفس الموديل قد يختلف مقاس مجراه بين دفعات الإنتاج.",
          "It helps as a starting point, but direct measurement is safer because the same model can have a different groove size between production batches.",
        ),
      },
      {
        q: t("أختامي تتلف بسرعة رغم تغييرها، ما السبب؟", "My seals keep failing fast even after replacement — why?"),
        a: t(
          "قد يكون السبب خدشًا في العمود أو الماسورة لم يُعالَج، أو مادة ختم غير مناسبة لظروف التشغيل. نفحص السلندر لتحديد السبب الفعلي.",
          "The cause may be scoring on the rod or tube that was not addressed, or a seal material unsuited to the operating conditions. We inspect the cylinder to find the real cause.",
        ),
      },
      {
        q: t("هل تصنعون أختامًا بمقاسات غير متوفرة جاهزة؟", "Do you make seals in sizes that are not available ready-made?"),
        a: t(
          "نعم، نصنّع الأختام حسب المقاس المقاس مباشرة من السلندر عند عدم توفر طقم جاهز.",
          "Yes, we make seals to the dimensions measured directly from the cylinder when no ready-made kit is available.",
        ),
      },
    ],
    related: ["hydraulic-seals", "hydraulic-cylinder", "honed-tubes-chrome-rods"],
    ask: t("السلام عليكم، أرغب بمعرفة الأختام الصحيحة لسلندري وعرض سعر.", "Hello, I would like help identifying the right seals for my cylinder and a quote."),
  },

  /* --------------------------------------------------------------- 12 */
  {
    slug: "hydraulic-seal-failure-signs",
    published: "2026-11-17",
    title: t("علامات تلف أختام الهيدروليك وأسبابها", "Signs of hydraulic seal failure and their causes"),
    card: t("كيف تفرّق بين تلف الختم نفسه وتلف سببه خدش في العمود", "How to tell a worn seal from a seal damaged by a scored rod"),
    metaTitle: t("علامات تلف أختام الهيدروليك", "Signs of Hydraulic Seal Failure & Causes"),
    desc: t(
      "علامات تلف أختام الهيدروليك: تسريب، تيبّس، تشقق، أو قطع في الختم. كيف تفرّق بين تآكل طبيعي وتلف سببه خدش في العمود أو زيت غير مناسب.",
      "Signs of hydraulic seal failure: leaking, hardening, cracking or a cut seal. How to tell normal wear from damage caused by a scored rod or unsuitable oil.",
    ),
    h1: t("علامات تلف أختام الهيدروليك وما تكشفه عن السبب الحقيقي", "Signs of hydraulic seal failure, and what they reveal about the real cause"),
    answer: t(
      "ختم متآكلًا بشكل منتظم على محيطه كاملًا يدل غالبًا على تآكل طبيعي بعمر الخدمة. أما ختم مقطوعًا من جهة واحدة فقط، أو متيبسًا ومتشققًا، أو مذابًا جزئيًا، فيدل على سبب محدد: خدش في العمود، أو حرارة زائدة، أو زيت غير متوافق مع مادة الختم. معرفة الشكل يساعد في تحديد السبب قبل تكرار نفس العطل.",
      "A seal worn evenly all the way round usually points to normal wear at the end of its service life. A seal cut on one side only, or hardened and cracked, or partly dissolved, points to a specific cause: a scored rod, excess heat, or oil that is incompatible with the seal material. Reading the seal's shape helps find the cause before the same failure repeats.",
    ),
    note: SAFETY,
    sections: [
      {
        h: t("تآكل منتظم على كامل المحيط", "Even wear around the whole seal"),
        p: t(
          "هذا هو التآكل الطبيعي بانتهاء عمر الخدمة، ويُحل بتغيير الأختام فقط إذا كان العمود والماسورة سليمين.",
          "This is normal wear at the end of service life, and is fixed by replacing the seals alone, provided the rod and tube are sound.",
        ),
      },
      {
        h: t("قطع أو تلف في جهة واحدة فقط", "A cut or damage on one side only"),
        p: t(
          "يدل غالبًا على خدش أو حافة حادة في مكان واحد على العمود أو الماسورة تقطع الختم مع كل دورة حركة. تغيير الختم وحده دون معالجة الخدش يكرر نفس العطل بسرعة.",
          "This usually points to a scratch or sharp edge at one point on the rod or tube that cuts the seal with every stroke. Replacing the seal alone without addressing the scratch repeats the same failure quickly.",
        ),
      },
      {
        h: t("تيبّس وتشقق", "Hardening and cracking"),
        p: t(
          "يدل على حرارة تشغيل عالية تجاوزت تحمّل مادة الختم مع الوقت، أو زيتًا متدهورًا. يلزم هنا فحص سبب ارتفاع الحرارة، وربما تغيير مادة الختم إلى نوع أكثر تحملًا للحرارة.",
          "This points to operating heat that exceeded what the seal material could take over time, or degraded oil. This calls for checking the cause of the heat, and possibly changing to a more heat-resistant seal material.",
        ),
      },
      {
        h: t("انتفاخ أو ذوبان جزئي", "Swelling or partial dissolving"),
        p: t(
          "يدل غالبًا على عدم توافق كيميائي بين مادة الختم ونوع الزيت أو سائل التشغيل المستخدم. هنا الحل هو تغيير مادة الختم، لا تكرار نفس المادة.",
          "This usually points to a chemical incompatibility between the seal material and the oil or fluid in use. Here the fix is changing the seal material, not repeating the same one.",
        ),
      },
    ],
    faq: [
      {
        q: t("ختم سلندري مقطوع من جهة واحدة فقط، هل أغيّره فقط؟", "My seal is cut on one side only — is replacing it enough?"),
        a: t(
          "ينبغي فحص العمود والماسورة أولًا عن خدش في ذلك المكان، وإلا تكرر القطع بعد فترة قصيرة من التركيب.",
          "The rod and tube should be checked first for a scratch at that spot, or the cut repeats a short time after fitting.",
        ),
      },
      {
        q: t("هل يمكن معرفة سبب تلف الختم من شكله فقط؟", "Can the cause of seal failure be known from its shape alone?"),
        a: t(
          "يعطي مؤشرًا قويًا، لكن الفحص الفعلي للعمود والماسورة ونوع الزيت هو ما يؤكد السبب بدقة.",
          "It gives a strong indication, but actual inspection of the rod, tube and oil type is what confirms the cause precisely.",
        ),
      },
      {
        q: t("هل ترسلون تقرير فحص يوضح سبب تلف الأختام؟", "Do you provide an inspection report explaining the cause of seal failure?"),
        a: t(
          "نعم، نوضح لك سبب التلف بعد الفحص قبل البدء بالإصلاح.",
          "Yes, we explain the cause of failure after inspection, before starting the repair.",
        ),
      },
    ],
    related: ["hydraulic-seals", "hydraulic-cylinder", "honed-tubes-chrome-rods"],
    ask: t("السلام عليكم، أختام سلندري تتلف بشكل غريب وأرغب بمعرفة السبب وعرض سعر.", "Hello, my cylinder seals are failing in an unusual way and I would like to know the cause and get a quote."),
  },

  /* --------------------------------------------------------------- 13 */
  {
    slug: "hydraulic-power-pack-components",
    published: "2026-11-17",
    title: t("مكونات وحدة الطاقة الهيدروليكية", "Hydraulic power pack components"),
    card: t("الخزان والمضخة والمحرك والصمامات وكيف تعمل معًا", "The tank, pump, motor and valves, and how they work together"),
    metaTitle: t("مكونات وحدة الطاقة الهيدروليكية (باور باك)", "Hydraulic Power Pack Components Explained"),
    desc: t(
      "شرح مبسّط لمكونات وحدة الطاقة الهيدروليكية (الباور باك): الخزان والمضخة والمحرك وصمام التنفيس والمبرّد والفلتر، وكيف تترابط معًا.",
      "A plain explanation of hydraulic power pack components: tank, pump, motor, relief valve, cooler and filter, and how they connect together.",
    ),
    h1: t("مكونات وحدة الطاقة الهيدروليكية (الباور باك)", "Hydraulic power pack components explained"),
    answer: t(
      "وحدة الطاقة الهيدروليكية تجمع في صندوق أو إطار واحد: خزان الزيت، والمضخة التي تدفعه، والمحرك الذي يدير المضخة، وصمام تنفيس يحدد أقصى ضغط، وفلتر ينظف الزيت، وغالبًا مبرّدًا للحرارة. هذه الوحدة هي مصدر القدرة الهيدروليكية لسلندرات ومحركات المعدة المتصلة بها.",
      "A hydraulic power pack combines, in one unit: an oil tank, the pump that moves the oil, the motor that drives the pump, a relief valve that sets the maximum pressure, a filter that cleans the oil, and often a cooler for heat. This unit is the power source for whichever cylinders and motors it is connected to.",
    ),
    sections: [
      {
        h: t("الخزان", "The tank"),
        p: t(
          "يخزّن الزيت ويتيح له الوقت للتهدئة وترسيب الهواء والشوائب قبل عودته للمضخة. حجمه يُحسب عادة كمضاعف لمعدل تدفق المضخة في الدقيقة، لا بشكل عشوائي.",
          "It stores the oil and gives it time to settle, releasing air and letting contamination drop out before the oil returns to the pump. Its size is normally calculated as a multiple of the pump's flow rate per minute, not chosen at random.",
        ),
      },
      {
        h: t("المضخة والمحرك", "The pump and motor"),
        p: t(
          "المضخة تحوّل الحركة الدورانية من المحرك إلى تدفق زيت تحت ضغط. نوع المضخة (تروس، ريش، مكابس) يحدد الضغط الأقصى الممكن والكفاءة والتكلفة. المحرك الكهربائي أو الديزل يُختار بقدرة تناسب متطلبات المضخة من ضغط وتدفق.",
          "The pump converts the motor's rotation into oil flow under pressure. The pump type (gear, vane or piston) sets the maximum possible pressure, efficiency and cost. The electric or diesel motor is sized to match the pump's pressure and flow requirements.",
        ),
      },
      {
        h: t("صمام التنفيس والفلتر والمبرّد", "Relief valve, filter and cooler"),
        list: [
          t("صمام التنفيس: يحدد أقصى ضغط يصل إليه النظام ويحمي المضخة من الضغط الزائد", "Relief valve: sets the maximum pressure the system reaches and protects the pump from overload"),
          t("الفلتر: يحجز الشوائب التي تتلف الأختام والصمامات، ويحتاج تغييرًا دوريًا", "Filter: catches contamination that damages seals and valves, and needs periodic replacement"),
          t("المبرّد: يزيل الحرارة الزائدة الناتجة عن فقد الضغط داخل النظام، وقد يكون هوائيًا أو مائيًا", "Cooler: removes excess heat from pressure losses in the system, and may be air- or water-cooled"),
        ],
      },
      {
        h: t("كيف تترابط لتخدم المعدة", "How they connect to serve the machine"),
        p: t(
          "الزيت يخرج من الخزان إلى المضخة، ثم تحت ضغط إلى صمامات التحكم التي توجهه إلى السلندرات أو المحركات، ثم يعود إلى الخزان عبر الفلتر والمبرّد ليكمل الدورة. عطل في أي جزء يؤثر على أداء الوحدة كاملة، ولهذا نفحص الوحدة كمنظومة واحدة لا كقطع منفصلة.",
          "Oil leaves the tank to the pump, then under pressure to the control valves that direct it to cylinders or motors, then returns through the filter and cooler to complete the cycle. A fault in any one part affects the whole unit's performance, which is why we check the unit as one system rather than as separate parts.",
        ),
      },
    ],
    faq: [
      {
        q: t("هل تصنعون وحدات طاقة هيدروليكية جديدة؟", "Do you build new hydraulic power packs?"),
        a: t(
          "نعم، نصنّع وحدات الطاقة الهيدروليكية حسب متطلبات الضغط والتدفق للتطبيق المطلوب.",
          "Yes, we build hydraulic power packs sized to the pressure and flow the application needs.",
        ),
      },
      {
        q: t("وحدتي تسخن بسرعة، من أين أبدأ الفحص؟", "My power pack overheats quickly — where do I start checking?"),
        a: t(
          "ابدأ بنظافة المبرّد ومستوى الزيت وضبط صمام التنفيس. إذا استمر الارتفاع فقد يكون تسريبًا داخليًا في المضخة أو صمام.",
          "Start with cooler cleanliness, oil level and the relief valve setting. If the heat persists, it may be internal leakage in the pump or a valve.",
        ),
      },
      {
        q: t("هل تصلحون وحدات طاقة من ماركات مختلفة؟", "Do you repair power packs of different makes?"),
        a: t(
          "نعم، نتعامل مع جميع أنواع وحدات الطاقة الهيدروليكية. أرسل صور الوحدة وتفاصيل العطل على واتساب.",
          "Yes, we work on all types of hydraulic power packs. Send photos of the unit and the fault details on WhatsApp.",
        ),
      },
    ],
    related: ["power-pack", "hydraulic-pump", "control-valve"],
    ask: t("السلام عليكم، أرغب بعرض سعر لصيانة أو تصنيع وحدة طاقة هيدروليكية.", "Hello, I would like a quote to repair or build a hydraulic power pack."),
  },

  /* --------------------------------------------------------------- 14 */
  {
    slug: "hydraulic-power-pack-sizing",
    published: "2026-11-17",
    title: t("كيف تحدد مقاس وحدة الطاقة الهيدروليكية المناسبة", "How to size a hydraulic power pack"),
    card: t("الضغط والتدفق وحجم الخزان قبل اختيار الوحدة", "Pressure, flow and tank size, before picking a unit"),
    metaTitle: t("كيف تحدد مقاس وحدة الطاقة الهيدروليكية", "How to Size a Hydraulic Power Pack"),
    desc: t(
      "ما الذي يحدد مقاس وحدة الطاقة الهيدروليكية المناسبة لتطبيقك: الضغط المطلوب ومعدل التدفق وحجم الخزان وقدرة المحرك، وأخطاء شائعة عند التحجيم.",
      "What decides the right hydraulic power pack size for your application: required pressure, flow rate, tank size and motor power, and common sizing mistakes.",
    ),
    h1: t("كيف تحدد مقاس وحدة الطاقة الهيدروليكية المناسبة لتطبيقك", "How to size a hydraulic power pack for your application"),
    answer: t(
      "تحديد مقاس وحدة الطاقة يبدأ بمعرفة ضغط التشغيل المطلوب (بار) ومعدل التدفق اللازم (لتر/دقيقة) لتحريك السلندرات أو المحركات بالسرعة المطلوبة. من هذين الرقمين تُحسب قدرة المحرك، ثم يُحدد حجم الخزان كمضاعف للتدفق، ثم تُختار المضخة التي تعطي هذا التدفق عند ذلك الضغط بكفاءة مناسبة.",
      "Sizing a power pack starts with knowing the required working pressure (bar) and the flow rate (litres/minute) needed to move the cylinders or motors at the required speed. From these two figures the motor power is calculated, the tank size is set as a multiple of the flow, and a pump is chosen that delivers that flow at that pressure efficiently.",
    ),
    sections: [
      {
        h: t("ابدأ بالضغط والتدفق المطلوبين", "Start with the required pressure and flow"),
        p: t(
          "الضغط يحدده الحمل الذي يجب تحريكه (كم طنًا، أو كم قوة دفع لازمة)، ومساحة مكبس السلندر. والتدفق يحدد سرعة الحركة: تدفق أعلى يعني حركة أسرع لنفس حجم السلندر. هذان الرقمان هما نقطة البداية، لا نوع المحرك أو شكل الخزان.",
          "Pressure is set by the load that must be moved (how many tonnes, or how much push force is needed) and the cylinder's piston area. Flow sets the speed of movement: higher flow means faster movement for the same cylinder size. These two figures are the starting point, not the motor type or tank shape.",
        ),
      },
      {
        h: t("قدرة المحرك", "Motor power"),
        p: t(
          "تُحسب قدرة المحرك من حاصل ضرب الضغط في التدفق مقسومًا على كفاءة المضخة. محرك أضعف من اللازم يرتفع حمله ويسخن، ومحرك أقوى من اللازم تكلفة زائدة دون فائدة حقيقية.",
          "Motor power is calculated from pressure multiplied by flow, divided by the pump's efficiency. A motor weaker than needed is overloaded and runs hot; a motor stronger than needed is unnecessary cost without real benefit.",
        ),
      },
      {
        h: t("حجم الخزان", "Tank size"),
        p: t(
          "قاعدة شائعة هي أن يكون حجم الخزان (باللتر) ثلاثة إلى خمسة أضعاف معدل تدفق المضخة في الدقيقة، لإعطاء الزيت وقتًا كافيًا للتهدئة وترسيب الهواء. خزان أصغر من اللازم يرفع حرارة الزيت ويقصر عمره.",
          "A common rule is that tank size in litres should be three to five times the pump's flow rate per minute, to give the oil enough time to settle and release air. A tank smaller than that raises oil temperature and shortens its life.",
        ),
      },
      {
        h: t("أخطاء شائعة عند التحجيم", "Common sizing mistakes"),
        list: [
          t("اختيار مضخة بضغط أقصى أعلى من اللازم بكثير، فيزيد التكلفة دون فائدة", "Choosing a pump rated far above the needed pressure, adding cost with no benefit"),
          t("تجاهل فقد الضغط في الخراطيم والصمامات الطويلة المسار", "Ignoring pressure loss in long hose runs and valve paths"),
          t("خزان صغير جدًا بالنسبة لمعدل التدفق، فترتفع الحرارة بسرعة", "A tank too small for the flow rate, so heat rises quickly"),
          t("إهمال فرق درجة الحرارة المحيطة وقت العمل، خصوصًا في التشغيل الصيفي الطويل", "Ignoring ambient temperature at the site, especially for long summer operation"),
        ],
      },
    ],
    faq: [
      {
        q: t("ما المعلومات التي تحتاجونها لتحديد مقاس الوحدة؟", "What information do you need to size a power pack?"),
        a: t(
          "الضغط والتدفق المطلوبان، أو حجم السلندر والسرعة المطلوبة، ومدة التشغيل اليومية المتوقعة.",
          "The required pressure and flow, or the cylinder size and required speed, and the expected daily duty cycle.",
        ),
      },
      {
        q: t("وحدتي الحالية تسخن كثيرًا، هل المشكلة في التحجيم؟", "My current unit overheats a lot — is sizing the problem?"),
        a: t(
          "قد يكون السبب تحجيمًا غير مناسب، أو عطلًا مثل صمام تنفيس يعمل باستمرار. نفحص الوحدة لتحديد السبب الفعلي.",
          "It may be poor original sizing, or a fault such as a relief valve working constantly. We inspect the unit to find the real cause.",
        ),
      },
      {
        q: t("هل تصنعون وحدات طاقة مخصصة حسب التطبيق؟", "Do you build power packs custom-sized to the application?"),
        a: t(
          "نعم، نصنّع وحدات الطاقة الهيدروليكية حسب الضغط والتدفق المطلوبين لتطبيقك.",
          "Yes, we build hydraulic power packs sized to the pressure and flow your application needs.",
        ),
      },
    ],
    related: ["power-pack", "hydraulic-pump", "gear-pump"],
    ask: t("السلام عليكم، أحتاج وحدة طاقة هيدروليكية بضغط وتدفق محددين وأرغب بعرض سعر.", "Hello, I need a hydraulic power pack at a specific pressure and flow and would like a quote."),
  },

  /* --------------------------------------------------------------- 15 */
  {
    slug: "hydraulic-control-valve-types",
    published: "2026-11-17",
    title: t("أنواع صمامات التحكم الهيدروليكية", "Types of hydraulic control valves"),
    card: t("الصمام الاتجاهي وصمام التدفق وصمام التنفيس والسولينويد", "Directional, flow-control, relief and solenoid valves"),
    metaTitle: t("أنواع صمامات التحكم الهيدروليكية", "Types of Hydraulic Control Valves Explained"),
    desc: t(
      "شرح مبسّط لأنواع صمامات التحكم الهيدروليكية: الاتجاهي وصمام التدفق وصمام التنفيس والسولينويد، ووظيفة كل نوع في الدائرة الهيدروليكية.",
      "A plain explanation of hydraulic control valve types: directional, flow-control, relief and solenoid valves, and what each one does in a hydraulic circuit.",
    ),
    h1: t("أنواع صمامات التحكم الهيدروليكية ووظيفة كل نوع", "Types of hydraulic control valves and what each one does"),
    answer: t(
      "الصمام الاتجاهي يحدد إلى أين يذهب الزيت ويتحكم باتجاه حركة السلندر أو المحرك. صمام التدفق يحدد سرعة الحركة بالتحكم في كمية الزيت المارة. صمام التنفيس يحمي النظام بتحديد أقصى ضغط. والسولينويد وسيلة تشغيل كهربائية لأي من هذه الصمامات عن بعد، لا نوعًا مستقلًا بوظيفته.",
      "A directional valve decides where the oil goes and controls the direction a cylinder or motor moves. A flow-control valve sets the speed of movement by limiting how much oil passes. A relief valve protects the system by setting a maximum pressure. A solenoid is an electrical way of operating any of these valves remotely, not a separate function in itself.",
    ),
    sections: [
      {
        h: t("الصمام الاتجاهي (Directional control valve)", "Directional control valve"),
        p: t(
          "يوجّه الزيت إلى أحد جانبي السلندر أو يوقف التدفق أو يعكس اتجاهه، فيتحكم بحركة السلندر: تمديد أو سحب أو توقف. يُرمز له في المخططات بعدد المنافذ وعدد الأوضاع، مثل 4/3 (أربع منافذ وثلاثة أوضاع).",
          "It directs oil to one side of a cylinder or stops or reverses the flow, controlling the cylinder's movement: extend, retract or hold. On diagrams it is marked by its number of ports and positions, such as 4/3 (four ports, three positions).",
        ),
      },
      {
        h: t("صمام التدفق (Flow-control valve)", "Flow-control valve"),
        p: t(
          "يحدد كمية الزيت المسموح لها بالمرور في اتجاه معين، فيتحكم بسرعة حركة السلندر أو المحرك دون تغيير ضغط النظام. يُستخدم غالبًا للتحكم بسرعة هبوط حمل أو ضبط سرعة ذراع بدقة.",
          "It limits how much oil can pass in a given direction, controlling the speed of a cylinder or motor without changing the system pressure. It is often used to control how fast a load lowers, or to fine-tune an arm's speed.",
        ),
      },
      {
        h: t("صمام التنفيس (Relief valve)", "Relief valve"),
        p: t(
          "يفتح تلقائيًا إذا تجاوز الضغط حدًا معينًا، فيعيد الزيت الزائد إلى الخزان ويحمي المضخة وبقية النظام من الضغط الزائد. ضبطه يجب أن يطابق الحد الذي يحدده دليل المعدة، لا أن يُرفع عشوائيًا لزيادة القوة.",
          "It opens automatically once pressure passes a set limit, returning the excess oil to the tank and protecting the pump and the rest of the system from overload. Its setting must match the limit given in the machine manual, not be raised at will for extra force.",
        ),
      },
      {
        h: t("الصمام السولينويدي: طريقة تشغيل لا نوع مستقل", "Solenoid valves: an operating method, not a separate type"),
        p: t(
          "السولينويد ملف كهربائي يحرك بكرة الصمام الاتجاهي عن بعد بدل التشغيل اليدوي أو الهوائي. يمكن أن يكون أي صمام اتجاهي سولينويديًا أو يدويًا أو مزدوج التشغيل، فالسولينويد طريقة تشغيل تُضاف إلى الوظيفة الأساسية للصمام.",
          "A solenoid is an electrical coil that shifts a directional valve's spool remotely instead of manual or pilot operation. Any directional valve can be solenoid-operated, manually operated, or both, since a solenoid is an operating method added to the valve's basic function, not a function on its own.",
        ),
      },
    ],
    faq: [
      {
        q: t("ما الفرق بين صمام اتجاهي وصمام تدفق؟", "What is the difference between a directional and a flow-control valve?"),
        a: t(
          "الاتجاهي يحدد إلى أين يذهب الزيت، وصمام التدفق يحدد كمّه وبالتالي سرعة الحركة. كثير من الدوائر تحتاج النوعين معًا.",
          "A directional valve decides where the oil goes; a flow-control valve decides how much, and so the speed of movement. Many circuits need both types together.",
        ),
      },
      {
        q: t("هل تصلحون الصمامات السولينويدية؟", "Do you repair solenoid valves?"),
        a: t(
          "نعم، نصلح صمامات التحكم بجميع أنواعها، اليدوية والسولينويدية والهوائية التشغيل.",
          "Yes, we repair control valves of all operating types: manual, solenoid and pilot-operated.",
        ),
      },
      {
        q: t("هل يمكن رفع ضبط صمام التنفيس لزيادة قوة المعدة؟", "Can the relief valve setting be raised to increase machine force?"),
        a: t(
          "لا ننصح برفعه فوق الحد الذي يحدده دليل المعدة، لأن ذلك يجهد المضخة والسلندرات والخراطيم ويقصر عمرها.",
          "We do not advise raising it above the limit given in the machine manual, since that overloads the pump, cylinders and hoses and shortens their life.",
        ),
      },
    ],
    related: ["control-valve", "power-pack", "hydraulic-cylinder"],
    ask: t("السلام عليكم، أرغب بعرض سعر لصيانة أو استبدال صمام تحكم هيدروليكي.", "Hello, I would like a quote to repair or replace a hydraulic control valve."),
  },

  /* --------------------------------------------------------------- 16 */
  {
    slug: "hydraulic-valve-symbols-guide",
    published: "2026-11-17",
    title: t("قراءة رموز الصمامات في المخططات الهيدروليكية", "Reading hydraulic valve symbols"),
    card: t("كيف تقرأ رمز الصمام الاتجاهي وصمام التنفيس على المخطط", "How to read a directional valve and a relief valve on a schematic"),
    metaTitle: t("كيف تقرأ رموز صمامات الهيدروليك", "How to Read Hydraulic Valve Symbols"),
    desc: t(
      "دليل مبسّط لقراءة رموز صمامات الهيدروليك في المخططات: المربعات والأسهم وطرق التشغيل، لفهم كيف تعمل الدائرة دون حفظ كل رمز.",
      "A plain guide to reading hydraulic valve symbols on schematics: boxes, arrows and actuation marks, so you can follow a circuit without memorising every symbol.",
    ),
    h1: t("كيف تقرأ رموز الصمامات في المخططات الهيدروليكية", "How to read hydraulic valve symbols on a schematic"),
    answer: t(
      "كل مربع في رمز الصمام الاتجاهي يمثل وضعًا ممكنًا للصمام، والأسهم داخله توضح اتجاه مرور الزيت في ذلك الوضع، والخطوط المتقاطعة تعني إغلاقًا. عدد المربعات هو عدد الأوضاع، وعدد الخطوط الداخلة للمربع الواحد هو عدد المنافذ. رموز التشغيل (يدوي، سولينويد، نابض) تُرسم على طرفي الرمز لتوضيح كيف يتحرك الصمام بين أوضاعه.",
      "Each box in a directional valve symbol represents one possible position of the valve, the arrows inside it show the oil flow path in that position, and crossed lines mean a blocked path. The number of boxes is the number of positions, and the number of lines entering one box is the number of ports. Actuation symbols (manual, solenoid, spring) are drawn at the ends to show how the valve moves between positions.",
    ),
    sections: [
      {
        h: t("المربعات: كم وضعًا للصمام", "Boxes: how many positions the valve has"),
        p: t(
          "صمام برمز من مربعين (2 وضع) ينتقل بين حالتين فقط، مثل تمرير الزيت أو إيقافه. صمام بثلاثة مربعات (3 أوضاع) يضيف عادة وضع توقف في المنتصف، يُستخدم لإيقاف السلندر في أي نقطة من مشواره.",
          "A valve symbol with two boxes (2 positions) switches between just two states, such as passing or blocking the oil. A symbol with three boxes (3 positions) usually adds a centre hold position, used to stop a cylinder anywhere along its stroke.",
        ),
      },
      {
        h: t("الأسهم والخطوط المتقاطعة: اتجاه الزيت", "Arrows and crossed lines: oil direction"),
        p: t(
          "السهم داخل المربع يوضح من أي منفذ إلى أي منفذ يتدفق الزيت في ذلك الوضع. الخط المتقاطع (مثل حرف T مقلوب أو خط مغلق) يعني أن ذلك المسار مغلق تمامًا في هذا الوضع.",
          "The arrow inside a box shows which port connects to which port when the valve is in that position. A blocked line (drawn as a closed-off line) means that path is fully closed in that position.",
        ),
      },
      {
        h: t("عدد الخطوط الخارجية: عدد المنافذ", "The outer lines: number of ports"),
        p: t(
          "الخطوط الموصولة من أعلى أو أسفل المربع إلى خارج الرمز تمثل منافذ الصمام الفعلية (ضغط، رجوع، إلى السلندر). صمام 4/3 المذكور في الرموز يعني أربعة منافذ وثلاثة أوضاع.",
          "Lines connected to the top or bottom of the symbol, going outside the box, represent the valve's actual ports (pressure, tank return, to the cylinder). A valve marked 4/3 has four ports and three positions.",
        ),
      },
      {
        h: t("رموز التشغيل على الطرفين", "Actuation symbols at the ends"),
        list: [
          t("مستطيل بخطوط مائلة: تشغيل يدوي بذراع", "A rectangle with diagonal lines: manual lever operation"),
          t("مربع صغير مع خطوط كهربائية: تشغيل سولينويد", "A small box with electrical lines: solenoid operation"),
          t("زنبرك مرسوم: يعيد الصمام إلى وضعه الافتراضي تلقائيًا", "A drawn spring: returns the valve to its default position automatically"),
          t("خط متقطع مع سهم: تشغيل هوائي (بايلوت) بضغط زيت من جهة أخرى", "A dashed line with an arrow: pilot (hydraulic) operation from another pressure source"),
        ],
      },
    ],
    faq: [
      {
        q: t("هل أحتاج حفظ كل رموز الهيدروليك لفهم المخطط؟", "Do I need to memorise every hydraulic symbol to read a schematic?"),
        a: t(
          "لا، يكفي فهم المبدأ العام: المربعات أوضاع، والأسهم اتجاهات، ورموز الطرفين طرق تشغيل. هذا يكفي لمتابعة أغلب المخططات.",
          "No, understanding the general principle is enough: boxes are positions, arrows are directions, and the end symbols are actuation methods. That is enough to follow most schematics.",
        ),
      },
      {
        q: t("هل تساعدون في قراءة مخطط معدة معينة؟", "Can you help read the schematic for a specific machine?"),
        a: t(
          "نعم، أرسل صورة المخطط على واتساب ونساعدك في فهم دائرة ذلك الصمام أو الدائرة.",
          "Yes, send a photo of the schematic on WhatsApp and we will help you understand that valve or circuit.",
        ),
      },
      {
        q: t("هل تصلحون صمامات حسب مخطط معيّن؟", "Do you service valves according to a specific schematic?"),
        a: t(
          "نعم، نفحص الصمام الفعلي ونقارنه بالمخطط إن توفر، لتحديد العطل بدقة.",
          "Yes, we inspect the actual valve and compare it with the schematic when available, to pinpoint the fault accurately.",
        ),
      },
    ],
    related: ["control-valve", "power-pack", "hydraulic-pump"],
    ask: t("السلام عليكم، أرغب بمساعدة في فهم مخطط صمام هيدروليكي وعرض سعر صيانة.", "Hello, I would like help reading a hydraulic valve schematic and a repair quote."),
  },

  /* --------------------------------------------------------------- 17 */
  {
    slug: "pneumatic-vs-hydraulic-cylinder",
    published: "2026-11-17",
    title: t("السلندر الهوائي مقابل الهيدروليكي", "Pneumatic vs. hydraulic cylinder"),
    card: t("متى يناسب الهواء المضغوط ومتى يلزم الزيت تحت الضغط", "When compressed air fits, and when oil under pressure is needed"),
    metaTitle: t("السلندر الهوائي أم الهيدروليكي: كيف تختار", "Pneumatic vs Hydraulic Cylinder: How to Choose"),
    desc: t(
      "الفرق بين السلندر الهوائي والهيدروليكي: القوة والدقة والتكلفة وبيئة العمل. متى يناسب كل نوع، ومتى يُستبدل أحدهما بالآخر.",
      "The difference between a pneumatic and a hydraulic cylinder: force, precision, cost and operating environment, and when each type fits.",
    ),
    h1: t("السلندر الهوائي مقابل الهيدروليكي: متى يناسب كل نوع", "Pneumatic vs. hydraulic cylinder: when each type fits"),
    answer: t(
      "السلندر الهوائي يعمل بهواء مضغوط، أخف وزنًا وأرخص وأسرع تركيبًا، لكن قوته محدودة لأن الهواء قابل للانضغاط فتقل دقة التوقف عند نقطة معينة. السلندر الهيدروليكي يعمل بزيت غير قابل للانضغاط عمليًا، فيعطي قوة أكبر بكثير وثباتًا أعلى تحت الحمل، لكنه أثقل ويحتاج وحدة طاقة ومسار إرجاع للزيت.",
      "A pneumatic cylinder runs on compressed air: lighter, cheaper and faster to install, but limited in force because air is compressible, which also makes it less precise at holding a position. A hydraulic cylinder runs on oil, which is effectively incompressible, giving far greater force and much better stability under load, but it is heavier and needs a power unit and a return path for the oil.",
    ),
    sections: [
      {
        h: t("القوة والثبات", "Force and stability"),
        p: t(
          "الهواء قابل للانضغاط، فحتى مع ضغط ثابت يتحرك السلندر الهوائي قليلًا تحت الحمل المتغير، ولا يناسب رفع أحمال ثقيلة جدًا أو الثبات الدقيق تحت حمل متغير. الزيت غير قابل للانضغاط تقريبًا، فيحمل السلندر الهيدروليكي حملًا ثابتًا دون أن يهبط أو يتذبذب، ويعطي قوة أكبر بكثير بنفس حجم السلندر تقريبًا.",
          "Air is compressible, so even at a steady pressure a pneumatic cylinder shifts slightly under a varying load, and it does not suit very heavy lifting or precise holding under a changing load. Oil is almost incompressible, so a hydraulic cylinder holds a load steadily without drifting or bouncing, and delivers far more force for roughly the same cylinder size.",
        ),
      },
      {
        h: t("التكلفة والتركيب", "Cost and installation"),
        p: t(
          "الأنظمة الهوائية أبسط وأرخص: لا تحتاج خزان زيت أو مبرّدًا، والهواء المضغوط متوفر غالبًا في المصانع أصلًا. الأنظمة الهيدروليكية تحتاج وحدة طاقة كاملة (خزان ومضخة ومحرك وصمامات)، فتكلفتها الأولية أعلى لكنها تبرر نفسها عند الحاجة لقوة كبيرة.",
          "Pneumatic systems are simpler and cheaper: no oil tank or cooler needed, and compressed air is often already available in a plant. Hydraulic systems need a full power unit (tank, pump, motor and valves), so the upfront cost is higher, but it is justified where real force is needed.",
        ),
      },
      {
        h: t("بيئة العمل والتسريب", "Operating environment and leaks"),
        p: t(
          "تسريب الهواء من سلندر هوائي يهدر طاقة لكنه لا يلوّث أو يسبب خطر انزلاق. تسريب الزيت من سلندر هيدروليكي يترك بقعة زيت، وقد يسبب خطر انزلاق أو تلوثًا بيئيًا إذا لم يُعالج بسرعة. هذا الفرق مهم في الصناعات الغذائية أو النظيفة حيث يُفضَّل الهواء غالبًا.",
          "A leak from a pneumatic cylinder wastes energy but does not contaminate anything or create a slip hazard. A leak from a hydraulic cylinder leaves an oil spill, which can be a slip hazard or an environmental issue if not addressed quickly. This matters in food-grade or clean environments, where air is often preferred.",
        ),
      },
      {
        h: t("متى تستبدل هوائيًا بهيدروليكي أو العكس", "When to switch between them"),
        p: t(
          "إذا احتاج تطبيق هوائي قوة أكبر مما يعطيه الهواء المضغوط عمليًا، فالتحول إلى سلندر هيدروليكي هو الحل، لا زيادة ضغط الهواء فوق الحد الآمن. وإذا كان تطبيق هيدروليكي بسيطًا وخفيف الحمل وتتوفر فيه شبكة هواء مضغوط، فقد يكون التحول إلى سلندر هوائي أبسط وأرخص صيانة.",
          "If a pneumatic application needs more force than compressed air can practically deliver, switching to a hydraulic cylinder is the answer, not pushing the air pressure above a safe limit. If a hydraulic application is light and simple and compressed air is already available, switching to a pneumatic cylinder can be simpler and cheaper to maintain.",
        ),
      },
    ],
    faq: [
      {
        q: t("هل يمكن استبدال سلندر هيدروليكي بهوائي بنفس المقاس؟", "Can a hydraulic cylinder be replaced with a pneumatic one of the same size?"),
        a: t(
          "ليس دائمًا. القوة التي يعطيها الهواء المضغوط بنفس المقاس أقل بكثير، فقد يحتاج التطبيق سلندرًا هوائيًا أكبر أو يبقى هيدروليكيًا إذا كانت القوة المطلوبة عالية.",
          "Not always. Compressed air gives much less force for the same cylinder size, so the application may need a larger pneumatic cylinder, or it should stay hydraulic if the required force is high.",
        ),
      },
      {
        q: t("هل تصلحون أو تصنّعون السلندرات الهوائية أيضًا؟", "Do you repair or manufacture pneumatic cylinders too?"),
        a: t(
          "نعم، نتعامل مع المنتجات الهوائية إلى جانب السلندرات والمضخات الهيدروليكية.",
          "Yes, we work with pneumatic products alongside hydraulic cylinders and pumps.",
        ),
      },
      {
        q: t("أيهما أنسب لمعدتي، هوائي أم هيدروليكي؟", "Which suits my machine better, pneumatic or hydraulic?"),
        a: t(
          "يعتمد على القوة والدقة المطلوبتين وبيئة العمل. أرسل تفاصيل التطبيق على واتساب وسنساعدك في المقارنة.",
          "It depends on the force and precision needed, and the operating environment. Send the application details on WhatsApp and we will help you compare.",
        ),
      },
    ],
    related: ["pneumatic-cylinder", "hydraulic-cylinder", "pneumatic-products"],
    ask: t("السلام عليكم، أرغب بمقارنة سلندر هوائي وهيدروليكي لتطبيقي وعرض سعر.", "Hello, I would like help comparing a pneumatic and hydraulic cylinder for my application and a quote."),
  },

  /* --------------------------------------------------------------- 18 */
  {
    slug: "double-acting-vs-single-acting-cylinder",
    published: "2026-11-17",
    title: t("السلندر أحادي التأثير مقابل مزدوج التأثير", "Single-acting vs. double-acting cylinders"),
    card: t("كيف يعود العمود، وأي النوعين يناسب تطبيقك", "How the rod returns, and which type suits your application"),
    metaTitle: t("سلندر أحادي التأثير أم مزدوج التأثير", "Single-Acting vs Double-Acting Cylinders"),
    desc: t(
      "الفرق بين السلندر أحادي التأثير (يعود بالنابض أو الحمل) ومزدوج التأثير (يُدفع بالزيت أو الهواء في الاتجاهين). متى يناسب كل نوع.",
      "The difference between a single-acting cylinder (returns by spring or load) and a double-acting cylinder (powered in both directions). When each type fits.",
    ),
    h1: t("السلندر أحادي التأثير مقابل مزدوج التأثير: الفرق ومتى يناسب كل نوع", "Single-acting vs. double-acting cylinders: the difference, and when each fits"),
    answer: t(
      "السلندر أحادي التأثير يُدفع بالزيت أو الهواء في اتجاه واحد فقط، ويعود بفعل نابض داخلي أو بوزن الحمل نفسه، مثل سلندر رفع القلاب. السلندر مزدوج التأثير يُدفع بالزيت أو الهواء في الاتجاهين، فيعطي قوة دفع وسحب فعليتين، وهو الأنسب حين يحتاج التطبيق قوة في الاتجاهين أو تحكمًا دقيقًا بالعودة.",
      "A single-acting cylinder is powered in one direction only, and returns by an internal spring or by the weight of the load itself, like a tipping-trailer ram. A double-acting cylinder is powered in both directions, giving real push and pull force, and suits applications that need force both ways or precise control over the return stroke.",
    ),
    sections: [
      {
        h: t("أحادي التأثير: كيف يعود العمود", "Single-acting: how the rod returns"),
        p: t(
          "النوع الأبسط ميكانيكيًا، لأنه يحتاج منفذ زيت واحد فقط ودائرة تحكم أبسط. لكنه يعتمد على قوة النابض أو ثقل الحمل للعودة، فلا يصلح إن احتاج التطبيق دفعًا فعليًا في الاتجاه المعاكس أو تحكمًا بسرعة العودة.",
          "This is the mechanically simpler type, needing only one oil port and a simpler control circuit. But it relies on spring force or the load's own weight to return, so it does not suit an application that needs real powered force in the opposite direction, or precise control over return speed.",
        ),
      },
      {
        h: t("مزدوج التأثير: قوة في الاتجاهين", "Double-acting: force in both directions"),
        p: t(
          "يحتاج منفذي زيت (واحدًا لكل جهة) وصمامًا اتجاهيًا يوجّه الزيت بينهما. يعطي قوة دفع وسحب حقيقيتين ويمكن التحكم بسرعة الحركتين معًا، وهو الأكثر شيوعًا في معظم تطبيقات الرفع والتحريك الصناعية.",
          "It needs two oil ports (one for each side) and a directional valve to send oil between them. It gives real push and pull force and lets both strokes' speed be controlled, which is why it is the most common type in most industrial lifting and positioning applications.",
        ),
      },
      {
        h: t("أمثلة شائعة لكل نوع", "Common examples of each type"),
        list: [
          t("أحادي التأثير: سلندرات رفع صناديق القلاب، بعض الرافعات البسيطة، سلندرات الفرامل", "Single-acting: tipping-trailer body rams, some simple jacks, brake cylinders"),
          t("مزدوج التأثير: أذرع الحفارات والرافعات، معظم سلندرات التحكم في معدات المناولة", "Double-acting: excavator and loader arms, most control cylinders on handling equipment"),
        ],
      },
      {
        h: t("كيف تختار بينهما", "How to choose between them"),
        p: t(
          "إذا كانت العودة بثقل الحمل كافية ومقبولة السرعة، فالأحادي أبسط وأرخص. إذا احتاج التطبيق تحكمًا بسرعة العودة أو قوة فعلية في الاتجاه المعاكس (كرفع حمل ثم سحبه لأعلى لا بثقله فقط)، فالمزدوج هو الخيار الصحيح، ولا يُستبدل بأحادي حتى لو بدا أرخص.",
          "If return by the load's own weight is enough and the speed is acceptable, single-acting is simpler and cheaper. If the application needs control over return speed, or real force in the opposite direction (lifting a load and then pulling it up, not just its own weight), double-acting is the right choice, and should not be swapped for single-acting even if that looks cheaper.",
        ),
      },
    ],
    faq: [
      {
        q: t("كيف أعرف نوع سلندري؟", "How do I know which type my cylinder is?"),
        a: t(
          "منفذ زيت واحد يدل على أحادي التأثير، ومنفذان (واحد عند كل طرف) يدلان على مزدوج التأثير. أرسل صورة للسلندر إن لم تتأكد.",
          "One oil port means single-acting, and two ports (one at each end) mean double-acting. Send a photo of the cylinder if you are not sure.",
        ),
      },
      {
        q: t("هل يمكن تحويل سلندر أحادي إلى مزدوج التأثير؟", "Can a single-acting cylinder be converted to double-acting?"),
        a: t(
          "يعتمد على تصميم الماسورة والمكبس. في بعض الحالات يمكن تصنيع سلندر مزدوج بديل بنفس المقاسات الخارجية. أرسل التفاصيل وسنوضح الإمكانية.",
          "It depends on the tube and piston design. In some cases a double-acting replacement can be made to the same outer dimensions. Send the details and we will outline whether that is possible.",
        ),
      },
      {
        q: t("هل تصلحون النوعين من السلندرات؟", "Do you repair both types of cylinder?"),
        a: t(
          "نعم، نصلح ونصنّع السلندرات أحادية ومزدوجة التأثير بجميع المقاسات القياسية.",
          "Yes, we repair and manufacture both single- and double-acting cylinders in all standard sizes.",
        ),
      },
    ],
    related: ["hydraulic-cylinder", "pneumatic-cylinder", "tipping-systems"],
    ask: t("السلام عليكم، أرغب بمعرفة نوع سلندري وعرض سعر صيانة أو تصنيع.", "Hello, I would like help identifying my cylinder type and a quote for repair or manufacturing."),
  },

  /* --------------------------------------------------------------- 19 */
  {
    slug: "gear-pump-vs-piston-pump",
    published: "2026-11-17",
    title: t("مضخة التروس مقابل مضخة المكابس", "Gear pump vs. piston pump"),
    card: t("الكفاءة والضغط الأقصى والتكلفة بين النوعين", "Efficiency, maximum pressure and cost between the two types"),
    metaTitle: t("مضخة التروس أم مضخة المكابس: المقارنة", "Gear Pump vs Piston Pump: Full Comparison"),
    desc: t(
      "الفرق بين مضخة التروس ومضخة المكابس الهيدروليكية: الضغط الأقصى والكفاءة والتكلفة وحساسية التلوث، ومتى يناسب كل نوع.",
      "The difference between a gear pump and a piston pump: maximum pressure, efficiency, cost and sensitivity to contamination, and when each type fits.",
    ),
    h1: t("مضخة التروس مقابل مضخة المكابس: مقارنة عملية", "Gear pump vs. piston pump: a practical comparison"),
    answer: t(
      "مضخة التروس أبسط تصميمًا وأرخص وأكثر تحملًا للتلوث في الزيت، لكنها محدودة بضغط أقصى أقل وكفاءة أقل نسبيًا. مضخة المكابس أعلى كفاءة وتتحمل ضغطًا أقصى أعلى بكثير وتدفقًا متغيرًا، لكنها أغلى وأكثر حساسية لنظافة الزيت وتحتاج صيانة أدق.",
      "A gear pump is simpler, cheaper and more tolerant of contamination in the oil, but is limited to a lower maximum pressure and relatively lower efficiency. A piston pump is more efficient and handles much higher pressure and variable flow, but costs more, is more sensitive to oil cleanliness, and needs more careful maintenance.",
    ),
    sections: [
      {
        h: t("كيف تعمل كل مضخة باختصار", "How each pump works, briefly"),
        p: t(
          "مضخة التروس تدفع الزيت بدوران ترسين متشابكين، فيُحمل الزيت بين أسنان الترس وجدار المضخة من جهة الشفط إلى جهة الضغط. مضخة المكابس تدفع الزيت بحركة مكابس صغيرة ذهابًا وإيابًا داخل أسطوانة دوارة، وهي الأقدر على التحكم بالتدفق وتحمل الضغط العالي.",
          "A gear pump moves oil by two meshing gears rotating: oil is carried between the gear teeth and the pump housing from the suction side to the pressure side. A piston pump moves oil with small pistons reciprocating inside a rotating cylinder block, which is what gives it the best flow control and the highest pressure capability.",
        ),
      },
      {
        h: t("الضغط الأقصى والكفاءة", "Maximum pressure and efficiency"),
        p: t(
          "مضخات التروس تغطي معظم التطبيقات الصناعية المتوسطة الضغط بكفاءة جيدة وتكلفة منخفضة. مضخات المكابس تصل إلى ضغوط أعلى بكثير وكفاءة حجمية أعلى، ولهذا تُستخدم في المعدات الثقيلة والتطبيقات التي تحتاج تحكمًا دقيقًا بالتدفق مثل أنظمة التحكم المتغير.",
          "Gear pumps cover most medium-pressure industrial applications with good efficiency at low cost. Piston pumps reach much higher pressures with higher volumetric efficiency, which is why they are used in heavy equipment and applications needing precise variable flow control.",
        ),
      },
      {
        h: t("حساسية التلوث والصيانة", "Contamination sensitivity and maintenance"),
        list: [
          t("مضخة التروس: تتحمل زيتًا أقل نظافة نسبيًا، وصيانتها أبسط وأرخص", "Gear pump: tolerates relatively less clean oil, and its maintenance is simpler and cheaper"),
          t("مضخة المكابس: تحتاج زيتًا نظيفًا وفلترة جيدة، لأن الفراغات الداخلية الدقيقة تتأثر بالشوائب بسرعة", "Piston pump: needs clean oil and good filtration, because its fine internal clearances are affected by contamination quickly"),
        ],
      },
      {
        h: t("متى تختار كل نوع", "When to choose each type"),
        p: t(
          "إذا كان التطبيق متوسط الضغط وثابت التدفق وتكلفة الصيانة مهمة، فمضخة التروس عادة الخيار الأنسب. إذا احتاج التطبيق ضغطًا عاليًا جدًا أو تدفقًا متغيرًا يُتحكم به بدقة، فمضخة المكابس تستحق تكلفتها الأعلى. القرار يعتمد على متطلبات التطبيق الفعلية لا على السعر وحده.",
          "If the application is medium pressure, has steady flow, and maintenance cost matters, a gear pump is usually the better fit. If the application needs very high pressure or precisely controlled variable flow, a piston pump justifies its higher cost. The decision rests on the application's actual requirements, not price alone.",
        ),
      },
    ],
    faq: [
      {
        q: t("أي مضخة أطول عمرًا؟", "Which pump lasts longer?"),
        a: t(
          "يعتمد على ظروف التشغيل أكثر من النوع وحده. مضخة التروس المناسبة لتطبيقها قد تعمّر طويلًا، وكذلك مضخة المكابس إذا توفرت لها فلترة جيدة.",
          "It depends on operating conditions more than the type alone. A gear pump suited to its application can last a long time, and so can a piston pump if good filtration is in place.",
        ),
      },
      {
        q: t("هل يمكن استبدال مضخة تروس بمضخة مكابس لرفع الضغط؟", "Can a gear pump be replaced with a piston pump to raise pressure?"),
        a: t(
          "ممكن إذا سمحت بقية مكونات النظام (الخراطيم والصمامات والسلندرات) بالضغط الأعلى. نفحص النظام كاملًا قبل التوصية بذلك.",
          "It is possible if the rest of the system (hoses, valves and cylinders) can handle the higher pressure. We check the whole system before recommending that.",
        ),
      },
      {
        q: t("هل تفحصون وتصلحون النوعين؟", "Do you test and repair both types?"),
        a: t(
          "نعم، نفحص ونصلح مضخات التروس والمكابس وغيرها من أنواع المضخات الهيدروليكية ونصدر تقرير الفحص.",
          "Yes, we test and repair gear pumps, piston pumps and other types of hydraulic pump, and issue an inspection report.",
        ),
      },
    ],
    related: ["gear-pump", "hydraulic-pump", "pump-testing"],
    ask: t("السلام عليكم، أرغب بمقارنة مضخة تروس ومكابس لتطبيقي وعرض سعر.", "Hello, I would like help comparing a gear pump and piston pump for my application and a quote."),
  },

  /* --------------------------------------------------------------- 20 */
  {
    slug: "internal-vs-external-gear-pump",
    published: "2026-11-17",
    title: t("مضخة التروس الداخلية مقابل الخارجية", "Internal vs. external gear pumps"),
    card: t("الفرق في التصميم ومتى يناسب كل نوع نقل الزيت", "The design difference, and when each suits oil transfer"),
    metaTitle: t("مضخة تروس داخلية أم خارجية: الفرق", "Internal vs External Gear Pump: The Difference"),
    desc: t(
      "الفرق بين مضخة التروس الداخلية والخارجية: طريقة عمل الترسين، مستوى الضجيج والنعومة، ومتى تناسب كل منهما نقل الزيت أو التطبيقات الصناعية.",
      "The difference between internal and external gear pumps: how the gears work, noise and smoothness, and when each suits oil transfer or industrial use.",
    ),
    h1: t("مضخة التروس الداخلية مقابل الخارجية: الفرق ومتى يناسب كل نوع", "Internal vs. external gear pumps: the difference and when each fits"),
    answer: t(
      "المضخة الخارجية تستخدم ترسين متساويي الحجم متشابكين جنبًا إلى جنب، وهي الأبسط والأشيع والأرخص. المضخة الداخلية تستخدم ترسًا صغيرًا بالداخل يدور ضمن ترس أكبر محاط به، فتعطي تدفقًا أنعم وضجيجًا أقل وتناسب أكثر نقل السوائل اللزجة مثل نقل الزيت بكميات كبيرة.",
      "An external gear pump uses two equal-sized gears meshing side by side, and is the simplest, most common and cheapest design. An internal gear pump uses a small inner gear rotating inside a larger surrounding gear, giving smoother flow, lower noise, and suiting viscous fluids such as bulk oil transfer better.",
    ),
    sections: [
      {
        h: t("المضخة الخارجية: التصميم الأشيع", "The external gear pump: the common design"),
        p: t(
          "ترسان متساويان يدوران متعاكسين، ويحمل كل منهما الزيت في الفراغ بين أسنانه وجدار المضخة. تصميمها البسيط يجعلها أرخص وأسهل صيانة وأكثر توفرًا، وهي الأنسب لمعظم تطبيقات الهيدروليك الصناعي المتوسط الضغط.",
          "Two equal gears rotate in opposite directions, each carrying oil in the space between its teeth and the pump housing. Its simple design makes it cheaper, easier to maintain and more widely available, and it suits most medium-pressure industrial hydraulic applications.",
        ),
      },
      {
        h: t("المضخة الداخلية: تدفق أنعم", "The internal gear pump: smoother flow"),
        p: t(
          "ترس داخلي صغير يدور مع ترس خارجي أكبر محيط به، وتفصل بينهما قطعة هلالية ثابتة. هذا التصميم يعطي نبضات ضغط أقل وتدفقًا أكثر انتظامًا وضجيجًا أقل من المضخة الخارجية، وهو مفيد خاصة في نقل الزيت بكميات كبيرة أو التطبيقات التي تحتاج هدوءًا نسبيًا.",
          "A small inner gear rotates inside a larger outer gear that surrounds it, with a fixed crescent piece separating them. This design gives fewer pressure pulses, steadier flow and less noise than an external pump, which helps especially in bulk oil transfer or applications where relative quiet matters.",
        ),
      },
      {
        h: t("أيهما يناسب نقل الزيت بكميات كبيرة", "Which suits bulk oil transfer"),
        p: t(
          "عند نقل كميات كبيرة من الزيت بين خزانات أو شاحنات، تفضَّل المضخة الداخلية غالبًا لنعومة تدفقها وقدرتها على التعامل مع زيوت أثقل لزوجة دون اهتزاز زائد. أما للتطبيقات الصناعية العادية متوسطة الضغط فالمضخة الخارجية كافية وأرخص.",
          "When transferring large volumes of oil between tanks or trucks, an internal gear pump is often preferred for its smoother flow and ability to handle heavier-viscosity oils without excess vibration. For ordinary medium-pressure industrial applications, an external gear pump is enough, and cheaper.",
        ),
      },
      {
        h: t("الصيانة والتوفر", "Maintenance and availability"),
        p: t(
          "قطع غيار المضخة الخارجية أكثر توفرًا وصيانتها أبسط لأن تصميمها معروف ومنتشر. المضخة الداخلية بتصميمها الدقيق تحتاج عناية أكبر عند الفك والتركيب، لكن نتعامل مع النوعين في ورشتنا.",
          "Parts for external gear pumps are more widely available and maintenance is simpler, since the design is common and well known. The internal gear pump's finer design needs more care during strip-down and reassembly, but we work on both types in our workshop.",
        ),
      },
    ],
    faq: [
      {
        q: t("أي نوع أرخص في الصيانة؟", "Which type is cheaper to maintain?"),
        a: t(
          "المضخة الخارجية عادة أرخص وأبسط صيانة لتوفر قطعها وشيوع تصميمها.",
          "The external gear pump is usually cheaper and simpler to maintain because its parts and design are more common.",
        ),
      },
      {
        q: t("هل تفحصون وتصلحون مضخات نقل الزيت الكبيرة؟", "Do you test and repair bulk oil-transfer pumps?"),
        a: t(
          "نعم، نفحص ونصلح مضخات التروس الداخلية والخارجية بجميع الأحجام ونصدر تقرير الفحص.",
          "Yes, we test and repair both internal and external gear pumps in all sizes and issue an inspection report.",
        ),
      },
      {
        q: t("كيف أعرف نوع مضختي؟", "How do I know which type my pump is?"),
        a: t(
          "أرسل صورة للمضخة من الخارج ورقم اللوحة إن وجد، ويمكننا غالبًا تحديد النوع، أو نفتحها للتأكد.",
          "Send a photo of the pump from outside and the nameplate number if there is one; we can usually identify the type, or open it to confirm.",
        ),
      },
    ],
    related: ["gear-pump", "hydraulic-pump", "pump-testing"],
    ask: t("السلام عليكم، أرغب بفحص مضخة تروس ومعرفة نوعها وعرض سعر.", "Hello, I would like a gear pump tested, its type identified, and a quote."),
  },

  /* --------------------------------------------------------------- 21 */
  {
    slug: "crane-boom-truck-hydraulic-maintenance",
    published: "2026-11-17",
    title: t("صيانة النظام الهيدروليكي للونش والشاحنة المرفوعة", "Crane and boom truck hydraulic maintenance"),
    card: t("الذراع والسلندرات ووحدة الطاقة وما يُفحص دوريًا", "The boom, cylinders and power unit, and what to check regularly"),
    metaTitle: t("صيانة النظام الهيدروليكي للونش والبوم تراك", "Crane & Boom Truck Hydraulic Maintenance"),
    desc: t(
      "صيانة النظام الهيدروليكي لونش الشاحنة (البوم تراك): فحص سلندرات الذراع والقواعد، ووحدة الطاقة المأخوذة من محرك الشاحنة عبر PTO، وعلامات الخطر.",
      "Hydraulic maintenance for a truck-mounted crane: boom and outrigger cylinders, the pump driven via a PTO from the truck engine, and warning signs.",
    ),
    h1: t("صيانة النظام الهيدروليكي لونش الشاحنة والبوم تراك", "Hydraulic maintenance for a truck-mounted crane and boom truck"),
    answer: t(
      "النظام الهيدروليكي لونش الشاحنة يضم سلندرات رفع وتمديد الذراع، وسلندرات القواعد الجانبية (الاوت ريغرز) لثبات الشاحنة، ومضخة تُدار من محرك الشاحنة نفسه عبر وحدة PTO بدل محرك منفصل. فحصه الدوري يشمل الأختام والخراطيم المعرضة للحركة المستمرة، وسلامة توصيل الـ PTO، وضبط صمامات الأمان التي تمنع هبوط الحمل عند فقد الضغط.",
      "A truck-mounted crane's hydraulic system includes boom lift and extension cylinders, outrigger cylinders for stability, and a pump driven from the truck's own engine through a PTO unit instead of a separate motor. Regular checks cover the seals and hoses exposed to constant movement, the PTO connection, and the safety valves that stop a load dropping if pressure is lost.",
    ),
    note: SAFETY,
    sections: [
      {
        h: t("سلندرات الذراع والقواعد", "Boom and outrigger cylinders"),
        p: t(
          "سلندرات الذراع تتعرض لحمل متغير مستمر وزوايا عمل مختلفة، فتتسارع فيها أعراض التسريب والخدش مقارنة بسلندر ثابت الاتجاه. سلندرات القواعد الجانبية أقل حركة لكنها تحمل وزن الشاحنة كاملًا عند الرفع، فتسريبها الداخلي خطر مباشر على ثبات الشاحنة.",
          "Boom cylinders face a constantly changing load and working angle, so leak and scoring symptoms show up faster than on a cylinder working in one fixed direction. Outrigger cylinders move less but carry the truck's full weight while lifting, so internal leakage in them is a direct risk to the truck's stability.",
        ),
      },
      {
        h: t("وحدة PTO وربطها بمحرك الشاحنة", "The PTO unit and its link to the truck engine"),
        p: t(
          "بدل محرك كهربائي أو ديزل منفصل، تُدار مضخة الونش من محرك الشاحنة نفسه عبر وحدة أخذ القدرة (PTO) المركّبة على صندوق التروس. أي اهتزاز أو صوت غير طبيعي من وحدة الـ PTO أو ضعف في دوران المضخة أثناء تشغيل الونش يستحق فحصًا مبكرًا، لأنه يؤثر على أداء النظام كاملًا.",
          "Instead of a separate electric or diesel motor, the crane pump is driven from the truck's own engine through a power take-off (PTO) unit fitted on the gearbox. Any vibration or abnormal noise from the PTO unit, or weak pump rotation while the crane is running, deserves an early check, since it affects the whole system's performance.",
        ),
      },
      {
        h: t("صمامات الأمان ومنع هبوط الحمل", "Safety valves and preventing load drop"),
        list: [
          t("صمامات عدم الرجوع (Holding valves) على سلندرات الرفع تمنع هبوط الحمل إذا انفجر خرطوم أو انخفض الضغط فجأة", "Holding valves on lift cylinders prevent the load dropping if a hose bursts or pressure drops suddenly"),
          t("صمام تنفيس مضبوط حسب الحد الأقصى لقدرة الونش، لا أعلى منه لزيادة القدرة", "A relief valve set to the crane's rated capacity limit, never raised above it to add capacity"),
          t("فحص دوري لهذه الصمامات جزء أساسي من سلامة التشغيل، لا بندًا اختياريًا", "Periodic checking of these valves is a core part of operating safety, not an optional item"),
        ],
      },
      {
        h: t("ماذا ترسل لنا", "What to send us"),
        list: [
          t("نوع الونش وقدرته التقريبية وموديل الشاحنة", "The crane type, its approximate rated capacity, and the truck model"),
          t("الأعراض: تسريب، هبوط بطيء للحمل، ضعف قوة الرفع، أو صوت غير طبيعي من الـ PTO", "The symptoms: a leak, the load drifting down slowly, weak lifting force, or abnormal noise from the PTO"),
          t("صور للسلندر أو المضخة أو مكان التسريب", "Photos of the cylinder, pump or the leak location"),
        ],
      },
    ],
    faq: [
      {
        q: t("هل تصلحون سلندرات الونش والبوم تراك؟", "Do you repair crane and boom truck cylinders?"),
        a: t(
          "نعم، نفحص ونصلح سلندرات الرفع والتمديد والقواعد الجانبية، ونصنّع البديل عند الحاجة.",
          "Yes, we inspect and repair lift, extension and outrigger cylinders, and manufacture a replacement when needed.",
        ),
      },
      {
        q: t("الونش يرفع ببطء أو بقوة أقل من المعتاد، ما السبب المحتمل؟", "The crane lifts slowly or with less force than usual — what is the likely cause?"),
        a: t(
          "قد يكون تسريبًا داخليًا في سلندر أو صمام، أو ضعفًا في المضخة، أو مشكلة في توصيل الـ PTO. نفحص النظام لتحديد السبب الفعلي.",
          "It may be internal leakage in a cylinder or valve, a weak pump, or a problem in the PTO connection. We check the system to find the real cause.",
        ),
      },
      {
        q: t("هل تقدمون خدمة موقعية لصيانة الونش المركّب على الشاحنة؟", "Do you offer on-site service for a crane mounted on a truck?"),
        a: t(
          "نعم، نأتي إلى الشاحنة في أي مدينة بالمملكة لفحص النظام الهيدروليكي وإصلاحه قدر الإمكان على الموقع.",
          "Yes, we come to the truck in any city in the Kingdom to inspect the hydraulic system and repair what we can on site.",
        ),
      },
    ],
    related: ["crane", "boom-truck", "pto"],
    ask: t("السلام عليكم، أرغب بفحص النظام الهيدروليكي لونش شاحنتي وعرض سعر.", "Hello, I would like the hydraulic system on my truck-mounted crane inspected and a quote."),
  },

  /* --------------------------------------------------------------- 22 */
  {
    slug: "pto-hydraulic-pump-basics",
    published: "2026-11-17",
    title: t("أساسيات وحدة أخذ القدرة (PTO) ومضخة الهيدروليك", "PTO and hydraulic pump basics"),
    card: t("كيف تأخذ وحدة الـ PTO الحركة من محرك الشاحنة لتشغيل المضخة", "How a PTO unit takes drive from the truck engine to run the pump"),
    metaTitle: t("أساسيات وحدة PTO ومضخة الهيدروليك", "PTO & Hydraulic Pump Basics Explained"),
    desc: t(
      "ما هي وحدة أخذ القدرة (PTO) وكيف تشغّل مضخة هيدروليك من محرك الشاحنة مباشرة، وعلامات الأعطال الشائعة في التوصيل بينهما.",
      "What a power take-off (PTO) unit is, how it drives a hydraulic pump directly from the truck engine, and the common fault signs in that connection.",
    ),
    h1: t("أساسيات وحدة أخذ القدرة (PTO) وتشغيل مضخة الهيدروليك", "PTO basics and how it drives a hydraulic pump"),
    answer: t(
      "وحدة أخذ القدرة (PTO) هي وحدة تروس تُركَّب على صندوق تروس الشاحنة أو خلف محرك ثابت، وتأخذ جزءًا من دوران المحرك لتشغيل مضخة هيدروليكية مباشرة، دون الحاجة إلى محرك كهربائي أو ديزل منفصل. تُشغَّل وتُفصَل عادة بذراع أو مفتاح من داخل المقصورة، وتوصيلها بالمضخة يكون غالبًا عبر عمود دوران أو وصلة (كبلنج) مباشرة.",
      "A power take-off (PTO) is a gear unit fitted on a truck's gearbox, or behind a stationary engine, that takes a portion of the engine's rotation to drive a hydraulic pump directly, without a separate electric or diesel motor. It is usually engaged and disengaged by a lever or switch from inside the cab, and connects to the pump through a driveshaft or a direct coupling.",
    ),
    sections: [
      {
        h: t("كيف تعمل وحدة الـ PTO", "How a PTO unit works"),
        p: t(
          "تحتوي وحدة الـ PTO على تروس تتداخل مع تروس صندوق السرعات عند التفعيل، فتنقل جزءًا من دوران المحرك إلى عمود خارجي يدير المضخة. عند الفصل تتوقف المضخة عن الدوران حتى لو كان محرك الشاحنة يعمل.",
          "The PTO unit contains gears that mesh with the gearbox's gears when engaged, transferring part of the engine's rotation to an output shaft that drives the pump. When disengaged, the pump stops turning even while the truck engine keeps running.",
        ),
      },
      {
        h: t("أين تُستخدم عادة", "Where it is typically used"),
        list: [
          t("شاحنات القلاب: لتشغيل سلندر رفع الصندوق", "Dump trucks: to run the body-tipping cylinder"),
          t("شاحنات الونش (البوم تراك): لتشغيل مضخة الونش والقواعد الجانبية", "Truck-mounted cranes (boom trucks): to run the crane and outrigger pump"),
          t("خلاطات الخرسانة وبعض المعدات الزراعية والصناعية المتنقلة", "Concrete mixers and some agricultural and mobile industrial equipment"),
        ],
      },
      {
        h: t("علامات أعطال شائعة في التوصيل", "Common fault signs in the connection"),
        list: [
          t("صوت طرق أو صرير عند تفعيل الـ PTO، غالبًا من تآكل في التروس أو ضعف في التوصيل", "A knocking or grinding sound when engaging the PTO, usually from worn gears or a poor connection"),
          t("المضخة تدور بضعف أو تتوقف رغم تفعيل الـ PTO بشكل صحيح", "The pump turns weakly or stops even though the PTO is engaged correctly"),
          t("اهتزاز غير طبيعي في عمود التوصيل بين الـ PTO والمضخة", "Abnormal vibration in the shaft connecting the PTO to the pump"),
          t("صعوبة في تفعيل أو فصل الذراع، ما قد يدل على مشكلة ميكانيكية أو كهربائية في آلية التحكم", "Difficulty engaging or disengaging the lever, which can point to a mechanical or electrical issue in the control"),
        ],
      },
      {
        h: t("ماذا ترسل لنا", "What to send us"),
        list: [
          t("نوع الشاحنة أو المعدة وموديلها", "The truck or machine type and model"),
          t("الأعراض بالتفصيل: صوت، اهتزاز، ضعف دوران المضخة", "The symptoms in detail: noise, vibration, or weak pump rotation"),
          t("صورة لوحدة الـ PTO وتوصيلها بالمضخة إن أمكن", "A photo of the PTO unit and its connection to the pump, if possible"),
        ],
      },
    ],
    faq: [
      {
        q: t("هل تصلحون وحدات الـ PTO نفسها؟", "Do you repair PTO units themselves?"),
        a: t(
          "نعم، نفحص وحدة الـ PTO وتوصيلها بالمضخة ضمن فحص النظام الهيدروليكي كاملًا.",
          "Yes, we inspect the PTO unit and its connection to the pump as part of checking the whole hydraulic system.",
        ),
      },
      {
        q: t("المضخة لا تدور رغم تفعيل الـ PTO، ما السبب المحتمل؟", "The pump does not turn even though the PTO is engaged — what is the likely cause?"),
        a: t(
          "قد يكون عطلًا في آلية التفعيل نفسها، أو كبلنج تالف، أو عطل داخلي في وحدة الـ PTO. نحتاج فحصها مباشرة لتحديد السبب.",
          "It may be a fault in the engagement mechanism itself, a damaged coupling, or an internal fault in the PTO unit. We need to inspect it directly to find the cause.",
        ),
      },
      {
        q: t("هل تقدمون خدمة موقعية لفحص الـ PTO على الشاحنة؟", "Do you offer on-site PTO inspection on the truck?"),
        a: t(
          "نعم، نأتي إلى الشاحنة في أي مدينة بالمملكة لفحص الـ PTO والمضخة المرتبطة بها.",
          "Yes, we come to the truck in any city in the Kingdom to inspect the PTO and its connected pump.",
        ),
      },
    ],
    related: ["pto", "crane", "boom-truck"],
    ask: t("السلام عليكم، لدي مشكلة في وحدة PTO أو المضخة المرتبطة بها وأرغب بعرض سعر فحص.", "Hello, I have an issue with a PTO unit or its connected pump and would like an inspection quote."),
  },

  /* --------------------------------------------------------------- 23 */
  {
    slug: "hydraulic-pressure-gauge-guide",
    published: "2026-11-17",
    title: t("قراءة واختيار مقياس ضغط الهيدروليك", "Reading and choosing a hydraulic pressure gauge"),
    card: t("الوحدات ونطاق القياس ومتى تستبدل المقياس", "Units, measuring range, and when to replace a gauge"),
    metaTitle: t("دليل قراءة واختيار مقياس ضغط الهيدروليك", "Hydraulic Pressure Gauge: Reading & Selection"),
    desc: t(
      "كيف تقرأ مقياس ضغط الهيدروليك (بار وPSI)، وكيف تختار نطاق القياس المناسب، وعلامات تدل على أن المقياس نفسه تالف لا النظام.",
      "How to read a hydraulic pressure gauge (bar and PSI), how to choose the right measuring range, and the signs that the gauge itself is faulty, not the system.",
    ),
    h1: t("كيف تقرأ وتختار مقياس ضغط الهيدروليك الصحيح", "How to read and choose the right hydraulic pressure gauge"),
    answer: t(
      "مقياس الضغط الهيدروليكي يعرض القراءة عادة بوحدتين معًا: بار (الأكثر شيوعًا عالميًا) وPSI (الشائعة في المعدات الأمريكية الصنع). يُختار نطاق المقياس بحيث يكون ضغط التشغيل المعتاد عند نحو ثلثي النطاق الكامل، لا عند أقصاه، لإطالة عمر المقياس ودقته. عقرب يهتز باستمرار أو لا يعود إلى الصفر يدل غالبًا على عطل في المقياس نفسه لا في النظام.",
      "A hydraulic pressure gauge usually shows its reading in two units together: bar (the more common worldwide) and PSI (common on US-made equipment). A gauge's range is chosen so normal working pressure sits at about two-thirds of the full scale, not at the top of it, which extends the gauge's life and accuracy. A needle that flickers constantly or does not return to zero usually points to a fault in the gauge itself, not the system.",
    ),
    sections: [
      {
        h: t("بار مقابل PSI", "Bar vs. PSI"),
        p: t(
          "البار وPSI وحدتان لقياس نفس الكمية (الضغط)، والمقياس الواحد لا يعطي أرقامًا مختلفة فعليًا، بل يعرضهما معًا للتحويل السريع (تقريبًا 1 بار = 14.5 PSI). عند مقارنة قراءة بمعيار من دليل المعدة، تأكد أنك تقارن نفس الوحدة.",
          "Bar and PSI are two units measuring the same quantity (pressure); a single gauge does not give genuinely different figures, it simply shows both for quick conversion (roughly 1 bar = 14.5 PSI). When comparing a reading against a figure in a machine manual, make sure you are comparing the same unit.",
        ),
      },
      {
        h: t("كيف تختار نطاق المقياس الصحيح", "How to choose the right measuring range"),
        p: t(
          "مقياس بنطاق أقل من ضغط النظام الفعلي يتلف بسرعة أو يعطي قراءة غير دقيقة عند أقصاه. ومقياس بنطاق أعلى بكثير من اللازم يعطي قراءة غير دقيقة عند الضغوط المنخفضة نسبيًا لأن كل تدريجة على مقياسه تمثل فرقًا أكبر. القاعدة العملية: اختر نطاقًا يجعل ضغط التشغيل المعتاد عند نحو 50-75% من النطاق الكامل.",
          "A gauge with a range below the system's actual pressure wears out fast or becomes inaccurate near the top of its scale. A gauge with a range far above what is needed gives a less precise reading at relatively lower pressures, because each division on its dial represents a bigger difference. The practical rule: pick a range that puts normal working pressure at about 50-75% of the full scale.",
        ),
      },
      {
        h: t("علامات أن المقياس نفسه تالف", "Signs the gauge itself is faulty"),
        list: [
          t("العقرب لا يعود إلى الصفر عند إيقاف الضغط", "The needle does not return to zero once pressure is released"),
          t("اهتزاز مستمر وشديد في العقرب لا يتناسب مع استقرار تشغيل المعدة", "Constant, heavy flickering of the needle that does not match steady machine operation"),
          t("زجاج المقياس مكسور أو مملوء بزيت متسرب من داخله", "Cracked gauge glass, or oil leaking into it from inside"),
          t("قراءة لا تتغير إطلاقًا حتى مع تغير واضح في أداء المعدة", "A reading that never changes at all, even with a clear change in machine performance"),
        ],
      },
      {
        h: t("متى تثق بالقراءة ومتى تشك فيها", "When to trust a reading, and when to doubt it"),
        p: t(
          "إذا كانت أعراض المعدة (ضعف، هبوط، صوت) لا تتوافق مع قراءة المقياس، فالأرجح أن المقياس نفسه هو المتضرر لا النظام. في هذه الحالة يُستبدل المقياس أولًا، أو يُقارَن بمقياس آخر معروف الدقة، قبل الحكم على المضخة أو الصمامات.",
          "If a machine's symptoms (weakness, drift, noise) do not match what the gauge shows, the gauge itself is more likely the faulty part, not the system. In that case, replace the gauge first, or compare it against another gauge of known accuracy, before judging the pump or valves.",
        ),
      },
    ],
    faq: [
      {
        q: t("هل يمكن استخدام أي مقياس ضغط على أي معدة؟", "Can any pressure gauge be fitted to any machine?"),
        a: t(
          "يجب أن يطابق نطاق المقياس ونوع منفذه (مقاس ونوع اللولب) متطلبات نقطة التركيب. أرسل تفاصيل المنفذ وضغط النظام وسنوضح لك المقياس المناسب.",
          "The gauge's range and its port type (thread size and standard) must match what the mounting point needs. Send the port details and the system pressure and we will tell you the right gauge.",
        ),
      },
      {
        q: t("مقياسي يعطي قراءة مختلفة عن مقياس آخر على نفس النظام، أيهما أصدق؟", "My gauge reads differently from another gauge on the same system — which is correct?"),
        a: t(
          "غالبًا المقياس الأحدث أو الأقل استخدامًا هو الأدق، لكن الطريقة الأضمن مقارنتهما بمقياس معاير معروف الدقة.",
          "The newer or less-used gauge is usually the more accurate one, but the safest way is to compare both against a known, calibrated reference gauge.",
        ),
      },
      {
        q: t("هل تبيعون أو تركّبون مقاييس ضغط؟", "Do you supply or fit pressure gauges?"),
        a: t(
          "نعم، نوفر مقاييس الضغط المناسبة ونركّبها ضمن صيانة النظام الهيدروليكي.",
          "Yes, we supply the right pressure gauges and fit them as part of hydraulic system maintenance.",
        ),
      },
    ],
    related: ["pressure-gauges", "hydraulic-pump", "control-valve"],
    ask: t("السلام عليكم، أرغب بمعرفة المقياس المناسب لنظامي الهيدروليكي وعرض سعر.", "Hello, I would like help choosing the right pressure gauge for my hydraulic system and a quote."),
  },

  /* --------------------------------------------------------------- 24 */
  {
    slug: "honed-tube-chrome-rod-specs",
    published: "2026-11-17",
    title: t("مواصفات الماسورة المصقولة والعمود المطلي بالكروم", "Honed tube and chrome rod specifications"),
    card: t("التفاوت والنعومة ولماذا لا تُستبدل بأي أنبوب أو عمود عادي", "Tolerance and surface finish, and why these cannot be swapped for ordinary pipe"),
    metaTitle: t("مواصفات الماسورة المصقولة والعمود المكروم", "Honed Tube & Chrome Rod Specs Explained"),
    desc: t(
      "ما الذي يميز الماسورة المصقولة (Honed tube) والعمود المطلي بالكروم الصلب عن الأنبوب والعمود العاديين: التفاوت الدقيق ونعومة السطح وسماكة الطلاء.",
      "What sets a honed tube and a hard-chrome rod apart from ordinary pipe and bar: tight tolerance, surface finish, and chrome plating thickness.",
    ),
    h1: t("ما الذي يميز الماسورة المصقولة والعمود المطلي بالكروم عن الأنبوب العادي", "What sets a honed tube and chrome rod apart from ordinary pipe"),
    answer: t(
      "الماسورة المصقولة (Honed tube) أنبوب عولج داخليًا بعملية صقل دقيقة تعطيه قطرًا داخليًا بتفاوت ضئيل جدًا ونعومة سطح عالية، بخلاف الأنبوب العادي الذي لا يضمن هذه الدقة. العمود المطلي بالكروم الصلب هو قضيب فولاذي مطلي بطبقة كروم صلبة ومصقولة، تعطيه مقاومة عالية للخدش والصدأ. كلاهما ضروري لعمل الأختام بشكل صحيح، ولا يصح استبدالهما بأنبوب أو قضيب عادي.",
      "A honed tube is a pipe that has been internally machined by a precision honing process, giving it a bore with very tight tolerance and a fine surface finish, unlike ordinary pipe which guarantees neither. A hard-chrome rod is a steel bar plated with a hard, polished chrome layer, giving it strong resistance to scoring and rust. Both are essential for the seals to work correctly, and neither can be substituted with ordinary pipe or bar.",
    ),
    sections: [
      {
        h: t("لماذا لا يكفي أنبوب عادي كماسورة سلندر", "Why ordinary pipe is not enough for a cylinder tube"),
        p: t(
          "الأنبوب العادي يُصنَّع بتفاوت قطر أكبر وسطح داخلي أخشن نسبيًا، فلا يحكم الختم إغلاقه عليه، فيتسرب الزيت أو يتآكل الختم بسرعة. عملية الصقل (Honing) تزيل هذا التفاوت وتترك خطوطًا دقيقة متقاطعة على السطح تساعد في توزيع طبقة الزيت بانتظام حول الختم.",
          "Ordinary pipe is made with a wider bore tolerance and a relatively rougher inner surface, so a seal cannot close against it properly, and oil leaks or the seal wears out quickly. The honing process removes this tolerance and leaves fine crosshatch marks on the surface that help spread an even oil film around the seal.",
        ),
      },
      {
        h: t("طلاء الكروم الصلب على العمود", "Hard-chrome plating on the rod"),
        p: t(
          "العمود المطلي بالكروم الصلب يُصنَّع من قضيب فولاذي دقيق التفاوت، ثم يُطلى بطبقة كروم صلبة بسماكة محسوبة، ثم يُصقل. هذه الطبقة تقاوم الخدش والصدأ أفضل بكثير من الفولاذ العادي، وهي التي تحافظ على سلامة الختم المحيط بها مع آلاف دورات الحركة.",
          "A hard-chrome rod starts as a precision-tolerance steel bar, which is then plated with a chrome layer of a calculated thickness, then polished. This layer resists scoring and rust far better than plain steel, and it is what keeps the surrounding seal intact through thousands of movement cycles.",
        ),
      },
      {
        h: t("ما الذي يحدث إذا استُخدم بديل غير مطابق", "What happens if a non-matching substitute is used"),
        list: [
          t("تفاوت قطر أكبر من اللازم: الختم لا يحكم الإغلاق فيتسرب الزيت من البداية", "Bore tolerance too wide: the seal cannot close properly, so oil leaks from the start"),
          t("سطح داخلي خشن: يقطع الختم بسرعة حتى لو كان المقاس صحيحًا ظاهريًا", "A rough inner surface: cuts the seal quickly even when the size looks right on paper"),
          t("طلاء كروم رقيق جدًا أو غير متساوٍ: يتآكل بسرعة ويترك العمود عرضة للصدأ والخدش", "Chrome plating too thin or uneven: wears through quickly, leaving the rod exposed to rust and scoring"),
        ],
      },
      {
        h: t("ماذا ترسل لنا", "What to send us"),
        list: [
          t("قطر الماسورة الداخلي أو قطر العمود المطلوب، بالقياس المباشر إن أمكن", "The required tube bore or rod diameter, measured directly if possible"),
          t("الطول المطلوب", "The required length"),
          t("نوع المعدة أو التطبيق الذي ستُستخدم فيه القطعة", "The machine or application the part will be used in"),
        ],
      },
    ],
    faq: [
      {
        q: t("هل تصنّعون ماسورة مصقولة وأعمدة مكرومة بمقاسات مخصصة؟", "Do you make honed tubes and chrome rods to custom sizes?"),
        a: t(
          "نعم، نوفّر الماسورة المصقولة والعمود المطلي بالكروم الصلب بالمقاسات المطلوبة لتصنيع أو إصلاح السلندرات.",
          "Yes, we supply honed tube and hard-chrome rod in the sizes needed for cylinder manufacturing or repair.",
        ),
      },
      {
        q: t("عمودي مخدوش قليلًا، هل يمكن إصلاحه بدل استبداله؟", "My rod is slightly scored — can it be repaired instead of replaced?"),
        a: t(
          "إذا كان الخدش سطحيًا فقد يمكن إعادة صقله أو طلائه، وإذا كان عميقًا فالاستبدال بعمود جديد أسلم. نحدد ذلك بالفحص.",
          "If the scoring is shallow it may be possible to re-polish or re-plate it; if it is deep, replacing it with a new rod is safer. We decide this on inspection.",
        ),
      },
      {
        q: t("هل جودة الماسورة تؤثر فعليًا على عمر السلندر؟", "Does tube quality really affect how long a cylinder lasts?"),
        a: t(
          "نعم بشكل مباشر. ماسورة غير مصقولة جيدًا تقصّر عمر الأختام بشكل كبير حتى لو كانت الأختام نفسها ممتازة.",
          "Yes, directly. A poorly honed tube shortens seal life significantly, even when the seals themselves are excellent.",
        ),
      },
    ],
    related: ["honed-tubes-chrome-rods", "hydraulic-cylinder", "hydraulic-seals"],
    ask: t("السلام عليكم، أحتاج ماسورة مصقولة أو عمودًا مكرومًا بمقاس محدد وأرغب بعرض سعر.", "Hello, I need a honed tube or chrome rod in a specific size and would like a quote."),
  },

  /* --------------------------------------------------------------- 25 */
  {
    slug: "tipping-system-hydraulics-explained",
    published: "2026-11-17",
    title: t("شرح النظام الهيدروليكي لصناديق القلاب", "Tipping system hydraulics explained"),
    card: t("سلندر الرفع وصمام التحكم وترتيب الأمان عند الرفع", "The lift cylinder, control valve and the safety sequence while tipping"),
    metaTitle: t("شرح النظام الهيدروليكي لصناديق القلاب", "Tipping Trailer & Dump Body Hydraulics Explained"),
    desc: t(
      "كيف يعمل النظام الهيدروليكي لصندوق القلاب: سلندر الرفع أحادي التأثير غالبًا، وصمام التحكم، وصمام الأمان الذي يمنع هبوط الصندوق المرفوع فجأة.",
      "How a tipping-body hydraulic system works: the lift cylinder, control valve, and the safety valve that stops a raised body dropping suddenly.",
    ),
    h1: t("كيف يعمل النظام الهيدروليكي لصندوق القلاب", "How a tipping-body hydraulic system works"),
    answer: t(
      "نظام صندوق القلاب يضم سلندر رفع، غالبًا أحادي التأثير متعدد المراحل (تلسكوبي) ليعطي شوطًا طويلًا من جسم قصير، وصمام تحكم يوجّه الزيت من مضخة تُدار عادة عبر PTO، وصمام أمان (Holding أو counterbalance valve) يمنع هبوط الصندوق المرفوع فجأة عند فتح الصمام أو انفجار خرطوم. ترتيب هذه الأجزاء وتوقيت عملها هو ما يجعل الرفع والإنزال آمنين.",
      "A tipping-body system includes a lift cylinder, usually single-acting and telescopic to give a long stroke from a short retracted length, a control valve directing oil from a pump typically driven by a PTO, and a safety valve (a holding or counterbalance valve) that stops a raised body dropping suddenly if the valve opens unexpectedly or a hose bursts. How these parts are arranged and timed is what makes raising and lowering safe.",
    ),
    note: SAFETY,
    sections: [
      {
        h: t("سلندر الرفع التلسكوبي", "The telescopic lift cylinder"),
        p: t(
          "لأن صندوق القلاب يحتاج شوط رفع طويلًا نسبيًا من مساحة محدودة تحت الصندوق، تُستخدم سلندرات تلسكوبية بمراحل متداخلة تمتد الواحدة تلو الأخرى. كل مرحلة لها ختم وعمود خاصين بها، فتلف مرحلة واحدة لا يعني بالضرورة تلف باقي السلندر.",
          "Because a tipping body needs a relatively long lift stroke from limited space underneath it, telescopic cylinders with nested stages that extend one after another are used. Each stage has its own seal and rod, so damage to one stage does not necessarily mean the whole cylinder is worn out.",
        ),
      },
      {
        h: t("صمام التحكم والـ PTO", "The control valve and the PTO"),
        p: t(
          "صمام تحكم بسيط، غالبًا يدوي التشغيل من داخل المقصورة، يوجّه الزيت من المضخة إلى سلندر الرفع أو يسمح له بالنزول. المضخة في أغلب الأحيان تُدار عبر وحدة PTO من محرك الشاحنة نفسه، فلا يعمل الرفع إلا إذا كان المحرك يعمل والـ PTO مفعّلًا.",
          "A simple control valve, usually manually operated from inside the cab, sends oil from the pump to the lift cylinder or lets it lower. The pump is most often driven through a PTO unit from the truck's own engine, so lifting only works while the engine is running and the PTO is engaged.",
        ),
      },
      {
        h: t("صمام الأمان: لماذا هو الجزء الأهم", "The safety valve: why it matters most"),
        p: t(
          "إذا انفجر الخرطوم الواصل للسلندر والصندوق مرفوع، فصمام الأمان المركّب مباشرة على السلندر (لا في مكان بعيد) هو ما يمنع الصندوق من الهبوط المفاجئ، لأنه يغلق مسار الزيت فورًا عند فقد الضغط المفاجئ. هذا الصمام جزء أساسي من سلامة التشغيل ولا يُزال أو يُهمَل أبدًا.",
          "If the hose to the cylinder bursts while the body is raised, the safety valve fitted directly on the cylinder itself (not somewhere else in the line) is what stops the body from dropping suddenly, because it closes the oil path instantly when pressure is lost suddenly. This valve is a core part of operating safety and must never be removed or left unchecked.",
        ),
      },
      {
        h: t("متى تفحص النظام", "When to have the system checked"),
        list: [
          t("الصندوق يهبط ببطء وهو مرفوع وساكن (تسريب داخلي في السلندر أو الصمام)", "The body drifts down slowly while raised and stationary (internal leakage in the cylinder or valve)"),
          t("صوت طرق أو اهتزاز عند الرفع", "A knocking sound or vibration while lifting"),
          t("رفع بطيء جدًا أو عدم اكتمال الرفع", "Very slow lifting, or the body not reaching full height"),
          t("أي تسريب زيت ظاهر عند أي مرحلة من مراحل السلندر التلسكوبي", "Any visible oil leak at any stage of the telescopic cylinder"),
        ],
      },
    ],
    faq: [
      {
        q: t("هل تصلحون السلندرات التلسكوبية لصناديق القلاب؟", "Do you repair telescopic cylinders for tipping bodies?"),
        a: t(
          "نعم، نفحص كل مرحلة من مراحل السلندر التلسكوبي ونصلح أو نستبدل ما يلزم.",
          "Yes, we inspect each stage of the telescopic cylinder and repair or replace what is needed.",
        ),
      },
      {
        q: t("صندوقي يهبط ببطء وهو مرفوع، هل هذا خطر؟", "My body drifts down slowly while raised — is that dangerous?"),
        a: t(
          "نعم، يدل على تسريب داخلي ويجب عدم العمل تحت الصندوق المرفوع حتى يُفحص ويُصلح.",
          "Yes, it points to internal leakage, and no one should work under the raised body until it is inspected and repaired.",
        ),
      },
      {
        q: t("هل تفحصون صمام الأمان على السلندر؟", "Do you check the safety valve on the cylinder?"),
        a: t(
          "نعم، فحص صمام الأمان جزء أساسي من فحص أي سلندر رفع لصندوق قلاب.",
          "Yes, checking the safety valve is a core part of inspecting any tipping-body lift cylinder.",
        ),
      },
    ],
    related: ["tipping-systems", "hydraulic-cylinder", "pto"],
    ask: t("السلام عليكم، أرغب بفحص النظام الهيدروليكي لصندوق القلاب وعرض سعر.", "Hello, I would like the hydraulic system on my tipping body inspected and a quote."),
  },

  /* --------------------------------------------------------------- 26 */
  {
    slug: "hydraulic-fluid-injection-injury-safety",
    published: "2026-11-17",
    title: t("إصابة حقن زيت الهيدروليك تحت الجلد: خطورتها وما تفعله", "Hydraulic fluid injection injury: why it is serious"),
    card: t("لماذا تبدو الإصابة بسيطة وهي حالة طبية طارئة", "Why it can look minor while being a genuine medical emergency"),
    metaTitle: t("إصابة حقن زيت الهيدروليك: الخطورة والإسعاف", "Hydraulic Fluid Injection Injury: The Risk"),
    desc: t(
      "تسريب زيت هيدروليك تحت ضغط عالٍ يمكن أن يخترق الجلد دون ألم ظاهر في البداية، وهي حالة طبية طارئة تستوجب التوجه للمستشفى فورًا حتى لو بدت الإصابة بسيطة.",
      "A pinhole leak of pressurised hydraulic fluid can pierce skin with little pain. It is a medical emergency needing hospital care, however minor it looks.",
    ),
    h1: t("إصابة حقن زيت الهيدروليك تحت الجلد: لماذا هي خطيرة وما يجب فعله فورًا", "Hydraulic fluid injection injury: why it is dangerous and what to do immediately"),
    answer: t(
      "زيت الهيدروليك المتسرب من خرطوم أو وصلة تحت ضغط عالٍ، حتى من ثقب دقيق جدًا لا يُرى بالعين، يمكن أن يخترق الجلد بسرعة كبيرة ويدخل تحت الأنسجة. قد يبدو موضع الإصابة في البداية مجرد وخزة بسيطة بلا ألم شديد، لكن الزيت المحقون تحت الجلد يسبب ضررًا داخليًا جسيمًا يتفاقم خلال ساعات. هذه حالة طبية طارئة تستوجب التوجه للمستشفى فورًا، لا انتظار ظهور الألم.",
      "Hydraulic fluid escaping from a hose or fitting under high pressure, even through a pinhole too small to see, can pierce the skin at great speed and travel under the tissue. The injury site may at first look like a minor prick with little pain, but fluid injected under the skin causes serious internal damage that worsens over hours. This is a genuine medical emergency requiring immediate hospital care, not waiting for pain to appear.",
    ),
    note: t(
      "إذا شككت بإصابة حقن زيت تحت الجلد، اتجه إلى أقرب مستشفى فورًا حتى لو كانت الإصابة تبدو بسيطة أو بلا ألم. لا تنتظر ولا تعالجها كجرح سطحي عادي.",
      "If you suspect a fluid-injection injury, go to the nearest hospital immediately, even if the injury looks minor or is not painful. Do not wait, and do not treat it as an ordinary surface wound.",
    ),
    sections: [
      {
        h: t("لماذا تبدو الإصابة بسيطة وهي ليست كذلك", "Why it looks minor when it is not"),
        p: t(
          "ضغط الزيت الخارج من ثقب دقيق قد يتجاوز مئات البارات، وهذا كافٍ لدفع كمية من الزيت عبر الجلد إلى الأنسجة تحته في جزء من الثانية. موضع الدخول صغير جدًا وقد لا ينزف كثيرًا، فتبدو الإصابة سطحية، بينما الزيت فعليًا انتشر تحت الجلد في الأنسجة والأوعية المحيطة.",
          "The pressure of fluid escaping through a pinhole can exceed hundreds of bar, which is enough to drive fluid through the skin into the tissue beneath it in a fraction of a second. The entry point is tiny and may not bleed much, so the injury looks superficial, while the fluid has actually spread under the skin into the surrounding tissue and vessels.",
        ),
      },
      {
        h: t("لماذا الوقت عامل حاسم", "Why time matters critically"),
        p: t(
          "الزيت المحقون يسبب التهابًا كيميائيًا وتلفًا في الأنسجة يتفاقم مع مرور الوقت، وكلما تأخر التدخل الطبي المتخصص زاد احتمال الضرر الدائم. لهذا تُعامَل هذه الإصابة كحالة طارئة تستوجب مستشفى فورًا، لا عيادة عامة ولا انتظارًا لرؤية ما سيحدث.",
          "Injected fluid causes chemical inflammation and tissue damage that worsens over time, and the longer specialist medical treatment is delayed, the greater the risk of permanent damage. For this reason the injury is treated as an emergency requiring a hospital immediately, not a general clinic and not waiting to see what happens.",
        ),
      },
      {
        h: t("الوقاية أثناء العمل على النظام الهيدروليكي", "Prevention while working on a hydraulic system"),
        list: [
          t("أوقف المعدة وأفرغ الضغط بالكامل قبل فحص أي خرطوم أو وصلة", "Stop the machine and fully release pressure before inspecting any hose or fitting"),
          t("لا تتحسّس موضع تسريب مشتبه به بيدك المجردة أبدًا، مهما بدا التسريب بسيطًا", "Never feel for a suspected leak with a bare hand, however small the leak looks"),
          t("استخدم قطعة ورق مقوى أو خشب لتمرير أمام الخط المشتبه به بدلًا من اليد، لرؤية التسريب دون ملامسته", "Use a piece of cardboard or wood to pass in front of a suspect line instead of a hand, to see a leak without touching it"),
          t("ارتدِ قفازات مناسبة وملابس واقية عند العمل قرب خطوط تحت الضغط", "Wear suitable gloves and protective clothing when working near pressurised lines"),
        ],
      },
      {
        h: t("ماذا تفعل فور الاشتباه بإصابة", "What to do immediately if an injury is suspected"),
        list: [
          t("توجّه إلى أقرب مستشفى أو طوارئ فورًا، ولا تنتظر ظهور الألم", "Go to the nearest hospital or emergency department immediately; do not wait for pain to appear"),
          t("أخبر الطاقم الطبي أن الإصابة ناتجة عن حقن زيت هيدروليك تحت ضغط عالٍ، لأن علاجها يختلف عن الجرح العادي", "Tell medical staff the injury is from high-pressure hydraulic fluid injection, since treatment differs from an ordinary wound"),
          t("لا تضع ضمادة ضاغطة بقوة ولا تحاول تفريغ الزيت بنفسك", "Do not apply a tight compression bandage, and do not try to drain the fluid yourself"),
        ],
      },
    ],
    faq: [
      {
        q: t("الإصابة لا تؤلمني كثيرًا، هل ما زال يجب الذهاب للمستشفى؟", "The injury does not hurt much — should I still go to hospital?"),
        a: t(
          "نعم، غياب الألم الشديد لا يعني أن الإصابة بسيطة. إصابات حقن الزيت تحت الجلد تتطلب تقييمًا طبيًا فوريًا دائمًا.",
          "Yes, the absence of severe pain does not mean the injury is minor. Fluid-injection injuries always need immediate medical assessment.",
        ),
      },
      {
        q: t("كيف أمنع هذا النوع من الإصابات أثناء الصيانة؟", "How do I prevent this kind of injury during maintenance?"),
        a: t(
          "أوقف المعدة وأفرغ الضغط دائمًا قبل الفحص، ولا تتحسّس أي تسريب بيدك المجردة مهما بدا بسيطًا، واستخدم أداة بديلة لفحص الخط المشتبه به.",
          "Always stop the machine and release pressure before inspecting, never feel for a leak with a bare hand however minor it looks, and use a tool instead to check a suspect line.",
        ),
      },
      {
        q: t("هل هذا الخطر يقتصر على الخراطيم عالية الضغط فقط؟", "Is this risk limited to very high-pressure hoses?"),
        a: t(
          "لا، حتى ضغوط أقل نسبيًا من المعتاد في الأنظمة الهيدروليكية الصناعية كافية لاختراق الجلد عبر ثقب دقيق، لذا تُطبَّق الاحتياطات نفسها دائمًا.",
          "No, even pressures relatively lower than typical in industrial hydraulic systems are enough to pierce skin through a pinhole leak, so the same precautions apply every time.",
        ),
      },
    ],
    related: ["hydraulic-hoses", "hydraulic-cylinder", "hydraulic-pump"],
    ask: t("السلام عليكم، أرغب بفحص نظام هيدروليكي للتأكد من سلامته ومنع مخاطر التسريب تحت الضغط.", "Hello, I would like a hydraulic system inspected to confirm it is safe and reduce the risk of a pressurised leak."),
  },
];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
export const guidePath = (g: Guide) => `/guides/${g.slug}/`;

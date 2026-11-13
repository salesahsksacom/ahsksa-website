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
];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
export const guidePath = (g: Guide) => `/guides/${g.slug}/`;

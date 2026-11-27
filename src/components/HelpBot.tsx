import { useState, type CSSProperties, type FormEvent } from "react";

// Edit answers here. Keywords decide which answer a typed question gets.
const EMAIL = "info@crossfitsouthie.com";

type Topic = { label: string; keys: string[]; answer: string; link?: [string, string] };

const TOPICS: Topic[] = [
  { label: "Free class", keys: ["free", "trial", "try", "first", "intro", "start", "book", "sign up"],
    answer: "Your first class is a complimentary intro session. Arrive 5 to 10 minutes early, wear workout gear and bring a water bottle.", link: ["Book free trial", "https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm"] },
  { label: "Personal training", keys: ["personal", "private", "one on one", "1-on-1"],
    answer: `Personal training sessions are $99 each. To get set up, email ${EMAIL}.`, link: ["Details", "/programs/personal-training/"] },
  { label: "Pricing", keys: ["price", "pricing", "cost", "much", "membership", "month", "cancel", "fee", "rate", "drop"],
    answer: "Plans are monthly and cancel anytime. CrossFit is $149 to $249 a month, Strive and HYROX $125 to $175, and Fundamentals $99. Drop-ins are $30.", link: ["See pricing", "/pricing/"] },
  { label: "Hours", keys: ["hour", "open", "close", "time", "schedule", "24"],
    answer: "Staffed hours: Mon to Thu 5am to 8pm, Fri 5am to 7pm, Sat 7am to 1pm, Sun 9am to 12pm. 24-hour access is a $10 monthly add-on. Class times vary, so check the schedule." },
  { label: "Beginners", keys: ["beginner", "new", "never", "fundamental", "shape", "experience"],
    answer: "New to this? Fundamentals builds your foundation and teaches proper movement patterns before you join regular classes.", link: ["Fundamentals", "/programs/fundamentals/"] },
  { label: "Classes", keys: ["class", "program", "hyrox", "hiit", "strive", "strength", "crossfit"],
    answer: "We offer CrossFit, HYROX, Strive-X HIIT, Strength & Conditioning, Fundamentals and Personal Training.", link: ["What to expect", "/what-to-expect/"] },
  { label: "Location", keys: ["where", "location", "address", "located", "direction"],
    answer: "We're at 383 Dorchester Ave Front, Boston, MA 02127, in South Boston.", link: ["Contact page", "/contact/"] },
  { label: "Coaches", keys: ["coach", "trainer", "staff"],
    answer: "Meet the people who run our classes on the coaches page.", link: ["Our coaches", "/team/"] },
];

const FALLBACK: Topic = { label: "", keys: [], answer: `I don't have that answer. Email ${EMAIL} and our team can help.` };

function match(question: string): Topic {
  const q = " " + question.toLowerCase();
  let best = FALLBACK;
  let score = 0;
  for (const t of TOPICS) {
    // match at the start of a word, so "try" doesn't match "country"
    const s = t.keys.filter((k) => new RegExp("\\b" + k).test(q)).length;
    if (s > score) { best = t; score = s; }
  }
  return best;
}

const box: CSSProperties = { position: "fixed", left: 16, bottom: 24, zIndex: 60, fontFamily: "inherit", textAlign: "left" };
const red: CSSProperties = { background: "#dc2626", color: "#fff", border: 0, borderRadius: 999, padding: "12px 18px", fontWeight: 700, cursor: "pointer" };
const chip: CSSProperties = { background: "#fff", color: "#111", border: "1px solid #d1d5db", borderRadius: 999, padding: "6px 10px", fontSize: 13, cursor: "pointer" };

export default function HelpBot() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [log, setLog] = useState<{ q: string; t: Topic }[]>([]);

  const ask = (q: string, t = match(q)) => setLog((l) => [...l, { q, t }]);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    ask(text.trim());
    setText("");
  };

  if (!open) return <div style={box}><button type="button" style={red} onClick={() => setOpen(true)}>Help</button></div>;

  return (
    <div style={box} role="dialog" aria-label="CrossFit Southie help">
      <div style={{ width: "min(340px, calc(100vw - 32px))", height: "min(520px, 75vh)", display: "flex", flexDirection: "column", background: "#fff", color: "#111", borderRadius: 14, boxShadow: "0 10px 40px rgba(0,0,0,.35)", overflow: "hidden" }}>
        <div style={{ background: "#dc2626", color: "#fff", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <strong>CrossFit Southie</strong>
          <button type="button" aria-label="Close" onClick={() => setOpen(false)} style={{ ...red, padding: "4px 8px" }}>✕</button>
        </div>
        <div style={{ padding: 12, overflowY: "auto", flex: 1, fontSize: 14 }} aria-live="polite">
          <p style={{ margin: "0 0 8px" }}>Hi! Pick a topic or type a question.</p>
          {log.map(({ q, t }, i) => (
            <div key={i} ref={i === log.length - 1 ? (el) => el?.scrollIntoView({ block: "nearest" }) : undefined}>
              <p style={{ margin: "10px 0 4px", textAlign: "right", fontWeight: 700 }}>{q}</p>
              <div style={{ background: "#f3f4f6", borderRadius: 10, padding: 10 }}>
                {t.answer}{" "}
                {t.link ? <a href={t.link[1]} style={{ color: "#b91c1c", fontWeight: 700 }}>{t.link[0]}</a>
                  : <a href={`mailto:${EMAIL}`} style={{ color: "#b91c1c", fontWeight: 700 }}>Email us</a>}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "0 12px 8px" }}>
          {TOPICS.map((t) => <button key={t.label} type="button" style={chip} onClick={() => ask(t.label, t)}>{t.label}</button>)}
        </div>
        <form onSubmit={submit} style={{ display: "flex", gap: 8, padding: 12, borderTop: "1px solid #e5e7eb" }}>
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a question" aria-label="Your question"
            style={{ flex: 1, minWidth: 0, padding: 9, border: "1px solid #d1d5db", borderRadius: 8, fontSize: 16, background: "#fff", color: "#111" }} />
          <button type="submit" style={{ ...red, borderRadius: 8, padding: "9px 14px" }}>Send</button>
        </form>
      </div>
    </div>
  );
}

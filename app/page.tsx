import PartnerProof from "./PartnerProof";

const services = [
  {
    number: "01",
    title: "Besser aussehen",
    text: "Eine Website, die Wärme, Qualität und Professionalität ausstrahlt – damit Angehörige und Bewerber sofort ein gutes Gefühl bekommen.",
  },
  {
    number: "02",
    title: "Besser gefunden werden",
    text: "Wir sorgen dafür, dass Ihr Pflegeunternehmen bei Google dort sichtbar wird, wo Menschen aus Ihrer Region tatsächlich suchen.",
  },
  {
    number: "03",
    title: "Mehr Menschen erreichen",
    text: "Mit gezielter Werbung auf Facebook und Instagram erreichen Sie Menschen, die als Mitarbeiter, Angehörige oder Kunden wirklich zu Ihnen passen.",
  },
  {
    number: "04",
    title: "Einfacher Kontakt",
    text: "Bewerbung und Anfrage müssen leicht sein. Deshalb bauen wir klare Wege, damit aus Interesse auch wirklich ein Kontakt entsteht.",
  },
];

const steps = [
  {
    title: "Wir schauen hin",
    text: "Wir sehen uns Ihren bisherigen Auftritt an und verstehen, was Ihr Unternehmen besonders macht.",
  },
  {
    title: "Wir machen es sichtbar",
    text: "Aus Leistungen, Menschen und Atmosphäre entsteht ein Auftritt, der sich nach Ihrem Pflegeunternehmen anfühlt.",
  },
  {
    title: "Wir bringen Menschen hin",
    text: "Auf Wunsch sorgen Google und Werbung dafür, dass mehr passende Menschen auf diesen Auftritt aufmerksam werden.",
  },
  {
    title: "Sie bekommen mehr Chancen",
    text: "Mehr Menschen verstehen schneller, warum sie sich bei Ihnen melden, bewerben oder anfragen sollten.",
  },
];

const audiences = [
  "Pflegeheime",
  "Ambulante Pflegedienste",
  "Tagespflegen",
  "Intensivpflege",
  "Betreuungsdienste",
  "Träger mit mehreren Standorten",
];

const faqs = [
  {
    question: "Müssen wir Texte und Bilder schon fertig haben?",
    answer:
      "Nein. Wir helfen Ihnen dabei, die richtigen Inhalte auszuwählen und verständlich aufzubereiten. Für authentische Bilder reichen oft bereits gute Smartphone-Fotos als Ausgangspunkt.",
  },
  {
    question: "Geht es nur um eine neue Website?",
    answer:
      "Nein. Die Website ist das Fundament. Danach können wir Sie auch dabei unterstützen, besser bei Google gefunden zu werden und mit Werbung mehr passende Bewerber und Interessenten zu erreichen.",
  },
  {
    question: "Ist das auch für kleinere Pflegedienste sinnvoll?",
    answer:
      "Ja. Gerade wenn Menschen mehrere Anbieter vergleichen, kann ein klarer und vertrauensvoller Auftritt einen großen Unterschied für den ersten Eindruck machen.",
  },
  {
    question: "Wie aufwendig ist das für uns?",
    answer:
      "So wenig wie möglich. Wir halten den Ablauf einfach, stellen gezielte Fragen und übernehmen den Großteil der Arbeit.",
  },
];

const mailLink =
  "mailto:hallo@pflege-webseiten.de?subject=Kostenloser%20Website-Entwurf%20f%C3%BCr%20unser%20Pflegeunternehmen";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pflege-Webseiten.de Startseite">
          <span className="brand-mark">P</span>
          <span>
            <strong>pflege-webseiten.de</strong>
            <small>eine Marke von Digitale Gewinner</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="#warum">Warum</a>
          <a href="#loesung">So helfen wir</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#faq">Fragen</a>
        </nav>
        <a className="button button-small" href={mailLink}>
          Entwurf anfragen
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Webseiten & Marketing speziell für Pflegeunternehmen</p>
            <h1>
              Ihre Pflege ist besser als Ihre Website.
              <span> Wir sorgen dafür, dass man das endlich sieht.</span>
            </h1>
            <p className="hero-lead">
              Wir machen Pflegeunternehmen online attraktiver – damit Angehörige schneller Vertrauen fassen,
              mehr Pflegekräfte auf Sie aufmerksam werden und mehr passende Menschen den Weg zu Ihnen finden.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={mailLink}>
                Kostenlosen Entwurf erhalten <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#warum">
                Warum die Website so wichtig ist
              </a>
            </div>
            <div className="trust-line" aria-label="Zielgruppen">
              {audiences.slice(0, 4).map((audience) => (
                <span key={audience}>✓ {audience}</span>
              ))}
            </div>
          </div>

          <div className="hero-card" aria-label="Der digitale erste Eindruck">
            <p className="mini-label">Der erste Eindruck passiert oft online.</p>
            <div className="decision-card">
              <span className="decision-time">22:14 Uhr</span>
              <strong>Eine Tochter sucht einen Pflegeplatz für ihren Vater.</strong>
              <p>Sie öffnet mehrere Anbieter. Eine Website fühlt sich sofort vertrauenswürdig an.</p>
            </div>
            <div className="decision-card decision-card-alt">
              <span className="decision-time">07:36 Uhr</span>
              <strong>Eine Pflegefachkraft denkt über einen Wechsel nach.</strong>
              <p>Bevor sie sich bewirbt, schaut sie nach, wie der mögliche neue Arbeitgeber wirkt.</p>
            </div>
            <p className="hero-card-end">
              Zwei Menschen. Zwei Entscheidungen. Ein gemeinsamer erster Schritt: <strong>Sie googeln Sie.</strong>
            </p>
          </div>
        </div>
      </section>

      <PartnerProof />

      <section className="section story-section" id="warum">
        <div className="container narrow">
          <p className="eyebrow">Was online passiert, bevor das Telefon klingelt</p>
          <h2>Menschen entscheiden nicht zuerst mit einer Leistungsübersicht. Sie entscheiden mit einem Gefühl.</h2>
          <p className="section-lead">
            Ist dieser Ort vertrauenswürdig? Wirkt dieses Team sympathisch? Würde ich hier gerne arbeiten? Kann ich
            meine Mutter oder meinen Vater hier guten Gewissens betreuen lassen?
          </p>
        </div>

        <div className="container story-grid">
          <article className="story-card story-dark">
            <span className="story-time">22:14</span>
            <h3>Eine Tochter sitzt abends auf dem Sofa.</h3>
            <p>
              Ihr Vater braucht Unterstützung. Sie öffnet fünf Pflegeanbieter. Bei manchen findet sie alte Bilder,
              lange Textblöcke und wenig Persönlichkeit. Dann öffnet sie eine Seite, die ihr das Haus, die Menschen
              und den Alltag zeigt.
            </p>
            <blockquote>„Hier habe ich ein gutes Gefühl.“</blockquote>
            <p className="story-conclusion">Noch bevor jemand mit ihr gesprochen hat, ist Vertrauen entstanden.</p>
          </article>

          <article className="story-card story-light">
            <span className="story-time">07:36</span>
            <h3>Eine Pflegefachkraft kommt aus der Nachtschicht.</h3>
            <p>
              Sie ist offen für einen Wechsel. Eine Stellenanzeige klingt interessant. Also schaut sie sich den
              Arbeitgeber an. Sie will wissen, wer dort arbeitet, wie das Team wirkt und ob Wertschätzung nur ein
              Wort in der Anzeige ist.
            </p>
            <blockquote>„Da könnte ich mir vorstellen zu arbeiten.“</blockquote>
            <p className="story-conclusion">Die Arbeitgeberattraktivität beginnt nicht erst im Vorstellungsgespräch.</p>
          </article>
        </div>
      </section>

      <section className="section statement-section">
        <div className="container statement-grid">
          <p className="statement-kicker">Die einfache Wahrheit</p>
          <div>
            <h2>Die Website ist das Fundament.</h2>
            <p>
              Wenn Ihr Unternehmen online nicht attraktiv und vertrauenswürdig wirkt, bringt es wenig, noch mehr
              Menschen dorthin zu schicken. Deshalb machen wir zuerst Ihren Auftritt stark – und sorgen anschließend
              auf Wunsch dafür, dass ihn mehr passende Menschen sehen.
            </p>
          </div>
        </div>
      </section>

      <section className="section solution-section" id="loesung">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Ein System. Einfach erklärt.</p>
              <h2>Wir machen Pflegeunternehmen online attraktiver.</h2>
            </div>
            <p>
              Kein Fachchinesisch. Keine fünf verschiedenen Dienstleister. Wir kümmern uns um das, was online
              sichtbar sein muss – und darum, dass die richtigen Menschen es finden.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contrast-section">
        <div className="container contrast-grid">
          <div className="contrast-copy">
            <p className="eyebrow">Warum alles zusammengehört</p>
            <h2>Eine schöne Website allein reicht nicht. Werbung allein aber auch nicht.</h2>
            <p>
              Erst wenn Ihr Auftritt überzeugt <strong>und</strong> die richtigen Menschen ihn sehen, entsteht ein
              starkes digitales Fundament für Bewerbungen, Anfragen und Vertrauen.
            </p>
          </div>
          <div className="contrast-flow" aria-label="Unser System">
            <div><span>1</span><strong>Starker Auftritt</strong><small>Menschen bekommen ein gutes Gefühl.</small></div>
            <div className="flow-arrow">↓</div>
            <div><span>2</span><strong>Besser gefunden</strong><small>Google bringt mehr passende Besucher.</small></div>
            <div className="flow-arrow">↓</div>
            <div><span>3</span><strong>Mehr erreicht</strong><small>Werbung macht Sie zusätzlich sichtbar.</small></div>
            <div className="flow-arrow">↓</div>
            <div className="flow-result"><span>4</span><strong>Mehr Chancen</strong><small>Auf Bewerbungen, Anfragen und neue Kontakte.</small></div>
          </div>
        </div>
      </section>

      <section className="section method-section" id="ablauf">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Die Pflege-Webseiten-Methode</p>
            <h2>Von „irgendwie online“ zu einem Auftritt, den Sie gerne zeigen.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section audience-section">
        <div className="container audience-grid">
          <div>
            <p className="eyebrow">Speziell für die Pflege</p>
            <h2>Keine Agentur, die heute Pflege und morgen Autohäuser erklärt.</h2>
            <p>
              Pflege ist sensibel. Angehörige suchen Sicherheit. Mitarbeiter suchen Wertschätzung. Geschäftsführer
              brauchen Lösungen, die im Alltag funktionieren. Genau darauf richten wir Aufbau, Sprache und Wirkung aus.
            </p>
          </div>
          <div className="audience-list">
            {audiences.map((audience) => (
              <div key={audience}><span>✓</span>{audience}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section offer-section" id="kontakt">
        <div className="container offer-card">
          <div>
            <p className="eyebrow eyebrow-light">Einfach ansehen. Dann entscheiden.</p>
            <h2>Sehen Sie, wie Ihre neue Website aussehen könnte – bevor Sie sich entscheiden.</h2>
            <p>
              Für ausgewählte Pflegeunternehmen erstellen wir einen ersten unverbindlichen Konzeptentwurf. Sie sehen
              direkt, was wir anders machen würden und ob die Richtung zu Ihrem Unternehmen passt.
            </p>
            <a className="button button-white" href={mailLink}>
              Kostenlosen Entwurf anfragen <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="offer-points">
            <div><span>01</span><p>Wir schauen uns Ihre aktuelle Website an.</p></div>
            <div><span>02</span><p>Wir zeigen, wo Vertrauen und Wirkung verloren gehen.</p></div>
            <div><span>03</span><p>Sie bekommen eine klare neue Richtung für Ihren Auftritt.</p></div>
            <div><span>04</span><p>Danach entscheiden Sie in Ruhe, ob Sie mit uns weitergehen möchten.</p></div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">Häufige Fragen</p>
            <h2>Klar beantwortet.</h2>
            <p>Wenn noch etwas offen ist, schreiben Sie uns einfach. Wir erklären es ohne Umwege.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <p className="eyebrow">Pflege verdient einen starken ersten Eindruck.</p>
          <h2>Zeigen Sie online endlich, was Ihre Einrichtung jeden Tag leistet.</h2>
          <a className="button button-primary" href={mailLink}>
            Kostenlosen Entwurf erhalten <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark">P</span>
              <span><strong>pflege-webseiten.de</strong><small>eine Marke von Digitale Gewinner</small></span>
            </a>
          </div>
          <p>Webseiten · Google · Werbung · Bewerbergewinnung für Pflegeunternehmen</p>
          <div className="footer-links">
            <a href="mailto:hallo@pflege-webseiten.de">hallo@pflege-webseiten.de</a>
            <a href="#top">Nach oben ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

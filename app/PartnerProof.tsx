import Image from "next/image";
import styles from "./partner-proof.module.css";

const partners = [
  { name: "Asklepios Klinik Parchim", src: "/partners/asklepios.webp" },
  { name: "AWO Pflege gGmbH", src: "/partners/awo.webp" },
  { name: "BDH Bundesverband Rehabilitation", src: "/partners/bdh.webp" },
  { name: "Caritas", src: "/partners/caritas.webp" },
  { name: "CURA Tagespflege Hahn-Lehmden", src: "/partners/cura.webp" },
  { name: "Diakonie", src: "/partners/diakonie.webp" },
  { name: "Die Brücke", src: "/partners/bruecke.webp" },
  { name: "Deutsches Rotes Kreuz", src: "/partners/drk.webp" },
  { name: "GBS Seniorenhilfe", src: "/partners/gbs.webp" },
  { name: "Pflege Service Knoblauch GmbH", src: "/partners/pflege-service-knoblauch.webp" },
  { name: "Korian", src: "/partners/korian.webp" },
  { name: "Linimed", src: "/partners/linimed.webp" },
  { name: "Arbeiter-Samariter-Bund", src: "/partners/asb.webp" },
];

export default function PartnerProof() {
  return (
    <section className={styles.section} aria-labelledby="partner-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Vertrauen aus der Pflege</p>
          <h2 id="partner-heading">Wir kennen die Branche nicht nur aus Präsentationen.</h2>
          <p>
            Wir arbeiten mit Unternehmen und Organisationen aus Pflege, Gesundheit und Sozialwesen.
            Deshalb wissen wir, was Angehörige sehen müssen – und was einen Arbeitgeber für Pflegekräfte attraktiv macht.
          </p>
        </div>

        <div className={styles.logoGrid} aria-label="Ausgewählte Partner">
          {partners.map((partner) => (
            <div className={styles.logoCard} key={partner.name}>
              <Image
                src={partner.src}
                alt={`${partner.name} Logo`}
                width={260}
                height={150}
                sizes="(max-width: 680px) 42vw, (max-width: 1100px) 25vw, 170px"
              />
            </div>
          ))}
        </div>

        <div className={styles.photoGrid}>
          <figure className={styles.photoCard}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/pflegehaus.webp"
                alt="Pflegeeinrichtung in grüner Umgebung"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
            <figcaption>
              <span>Für Angehörige</span>
              <strong>„Hier kann ich mir vorstellen, meine Familie gut aufgehoben zu wissen.“</strong>
              <p>Genau dieses Gefühl muss eine gute Website schon vor dem ersten Anruf vermitteln.</p>
            </figcaption>
          </figure>

          <figure className={styles.photoCard}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/pflegeteam.webp"
                alt="Pflege-Team in einer Einrichtung"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
            <figcaption>
              <span>Für Bewerber</span>
              <strong>„Mit diesen Menschen könnte ich gerne zusammenarbeiten.“</strong>
              <p>Ein echter, sympathischer Einblick macht Arbeitgeberattraktivität sichtbar statt sie nur zu behaupten.</p>
            </figcaption>
          </figure>
        </div>

        <p className={styles.bridge}>
          <strong>Ihre Pflege hat längst eine Geschichte.</strong> Wir sorgen dafür, dass Menschen sie online sehen, verstehen und fühlen.
        </p>
      </div>
    </section>
  );
}

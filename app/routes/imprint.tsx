export default function Imprint() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
      <div className="bg-white-sky-foreground dark:bg-dark-sky-foreground p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-dark-sky dark:text-white-sky mb-8">
          Impressum
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-dark-sky dark:text-white-sky mb-4">
              Diensteanbieter
            </h2>
            <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
              Tim Knothe
              <br />
              Felsennelkenanger 11
              <br />
              80937 München
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark-sky dark:text-white-sky mb-4">
              Kontaktmöglichkeiten
            </h2>
            <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
              E-Mail-Adresse: fmj99cr67b@privaterelay.appleid.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark-sky dark:text-white-sky mb-4">
              Social Media und andere Onlinepräsenzen
            </h2>
            <p className="text-gray-900 dark:text-gray-100 leading-relaxed mb-4">
              Dieses Impressum gilt auch für die folgenden
              Social-Media-Präsenzen und Onlineprofile:
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/timkn/"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/timkn/
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark-sky dark:text-white-sky mb-4">
              Haftungs- und Schutzrechtshinweise
            </h2>
            <div className="space-y-4 text-gray-900 dark:text-gray-100 leading-relaxed">
              <p>
                <strong>Haftungsausschluss:</strong> Die Inhalte dieses
                Onlineangebotes wurden sorgfältig und nach unserem aktuellen
                Kenntnisstand erstellt, dienen jedoch nur der Information und
                entfalten keine rechtlich bindende Wirkung, sofern es sich nicht
                um gesetzlich verpflichtende Informationen (z. B. das Impressum,
                die Datenschutzerklärung, AGB oder verpflichtende Belehrungen
                von Verbrauchern) handelt. Wir behalten uns vor, die Inhalte
                vollständig oder teilweise zu ändern oder zu löschen, soweit
                vertragliche Verpflichtungen unberührt bleiben. Alle Angebote
                sind freibleibend und unverbindlich.
              </p>

              <p>
                <strong>Links auf fremde Webseiten:</strong> Die Inhalte fremder
                Webseiten, auf die wir direkt oder indirekt verweisen, liegen
                außerhalb unseres Verantwortungsbereiches und wir machen sie uns
                nicht zu Eigen. Für alle Inhalte und Nachteile, die aus der
                Nutzung der in den verlinkten Webseiten aufrufbaren
                Informationen entstehen, übernehmen wir keine Verantwortung.
              </p>

              <p>
                <strong>Urheberrechte und Markenrechte:</strong> Alle auf dieser
                Website dargestellten Inhalte, wie Texte, Fotografien, Grafiken,
                Marken und Warenzeichen sind durch die jeweiligen Schutzrechte
                (Urheberrechte, Markenrechte) geschützt. Die Verwendung,
                Vervielfältigung usw. unterliegen unseren Rechten oder den
                Rechten der jeweiligen Urheber bzw. Rechteinhaber.
              </p>

              <p>
                <strong>Hinweise auf Rechtsverstöße:</strong> Sollten Sie
                innerhalb unseres Internetauftritts Rechtsverstöße bemerken,
                bitten wir Sie uns auf diese hinzuweisen. Wir werden
                rechtswidrige Inhalte und Links nach Kenntnisnahme unverzüglich
                entfernen.
              </p>
            </div>
          </section>

          <footer className="pt-8 border-t border-dark-sky-foreground/20 dark:border-white-sky-foreground/20">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <a
                href="https://datenschutz-generator.de/"
                title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
              >
                Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
                Schwenke
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

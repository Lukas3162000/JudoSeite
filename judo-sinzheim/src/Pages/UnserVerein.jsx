import React, { useState } from "react";

export default function UnserVerein() {
  return (
    <div className="px-4 md:px-12 py-10 space-y-10 max-w-5xl mx-auto text-gray-800">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Unser Verein</h1>
        <p className="text-lg">
          Zu Ehren von <strong>Harald Schneider</strong>, Gründer und erster Vorsitzender des Judo Club Sinzheim e.V.
        </p>
      </section>

      {/* Historie */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Unsere Geschichte</h2>
          <p className="mb-4">
            Die Wurzeln unseres Vereins reichen bis ins Jahr 1997 zurück, als erste Judo-Kurse unter dem Dach des Turnerbunds Sinzheim entstanden. 
            Aufgrund wachsender Nachfrage und struktureller Differenzen entschloss sich eine engagierte Gemeinschaft zur Gründung eines eigenständigen Vereins:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>2007 Gründung des Judo Club Sinzheim e.V.</li>
            <li>Eröffnung des Dojos im Kloster St. Vinzens mit 102 m² Mattenfläche</li>
            <li>Schneller Mitgliederzuwachs & erste sportliche Erfolge</li>
          </ul>
        </CardContent>
      </Card>

      {/* Philosophie */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Unsere Philosophie</h2>
          <p className="mb-4">
            Judo bedeutet "Der sanfte Weg" – diese Haltung prägt unsere Arbeit mit Kindern, Jugendlichen und Erwachsenen:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Respektvolles Miteinander & gegenseitige Unterstützung</li>
            <li>Transparente Trainingsmethoden</li>
            <li>Nachhaltige Förderung sowohl im Breiten- als auch im Leistungssport</li>
            <li>Familiäre Vereinsstruktur mit maximal 100 Judoka</li>
            <li>Regelmäßige Weiterbildung der Trainer</li>
            <li>Gruppenübergreifende Aktionen wie Judosafaris & Freundschaftsturniere</li>
          </ul>
        </CardContent>
      </Card>

      {/* Satzung */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Unsere Satzung</h2>
          <Accordion type="multiple">
            <AccordionItem value="zweck" title="§2 Vereinszweck & Gemeinnützigkeit">
              <p>
                Zweck des Vereins ist die Förderung des Judosports. Der Verein ist gemeinnützig und arbeitet selbstlos.
              </p>
            </AccordionItem>
            <AccordionItem value="mitgliedschaft" title="§4 Mitgliedschaft">
              <p>
                Mitglied kann jede unbescholtene Person werden. Minderjährige benötigen die Zustimmung der Eltern.
              </p>
            </AccordionItem>
            <AccordionItem value="vorstand" title="§9 Vorstand & Geschäftsbereiche">
              <p>
                Der Vorstand setzt sich aus mehreren Ämtern zusammen und wird alle zwei Jahre gewählt.
              </p>
            </AccordionItem>
            <AccordionItem value="auflösung" title="§13 Auflösung des Vereins">
              <p>
                Bei Auflösung fällt das Vereinsvermögen treuhänderisch an die Gemeinde Sinzheim zur Förderung des Judosports.
              </p>
            </AccordionItem>
            <AccordionItem value="volltext" title="📝 Gesamte Satzung anzeigen">
              <pre className="whitespace-pre-wrap text-sm max-h-[500px] overflow-y-auto">
                {satzungText}
              </pre>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Kontakt & Fremersberger */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Weiterführende Informationen</h2>
          <p>
            Eine ausführliche Darstellung unserer Geschichte findet sich im Artikel "Fremersberger", Ausgabe 4. Erhältlich bei:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>VR Bank Sinzheim</li>
            <li>ausgewählten Sinzheimer Geschäften</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// ✨ Lokale Card-Komponenten
function Card({ children }) {
  return <div className="rounded-xl shadow-md bg-white">{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

// ✨ Lokale Accordion-Komponenten
function Accordion({ children }) {
  return <div className="space-y-2">{children}</div>;
}

function AccordionItem({ title, value, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-medium"
      >
        {title}
      </button>
      {open && <div className="p-4 border-t text-sm text-gray-700">{children}</div>}
    </div>
  );
}

// ✨ Text der Satzung
const satzungText = `Satzung des Judo Club Sinzheim e.V. (26.02.2018)
§1 Name, Sitz

(1) Der Verein führt den Namen „Judo Club Sinzheim e.V.“

Vereinsregister Nr.: VR210581

(2) Der Sitz des Vereins ist Sinzheim.

§2 Vereinszweck, Gemeinnützigkeit

(1) Zweck des Vereins ist die Förderung des Judosports.

Der Satzungszweck wird verwirklicht insbesondere durch Förderung sportlicher Übungen und Leistungen sowie der Persönlichkeitsbildung.

(2) Der Verein ist selbstlos tätig und verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.

(3) Mittel des Vereins dürfen nur für die satzungsmäßigen Zecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus den Mitteln des Vereins.

(4) Es darf keine Person durch Ausgaben, die dem Zweck des Vereins fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.

(5) Die Vereins- und Organämter werden grundsätzlich ehrenamtlich ausgeübt.

(6) Bei Bedarf können Vereinsämter im Rahmen der haushaltsrechtlichen Möglichkeiten entgeltlich auf der Grundlage eines Dienstvertrages oder gegen Zahlung einer Aufwandsentschädigung nach § 3 Nr. 26a EstG ausgeübt werden.

§3 Verhältnis zu Verbänden

(1) Der Verein ist Mitglied im Badischen Judo-Verband, und im Badischen Sportbund und anderen Sportverbänden.

(2) Der Verein und seine Einzelmitglieder unterwerfen sich den Satzungen/Ordnungen und der Rechtsprechung der jeweiligen Sportverbände.

§4 Mitgliedschaft

(1) Mitglied kann jede unbescholtene Person werden. Der Aufnahmeantrag ist unter Angabe des Namens, Standes, Alters und der Wohnung schriftlich einzureichen. Minderjährige müssen die Zustimmung ihres gesetzlichen Vertreters nachweisen.

(2) Mit dem Antrag erkennt der Bewerber für den Fall seiner Aufnahme die Satzung an. Der Vorstand entscheidet über die Aufnahme, er ist nicht verpflichtet etwaige Ablehnungsgründe bekannt zu geben.

(3) Von den Mitgliedern wird erwartet, dass sie die Arbeit des Vereins fördern und Schädigungen seines Rufes, seiner Bestrebungen und seines Vermögens verhindern.

§5 Beitrag, Geschäftsjahr

(1) Der Mitgliedsbeitrag ist für das laufende Jahr im Voraus zu entrichten; er wird einmalig im ersten Quartal eines Jahres erhoben und per Lastschrift eingezogen. Mehrkosten durch eine unbegründete Rücklastschrift können dem Mitglied in Rechnung gestellt werden. Neu aufgenommene Mitglieder zahlen mit dem ersten Mitgliedsbeitrag eine Aufnahmegebühr.

(2) Abweichungen hiervon kann der Geschäftsführende Vorstand beschließen, insbesondere bei Krankheit und unverschuldeter Notlage.

(3) Ehrenmitglieder sind von der Zahlung des Beitrages befreit.

(4) Geschäftsjahr ist das Kalenderjahr.

(5) Alles Weitere regelt eine Beitragsordnung, die vom Vorstand erlassen wird.

§6 Beendigung der Mitgliedschaft

(1) Die Mitgliedschaft endet durch freiwilligen Austritt, Ausschluss oder Tod.

(2) Der freiwillige Austritt ist nur zum 31.12. eines Kalenderjahres möglich und muss dem Vorstand spätestens 4 Wochen zuvor in Schriftform mitgeteilt werden.

(3) Wenn ein Mitglied grob oder nachhaltig gegen diese Satzung oder andere Interessen des Vereins verstößt, kann es vom Vorstand aus dem Verein ausgeschlossen werden. Der Ausschluss ist dem Betroffenen unter Angabe der Gründe schriftlich mitzuteilen. Der Betroffene hat ein Widerspruchsrecht. Der Widerspruch ist innerhalb von 4 Wochen schriftlich an den 1. Vorsitzenden zu richten

§7 Ehrungen

(1) Für besondere Verdienste um den Verein bzw. um den Sport im Allgemeinen können verliehen werden:

a) Die Vereinsnadel in Silber für zehnjährige ununterbrochene Vereinszugehörigkeit;
b) die Vereinsnadel in Gold für fünfundzwanzigjährige ununterbrochene Vereinszugehörigkeit und
c) die Ehrenmitgliedschaft für besondere Verdienste um den Verein bzw. den Sport im Allgemeinen.
(2) Der Geschäftsführende Vorstand beschließt über die Ehrungen und diese werden in der Regel in der Mitgliederversammlung vollzogen. Der Geschäftsführende Vorstand kann Ehrungen rückgängig machen, wenn sich der Geehrte eines sport- oder vereinsschädigenden Verhaltens schuldig gemacht hat.

§8 Vereinsorgane

Organe des Vereins sind

a) der Vorstand
b) der Geschäftsführende Vorstand
c) die Mitgliederversammlung
§9 Vorstand

(1) Der Gesamtvorstand setzt sich zusammen aus

a) 1. Vorsitzenden
b) 2. Vorsitzenden
c) sportlichem Leiter
d) Kassenwart und Mitgliederverwaltung
e) Schriftführer
f) Jugendvertretung
g) Pressewart / Webmaster
h) Passwart
i) Hallenwart
zusammen.

 

(2) Der Gesamtvorstand wird von der Mitgliederversammlung auf die Dauer von 2 Jahren gewählt. Der 1. und der 2. Vorsitzende werden im jährlichen Wechsel gewählt. Wählbar ist jedes Mitglied, welches nach dem Gesetz das aktive und passive Wahlrecht besitzt.

(3) Der Geschäftsführende Vorstand setzt sich zusammen aus

a) 1. Vorsitzenden
b) 2. Vorsitzenden
c) sportlichem Leiter
d) Kassenwart und Mitgliederverwaltung
e) Schriftführer
f) Jugendvertretung
(4) Der Geschäftsführende Vorstand kann nicht stimmberechtigte Beisitzer zu den Vorstandssitzungen einladen.

§10 Geschäftsbereich des Vorstands und Geschäftsführenden Vorstands

(1) Der 1. Vorsitzende und der 2. Vorsitzende sind die gesetzlichen Vertreter des Vereins im Sinne des § 26 BGB. Beide sind für sich allein vertretungsberechtigt.

(2) Der 2. Vorsitzende vertritt den 1. Vorsitzenden und unterstützt diesen bei der Führung der Vereinsgeschäfte. Sie sind ermächtigt, einmalige Ausgaben bis zu einer Höhe von €300,00 ohne vorherige Genehmigung durch den Geschäftsführende Vorstand zu tätigen.

(3) Der sportliche Leiter wird ermächtigt, evtl. einmalige Ausgaben bis zu einer Höhe von 300 € ohne vorherige Genehmigung durch den Geschäftsführende Vorstand zu tätigen.

(4) Der Geschäftsführende Vorstand erledigt die laufenden Geschäfte des Vereins. Ihm stehen insbesondere folgende Entscheidungen zu:

a) Aufnahme von Mitgliedern
b) Ausschluss von Mitgliedern
c) Beschlussfassung über Ausgaben
d) Ehrungen
e) Einstellungen neben- oder hauptamtlicher Mitarbeiter
f) Erstellen und Ändern der Beitragsordnung
g) Erstellen und Ändern der Geschäftsordnung des Vorstands.
(5) Sitzungen des Geschäftsführenden Vorstands werden nach Bedarf vom 1. Vorsitzenden einberufen. Im Verhinderungsfall wird er vom 2. Vorsitzenden vertreten.

(6) Die Mitglieder des Geschäftsführenden Vorstands entscheiden durch offene Abstimmung. Er ist beschlussfähig, wenn mindestens zwei Drittel seiner Mitglieder anwesend sind.

(7) Der Schriftführer verfasst die Versammlungsprotokolle und unterstützt außerdem den Vorsitzenden bei der Erledigung der schriftlichen Vereinsarbeit. Die Protokolle sind vom 1. Vorsitzenden und vom Schriftführer zu unterzeichnen.

(8) Der Kassenwart ist für die ordnungsgemäße Führung der Vereinskasse und für die Verwaltung des Vereinsvermögens verantwortlich und übernimmt die ordentliche Mitgliederverwaltung.

§11 Mitgliederversammlung

(1) Eine Mitgliederversammlung findet in der ersten Hälfte eines Kalenderjahres als Jahreshauptversammlung statt.

(2) Weitere Mitgliederversammlungen werden auf Beschluss des Vorstands oder auf schriftliches Verlangen von mindestens einem Drittel der stimmberechtigten Mitglieder einberufen.

(3) Die Einberufung erfolgt durch den 1. Vorsitzenden mindestens 14 Tage vor dem anberaumten Termin durch Veröffentlichung im Nachrichtenblatt der Gemeinde Sinzheim und einem Aushang im Dojo des Judo Club Sinzheim e.V. Ist der 1. Vorsitzende verhindert, obliegt die Einberufung einem der übrigen Vorstandsmitglieder in der Reihenfolge gemäß § 9 (1). Mit der Einberufung soll die Tagesordnung bekannt gegeben werden.

(4) Die satzungsgemäß einberufene Mitgliederversammlung ist ohne Rücksicht auf die Zahl der erschienenen Mitglieder beschlussfähig.

(5) Mitglieder unter 14 Jahren sind nicht stimmberechtigt und können durch einen Elternteil vertreten werden, welches das Stimmrecht wahrnimmt.

§12 Aufgaben der Mitgliederversammlung

a) Entgegennahmen der Jahresberichte und des Kassenberichtes
b) Entlastung des Vorstandes und der Kassenprüfer
c) Wahl des Gesamtvorstands
d) Wahl der Kassenprüfer
e) Beschlussfassung über Anträge von Mitgliedern und des Vorstandes
f) Beschlussfassung über Satzungsangelegenheiten
g) Auflösung des Vereins
h) Gewährung einer Aufwandsentschädigung für die Mitglieder des Gesamtvorstandes
 

(1) Die Mitgliederversammlung stimmt über die Entlastung des Kassenwarts gesondert ab.

(2) Für die Entlastung und die Wahl des 1. Vorsitzenden bestimmt die Mitgliederversammlung einen Wahlleiter aus ihrer Mitte.

(3) Die Mitgliederversammlung wählt mindestens zwei Kassenprüfer, die nicht Mitglied des Geschäftsführenden Vorstands sein dürfen und nicht mit sonstigen Kassenführungsaufgaben für den Verein tätig sind. Die Kassenprüfer werden für 2 Jahre und im jährlichen Wechsel gewählt. Die Kassenprüfer berichten der nächsten Mitgliederversammlung über das Prüfungsergebnis.

(4) Anträge an die Mitgliederversammlung sind mindestens drei Tage vorher schriftlich über den 1. Vorsitzenden einzureichen. Später gestellte Anträge werden nur behandelt, wenn die Mitgliederversammlung zustimmt.

(5) Mit der Mehrheit von drei Viertel der erschienenen Mitglieder entscheidet die Mitgliederversammlung über:

a) Änderung der Satzung
b) Auflösung des Vereins
(6) Zur Änderung des Vereinszweckes ist die Zustimmung aller Mitglieder erforderlich. Die Zustimmung der nicht erschienen Mitglieder muss schriftlich erfolgen.

(7) In allen anderen Fällen entscheidet die Mitgliederversammlung mit einfacher Mehrheit der erschienenen Mitglieder. Stimmengleichheit bedeutet Ablehnung, Stimmenthaltung bedeutet Nichtteilnahme an der Abstimmung.

 $13 Auflösung des Vereins

(1) Eine zu diesem Zweck ausdrücklich einberufene Mitgliederversammlung kann mit Zustimmung von mindestens drei Viertel der erschienenen Mitglieder die Auflösung des Vereins beschließen.

(2) Es sind mindestens zwei Liquidatoren zu bestellen. Bei Auflösung des Vereins geht das Vereinsvermögen auf die Gemeinde Sinzheim über mit der Bestimmung, es treuhänderisch bis zu fünf Jahren für einen am Ort neu zu gründenden und als gemeinnützig anerkannten Judo-Verein aufzubewahren. Nach Ablauf dieser Frist ist der Treuhänder berechtigt, das Vereinsvermögen unmittelbar und ausschließlich für gemeinnützige Zwecke in der Gemeinde Sinzheim bzw. deren Ortsteilen zu verwenden.

 $14 Haftung

(1) Der Verein haftet für Unfälle und Schäden nur im Rahmen der von ihm abgeschlossenen allgemeinen Sportversicherung.

(2) Darüber hinausgehende Ansprüche gelten als ausgeschlossen. Insbesondere haftet der Verein nicht für Gegenstände, die in Vereinsräumen oder auf Sportanlagen abhandengekommen sind.`;

import type { MetaFunction } from "react-router";
import { Badge } from "~/components/ui/badge";

export const meta: MetaFunction = () => {
    return [
        { title: "Studentische Events & Symposien" },
        {
            name: "description",
            content: "Übersicht der renommiertesten studentischen Symposien: St. Gallen Symposium, LSE German Symposium, START Summit, European Forum Alpbach. Networking mit Staatsoberhäuptern, CEOs und Nobelpreisträgern."
        }
    ];
};

const events = [
    {
        name: "St. Gallen Symposium",
        institution: "Universität St. Gallen (HSG)",
        description: "Dieses Symposium gilt als eines der weltweit führenden studentischen Foren und wird oft als das kleine Davos bezeichnet. Der globale Essay Wettbewerb versammelt visionäre Talente mit Staatsoberhäuptern und Nobelpreisträgern. Die Teilnahme ermöglicht den Zutritt zum exklusiven Leaders of Tomorrow Kreis und bietet Diskurse auf Augenhöhe.",
        location: "St. Gallen, Schweiz",
        focus: "Leadership & Wirtschaft",
        participated: [],
        website: "https://www.symposium.org",
    },
    {
        name: "German American Conference",
        institution: "Harvard University",
        description: "Die Konferenz an der Harvard University fungiert als Brücke für den transatlantischen Dialog. Sie bringt Studierende mit Führungspersönlichkeiten aus Politik und Wirtschaft zusammen, um die Beziehungen zwischen Deutschland und den USA zu stärken. Das Format bietet seltene Einblicke in die geopolitische Zusammenarbeit beider Nationen.",
        location: "Cambridge, USA",
        focus: "Transatlantischer Dialog",
        participated: [],
        website: "https://www.germanamericanconference.org",
    },
    {
        name: "LSE German Symposium",
        institution: "London School of Economics",
        description: "Als zentrale Plattform für den deutsch britischen Austausch empfängt das Symposium in London regelmäßig Regierungschefs und Minister. Es bietet einen unvergleichlichen Rahmen für Gespräche mit hochrangigen Entscheidungsträgern und debattiert die politische sowie wirtschaftliche Zukunft Europas in einem exklusiven Setting.",
        location: "London, UK",
        focus: "Politik & Diplomatie",
        participated: [2026],
        website: "https://www.lsesu-german-society.co.uk/information",
    },
    {
        name: "European Forum Alpbach",
        institution: "Alpbach, Österreich",
        description: "Das Forum besticht durch intellektuelle Tiefe und eine einzigartige Atmosphäre in den Tiroler Alpen. Mit einer hohen Dichte an Wissenschaftlern und Denkern werden hier große Zukunftsfragen interdisziplinär diskutiert. Die Stipendiaten Kultur fördert eine intensive Vernetzung über Fachgrenzen hinweg.",
        location: "Alpbach, Österreich",
        focus: "Wissenschaft & Gesellschaft",
        participated: [],
        website: "https://www.alpbach.org",
    },
    {
        name: "START Summit",
        institution: "Universität St. Gallen (HSG)",
        description: "Als Europas führende von Studierenden organisierte Konferenz für Innovation vereint der Summit Gründer und Investoren. Neben Keynotes von globalen Tech Leadern bietet das Event direkten Zugang zu Kapitalgebern und findet parallel zum START HACK statt. Es ist der wichtigste Treffpunkt für die europäische Startup Szene.",
        location: "St. Gallen, Schweiz",
        focus: "Tech & Entrepreneurship",
        participated: [2024, 2023],
        website: "https://www.startsummit.ch",
    },
    {
        name: "World Business Dialogue",
        institution: "Universität zu Köln",
        description: "Der Dialogue zählt zu den traditionsreichsten Wirtschaftssymposien der Welt. Er verbindet Top Talente aus über 60 Ländern mit Vorstandsmitgliedern großer DAX Konzerne und internationalen Unternehmern. Der Fokus liegt auf dem generationenübergreifenden Austausch zu aktuellen globalen Herausforderungen.",
        location: "Köln, Deutschland",
        focus: "Wirtschaft & Leadership",
        participated: [],
        website: "https://world-business-dialogue.com",
    },
];

const additionalEvents = [
    {
        name: "Forum Maximilianeum",
        institution: "Maximilianeum München",
        description: "In der historischen Kulisse des Bayerischen Landtags bringt das Forum Stipendiaten mit Elite Persönlichkeiten aus Politik und Wissenschaft zusammen. Diskutiert werden gesellschaftspolitische Themen in einem vertraulichen und exklusiven Rahmen.",
        location: "München, Deutschland",
        focus: "Politik & Gesellschaft",
        participated: [2024],
        website: "https://www.stiftungmaximilianeum.com/forum",
    },
    {
        name: "IdeaLab!",
        institution: "WHU - Otto Beisheim School of Management",
        description: "Seit über zwei Jahrzehnten ist das IdeaLab! der Treffpunkt für Europas Gründerelite. Bekannt für eine extrem hohe Investorendichte und erfolgreiche Unicorn Gründer, bietet die Konferenz exklusive Pitch Formate und Networking auf höchstem Niveau.",
        location: "Vallendar, Deutschland",
        focus: "Entrepreneurship & Innovation",
        participated: [],
        website: "https://www.idealab.io",
    },
    {
        name: "Hack the North",
        institution: "University of Waterloo",
        description: "Kanadas größter Hackathon versammelt über 1.000 Talente weltweit. Neben intensivem Coding bieten Workshops mit Mentoren von Tech Giganten wie Google oder Meta direkten Zugang zur globalen Entwickler Community und Innovationsführern.",
        location: "Waterloo, Kanada",
        focus: "Tech & Innovation",
        participated: [2024],
        website: "https://hackthenorth.com",
    },
];


export default function StudentEvents() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-10 lg:mb-20">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 font-mono">
                    Studentische Events & <span className="text-amber-800 dark:text-amber-700">Symposien</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                    Eine Sammlung der bedeutendsten studentisch organisierten Events im deutschsprachigen Raum und weltweit,
                    von hochkarätigen Wirtschaftssymposien bis zu innovativen Tech Konferenzen.
                </p>
            </div>



            {/* Main Events List */}
            <div className="mb-10 lg:mb-20">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 font-mono">
                    Events
                </h2>
                <div className="space-y-6">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 sm:p-8 hover:border-amber-800/30 dark:hover:border-amber-700/30 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-1 font-mono">
                                        {event.name}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
                                        {event.institution}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-4 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {event.location}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <Badge variant="outline" className="text-xs sm:text-sm border-amber-800/40 text-amber-900 dark:border-amber-700/40 dark:text-amber-600">
                                            {event.focus}
                                        </Badge>
                                    </div>
                                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {event.description}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-4 mt-4">
                                        {event.participated.length > 0 && (
                                            <p className="text-xs sm:text-sm text-amber-800/70 dark:text-amber-700/70">
                                                Teilgenommen: {event.participated.join(", ")}
                                            </p>
                                        )}
                                        <a
                                            href={event.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs sm:text-sm text-amber-800 dark:text-amber-600 hover:text-amber-900 dark:hover:text-amber-500 flex items-center gap-1 transition-colors"
                                        >
                                            Website
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Additional Notable Events */}
            <div className="mb-10 lg:mb-20">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 font-mono">
                    Weitere erwähnenswerte Events
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {additionalEvents.map((event, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-amber-800/30 dark:hover:border-amber-700/30 transition-colors"
                        >
                            <h3 className="text-lg font-bold mb-1 font-mono">
                                {event.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {event.institution}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mb-3 flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {event.location}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <Badge variant="outline" className="text-xs border-amber-800/40 text-amber-900 dark:border-amber-700/40 dark:text-amber-600">
                                    {event.focus}
                                </Badge>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {event.description}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 mt-3">
                                {event.participated.length > 0 && (
                                    <p className="text-xs text-amber-800/70 dark:text-amber-700/70">
                                        Teilgenommen: {event.participated.join(", ")}
                                    </p>
                                )}
                                <a
                                    href={event.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-amber-800 dark:text-amber-600 hover:text-amber-900 dark:hover:text-amber-500 flex items-center gap-1 transition-colors"
                                >
                                    Website
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Insight Section */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-12 mt-4">
                <div className="max-w-3xl">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 font-mono text-gray-900 dark:text-gray-100">
                        Kontext & Einordnung
                    </h3>
                    <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                        <p className="text-gray-700 dark:text-gray-300">
                            Diese Kuration beleuchtet die bemerkenswerte Landschaft akademischer Initiativen im deutschsprachigen Raum.
                            Nirgendwo sonst existiert eine vergleichbare Dichte an professionellen Konferenzen, die vollständig in
                            studentischer Verantwortung liegen. Diese Veranstaltungen dienen nicht nur dem Dialog, sondern fungieren als
                            Brücke zwischen universitärer Theorie und globaler Praxis.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Institutionen wie die Universität St. Gallen oder die WHU zeigen eindrucksvoll, wie studentisches Engagement
                            Plattformen von Weltrang schaffen kann. Das St. Gallen Symposium gilt hierbei als Leuchtturm, doch das Ökosystem
                            reicht weit darüber hinaus und umfasst führende Wirtschaftsgipfel sowie spezialisierte Tech Konferenzen in der
                            gesamten DACH Region.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Ergänzend zu den klassischen Symposien lohnt sich der Blick auf interaktive Formate wie Model United Nations.
                            Während Konferenzen den Fokus auf Zuhören und Diskutieren legen, schulen Simulationen wie die NMUN in New York
                            oder WorldMUN das aktive diplomatische Handwerk. Für ein ganzheitliches Verständnis globaler Zusammenhänge
                            bilden sie die perfekte Ergänzung zu den hier gelisteten Wirtschaftsevents.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            Die Teilnahme an diesen Formaten ist weit mehr als eine Zeile im Lebenslauf. Sie ermöglicht den direkten Zugang
                            zu Entscheidungsträgern und schafft Verbindungen zu einer Gemeinschaft engagierter Talente, die auch Jahre später
                            noch Bestand haben.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
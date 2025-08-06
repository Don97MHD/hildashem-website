// lib/pages.js

// This file acts as a simple database for our static pages.
export const pages = [
  {
    slug: 'om-mig',
    title: 'Om Mig: Historien om Hildashem',
    imageUrl: '/page-om-mig.jpg',
    altText: 'Närbild på Hilda som arrangerar en bukett med vilda blommor i sitt hem.',
    content: `
      <p class="lead">Hej och varmt välkommen! Jag heter Hilda, och det här är min kreativa fristad på nätet. Hildashem föddes ur en längtan att dela med mig av min största passion: att skapa ett vackert och personligt hem, en prunkande trädgård och ett liv fyllt av meningsfull kreativitet.</p>
      <p>Jag bor i ett charmigt sekelskifteshus med min familj, där varje hörn bär på en historia och varje projekt är ett äventyr. För mig handlar det inte om att följa de senaste trenderna, utan om att skapa en miljö som känns äkta, hållbar och fylld av kärlek. Återbruk, loppisfynd och naturens egna material är grundstenarna i min filosofi.</p>
      
      <h2 class="mt-12">Min filosofi i praktiken</h2>
      <p>Min förhoppning är att den här bloggen ska fungera som en outsinlig källa till inspiration för dig. Här är några av de ämnen som ligger mig varmast om hjärtat:</p>
      
      <div class="border-l-4 border-rose-800 pl-4 my-8">
        <h3 class="text-2xl font-serif font-semibold text-gray-800">Kreativt Återbruk & Pyssel</h3>
        <p class="text-gray-600">Jag älskar att ge gamla saker nytt liv. Det kan vara allt från att <a href="/7-tips-pa-hur-jeansen-kan-ateranvandas">återanvända gamla jeans</a> till att <a href="/dag-17-gor-om-dina-julgranskulor">måla om julgranskulor</a>. I kategorin <a href="/category/pysseltips">Pysseltips</a> hittar du massor av projekt som är både roliga och snälla mot plånboken.</p>
      </div>

      <div class="border-l-4 border-green-800 pl-4 my-8">
        <h3 class="text-2xl font-serif font-semibold text-gray-800">Trädgård & Odling</h3>
        <p class="text-gray-600">Att ha fingrarna i jorden är ren terapi. Oavsett om du är nybörjare eller har gröna fingrar, hoppas jag kunna inspirera dig. Lär dig <a href="/tips-nar-du-beskar-dina-trad">hur du beskär dina träd</a> eller hur du gör egna <a href="/sma-skyltar-till-frosadden">skyltar till frösådden</a>. Se alla mina <a href="/category/trädgård">trädgårdstips här</a>.</p>
      </div>
      
      <div class="border-l-4 border-amber-800 pl-4 my-8">
        <h3 class="text-2xl font-serif font-semibold text-gray-800">Enkla Recept från hjärtat</h3>
        <p class="text-gray-600">För mig är matlagning och bakning ett sätt att visa kärlek. Här delar jag med mig av <a href="/category/recept">recept</a> som är enkla att följa men som ändå känns lyxiga, som till exempel <a href="/underbar-nougatfudge">min populära nougatfudge</a> eller en <a href="/snabb-tomatsas">världens enklaste tomatsås</a>.</p>
      </div>

      <h2>Mer än bara en blogg</h2>
      <p>Under åren har jag haft den stora äran att få synas i flera stora inredningsmagasin. Du kan läsa mer om det på min sida <a href="/p/mina-magasin.html">Mina Magasin</a>. Jag driver även <a href="/the-creative-collective">The Creative Collective</a> tillsammans med andra kreatörer.</p>

      <p class="mt-8">Tack för att du tittar in. Din närvaro här betyder oerhört mycket! Tveka inte att <a href="/p/kontakt.html">höra av dig</a> om du har några frågor.</p>
    `
  },
  {
    slug: 'mina-magasin',
    title: 'Mina Magasin & Reportage',
    imageUrl: '/page-mina-magasin.jpg',
    altText: 'En trave med svenska inredningstidningar på ett rustikt träbord.',
    content: `
      <p class="lead">Att få se sina egna projekt och sitt hem i tryck är en alldeles speciell och surrealistisk känsla. Under årens lopp har jag haft den stora äran att få samarbeta med och bli publicerad i några av Sveriges finaste inrednings- och livsstilsmagasin.</p>
      <p>Här har jag samlat ett urval av de reportage jag medverkat i. Det är en fantastisk möjlighet att få dela med sig av sin passion på en större plattform och nå ut till ännu fler som delar samma intressen.</p>
      
      <div class="border-l-4 border-rose-800 pl-4 my-8">
        <h3 class="text-2xl font-serif font-semibold text-gray-800">Hus & Hem, Nr 5 2022</h3>
        <p class="text-gray-600">"Kreativt återbruk i sekelskifteshuset" - Ett djuplodande reportage om hur vi förvandlat vårt hus med hjälp av loppisfynd och smarta DIY-lösningar. Du kan hitta liknande idéer i min kategori för <a href="/category/återbruk">Återbruk</a>, där jag visar hur man kan <a href="/gor-en-kruka-av-pinnar">göra en kruka av pinnar</a>.</p>
      </div>

      <div class="border-l-4 border-rose-800 pl-4 my-8">
        <h3 class="text-2xl font-serif font-semibold text-gray-800">Allt i Hemmet, Julspecial 2021</h3>
        <p class="text-gray-600">"Skapa julens vackraste dekorationer" - En guide fylld med pyssel och inspiration för att skapa ett magiskt och personligt julhem med naturen som främsta material. Många av dessa tips finns samlade under <a href="/category/pysseltips">Pysseltips</a>, inklusive hur man gör <a href="/julpyssel-fran-kollektive">julpyssel från kollektivet</a>.</p>
      </div>

      <div class="border-l-4 border-rose-800 pl-4 my-8">
        <h3 class="text-2xl font-serif font-semibold text-gray-800">Drömhem & Trädgård, Nr 2 2020</h3>
        <p class="text-gray-600">"En prunkande oas mitt i stan" - Reportaget fokuserar på vår trädgård och hur vi på en liten yta lyckats skapa olika rum och en känsla av lummighet. För fler trädgårdstips, se min kategori <a href="/category/trädgård">Trädgård</a>.</p>
      </div>

      <p class="mt-8">Är du journalist eller intresserad av ett samarbete? <a href="/p/kontakt.html">Kontakta mig gärna!</a></p>
    `
  },
  {
    slug: 'kontakt',
    title: 'Kontakt & Vanliga Frågor',
    imageUrl: '/page-kontakt.jpg',
    altText: 'En gammaldags skrivmaskin på ett träskrivbord med en kopp kaffe bredvid.',
    content: `
      <p class="lead">Jag blir alltid lika glad över att höra från er läsare! Oavsett om du har en fråga, en idé för ett samarbete, eller bara vill säga hej, är du varmt välkommen att höra av dig.</p>
      
      <h2 class="mt-12">Samarbeten & Press</h2>
      <p>Är du intresserad av ett samarbete, pressutskick eller fotografering? Jag är öppen för förslag som ligger i linje med Hildashems varumärke och värderingar. Skicka ett mail till <a href="mailto:hilda@hildashem.se" class="text-rose-800 hover:underline">hilda@hildashem.se</a> så kan vi prata vidare.</p>

      <h2 class="mt-12">Vanliga Frågor</h2>
        <h3 class="font-semibold text-lg mt-4">Får jag använda dina bilder på min blogg eller sociala medier?</h3>
        <p>Tack för att du frågar! Du får gärna låna <strong>en (1) bild</strong> från ett inlägg, under förutsättning att du tydligt länkar tillbaka till originalinlägget här på hildashem.se. All annan användning kräver tillstånd. Läs mer i mina <a href="/p/anvandarvillkor.html">användarvillkor</a>.</p>

        <h3 class="font-semibold text-lg mt-4">Var hittar jag ett specifikt pysseltips?</h3>
        <p>Det bästa sättet är att använda sökfunktionen (klicka på förstoringsglaset i menyn) eller att bläddra i de olika kategorierna, som <a href="/category/pysseltips">Pysseltips</a> eller <a href="/category/återbruk">Återbruk</a>.</p>

        <h3 class="font-semibold text-lg mt-4">Gör du samarbeten med företag?</h3>
        <p>Absolut, så länge det passar min och bloggens profil. Jag har bland annat samarbetat med kreatörer i <a href="/the-creative-collective">The Creative Collective</a>. Läs mer <a href="/p/om-mig.html">om mig och min filosofi</a> här.</p>

      <h2 class="mt-12">Sociala Medier</h2>
      <p>För daglig inspiration och en mer personlig inblick bakom kulisserna är du välkommen att följa mig på mina sociala kanaler. Det är ofta där jag delar de små ögonblicken från vardagen.</p>
      <ul class="list-none space-y-2">
        <li><strong>Instagram:</strong> <a href="#" class="text-rose-800 hover:underline">@hildashem</a></li>
        <li><strong>Pinterest:</strong> <a href="#" class="text-rose-800 hover:underline">/hildashem</a></li>
        <li><strong>Facebook:</strong> <a href="#" class="text-rose-800 hover:underline">/hildashem</a></li>
      </ul>
    `
  },
  {
    slug: 'integritetspolicy',
    title: 'Integritetspolicy',
    imageUrl: '/page-privacy.jpg',
    altText: 'En person som skriver på en laptop med en anteckningsbok bredvid.',
    content: `
      <p class="lead">Din integritet är viktig för oss på Hildashem. Denna policy förklarar vilken typ av personlig information vi kan samla in från dig när du besöker vår webbplats och hur den informationen används.</p>
      <h2>Information vi samlar in</h2>
      <p>Vi samlar inte aktivt in personlig information som namn eller e-postadress, såvida du inte frivilligt tillhandahåller den, till exempel genom att <a href="/p/kontakt.html">kontakta oss via e-post</a>. Webbplatsen kan använda cookies för att förbättra din användarupplevelse. En cookie är en liten textfil som lagras på din dator.</p>
      <h3>Cookies</h3>
      <p>Denna webbplats, byggd på Next.js, använder nödvändiga cookies för att fungera korrekt. Vi kan också komma att använda tredjepartscookies från tjänster som Google Analytics för att förstå hur våra besökare använder webbplatsen, i syfte att förbättra innehållet och användarupplevelsen. Du kan när som helst stänga av cookies i din webbläsares inställningar.</p>
      <h2>Dina rättigheter</h2>
      <p>Du har rätt att begära en kopia av den information vi eventuellt har om dig och att begära att felaktig information korrigeras eller raderas. <a href="/p/kontakt.html">Kontakta oss</a> om du har några frågor om hur vi hanterar din data.</p>
      <p><em>Denna policy uppdaterades senast 2025-08-07.</em></p>
    `
  },
  {
    slug: 'anvandarvillkor',
    title: 'Användarvillkor',
    imageUrl: '/page-terms.jpg',
    altText: 'En domarklubba och en bok med lagtexter på ett skrivbord.',
    content: `
      <p class="lead">Välkommen till Hildashem! Genom att använda denna webbplats (hildashem.se) accepterar du följande villkor. Läs dem noggrant.</p>
      <h2>Användning av webbplatsen</h2>
      <p>Allt innehåll på denna webbplats tillhandahålls för personligt, icke-kommersiellt bruk. Du får gärna hämta inspiration och använda idéer för dina egna projekt. Däremot är det inte tillåtet att kopiera, reproducera, publicera eller distribuera material (text, bilder, logotyper) utan uttryckligt skriftligt tillstånd. Vänligen <a href="/p/kontakt.html">kontakta oss</a> för förfrågningar.</p>
      <h2>Immateriella rättigheter</h2>
      <p>Allt innehåll, inklusive text, fotografier, design och logotyper, ägs av Hildashem (Hilda Shem) och skyddas av upphovsrättslagen. Olovlig användning av materialet är strängt förbjuden.</p>
      <h2>Friskrivning</h2>
      <p>Alla projekt och tips (speciellt DIY-projekt) som delas på denna blogg utförs på egen risk. Hildashem kan inte hållas ansvarigt för eventuella skador på person eller egendom som kan uppstå. Var alltid försiktig och använd sunt förnuft när du följer guider för till exempel <a href="/category/pysseltips">pyssel</a> eller <a href="/category/trädgård">trädgårdsarbete</a>.</p>
      <p><em>Dessa villkor uppdaterades senast 2025-08-07.</em></p>
    `
  }
];

/**
 * Finds a static page by its slug.
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getPageBySlug(slug) {
  return pages.find(page => page.slug === slug);
}
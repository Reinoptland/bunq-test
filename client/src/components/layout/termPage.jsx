import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider'


class TermsPage extends PureComponent {
  handleSubmit = (data) => {
    // console.log(data)
    this.props.feedback(data, this.props.user.id)
    // console.log('data')
  }

  render() {
    return (
        <div>
        <Typography align='justify' className="feedbackText" paragraph={true}>
        <Typography variant='headline'>Gebruikersvoorwaarden Roos</Typography>
       
        Met Roos (Hello Labs B.V.) is het mogelijk om contractwekkers aan te maken. 
       Zo ontvangt de Gebruiker de beste aanbiedingen van verschillende Aanbieders. 
       De Gebruiker kan direct overstappen naar de betreffende Aanbieder.
       
       Op het gebruik van de Dienst zijn onderstaande Gebruikersvoorwaarden van toepassing.
       <br/>
        <br/>
        
        <Typography variant='headline'>Artikel 1 - Definities</Typography>
       
       In deze voorwaarden verstaan we onder:
       
       Gebruikersvoorwaarden: hiermee worden deze Gebruikersvoorwaarden bedoeld.
       
       Roos: Hello Labs B.V. gevestigd in Amsterdam (1017 CB) en ingeschreven bij de Kamer 
       van Koophandel onder dossiernummer: 60964030, met kantoor aan de Herengracht 504.
       
       Gebruiker: de natuurlijke persoon al dan niet handelend in uitoefening
        van beroep of bedrijf of de rechtspersoon die via Roos gebruik maakt van de Dienst.
       
       Diensten: de door Roos te verlenen diensten in het kader van het aflopen
        van Contracten, vergelijking van Producten van Aanbieders en bemiddeling van de overstap tussen de Aanbieders.
       
       Aanbieders: de aanbieder die met de Gebruiker een overeenkomst sluit voor
        het leveren van Product.
       
       Product: de te leveren abonnementen/contracten en goederen van Aanbieders 
       die via Roos worden aangeboden aan Gebruiker.
       
       Overeenkomst: de door Gebruiker en Aanbieders van Roos afgesloten overeenkomst.
       
       Bemiddelingsovereenkomst: de overeenkomst tussen Roos en Gebruiker door
        gebruik te maken van de Dienst van Roos.
       
       Site: de online omgeving die aan Gebruiker beschikbaar wordt gesteld om
        contractwekkers en bestellingen te plaatsen, te beheren en in te zien. Hierin kan ook de actuele status van de bestelling worden geraadpleegd. Toegang tot het Account gaat door middel van een geldig e-mailadres en wachtwoord van Gebruiker.
       
       Gegevens: alle gegevens verstrekt door Gebruiker.
       
        <br/>
       <br/>
       
       
        <Typography variant='headline'>Artikel 2 - Identiteit van Roos</Typography>
       
       
       Naam ondernemer: Hello Labs B.V. Handelend onder de naam: Roos
       
       Bezoekadres: Herengracht 504 1017 CB Amsterdam
       
       Bereikbaar:
       
       E-mail: service@halloroos.nl
       
       Tweeten: https://twitter.com/halloroosnl
       
       Vriend worden: https://www.facebook.com/roosnl
       
       Onze gegevens: Het KvK-nummer van Roos: 60964030 Het BTW-identificatienummer 
       van Roos: NL854138882B01
       
       <br/>
       <br/>
       
        <Typography variant='headline'>Artikel 3 - Toepasselijkheid</Typography>
       
       
       Deze gebruikersvoorwaarden zijn van toepassing op alle rechtsverhoudingen 
       tussen Roos en Gebruiker waaronder begrepen alle Diensten die door Roos worden
        verleend tenzij schriftelijk uitdrukkelijk anders is overeenkomen. 
        Roos wijst afwijkende bepalingen of voorwaarden aan de zijde van Gebruiker 
        uitdrukkelijk van de hand, tenzij schriftelijk anders overeengekomen. 
        Als dat voor een goede uitvoering van de overeenkomst vereist is, 
        heeft Roos het recht om Diensten door derden te laten verrichten. 
        Alle bedingen en gebruikersvoorwaarden zijn opgesteld ten behoeve 
        van alle bestuurders van Roos en werkzame personen en/of door Roos zijn ingeschakeld.
       
       <br/>
       <br/>
       
        <Typography variant='headline'>Artikel 4 - Totstandkoming overeenkomst</Typography>
       
       Roos probeert er met haar Dienst voor te zorgen dat de Gebruiker steeds 
       een Overeenkomst met een Aanbieder kan maken die het beste bij 
       de behoeften van de Gebruiker aansluit. De Overeenkomst tussen 
       Roos en Gebruiker komt tot stand door het enkele gebruik van de Dienst. 
       De Overeenkomst tussen Aanbieder en Gebruiker komt tot stand op het moment 
       en op de wijze zoals gesteld door de Aanbieder. Aanbieder kan voorwaarden stellen
        aan de totstandkoming van de Overeenkomst. Roos heeft geen invloed op deze 
        voorwaarden en/of de totstandkoming. Indien de Gebruiker een Overeenkomst 
        aangaat met een Aanbieder, of hiertoe een aanvraag doet, wordt de Klant geacht akkoord
         te gaan met de voorwaarden van die Aanbieder. Roos is uitsluitend tussenpersoon (bemiddelaar) 
         en draagt daarom zelf geen zorg voor de levering, garantie, kwaliteit en/of doorgifte van de 
         Producten van Aanbieder. Gebruiker erkent dat Roos voor de inhoud van die aanbiedingen en de 
         opvolging daarvan niet aansprakelijk is. De door Roos gecommuniceerde aanbiedingen van Aanbieder 
         aan Gebruiker zijn geheel vrijblijvend. Roos heeft geen invloed en biedt geen garanties omtrent de 
         inhoud van de aanbiedingen. Roos is niet aansprakelijk voor de juistheid en/of volledigheid van de 
         informatie zoals door Aanbieders wordt verstrekt.
       
       <br/>
       <br/>
       
        <Typography variant='headline'>Artikel 5 - Uitvoering overeenkomst</Typography>
       
       De Dienst van Roos stelt de Gebruiker in staat om eenvoudig Contracten in te voeren en besparingen op 
       Producten inzichtelijk te maken. Met gebruik van de Dienst heeft de Gebruiker de mogelijkheid om 
       persoonlijke (verbruiks-)gegevens in te voeren. Op basis van deze gegevens wordt een vergelijking 
       gemaakt van beschikbare Aanbieders, Producten, tarieven en aanbiedingen. Gebruiker is zelf verantwoordelijk 
       voor de ingevulde gegevens binnen de Dienst. De vergelijkingen zijn in zijn geheel afhankelijk van deze ingevulde
        gegevens. Indien Roos vooraf gegevens heeft ingevuld, hebben deze slechts een indicatief karakter en draagt 
        de Klant de verantwoordelijkheid over de volledigheid van deze vooraf ingevulde gegevens. De Overeenkomst komt
         tot stand op het moment dat de Gebruiker de informatie op de Site van Roos heeft ingevuld en de akkoordfunctie 
         heeft aangeklikt. Het door Gebruiker ingevulde formulier en deze gebruiksvoorwaarden vormen samen de alle 
         rechten en verplichtingen van Roos en Gebruiker. Gebruiker verleent door akkoord te gaan met deze 
         Gebruikersvoorwaarden aan Roos ondubbelzinnig toestemming om aanbiedingen van de Aanbieders van 
         Roos op te vragen en in welke vorm dan ook aan Gebruiker toe te sturen. Gebruiker zorgt ervoor 
         dat alle gegevens - waarvan Roos aangeeft dat deze wenselijk zijn of waarvan Gebruiker hoort te 
         begrijpen dat die voor de uitvoering van de Overeenkomst noodzakelijk zijn - tijdig aan Roos worden verstrekt. 
         Indien de voor de uitvoering van de Overeenkomst benodigde gegevens niet tijdig aan Roos zijn verstrekt, 
         heeft Roos het recht de uitvoering van de Overeenkomst op te schorten. Roos is verplicht haar medewerking 
         te verlenen bij het sluiten van de Overeenkomst tussen de Gebruiker en Aanbieder. Roos zal hierbij de gegevens 
         van Gebruiker, die noodzakelijk zijn voor de uitvoering van die Overeenkomst, overdragen aan Aanbieder.
          Indien Roos niet in staat is om haar medewerking te verlenen ten behoeve van het sluiten van de Overeenkomst, 
          zal zij dit tijdig melden aan Gebruiker.
          <br/>
          <br/>
       
        <Typography variant='headline'>Artikel 6 - Contractduur en uitvoering</Typography>
       
       
       De Bemiddelingsovereenkomst wordt aangegaan voor onbepaalde tijd. Gebruiker en Roos zijn gerechtigd 
       om de Bemiddelingsovereenkomst zonder opgaaf van redenen met onmiddellijke ingang per e-mail op te 
       zeggen. Roos biedt geen garantie voor de door een Aanbieder gecommuniceerde levertijden. 
       Gebruiker stemt door akkoord te gaan met deze Gebruikersvoorwaarden ermee in dat de afhandeling 
       van de Contracten door bedrijven kan geschieden die als intermediair optreden.
       <br/>
       <br/>
       
        <Typography variant='headline'>
       Artikel 7 - Producttarieven en -informatie</Typography>
       
       Het gebruik van de Dienst van Roos is geheel zonder kosten. Bij het aangaan van de Overeenkomst voor 
       levering van een Product zal de Gebruiker de eenmalige en (abonnements-)kosten betalen van Aanbieder 
       zoals vermeld op de Site. De op de Site van Roos getoonde tarieven en informatie zijn afkomstig van de Aanbieders. 
       Alle prijzen zijn inclusief BTW, onder voorbehoud van wijzigingen en geldig binnen de looptijd van een actie. 
       Roos is afhankelijk van Aanbieders en Partners voor de juiste tarieven.
        Roos spant zich in om de tarieven zo vaak mogelijk te controleren en actualiseren.
         Roos is niet aansprakelijk voor het tonen van onjuiste tarieven waarvan de Gebruiker mag aannemen dat ze onjuist zijn.
         <br/>
         <br/>
       
       
        <Typography variant='headline'>
        Artikel 8 - Herroeping bij levering van Producten</Typography>
       
       Voor Producten kan een herroepingsrecht gelden. Indien de Gebruiker gebruik wil maken van het recht om 
       de Overeenkomst te ontbinden, zal hij daarvoor contact moeten opnemen met de Aanbieder en de regels van
        Aanbieder omtrent herroeping moeten volgen.
       
       <br/>
       <br/>
       
        <Typography variant='headline'>
        Artikel 9 - Persoonsgegevens en privacybeleid</Typography>
       
       De persoonsgegevens die Roos van Gebruiker verkrijgt worden enkel gebruikt ten behoeve van de uitvoering 
       van de Bemiddelingsovereenkomst en het doen van aanbiedingen voor soortgelijke producten en diensten.
        Ten behoeve van de uitvoering van de Overeenkomst zal Roos de persoonsgegevens doorgeven aan de Aanbieder waarmee door Gebruiker een Overeenkomst wordt aangegaan. 
        In dat kader is mag Roos de persoonsgegevens te verstrekken aan derde partijen, die betrokken zijn bij het uitvoeren van de Overeenkomst, als de betreffende persoonsgegevens
         voor uitvoering van het contract noodzakelijk zijn. De verwerking van alle persoonsgegevens door Roos gebeurt conform de Wet Bescherming Persoonsgegevens (WBP). 
         Gebruiker is ermee bekend en stemt ermee in dat Roos alle oude door de Gebruiker afgesloten contracten gedurende een periode van 7 (zeggen: zeven) 
        jaar in haar digitale archief zal bewaren. Roos zal de data van de Gebruiker op schriftelijk verzoek van Gebruiker vernietigen.
         Na verwijdering mag Roos de persoonsgegevens anonimiseren en de gegevens in deze vorm blijven gebruiken voor marktonderzoek. 
         Roos zorgt voor adequate beveiliging van alle persoonsgegevens. De verwerking van persoonsgegevens en getroffen beveiligingsmaatregelen worden aanvullend toegelicht in de privacyverklaring van Roos.
          Gebruiker gaat akkoord met het gehanteerde privacybeleid van Roos. Roos behoudt het recht de door de uitvoering van de Diensten toegenomen kennis en/of data voor aanbiedingen van Aanbieders te gebruiken.
       
       <br/>
       <br/>
       
        <Typography variant='headline'>
        Artikel 10 - Rechten van intellectuele eigendom</Typography>
       
       De Dienst, de bijbehorende software en alle informatie en afbeeldingen op de Site zijn het intellectuele 
       eigendom van Roos en/of Aanbieders. Deze mogen op geen enkele wijze gekopieerd of gebruikt worden zonder aparte 
       schriftelijke toestemming van Roos en/of Aanbieders, behalve de gevallen waarin dat wettelijk is toegestaan. 
       Informatie die Gebruiker opslaat of verwerkt via de Dienst is en blijft eigendom van Gebruiker. 
       Roos heeft een beperkt gebruiksrecht om deze informatie in te zetten voor de Dienst, 
       inclusief voor toekomstige aspecten daarvan. Gebruiker kan dit gebruiksrecht intrekken door
        de betreffende informatie te verwijderen, de Bemiddelingsovereenkomst te beëindigen of de intrekking schriftelijk 
        bekend te maken aan Roos. Roos heeft een beperkt gebruiksrecht om deze informatie in te zetten voor de Dienst, 
        inclusief voor toekomstige aspecten daarvan. Onder het beperkte gebruikersrecht als genoemd in artikel 10.2 valt 
        ook het recht om de informatie geaggregeerd en geanonimiseerd te verwerken voor statistische doeleinden.
         Deze data is op geen enkele wijze te herleiden naar een persoon. Indien Gebruiker informatie stuurt naar Roos, 
         bijvoorbeeld feedback over een fout of een suggestie voor verbetering, geeft zij Roos een onbeperkt en eeuwigdurend 
         gebruiksrecht deze informatie te gebruiken voor de Dienst. Dit geldt niet voor informatie die Klant nadrukkelijk als 
         vertrouwelijk markeert.
         <br/>
         <br/>
       
          <Typography variant='headline'>
          Artikel 11 - Klachten</Typography>
         
       
       Klachten over de door Roos verleende Diensten moeten door Gebruiker binnen veertien (14)
        dagen na voltooiing van die Diensten aan Roos gemeld worden. Indien een klacht gegrond is, zal 
        Gebruiker Roos de Diensten nog eens laten verlenen. Als het alsnog verlenen van de Diensten naar 
        objectieve maatstaven niet meer mogelijk is, zal Roos slechts aansprakelijk zijn binnen de grenzen van artikel 11.
        <br/>
        <br/>
       
       
          <Typography variant='headline'>Artikel 12 - Aansprakelijkheid</Typography>
       
       Roos is niet aansprakelijk voor enige schade die de Gebruiker lijdt als gevolg van een beslissing van 
       Gebruiker over een aanbieding van een Aanbieder of een actie van Roos in de nakoming van de Overeenkomst of anderszins, 
       behalve indien er sprake is van opzet of grove schuld. Gebruiker vrijwaart Roos van alle aanspraken van derden voor 
       schade die verband houdt of voortvloeit uit de Overeenkomst. Een en ander doet niets af aan de zorgplicht 
       van Roos als bedoeld in artikel 3. Roos is niet aansprakelijk voor enige schade die de Gebruiker ondervindt
        als gevolg van een beslissing van Gebruiker die gebaseerd is op het overzicht met mogelijke besparingen die 
        verstrekt wordt op de overzichtspagina, of als gevolg van een actie van Roos in de nakoming van de Overeenkomst 
        of anderszins, behalve als er sprake is van opzet of grove schuld. In het geval dat Roos aansprakelijk is voor
         door Gebruiker geleden schade, is de schade die Roos moet vergoeden nooit meer dan de maandelijkse abonnementswaarde
          van het Contract, waarvan het gebrek oorzaak is geweest, met een maximum van € 200, waarbij een samenhangende reeks 
          gebeurtenissen als één gebeurtenis geldt. Aansprakelijkheid van Roos voor indirecte schade, namelijk gevolgschade, 
          gederfde winst, gemiste besparingen, verlies van (bedrijfs)gegevens en schade door bedrijfsstagnatie, is uitgesloten.
           De aansprakelijkheid voor de Diensten die Roos aan een verzekeraar heeft opgedragen, is beperkt tot zover als de 
           verzekeraar Roos effectief vrijwaart.
       
       <br/>
       <br/>
       
       <Typography variant='headline'>Artikel 13 - Overmacht</Typography>
       
       
       Onder overmacht wordt verstaan: elke omstandigheid op grond waarvan (verdere) nakoming van de Overeenkomst door Roos 
       redelijkerwijs niet kan worden verlangd. Hieronder wordt in elk geval – maar niet uitsluitend – verstaan: dataverlies 
       als gevolg van computerstoring, virusinfectie of computervredebreuk door derden – ondanks dat Roos de beveiligingsmaatregelen 
       heeft genomen waarvan zij in alle redelijkheid mocht verwachten dat deze adequaat zouden zijn - en andere calamiteiten die de 
       bedrijfsvoering van Roos verhinderen of beperken. In het geval dat Roos door overmacht wordt verhinderd de Diensten geheel of 
       gedeeltelijk te verlenen, heeft Roos het recht om zonder gerechtelijke tussenkomst de uitvoering van de Diensten op te schorten
        of de Overeenkomst geheel of gedeeltelijk als ontbonden te beschouwen, zulks te zijner keuze.
       
       <br/>
       <br/>
       
       <Typography variant='headline'>Artikel 14 - Duur en beëindiging</Typography>
       
       
       Roos behoudt zich het recht voor de Overeenkomst, zonder ingebrekestelling en verplichting tot schadevergoeding,
        geheel of gedeeltelijk te beëindigen, dan wel – naar eigen keuze – de verdere uitvoering van de Overeenkomst op te schorten.
       
       <br/>
       <br/>
       
       <Typography variant='headline'>Artikel 15 - Wijzigingen gebruikersvoorwaarden</Typography>
       
       
       Roos behoudt zich het recht voor deze Gebruikersvoorwaarden te wijzigen of aan te vullen. Wijzigingen gelden ook ten 
       aanzien van reeds gesloten Bemiddelingsovereenkomsten met inachtneming van een termijn van 30 dagen na bekendmaking van
        de wijziging op de Site of per elektronische berichtgeving. Roos raadt de Gebruiker aan de Gebruikersvoorwaarden van 
        tijd tot tijd door te nemen. Wijzigingen van ondergeschikt belang kunnen te allen tijde worden doorgevoerd. 
        Indien Gebruiker een wijziging in deze voorwaarden niet wil accepteren, kan hij tot de datum waarop de nieuwe 
        voorwaarden van kracht worden de Bemiddelingsovereenkomst ontbinden of op de ontvangstdatum van de opzegging indien
         deze na de ingangsdatum van de wijziging is.
       
         <br/>
         <br/>
       
         <Typography variant='headline'>Artikel 16 - Overdracht rechten en plichten</Typography>
       
       
       Partijen zijn niet gerechtigd de rechten en plichten die voortvloeien uit de onder deze Gebruikersvoorwaarden
        gesloten Overeenkomst geheel of gedeeltelijk aan derden over te dragen, behoudens voorafgaande schriftelijke 
        toestemming van de andere partij.
       
       <br/>
       <br/>
       
         <Typography variant='headline'>Artikel 17 - Slotbepalingen</Typography>
       
       
       
       Op de Bemiddelingsovereenkomst en/of Gebruikersovereenkomst is Nederlands recht van toepassing. Alle geschillen 
       tussen Gebruiker en Roos die naar aanleiding van of in verband met de Overeenkomst en/of Bemiddelingsovereenkomst
        mochten ontstaan, zullen in beginsel worden beslecht door de bevoegde rechter in Amsterdam. Deze Gebruikersvoorwaarden
         zijn van kracht met ingang van 1 november 2014. Onder “schriftelijk” valt in deze Gebruikersvoorwaarden ook 
         communicatie per e-mail of fax, mits de identiteit van de afzender en integriteit van de inhoud voldoende vaststaat.
          Partiële nietigheid: Indien een bepaling uit de Bemiddelingsovereenkomst en/of de Gebruikersvoorwaarden nietig blijkt 
          te zijn, tast dit niet de geldigheid van de gehele Bemiddelingsovereenkomst en/of Gebruikersvoorwaarden aan. 
          Partijen zullen ter vervanging (een) nieuwe bepaling(en) vaststellen, waarmee zoveel als rechtens mogelijk is aan 
          de bedoeling van de oorspronkelijke Bemiddelingsovereenkomst en/of Gebruikersvoorwaarden gestalte wordt gegeven.
          </Typography>
          <Divider style={{margin: '1.5rem 0'}} />
       
                </div>
                   );
                 }
               }
               

const mapStateToProps = function (state) {
  return {
    user: state.currentUser ? state.currentUser.user : null
  }
}

export default connect(mapStateToProps)(TermsPage)
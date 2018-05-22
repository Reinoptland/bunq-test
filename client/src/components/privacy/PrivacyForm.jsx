import React from 'react'
import Button from 'material-ui/Button';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider'
import {Link} from 'react-router-dom'


export class AlertDialog extends React.Component {
  state = {
    open: true,
  };

  componentWillMount(){
    if(this.props.user.permission) this.setState({
      open: false
    })
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = (e) => {
    console.log(this.props.user)
    if (e.target.textContent === 'Akkoord'){
      // dispatch action to update permissions
      this.props.privacy(this.props.user.id)
    }
      this.setState({ open: false });
  };

  render() {
    return (
      <div>
      <Typography variant='body2' className="privacyTypography"><Button onClick={this.handleClickOpen} className="privacyButton">Privacybeleid</Button></Typography>
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            style={{margin: 'auto'}}
            disableBackdropClick={true}
            disableEscapeKeyDown={true}
        >
          <DialogTitle id="alert-dialog-title">{"Privacybeleid van Roos"}</DialogTitle>
            <DialogContent>
              <DialogContent id="alert-dialog-description">
                  Roos vindt jouw privacy misschien wel belangrijker dan jijzelf. Als je online of via Facebook een wekker
                  zetof een product bestelt, staat ze er 100% voor in dat je gegevens zorgvuldig behandeld en verwerkt worden.
                  Zo blijven je gegevens van jou alleen en krijgt niemand krijgt er toegang toe. Pottenkijkers,
                  gegevensdieven, en zelfs medewerkers bij Roos maken geen schijn van kans.
    
                  Roos (Hello Labs BV, KvK: 60964030, gevestigd te Amsterdam) houdt zich dan ook steevast aan de eisen die
                  de Wet bescherming persoonsgegevens (Wbp) stelt, en zal het Autoriteit Persoonsgegevens beloven jouw
                  gegevens helemaal privé te houden. Roos staat ingeschreven bij het CBP onder nummer m00005392.
    
                  Het privacybeleid is het laatst aangepast op 1 juni 2017.
    
                  Hieronder kun je lezen hoe je persoonlijke informatie bij gebruik van de website, via Facebook en diensten
                  van Roos wordt behandeld. Bij het gebruik van Roos -of gerelateerde diensten- word je geacht om van dit
                  privacybeleid te hebben kennisgenomen.

                  <br/>
                  <br/>

                  <Typography variant='headline'>Bescherming persoonsgegevens</Typography>
                    
                  Roos wil absoluut niet dat onbevoegden toegang krijgen tot jouw persoonsgegevens. Om dat te vermijden
                  gebruikt ze geavanceerde veiligheidssystemen en technologie. Wanneer je de website bezoekt, wordt meteen een
                  beveiligde internetverbinding geactiveerd.
    
                  Dat gaat zo: via SSL (Secure Socket Layer) worden je gegevens versleuteld over het internet verstuurd.
                  Daarvoor heb je geen speciale software nodig, dat gebeurt automatisch.
    
                  SSL? Dat is een veilige verbinding die je herkent aan een icoontje van een groen slotje, dat onder in je
                  browser te zien is.
                  Wanneer Roos je gegevens aan een externe partij doorgeeft – zoals de door jou gekozen aanbieder – dan eist
                  ze dat die jouw gegevens met evenveel zorgvuldigheid behandelt als zijzelf.
    
                  Mocht je toch het gevoel hebben dat dit niet gebeurt, dan hoort de klantenservice van Roos dat graag! Mail
                  je opmerkingen naar service@halloroos.nl.

                  <br/>
                  <br/>

                  <Typography variant='headline'>Persoonlijke gegevens</Typography>
    
                  Roos gebruikt je gegevens om je ervaring met de contractwekker zo persoonlijk en eenvoudig mogelijk te
                  maken. Zo kan ze je vragen om bij je ingevoerde contract je actuele verbruik en voorkeuren toe te voegen, 
                  of die ene nog missende contractwekker aan te maken. Roos maakt daarvoor gebruik van je persoonlijke
                  gegevens uit je contractwekkers (zoals naam en adres), gegevens van afgesloten producten of diensten en je 
                  IP-adres en cookies. Over cookies kan je hier meer lezen.

                  <br/>
                  <br/>      

                  <Typography variant='headline'>In overeenstemming met gedragscodes</Typography>
                  Je persoonsgegevens worden door Roos en haar partners (verzekeringen, telecom en energie) verwerkt in
                  overeenstemming met Wet bescherming persoonsgegevens (Wbp) en met de ‘Gedragscode Verwerking 
                  Persoonsgegevens Financiële Instellingen’. Deze gedragscode is speciaal geschreven voor banken en 
                  verzekeraars. Gelukkig is er een samenvatting gemaakt die leesbaar en duidelijk is voor jou. Deze kan 
                  je vinden op verzekeraars.nl.

                  <br/>
                  <br/>  
      
                  <Typography variant='headline'>Waarvoor worden jouw gegevens gebruikt?</Typography>
                  Je gegevens worden gebruikt voor verschillende doelen, die hieronder worden toegelicht. Roos gebruikt de 
                  door jou gedeelde gegevens, maar ook door haar verzamelde gegevens over bijvoorbeeld je gebruik van de 
                  contractwekker en bezoek aan de website.

                  <br/>
                  <br/>  
        
                  <Typography variant='subheading'>Wekker aanmaken</Typography>
                  Voor het aanmaken van je wekker is het nodig om de aanbieder en einddatum van dat contract in te vullen. 
                  Ook je e-mailadres vraagt Roos. Dat gebruikt ze namelijk om je een e-mail te sturen wanneer je contract 
                  de einddatum nadert. Optioneel kan je ook een sms-melding krijgen op je mobiel bij het verlopen van het 
                  contract. Daarom vraagt Roos ook naar je mobiele nummer.

                  <br/>
                  <br/>  
                  
                  <Typography variant='subheading'>De beste deals voor jouw situatie en voorkeuren</Typography>
                  In de e-mail die je krijgt wanneer je contract gaat verlopen, krijg je ook meteen persoonlijk advies. Roos 
                  heeft gecheckt of je wel nog goed zit bij je huidige aanbieder, en laat je weten of je beter kan overstappen, 
                  verlengen met een betere deal of gewoon blijven waar je zit. Om dat uit te kunnen zoeken en het advies zo 
                  persoonlijk en correct mogelijk te maken, worden gegevens over je huidige situatie gevraagd, zoals bv. je 
                  postcode, het energieverbruik in je huishouden, en of je een voorkeur hebt voor groene energie. In het geval 
                  van een mobiel abonnement stelt Roos andere vragen, bv. over je huidige en gewenste aantal belminuten, 
                  databundel of sms’jes, en voorkeur voor een bepaald merk. Bij elk type contract krijg je andere, relevante 
                  vragen. Zo kan Roos je het beste advies garanderen.

                  <br/>
                  <br/>  

                  <Typography variant='subheading'>Account op Mijn Roos</Typography>
                  Om je contractwekkers makkelijk te kunnen beheren is er het Mijn Roos-account. Daar kan je de wekkers aanmaken 
                  en, mocht dat nodig zijn, later ook wijzigen. Naast je wekkers beheren kan je hier ook je persoonlijke 
                  informatie aanpassen, zoals je naam, adres(sen), telefoonnummer, e-mailadres, en geboortedatum. Daarnaast is 
                  Roos benieuwd naar je voorkeuren en interesses om je alleen deals aan te bieden die helemaal bij jouw wensen 
                  aansluiten. Die informatie kun je hier ook kwijt. Ook je bestellingen en reviews worden hier bewaard. In je
                  Mijn Roos-account kun je alles makkelijk en snel terugvinden.

                  <br/>
                  <br/>  

                  <Typography variant='subheading'>Een bestelling voor een nieuw product plaatsen</Typography>
                  Wil je overstappen of je contract verlengen via de website of Facebook? Dan zorgt Roos voor de afhandeling 
                  van je aanvraag. Naast je persoonlijke gegevens, adres- en betaalgegevens is er soms extra informatie nodig
                  om je aanvraag af te handelen. Roos werkt namelijk samen met externe partijen zoals de aanbieders en partners. 
                  Ze geeft aan hen alleen die informatie door die nodig voor de aanvraag. Al haar partners zijn gebonden aan 
                  dezelfde omgang met je gegevens als Roos.

                  <br/>
                  <br/>  

                  <Typography variant='subheading'>Klantenservice</Typography>
                  Je kan met Roos e-mailen, bellen en chatten op de website. Om je snel en efficiënt te helpen bij vragen over
                  je contracten en bestellingen worden aantekeningen van het gesprek gemaakt. Dat is handig als je nog een keer 
                  belt. Gegevens over het telefoongesprek met jou worden dus geregistreerd, en ook een chatgesprek wordt bewaard. 
                  Dat helpt Roos bij analyses en verbeteringen van haar diensten. Soms kan een andere partij jouw vragen beantwoorden. 
                  Die kan daarvoor ook jouw gegevens zoals bekend bij Roos gebruiken. Het doel van dit alles? Een zo prettig en 
                  efficiënt mogelijke klantenservice!

                  <br/>
                  <br/>  

                  <Typography variant='subheading'>Chatbot/Facebook</Typography>
                  Roos maakt gebruik van Facebook Messenger. Op basis van gegevens zoals je postcode, kenteken, grootte van 
                  je huishouden of databundels en minuten kan Roos eenvoudig een vergelijking maken. Als je Facebook Messenger 
                  gebruikt kunnen wij op basis van je naam en geslacht je makkelijk aanspreken en als het e-mail adres wordt 
                  meegegeven hoeven we dat niet te vragen bij het afsluiten van een contract.

                  De gesprekken en informatie gegeven via Facebook worden opgeslagen. Dit doen we om je beter te leren kennen, de functionaliteiten steeds
                  beter te kunnen verbeteren en je aanvraag voor een overstap of verlenging te kunnen regelen.

                  De gesprekken die niet leiden tot een overstap of verlenging worden 1 maand opgeslagen. Heb je een overstap of verlenging aangevraagd 
                  via Roos dan slaan wij de berichten 6 maanden op.

                  <br/>
                  <br/>  

                  <Typography variant='subheading'>Nieuwsbrieven</Typography>
                  Roos stuurt je, als je dat wenst, graag een nieuwsbrief. Zo blijf je op de hoogte van relevante ontwikkelingen 
                  op de markt, aantrekkelijke acties en aanbiedingen, en nieuws over Roos. Dat zijn algemene nieuwsbrieven die 
                  Roos afstemt op jouw persoonlijke situatie.

                  <br/>
                  <br/>  
                  
                  <Typography variant='subheading'>E-mails voor jouw contracten of bestellingen</Typography>
                  Maak je een wekker aan op Roos (www.halloroos.nl), dan krijg je persoonlijke e-mails als je contract gaat 
                  verlopen, e-mails met adviezen voor het overstappen of verlengen en eventueel andere belangrijke wijzigingen 
                  over jouw product (wijziging premie of voorwaarden). Deze e-mails zijn zo goed mogelijk afgestemd op jouw 
                  situatie en voorkeuren, en dus zo relevant mogelijk. Ben je tevreden over een aanbod, dan kan je die meteen
                  bij Roos afsluiten, en krijg een e-mail met een bevestiging van je aanvraag. Wil je deze e-mails niet meer 
                  ontvangen, dan kun je je onder aan elke e-mail direct afmelden.

                  <br/>
                  <br/>  

                  <Typography variant='subheading'>Reviews</Typography>
                  Roos is dol op reviews. Ervaringen van anderen helpen je betere beslissingen te maken! Wil je die ene aanbieder 
                  reviewen? Dan kan dat met of zonder je naam. In je Mijn Roos-account vind je al je reviews terug, per aanbieder.
                  
                  <br/>
                  <br/>  

                  <Typography variant='subheading'>Winacties</Typography>
                  Als je meedoet aan een winactie of prijsvraag, dan vraagt Roos je naam en e-mailadres. Die heeft ze nodig om 
                  de winnaar bekend te maken. Daarnaast wil ze ook graag weten wie er meedoet.

                  <br/>
                  <br/>  

                  <Typography variant='subheading'>Verbetering van diensten</Typography>
                  Roos werkt er hard aan om elke dag een beetje beter te worden. Dat doet ze door te meten hoe de website wordt 
                  gebruikt en wat er wordt ingevuld. Daarnaast vraagt ze of je wilt meedoen aan een klant- of marktonderzoek. 
                  Dat is uiteraard geheel vrijblijvend. Als Roos voor dat onderzoek samenwerkt met een andere partij, behandelt 
                  ook die jouw e-mailadres volgens Roos haar beleid, met respect voor jouw privacy. Na het onderzoek wordt je 
                  e-mailadres verwijderd.

                  <br/>
                  <br/>  

                  <Typography variant='subheading'>Social media</Typography>
                  Op Roos haar blog kun je artikelen leuk vinden of delen op Facebook en Twitter. Die actie verschijnt dan op 
                  je social media-account. Roos heeft geen toegang tot jouw account. Stel je Roos een vraag via social media, 
                  dan bewaart ze je bericht en accountnaam, zodat ze op jouw bericht kan reageren.

                  <br/>
                  <br/>  

                  <Typography variant='subheading'>Fraudebestrijding</Typography>
                  Wij proberen bij het gebruik maken en afsluiten van producten fraude tegen te gaan. Dat is in jouw en ons 
                  belang.

                  <br/>
                  <br/>  

                  <Typography variant='subheading'>Wettelijke bepalingen</Typography>
                  Steeds vaker stelt de overheid wettelijke bepalingen op waar wij ons aan moeten houden. Dat geldt dus ook 
                  voor Roos.

                  <br/>
                  <br/>  

                  <Typography variant='subheading'>Bijzondere gegevens</Typography>
                  Voor financiële dienstverlening zijn er specifieke gegevens van je nodig, bijvoorbeeld of je een strafrechtelijk 
                  verleden hebt. Als we dit aan je vragen gaat het over strafrechtelijke gegevens voor de aanvraag van een financiële
                    dienst en gaat het over de afgelopen 8 jaar.

                  <br/>
                  <br/>  

                  <Typography variant='headline'>Wat doet Roos niet met je gegevens</Typography>
                  Roos verstrekt of verkoopt je gegevens niet aan derden. Je gegevens worden alleen gebruikt om te zorgen dat 
                  je contractwekkers en een persoonlijk advies kan ontvangen, en je direct bij Roos een product kan afsluiten.
                  
                  <br/>
                  <br/>  

                  <Typography variant='headline'>Inzage en correctie van je gegevens</Typography>
                  De Wet bescherming persoonsgegevens (Wbp) geeft je de mogelijkheid om Roos te vragen welke gegevens van jou 
                  door ons worden verwerkt. Je kan ons altijd een overzicht van je gegevens vragen, daarvoor vragen wij wel een 
                  kopie van een geldig identiteitsbewijs te tonen. Zie je in het overzicht van de gegevens onjuistheden? Stuur ons 
                  dan een briefje met de aanpassingen of wijzigingen die je graag wilt zien. We zullen binnen 4 weken contact met je 
                  opnemen of we aan je verzoek kunnen voldoen. Je kan je verzoek sturen naar Roos/Hello Labs BV, Herengracht 504, 
                  1017 CB Amsterdam.
                  
                  <br/>
                  <br/>  

                  <Typography variant='headline'>Contact</Typography>
                  Heb je vragen of opmerkingen over het privacybeleid van Roos? Roos kun je bereiken via e-mail: service@halloroos.nl.
                  
                  <br/>
                  <br/>  

                  <Typography variant='headline'>Wijzigingen van privacybeleid</Typography>
                  Roos behoudt het recht om wijzigingen aan te brengen in het privacybeleid in verband met nieuwe ontwikkelingen. 
                De meeste recente versie kan je altijd vinden op de website van Roos en we raden je aan de tekst met enige regelmaat 
                te raadplegen indien van je Roos gebruik maakt.
                <Divider style={{margin: '1.5rem 0'}} />
                <div style={{position: 'relative', left: '45%'}}>
                  <Link to='/feedback'>
                    <Button onClick={this.handleClose} color="primary" variant='raised' style={{marginRight: 20, marginLeft: 20}}>
                      Niet akkoord
                    </Button>
                  </Link>
              <Button variant='raised' name='agree' onClick={this.handleClose} color="primary" style={{ marginLeft: 20}}>
                      Akkoord
                  </Button>
                </div>
              </DialogContent>                
            </DialogContent>
        </Dialog>
      </div>
    );
  }
}

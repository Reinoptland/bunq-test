import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typo'


export class AlertDialog extends React.Component {
  state = {
      open: false,
  };

  handleClickOpen = () => {
      this.setState({ open: true });
  };

  handleClose = () => {
      this.setState({ open: false });
  };

  render() {
      return (
          <div>
          <Button onClick={this.handleClickOpen}>Privacybeleid</Button>
              <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
              >
                  <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                      <DialogContentText id="alert-dialog-description">
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
            
                          Roos gebruikt je gegevens om je ervaring met de contractwekker zo persoonlijk en eenvoudig mogelijk te
                            maken. Zo kan ze je vragen om bij je ingevoerde contract je actuele verbruik en voorkeuren toe te voegen, 
                            of die ene nog missende contractwekker aan te maken. Roos maakt daarvoor gebruik van je persoonlijke
                            gegevens uit je contractwekkers (zoals naam en adres), gegevens van afgesloten producten of diensten en je 
                            IP-adres en cookies. Over cookies kan je hier meer lezen.

                        <Button onClick={this.handleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Agree
                        </Button>
                      </DialogContentText>
                     
                  </DialogContent>
           

              </Dialog>
          </div>
      );
  }
}

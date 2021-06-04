# #Marsvinstema-continued

Marsvinstema (Guinea pig theme) is an online shop for guinea pig accessories.
You can also buy sausages (which are not made from guinea pigs).

Kravspecifikation på projektet:

## Alla sidor skall vara responsiva. (G)

- Vi har skapat alla sidor så att dom är responsiva genom att skriva responsiv css.

## Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält (G)

- Detta kravet är uppfyllt, vi använder oss av regEx för att lösa detta

## Administratörer ska kunna se en lista på alla gjorda beställningar (G)

- Detta kravet är uppfyllt och finns på admin sidan under ' Hantrera ordrar '

## Inga Lösenord får sparas i klartext i databasen (G)  

- Lösenorden sparas inte i databasen som klartext utan dom är krypterade

## Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan (G)

- Admin kan uppdatera antalet produkterna, vi skapade en funktion till detta

## En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen (G)

- Lagersaldot uppdateras i vår mongo databas

## Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera (G)  

## En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas (G)

- Detta kravet är gjort genom att vi har en koll som kollar om du är en user , om ej så kommer du få logga in innan du kan gå vidare till kassan

## Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori (G)

- Detta kravet är uppfyllt genom att mappa ut produkterna på startsidan

## Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten (G)

- Denna lösningen har vi i serve.js

## Besökare ska kunna välja ett av flera fraktalternativ (G)

- Kunden kan välja mellan 3 olika fraksätt

## Tillgängliga fraktalternativ ska vara hämtade från databasen (G)

- Dessa hämtas från databasen och är skapade genom ett schema som heter shippingmethod.model.js

## Arbetet ska implementeras med en React frontend och en Express backend. (G)

- Detta kravet är uppfyllt , vi använder oss utav React på FE sidan och MongoDB och express på BE sidan

## Skapa ett ER diagram och koddiagram, detta ska lämnas in vid idégodkännandet G)

- Detta kravet är uppfyllt cch godkännt

## Beskriv er företagsidé i en kort textuell presentation, detta ska lämnas in vid idégodkännandet (G)

- Detta kravet är inlämnat och godkännt

## All data som programmet utnyttjar ska vara sparat i en Mongo-databas (produkter, beställningar, konton mm) (G)

- All vår information är sparat i en Mongo databs. Databasen kopplar vi i server.js

## Man ska kunna logga in som administratör i systemet (G)

- Du kan logga in som admin genom att vi skapat en användare vid det namnet som ochså får göra vissa ändringar som en kund ej får göra

## Man ska kunna registrera sig som administratör på sidan, nya användare ska sparas i databasen (VG)

- Detta kravet är ej uppfyllt pågrund av tidsbrist

## En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången (VG)

- Detta kravet är ej uppfyllt pågrund av tidsbrist 

## Administratörer ska kunna markera beställningar som skickade (VG)

- Detta kravet är uppfyllt och finns på admin sidan under ' Hantera ordrar '

## När man är inloggad som kund ska man kunna se sina gjorda beställning och om det är skickade eller inte (VG)

- Detta kravet är ej uppfyllt pågrund av tidsbrist 

## Administratörer ska kunna redigera vilka kategorier en produkt tillhör (VG)

-Detta kravet är ej uppfyllt pågrund av tidsbrist 

## Administratörer ska kunna lägga till och ta bort produkter (VG)

- Detta kravet är uppfyllt, detta går att göra på admin sidan under ' Hantera produkt'

## Backendapplikationen måste ha en fungerande global felhantering (VG)

- Detta kravet är ej uppfyllt pågrund av tidsbrist




## Developer instructions

### `npm install`

Installs all the required dependencies for the root scripts.

### `npm start`

Starts both the server application as well as the client application.

### `npm run start-client`

Runs the client application.

### `npm run start-server`

Runs the server application.

### `npm run postinstall`

Installs all the required dependencies for both the server application as well as the client application.

### `npm run install-client`

Installs all the required dependencies for the client application.

### `npm run install-server`

Installs all the required dependencies for the server application.

## Links

[GitHub-repository](https://github.com/lisapaajarvi/marsvinstema-continued)

## Developed by

[Camilla Johansson](https://github.com/millifrill)  
[Jonas Glingert](https://github.com/mrgling)  
[Lisa Pääjärvi](https://github.com/lisapaajarvi)  
[Lejla Dolovac](https://github.com/LejlaDolovac)  
[Tony Martinsson](https://github.com/TonyMartinsson)

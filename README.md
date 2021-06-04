# Marsvinstema-continued

Marsvinstema (Guinea pig theme) is an online shop for guinea pig accessories.
You can also buy sausages (which are not made from guinea pigs).

## Kravspecifikation på projektet:

**Alla sidor skall vara responsiva. (G)**

-  UPPFYLLT. Vi har skapat alla sidor så att dom är responsiva med hjälp av Material UI och CSS .

**Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält (G)**

-  UPPFYLLT. Vi använder oss av Regular Expressions för att lösa detta

**Administratörer ska kunna se en lista på alla gjorda beställningar (G)**

-  UPPFYLLT. Vi mappar ut skapade ordrar från databasen på admin sidan under 'Hantera ordrar'

**Inga Lösenord får sparas i klartext i databasen (G)**

-  UPPFYLLT. Lösenorden sparas inte i databasen som klartext utan dom är krypterade

**Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan (G)**

-  UPPFYLLT. Admin kan uppdatera antalet produkter i lager, vi skapade en funktion till detta

**En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen (G)**

-  UPPFYLLT. Lagersaldot uppdateras i vår mongo databas

**Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera (G)**

-  UPPFYLLT. Produktobjektet innehåller en array av olika kategorier

**En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas (G)**

-  UPPFYLLT. Detta krav är gjort genom att vi har en koll som kollar om du är en user , om ej så kommer du få logga in innan du kan gå vidare till kassan

**Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori (G)**

-  UPPFYLLT. Detta krav är uppfyllt genom att mappa ut produkterna på startsidan samt filtrera utifrån kategorier

**Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten (G)**

-  UPPFYLLT. Produkterna kan läggas i en kundkorg, som sparas i local-storage på klienten

**Besökare ska kunna välja ett av flera fraktalternativ (G)**

-  UPPFYLLT. Kunden kan välja mellan 3 olika fraktsätt

**Tillgängliga fraktalternativ ska vara hämtade från databasen (G)**

-  UPPFYLLT. Dessa hämtas från databasen och är skapade genom ett schema som heter shippingmethod.model.js

**Arbetet ska implementeras med en React frontend och en Express backend. (G)**

-  UPPFYLLT. Vi använder oss utav React på klientsidan och MongoDB och express på serversidan

**Skapa ett ER diagram och koddiagram, detta ska lämnas in vid idégodkännandet (G)**

-  UPPFYLLT och inlämnat

**Beskriv er företagsidé i en kort textuell presentation, detta ska lämnas in vid idégodkännandet (G)**

-  UPPFYLLT och inlämnat

**All data som programmet utnyttjar ska vara sparad i en Mongo-databas (produkter, beställningar, konton mm) (G)**

-  UPPFYLLT. All vår information är sparad i MongoDB Atlas. Databasen kopplar vi i server.js

**Man ska kunna logga in som administratör i systemet (G)**

-  UPPFYLLT. Du kan logga in som admin genom att vi skapat en användare vid det namnet som också får göra vissa ändringar som en vanlig användare ej får göra

**Man ska kunna registrera sig som administratör på sidan, nya användare ska sparas i databasen (VG)**

-  Ej uppfyllt

**En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången (VG)**

-  Ej uppfyllt

**Administratörer ska kunna markera beställningar som skickade (VG)**

-  UPPFYLLT. Genom ett PUT-anrop ändras en boolean i databasen. Finns på admin-sidan under 'Hantera ordrar'

**När man är inloggad som kund ska man kunna se sina gjorda beställning och om det är skickade eller inte (VG)**

-  Ej uppfyllt

**Administratörer ska kunna redigera vilka kategorier en produkt tillhör (VG)**

-  Delvis uppfyllt, man kan byta kategori, men man kan inte lägga till en extra kategori

**Administratörer ska kunna lägga till och ta bort produkter (VG)**

-  UPPFYLLT. Detta går att göra på admin sidan under 'Hantera produkt' genom POST/DELETE-anrop

**Backendapplikationen måste ha en fungerande global felhantering (VG)**

-  Ej uppfyllt

## Developer instructions

**Installation and start server-side**

-  cd server
-  npm install
-  npm start

**Installation and start client-side**

-  cd client
-  npm install
-  npm start

## Links

[GitHub-repository](https://github.com/lisapaajarvi/marsvinstema-continued)

## Developed by

[Camilla Johansson](https://github.com/millifrill)  
[Jonas Glingert](https://github.com/mrgling)  
[Lisa Pääjärvi](https://github.com/lisapaajarvi)  
[Lejla Dolovac](https://github.com/LejlaDolovac)  
[Tony Martinsson](https://github.com/TonyMartinsson)

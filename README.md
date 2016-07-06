# One Person Business Billing

create an manage bills/articles for small businesses

<h1>This is still in dev. Nothing works. Checkin are  just done for desaster recovery. U need to wait until summer 2016 for alpha/beta version.</h1>



Generell
* TrackingId für Angebot und Auftrag: A-<MMYY>-<4xInteger (3er Schritt)>-<Y of existance> Y of existance in 2016 = 9
* TrackingId für Rechnung und Lieferschein: R-<MMYY>-<4xInteger (10er Schritt)>-<Y of existance> 
* Customer: <MM/YY>-<4xInteger (1er Schritt)>
* JSON

Kunde (~1000):
* keine Tabelle
* filter feld
* löschen button
* erst bei safe schreibt der Server 
* refresh verwirft ändeungen (warnung)
* notizfeld für größe (kommt automatisch zum werkstattzettel)

Artikel
* mit Bild

Ablauf: Angebot (email/Bief) > Auftrag > Auftragsbestätigung (orignal oder modifiziert > Rechnung & Lieferschein (content und reine Menge) 						   

Angebot:

alte angucken / löschen

neu anlegen:
1. select customer (adresse / email )
2. select product + variation + amount + hidden production mark field
3. print / sent by mail (check)
Erfolg Flag

Auftrag:
* übernahme angebot
* Anpassung
* offen|inArbeit|erledigt > Rechungsdruck/eMail

Gernerierung des Auftragszettel
* offene und in Arbeit


# Block 11

**Aufgabe**: Erstelle ein kleines EPN das jeweils zwei zufällig generierte Werte in einem Processor verarbeitet und bei einer bestimmten Kombination von Werten ein Event weitergibt. 

1. Erstelle ein neues CEP Projekt im CEP Eclipse
	1. Nutze die HelloWorld Vorlage. Dort kannst du dir einiges abgucken
2. Erstelle zwei Adapter
	1. Einen der regelmäßig (z.B. alle 30ms) Double Werte zufällig generiert.
	2. Einen der regelmäßig int werte in einem bestimmten Bereich (z.B. 1-10.000) generiert
3. Erstelle einen Processor
4. Erstelle je ein Event für die doubles und eins für die int-Werte
5. Verbinde die Adapter mit dem Processor über einen Channel und schicke die Events von den Adaptern an den Processor
6. Schreibe eine Logik für den Processor in CQL
	1. Gebe nur ein Event weiter, wenn das int-Event einen int-Wert enthält welcher %10 = 0 ergibt.
	2. Gebe nur ein Event weiter, wenn der double Wert < 0.05 ist.
	3. Diese beiden Bedingungen sollen beide zutreffen um ein Event weiterzugeben
7. Gebe die gefilterten Events weiter an eine Bean, welche die Events auf der Konsole ausgibt.
8. ALTERNATIV: Gebe die Events weiter an den Schulungsserver (auch in einer Bean) an die URI `/api/user/:username/cepevent` und einem `POST` Befehl
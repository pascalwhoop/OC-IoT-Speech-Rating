# Block 4

**Aufgabe**: Konfiguriere Spring mit den xml Konfiguratonsdateien um eine Umgebung zu schaffen, in der der gesamte folgende Javacode entwickelt werden kann.


1. Schaue dir die neue Projektstruktur an
	1. Es sind einige neue Maven Module hinzugekommen
	2. Importiere diese als Module in IntelliJ, wenn dies nicht selbstständig geschieht
2. Fülle die servlet Konfiguration mit den notwendigen bean Konfigurationen
	1. Öffne die Datei `mvc-dispatcher-servlet.xml` im `rest-camunda` Modul
	2. Füge alle notwendigen beans hinzu um unsere spring/hibernate/jackson Umgebung zu konfigurieren
		* *look at the hints for this section to get the code snippets*
	3. Verstehst du alle Konfigurationen?
3. Erstelle eine run configuration mit intellij um den aktuellen maven build auf einem jetty server zu deployen
	* *siehe screenshots in den Tipps*
4. öffne einen Browser unter localhost:8080 und schaue ob das servlet deployed wurde

    
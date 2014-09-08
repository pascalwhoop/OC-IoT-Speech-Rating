# Block 7

**Aufgabe**: Update den Spring Service `ElroPowerPlugServiceImpl` sodass es die JNI Klasse zum schalten nutzt und die DB aktualisiert

*Alle anderen Methoden sind bereits implementiert. Die meisten geben nur einfache CRUD Operationen weiter oder führen constraint checks aus.*

1. Implementiere die Methode: `ElroPowerPlug setState(ElroPowerPlug elroPowerPlug, boolean state)` 
	1. Nutze die JNI Klasse zum steuern der Lampen
	2. Update die DB mittels der vorhandenen Domain Access Object (DAO) Klasse
2. Verbinde den `SwitchController` mit dem `ElroPowerPlugService` mittels Springs Dependency Injection
	1. Injeziere den Service
	2. Rufe die richtigen Methoden auf um die Anfragen an die Services weiterzugeben
3. Mache das gleiche für den `UserController`
4. Teste ob der REST Service jetzt das Licht kontrolliert

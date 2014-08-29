# section 3


**Aufgabe**: Schreibe ein Java Native Interface um die Steckdosen aus Java heraus zu steuern. Wir brauchen dafür zwei Methoden (ON / OFF) welche den unit und group code der Stecker (z.B. 01101 01110) entgegen nehmen.


1. Implementiere die Java Klasse
    1. Öffne die Javaklasse `NativeRCSwitchAdapter.java` im `rc-switch-jni-wrapper` Modul
	2. Lade die native library in der Java Applikation, sodass auf diese zugegriffen werden kann. (die .so Dateien)
	3. Implementiere die Methodenköpfe für die `switchOn`und `switchOff` Methoden
		* *Tipp: Eine native interface Methode hat die Form:* `public native <returnValue> <methodName>(<parameters>);`
		* *Der Methodenkörper ist im C Code abgelegt*
2. Kompiliere die Java Klasse und erstelle die C header files
	1. Öffne eine Kommandozeile und wechsele zu `<project_root>/rc-switch-jni-wrapper/src`
	1. Kompiliere die Javaklasse mit `javac com/opitz/jni/NativeRCSwitchAdapter.java`
	2. Erstelle die C header Dateien mit `javah com.opitz.jni.NativeRCSwitchAdapter`
3. Schreibe den C Code, welcher durch die Javamethoden ausgeführt werden soll
	1. Schaue dir die Datei `com_opitz_jni_NativeRCSwitchAdapter.h` an
	2. Erstelle eine gleich genannte Datei aber mit vom Typ `.cpp`
	3. Kopiere den Code aus den Tipps und verfollständige die `switchOff` Funktion . Wenn du nicht weiter kommst nutze den Code im Tipp, versuche jedoch erstmal selber zu entwickeln und aus diesem nur Ideen zu ziehen
4. Verschiebe deinen entwickelten Code auf den Pi und teste ihn
	1. Öffne eine sftp Verbindung zum Raspberry Pi (ssh based file transfer)
		1. Dieser [Guide](http://trevorappleton.blogspot.de/2014/03/remotely-copy-files-to-and-from-your.html) für filezilla hilft vielleicht
	2. Verschiebe die geänderten Datein auf den Pi
	3. kompiliere die `Main.java` Klasse im Adaptermodul
	4. Führe Das Programm auf der Kommandozeile aus und übergebe deine Steckeraddresse als Parameter
		1. `java Main 11111 00000` for example
		2. Deine Lampe sollte sich mit einer Verzögerung von 2 Sekunden ein und ausschalten





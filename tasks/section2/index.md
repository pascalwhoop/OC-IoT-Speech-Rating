# Block 2

**Aufgabe:** Verbinde dich mit dem Raspberry Pi und steuere die Steckdose mit den nativen Bibliotheken

1. Verbinde dich via SSH
2. cd to `~/applications/
3. Klone das Git und wechsele zum ersten branch
	1. `git clone https://github.com/opitzconsulting/OC-IoT-Workshop-Sources.git`
	2. cd in das neu erstellte Verzeichnis
	3. `git fetch`
	4. `git checkout section2`
4. `rc-switch-jni-wrapper/src`
5. `make` ausführen
6. Steuere die Lampen mit der `send` anwendung
	1. `sudo ./send 10110 10110 1`
		1. Die ersten beiden Parameter sind die DIP Switches der Funkstekcdose, der Dritte ist  ON / OFF

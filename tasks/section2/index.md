# Block 3

**Aufgabe:** Verbinde dich mit dem Raspberry Pi und steuere die Steckdose mit den nativen Bibliotheken

1. Verbinde dich via SSH
2. cd to `~/applications/OC-IoT-Workshop-Sources/rc-switch-jni-wrapper/src`
3. `make` ausführen
4. Steuere die Lampen mit der `send` anwendung
	1. `sudo send 10110 10110 1`
		1. Die ersten beiden Parameter sind die DIP Switches der Funkstekcdose, der Dritte ist  ON / OFF

# Block 8

**Task**: Nutze die Mobile Applikation und steuer  damit die Lampe über den REST Service. 

1. Downloade das git repository für das frontend
	1. `git clone https://github.com/pascalwhoop/Pi-jAutomation433_Frontend.git`
2. cd in das git repo und `npm install` (installiert die node dependencies)
3. `bower install` (installiert javascript webapp application dependencies)
4. `grunt server` (startet einen lokalen server welcher die mobile app hostet)
5. Damit die Applikation auf den REST Service zugreifen kann öffne chrome erneut über die Kommandozeile: `chromium --disable-web-security` (in der Linux debian VM)
6. Gebe deine IP Adresse in den Einstellungen ein  und erstelle eine Benutzer + einen Stecker
7. Schalte den Stecker ein. Schaue ob die jetty Konsole dies wiedergibt.
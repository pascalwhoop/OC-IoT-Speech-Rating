# section 6

**Aufgabe**:  Erstelle die REST Services für die Spring Applikation um Benutzer sowie einfache Stecker zu steuern

*Die Klassen sind bereits vorhanden, also fülle die Methoden (mit ein paar dummy Rückgabewerten) und annotiere sie korrekt*

* Annotiere die Methoden in `SwitchController.java` und gebe ein paar Dummywerte zurück
	* [ ] activate
	* [ ] deactivate
	* [ ] getAll
	* [ ] create
	* [ ] deleteNetworkNode
* Annotiere die Methoden in `UserController.java`und gebe ein paar Dummywerte zurück
    * [ ] setUserState
	* [ ] create
	* [ ] update
	* [ ] delete
	* [ ] getAllDevices
	* [ ] getAll
	* [ ] findByUsername
* Starte den server
	* `mvn package`
	* run jetty
* Rufe die REST Schnittstellen auf und prüfe ob die Rückgabewerte korrekt sind
	* Nutze den IntelliJ REST client (oder einen anderen wenn du einen anderen nutzen möchtest)
	* Richten Werte zurückbekommen? Glückwunsch!

*Solcher Output der Jetty console sollte indizieren, dass REST Services gemapped wurden*

```bash

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/switches/{id}],methods=[DELETE],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public void com.opitz.iotprototype.controller.SwitchController.delete(java.lang.Integer)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/switches],methods=[POST],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public com.opitz.iotprototype.entities.ElroPowerPlug com.opitz.iotprototype.controller.SwitchController.create(com.opitz.iotprototype.entities.ElroPowerPlug)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/switches/activate/{id}],methods=[PUT],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public com.opitz.iotprototype.entities.ElroPowerPlug com.opitz.iotprototype.controller.SwitchController.activate(java.lang.Integer)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/switches/deactivate/{id}],methods=[PUT],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public com.opitz.iotprototype.entities.ElroPowerPlug com.opitz.iotprototype.controller.SwitchController.deactivate(java.lang.Integer)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/switches],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.util.List<com.opitz.iotprototype.entities.ElroPowerPlug> com.opitz.iotprototype.controller.SwitchController.getAll()

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users],methods=[PUT],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public com.opitz.iotprototype.entities.User com.opitz.iotprototype.controller.UserController.update(com.opitz.iotprototype.entities.User)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users/{userID}],methods=[DELETE],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public boolean com.opitz.iotprototype.controller.UserController.delete(java.lang.Integer)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users],methods=[POST],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public com.opitz.iotprototype.entities.User com.opitz.iotprototype.controller.UserController.create(com.opitz.iotprototype.entities.User)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users/{username}/state/{setState}],methods=[PUT],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.String com.opitz.iotprototype.controller.UserController.setUserState(java.lang.String,java.lang.String)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users/devices],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.util.HashMap<java.lang.String, java.lang.String> com.opitz.iotprototype.controller.UserController.getAllDevices()

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users/username/{username}],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public com.opitz.iotprototype.entities.User com.opitz.iotprototype.controller.UserController.findByUsername(java.lang.String)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.util.List<com.opitz.iotprototype.entities.User> com.opitz.iotprototype.controller.UserController.getAll()

```

# section 9

## Camunda Process Configuration for `mvc-dispatcher-servlet.xml`

```xml
<!-- camunda process engine configuration -->
	<bean id="processEngineConfiguration"
		class="org.camunda.bpm.engine.spring.SpringProcessEngineConfiguration">
		<property name="processEngineName" value="default" />
		<property name="dataSource" ref="dataSource" />
		<property name="transactionManager" ref="transactionManager" />
		<property name="databaseSchemaUpdate" value="true" />
		<property name="jobExecutorActivate" value="false" />
	</bean>

	<!-- embedded camunda process engine -->
	<bean id="processEngine"
		class="org.camunda.bpm.engine.spring.container.ManagedProcessEngineFactoryBean">
		<property name="processEngineConfiguration" ref="processEngineConfiguration" />
	</bean>

	<bean id="processApplication"
		class="org.camunda.bpm.engine.spring.application.SpringServletProcessApplication"
		depends-on="processEngine" />

	<!-- camunda process engine services -->
	<bean id="repositoryService" factory-bean="processEngine"
		factory-method="getRepositoryService" />
	<bean id="runtimeService" factory-bean="processEngine"
		factory-method="getRuntimeService" />
	<bean id="taskService" factory-bean="processEngine"
		factory-method="getTaskService" />
	<bean id="historyService" factory-bean="processEngine"
		factory-method="getHistoryService" />
	<bean id="managementService" factory-bean="processEngine"
		factory-method="getManagementService" />
```

## processes.xml


```xml
<?xml version="1.0" encoding="UTF-8" ?> 
  <process-application
      xmlns="http://www.camunda.org/schema/1.0/ProcessApplication"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 
    <process-archive name="plug-switch-process">
      <process-engine>default</process-engine>
      <properties>
        <property name="isDeleteUponUndeploy">false</property>
        <property name="isScanForProcessDefinitions">true</property>
      </properties>
    </process-archive>
 
  </process-application>
```

## register all delegate beans

```xml
<!-- camunda delegate services -->
	<bean id="applyFirstUser" class="com.opitz.iotprototype.delegates.ApplyFirstUserDelegate" />
	<bean id="switchKitchen" class="com.opitz.iotprototype.delegates.SwitchKitchenDelegate" />
	<bean id="applyEnteringRules"
		class="com.opitz.iotprototype.delegates.ApplyEnteringRulesDelegate" />
	<bean id="switchSpecialPlug"
		class="com.opitz.iotprototype.delegates.SwitchSpecialPlugDelegate" />
	<bean id="switchOnPlug" class="com.opitz.iotprototype.delegates.SwitchOnPlugDelegate" />
	<bean id="applyLastUser" class="com.opitz.iotprototype.delegates.ApplyLastUserDelegate" />
	<bean id="switchOffAllPlug"
		class="com.opitz.iotprototype.delegates.SwitchOffAllPlugDelegate" />
	<bean id="applyLeavingRules"
		class="com.opitz.iotprototype.delegates.ApplyLeavingRulesDelegate" />
	<bean id="switchOffPlug" class="com.opitz.iotprototype.delegates.SwitchOffPlugDelegate" />
	<bean id="setUserState" class="com.opitz.iotprototype.delegates.SetUserStateDelegate" />
```

## UserController setUserState
autowire the runtimeService bean provided by camunda
```java
private static final String PLUG_SWITCH_PROCESS_DEFINITION_KEY = "plug-switch-process";
@Autowired
RuntimeService runtimeService;
```

start a new process instance from the controller
```java
HashMap<String, Object> variables = new HashMap<>();
variables.put("username", username);
variables.put("state", state.name().toLowerCase()); // TODO change to enum
ProcessInstance processInstance = runtimeService.startProcessInstanceByKey(PLUG_SWITCH_PROCESS_DEFINITION_KEY, variables);
return "process instance with id " + processInstance.getId() + " done.";
```
  
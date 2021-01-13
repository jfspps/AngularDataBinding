# Component communication

The following was taken directly from the course forum:

`These are the general rules for component communication:

You can pass values from a parent to a child component using [property binding] in the parent and @Input() in the child.

You can pass values from a child to a parent component using (event binding) in the parent and @Output() in the child.

This syntax is rather intuitive: @Input() marks inputs into the child (coming from its parent), @Output() marks outputs from the child (to its parent).

A direct parent/child relationship of two components is established by the fact that the selector of the child component is placed somewhere in the template of the parent component. More indirectly, this relationships can be built from chaining between child, parent and grandparents, and beyond.

In all cases which are not direct parent/child constellations (i.e. if we have a different relationship between components, or if routing is involved) we can use a service. This approach has no restrictions.`

# The component lifecycle

The constructor runs anytime a new object is instantiated. Other method calls (e.g. console.log()) within the constructor would also run if present.

It is generally good practice, though not technically mandatory, to declare each method (except for the constructor) after the `implements` class declaration.

+ `ngOnChanges()` runs anytime a bound input property changes. Use `ngOnChanges(changes: SimpleChanges)` to access what changed by using `changes`. 
+ `ngOnInit()` runs immediately after the constructor
+ `ngDoCheck()` runs whenever a change to a template (render) is requested; this runs quite often
+ `ngAfterContentInit()` runs whenever the parent projects data to a component with <ng-content>
+ `ngAfterContentChecked()` runs whenever change detection detects `ngAfterContentInit`
+ `ngAfterViewInit()` runs after a component and its child views have been initialised (rendered)
+ `ngAfterViewChecked()` runs after the view and child views have been checked
+ `ngOnDestroy()` runs once a component is destroyed (any required data to be saved can be executed here before loss)

# @Input in Angular

Each `server` and `blueprint` can be stored in any of the components present but generally when changes are made to one components they need to be sync'd with the other components.

The decorator `@Input` allows data from parent `app.component` to pass to child `Server-element`. It is used when the properties of an object are derived from parameters set externally. In this case, `server-element`'s array of servers is first listed and then each, given by `serverElement` is immediately sent to `server-element` as `element`. Each `element` property is prefixed with `@Input` signifying that the property is set externally and therefore requires "input". 

Once app.component is loaded, server-element is then sync'd, overall giving:

```
app.component `serverElement` of `serverElements[]` in appcomponent.ts <- @Input --->->  Server-element `element`
```

# @Output in Angular

The decorator `@Output` passes data from the child component `Cockpit` to the parent `app.component`. The class `cockpit` is responsible for handling the input fields for server name and server content. These values are then saved using either pairs:

+ Strings `newServerName` and `newServerContent`
+ Element references `serverNameInput` and `serverInputContent`

The user enters the data in the two fields (server name and server content). If the buttons are pressed then either of cockpit's `onAddServer()` or  `onAddBlueprint()` are triggered. This then takes the pair and sends them via an "emitter" method, using the `@Output` decorator, to the parent component. The `@Output` signifies that the data is passed externally to other classes. The parent HTML template passes the parameters to `onServerAdded()` and `onBlueprintAdded()` which are defined in app.component.ts, completing the transfer of data.

Overall:

```
app.component `serverElement` of `serverElements[]` in appcomponent.ts <-<-- @Output -> cockpit onAddServer() and onAddBlueprint()
```

# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

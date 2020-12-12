# Component communication

The following was taken directly from the course forum:

`These are the general rules for component communication:

You can pass values from a parent to a child component using [property binding] in the parent and @Input() in the child.

You can pass values from a child to a parent component using (event binding) in the parent and @Output() in the child.

This syntax is rather intuitive: @Input() marks inputs into the child (coming from its parent), @Output() marks outputs from the child (to its parent).

(A direct parent/child relationship of two components is established by the fact that the selector of the child component is placed somewhere in the template of the parent component.)

In order to practice this kind of component communication Max applies this principle in sections 5/6 also to grandparent/grandchild communication (chaining the same approach over two levels), and to sibling communication (using the parent as an intermediate step). That makes this communication technique look more complex than it really is.

Later you will see: In all cases which are not direct parent/child constellations (i.e. if we have a different relationship between components, or if routing is involved) we can use a service (see sections 9/10 and all following ones). This approach has no restrictions, we can use it in all imaginable constellations.`

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

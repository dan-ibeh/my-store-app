# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Routes

### Home

Home route ` http://localhost:4200/` displays all products

### Product details

Products details route ` http://localhost:4200/product/:id/:quantity` shows details of a single products

### Shopping cart

Shopping cart route ` http://localhost:4200/cart` shows all items added to cart

### Order confirmation

order confirmation route ` http://localhost:4200/success/:name/:cost` dis successful order information. And this route is only accessible only when an order is successfully made when the checkout form is field with valid details

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

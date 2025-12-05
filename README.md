# My First Angular Project

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)
![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## Author's description

The project is a **TypeScript** application for **academic** purposes. You will find the resources to run the code, such as images *(imagens)* and icons *(favicon.ico)*, in addition to the extensive use of **HTML5** and **CSS3**.

In this way, you will have a mocked web application with mobile responsiveness of a portfolio of handcrafted works, containing 4 pages:

* HomePage 
* About me
* Products 
* Contact Me

They are organized in separate folders for each page with HTML, CSS, TS and test files.

The access routes are in the `app.routes.ts` file is `src`, such standard HTML and CSS configurations, avoiding code duplicity.

```
MY-ANGULAR-PROJECT/
├── .angular/
├── .vscode/
├── node_modules/       (bibliotecas)
├── public/
│   ├── imagens/              
│   │   ├── 001.png
│   │   ├── 002.png
│   │   ├── 003.png
│   │   ├── background.png
│   │   ├── carta.png
│   │   ├── eu_2.png
│   │   ├── eu.png
│   │   └── vista-superior-com-flores-desabro... 
│   └── favicon.ico
└── src/ 
    ├── app/
    │   ├── about-me/
    │   │   ├── about-me.css
    │   │   ├── about-me.html
    │   │   ├── about-me.spec.ts
    │   │   └── about-me.ts
    │   ├── contact/
    │   │   ├── contact.css
    │   │   ├── contact.html
    │   │   ├── contact.spec.ts
    │   │   └── contact.ts
    │   ├── home-page/
    │   │   ├── home-page.css
    │   │   ├── home-page.html
    │   │   ├── home-page.spec.ts
    │   │   └── home-page.ts
    │   ├── nav-bar/
    │   │   ├── nav-bar.css
    │   │   ├── nav-bar.html
    │   │   ├── nav-bar.spec.ts
    │   │   └── nav-bar.ts
    │   ├── products/
    │   │   ├── products.css
    │   │   ├── products.html
    │   │   ├── products.spec.ts
    │   │   └── products.ts
    │   ├── app.config.ts
    │   ├── app.css
    │   ├── app.html
    │   ├── app.routes.ts
    │   ├── app.spec.ts
    │   └── app.ts
    ├── index.html
    ├── main.ts
    └── styles.css
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to the link bellow. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## License
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

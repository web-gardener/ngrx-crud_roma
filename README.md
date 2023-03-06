# TCITCrudRoma [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/romaestradaflo)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

This web application will have a simple CRUD on the front side using NgRx, You will be able to create a post, delete it and filter post by "nombre".

Special thanks go to:
- [Romario Estrada](https://linktr.ee/romaef) for his nice develop.


## Table of Contents

* [Languages](#versions)
* [Quick Start](#quick-start)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Licensing](#licensing)


## Languages

| NgRx 15 | Angular 15|
| --- | --- |
| [![NgRx](https://ngrx.io/assets/images/badge.svg)]()  | [![Angular](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/300px-Angular_full_color_logo.svg.png)]()

## Quick start

The client in Angular will run at `port 4200` and the url to access is `http://localhost:4200`.

To start the client:
- `npm install`
- `npm start` or `ng serve` 

The json server will run at `port 3000` and the url to access is `http://localhost:3000/posts`.
To run the json server:
- `npm run json-run`

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## File Structure
Within the download you'll find the following directories and files:

```
├── TCIT_crud_roma/
|   ├── src/
|   |   ├── app/
|   |   |   ├── pages/
|   |   |   |  ├── home/
|   |   |   ├── posts/
|   |   |   |  ├── posts.routing.module.ts
|   |   |   |  └── posts.module.ts
|   |   |   ├── shared/
|   |   |   |  ├── store/
|   |   |   |  |  ├── app.action.spec.ts
|   |   |   |  |  ├── app.action.ts
|   |   |   |  |  ├── app.reducer.ts
|   |   |   |  |  ├── app.selector.ts
|   |   |   |  |  └── appstate.ts
|   |   |   ├── store/
|   |   |   |  ├── actions/
|   |   |   |  |  └── post.actions.ts
|   |   |   |  ├── effects/
|   |   |   |  |  └── post.effects.ts
|   |   |   |  ├── models/
|   |   |   |  |  └── post.models.ts
|   |   |   |  ├── reducers/
|   |   |   |  |  └── post.reducers.ts
|   |   |   |  ├── selectors/
|   |   |   |  |  └── post.selectors.ts
|   |   |   |  ├── services/
|   |   |   |  |  └── post.service.ts
|   |   |   |  ├── state/
|   |   |   |  |  └── app.state.ts
|   |   |   |  └── post.state.ts
|   |   |   ├── app-routing.module.ts
|   |   |   ├── app.component.html
|   |   |   ├── app.component.scss
|   |   |   ├── app.component.ts
|   |   |   ├── app.module.ts
|   |   |   └── app.routing.ts
|   |   ├── assets/
|   |   |   └──  fonts/
|   |   └── index.html
├── db.json
└── README.md
```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:


| Chrome | Firefox | Edge | Opera |
| --- | --- | --- | --- |

## Licensing

Licensed under MIT

##### Social Media
#
Web Page: <http://romaef.wordpress.com>

Twitter: <https://twitter.com/romaestradaflo>
# Walcron microfrontend shared modules

A shared library used within the eco-system of Walcron. All components can be reused and running examples can be referred in storybook. Components are fully tested but maybe restricted.

---

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=yoonghan_walcron-microfrontend-shared&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=yoonghan_walcron-microfrontend-shared)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=yoonghan_walcron-microfrontend-shared&metric=bugs)](https://sonarcloud.io/summary/new_code?id=yoonghan_walcron-microfrontend-shared)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=yoonghan_walcron-microfrontend-shared&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=yoonghan_walcron-microfrontend-shared)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=yoonghan_walcron-microfrontend-shared&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=yoonghan_walcron-microfrontend-shared)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=yoonghan_walcron-microfrontend-shared&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=yoonghan_walcron-microfrontend-shared)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=yoonghan_walcron-microfrontend-shared&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=yoonghan_walcron-microfrontend-shared)

## Getting started

Clone the codes and refer examples by running storybook.

## Development commands

Firstly clone from the repository and download the necessary dependencies.

`npm install`

To execute the program for development

`npm run dev`

To execute the program for storybook

`npm run storybook`

To run tests

`npm run test`

## Breaking changes

10 to 11: /dist/style.css has been renamed as /dist/index.css

## Publishing commands

_NOTE_: Remember to expose all files into index.ts and add into integration test before publishing.

1. Update versioning 'patch'|'minor'|'major'. Please bump before opening Pull Request.

`npm version <release>`

2. To build and publish, this is built into Gitlab CI/CD integration with allow/continue on failure.

`npm publish`

## Github PAT permission required

1. For auto publishing, please allow Profile -> Settings -> Personal Access Token (classic), open read:packages, write:packages, delete:packages. For more info refer: https://docs.github.com/en/packages/working-with-a-github-packages-registry

2. Login with

`npm login --scope=@yoonghan --auth-type=legacy --registry=https://npm.pkg.github.com/`

## Usages

1. Files are exported in main index.ts for components, utils. Please add check into integration.test.tsx.
2. Components are imported via import { Accordion } from "@yoonghan/walcron-microfrontend-shared".
3. Css files are required to be imported seperately, @yoonghan/walcron-microfrontend-shared/dist/style.css.

[build-badge]: https://img.shields.io/github/actions/workflow/status/yoonghan/walcron-microfrontend-shared/pull-request.yml
[build]: https://github.com/yoonghan/walcron-microfrontend-shared/actions?query=workflow
[coverage-badge]: https://img.shields.io/codecov/c/github/yoonghan/walcron-microfrontend-shared.svg?style=flat-square
[coverage]: https://codecov.io/gh/yoonghan/walcron-microfrontend-shared

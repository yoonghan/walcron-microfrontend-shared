# Walcron microfrontend shared modules

A shared library used within the eco-system of Walcron. All components can be reused and running examples can be referred in storybook. Components are fully tested but maybe restricted.

---

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]

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

## Publishing commands

_NOTE_: Remember to expose all files into index.ts and add into integration test before publishing.

1. Build before publishing and check in dist/

`npm build`

2. Update versioning 'patch'|'minor'|'major'. Please bump before opening Pull Request.

`npm version <release>`

To build and publish, this is built into Gitlab CI/CD integration with allow/continue on failure.

`npm publish`

## Github PAT permission required

1. For auto publishing, please allow Profile -> Settings -> Personal Access Token (classic), open read:packages, write:packages, delete:packages. For more info refer: https://docs.github.com/en/packages/working-with-a-github-packages-registry

2. Login with

`npm login --scope=@yoonghan --auth-type=legacy --registry=https://npm.pkg.github.com/`

[build-badge]: https://img.shields.io/github/actions/workflow/status/yoonghan/walcron-microfrontend-shared/pull-request.yml
[build]: https://github.com/yoonghan/walcron-microfrontend-shared/actions?query=workflow
[coverage-badge]: https://img.shields.io/codecov/c/github/yoonghan/walcron-microfrontend-shared.svg?style=flat-square
[coverage]: https://codecov.io/gh/yoonghan/walcron-microfrontend-shared

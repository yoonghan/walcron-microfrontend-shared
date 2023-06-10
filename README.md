# Walcron microfrontend shared modules

A shared library used within the eco-system of Walcron. All components can be reused and running examples can be referred in storybook. Components are fully tested but maybe restricted.

---

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]

## Getting started

Use it, for reference refer to stories for example, or clone it and run it via storybook.

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

To build and publish

`npm publish`

To update versioning 'patch'|'minor'|'major'.

`npm version <release>`

[build-badge]: https://img.shields.io/github/actions/workflow/status/yoonghan/walcron-microfrontend-shared/pull-request.yml
[build]: https://github.com/yoonghan/walcron-microfrontend-shared/actions?query=workflow%3Avalidator
[coverage-badge]: https://img.shields.io/codecov/c/github/yoonghan/walcron-microfrontend-shared.svg?style=flat-square
[coverage]: https://codecov.io/gh/yoonghan/walcron-microfrontend-shared

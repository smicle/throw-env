# throw-env
[![npm version](https://badge.fury.io/js/throw-env.svg)](https://badge.fury.io/js/throw-env)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ae2b3bf4115a43bfb34e0041d22b7cd9)](https://www.codacy.com/manual/smicle/throw-env?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=smicle/throw-env&amp;utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/35bd659d-b4f4-4e70-896a-8f6093b85206)](https://codebeat.co/projects/github-com-smicle-throw-env-master)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Intro
Throw if environment variable cannot be taken.

## Installation
```sh
npm install throw-env
```

## Usage
```js
const throwEnv = require('throw-env').default

const token = throwEnv('ACCESS_TOKEN')
```

```ts
import throwEnv from 'throw-env'

const token: string = throwEnv('ACCESS_TOKEN')
```

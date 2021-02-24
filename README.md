gharchive
=========

Tool to grab GithubArchive packages and process them

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gharchive.svg)](https://npmjs.org/package/gharchive)
[![Downloads/week](https://img.shields.io/npm/dw/gharchive.svg)](https://npmjs.org/package/gharchive)
[![License](https://img.shields.io/npm/l/gharchive.svg)](https://github.com/OGoodness/gharchive/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gharchive
$ gha COMMAND
running command...
$ gha (-v|--version|version)
gharchive/1.0.0 linux-x64 node-v10.19.0
$ gha --help [COMMAND]
USAGE
  $ gha COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gha get [FILE]`](#gha-get-file)
* [`gha help [COMMAND]`](#gha-help-command)

## `gha get [FILE]`

describe the command here

```
USAGE
  $ gha get [FILE]

OPTIONS
  -d, --date=date              Start date/datetime of what you want to download
  -e, --endDate=endDate        End date/datetime of what you want to download
  -h, --help                   show CLI help
  -o, --outputFile=outputFile  File to write the output to

EXAMPLE
  $ gha get
  get world from ./src/hello.ts!
```

_See code: [src/commands/get.ts](https://github.com/OGoodness/gharchive/blob/v1.0.0/src/commands/get.ts)_

## `gha help [COMMAND]`

display help for gha

```
USAGE
  $ gha help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->

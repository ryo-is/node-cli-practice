#!/usr/bin/env node

import index from '../src/index'
import cac from 'cac'

const cli = cac()

cli.command('hello [name]', 'Enter your name').action(() => {
  index()
})

cli.help()
cli.parse()

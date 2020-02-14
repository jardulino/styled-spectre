import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from '../src'

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)

const req = require.context('.', true, /\.js$/)

const loadStories = () => {
  req.keys().forEach(req)
}

configure(loadStories, module)

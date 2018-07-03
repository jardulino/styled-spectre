import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Button from '../src/Button'

storiesOf('Button', module)
  .add(
    'Button component',
    withInfo({
      inline: true,
      text: 'Use the <Button /> component to render a primitive button.'
    })(() => <Button>Button</Button>)
  )
  .add('Primary', () => <Button primary> Button primary</Button>)
  .add('Link', () => <Button link>Button link</Button>)

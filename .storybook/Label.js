import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Label from '../src/Label'

storiesOf('Label', module)
  .add(
    'Label component',
    withInfo({
      inline: true,
      text: 'Use the <Label /> component to render a primitive label.'
    })(() => <Label>Label</Label>)
  )
  .add('Primary', () => <Label primary>Label primary</Label>)
  .add('Secondary', () => <Label secondary>Label secondary</Label>)

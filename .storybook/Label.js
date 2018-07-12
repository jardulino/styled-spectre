import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Label from '../src/Label'

storiesOf('Label', module)
  .add(
    'Default',
    withInfo({
      inline: true,
      text: 'Use the <Label /> component to render a primitive label.'
    })(() => <Label>Label</Label>)
  )
  .add('Rounded', () => <Label rounded>Label rounded</Label>)
  .add('Primary', () => <Label primary>Label primary</Label>)
  .add('Secondary', () => <Label secondary>Label secondary</Label>)
  .add('Success', () => <Label success>Label success</Label>)
  .add('Warning', () => <Label warning>Label warning</Label>)
  .add('Error', () => <Label error>Label error</Label>)

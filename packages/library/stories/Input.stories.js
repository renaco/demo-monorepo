import React from 'react';

import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input
}

const Template = (args) => <Input {...args}/>

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  placeholder: 'Enter your user / email'
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  placeholder: 'Enter your password'
}

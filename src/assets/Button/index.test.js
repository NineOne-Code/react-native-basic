import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native'
import Button from './index'

it('giving color', () => {
    // let ButtonData = renderer.create(<Button Color="#f54242">Halo</Button>).getInstance()
    let ButtonData = render(<Button Color="#f54242">Halo</Button>)
  expect(ButtonData);
  });
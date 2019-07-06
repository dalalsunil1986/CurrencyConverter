import React from 'react';
import { StatusBar, Text } from 'react-native';
import { Logo } from '../components/Logo';

import { Container } from '../components/Container';

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
  </Container>
);
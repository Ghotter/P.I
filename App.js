import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Chats from './components/chats';


export default function App() {
  return (
    <NavigationContainer>
        <Chats />
    </NavigationContainer>
  );
}
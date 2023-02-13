import React from 'react';
import { IServices } from './services/initiate';

export const DirectionContext = React.createContext<string>('ltr');
export const ServicesContext = React.createContext<IServices | undefined>(undefined);

import React from 'react';
import CaddiePage from './CaddiePage';


export const BetaPage = props => <CaddiePage {...props} version="beta"/>
export const PatchPageV10_4 = props => <CaddiePage {...props} version="10.4"/>
export const PatchPageV10_5 = props => <CaddiePage {...props} version="10.5"/>
export const HomePage = props => <CaddiePage {...props} version="10.5"/>

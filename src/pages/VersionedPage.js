import React from 'react';
import CaddiePage from './CaddiePage';
import {patch_version} from '../utils/constants';


export const HomePage = props => <CaddiePage {...props} version={patch_version}/>
export const BetaPage = props => <CaddiePage {...props} version="beta"/>
export const PatchPageV10_4 = props => <CaddiePage {...props} version="10.4"/>
export const PatchPageV10_5 = props => <CaddiePage {...props} version="10.5"/>
export const PatchPageV10_6 = props => <CaddiePage {...props} version="10.6"/>

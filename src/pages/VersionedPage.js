import React from 'react';
import CaddiePage from './CaddiePage';
import {patch_version} from '../utils/constants';


export const HomePage = props => <CaddiePage {...props} version={patch_version}/>
export const BetaPage = props => <CaddiePage {...props} version="beta"/>

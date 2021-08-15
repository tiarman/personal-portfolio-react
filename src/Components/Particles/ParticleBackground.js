import React from 'react';
import Particles from 'react-particles-js';
import ParticlesConfig from './Config/particle-config';

export default function ParticlesBackgrounds() {
    return(
        <Particles params={ParticlesConfig}>
        </Particles>
    )
}

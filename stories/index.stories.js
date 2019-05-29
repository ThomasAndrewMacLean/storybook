import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Leaflet from '../src/leaflet/Leaflet';
import Countdown from '../src/countdown/countdown';

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ));

storiesOf('Leaflet', module).add('basic map', () => (
    <Leaflet
        markerPosition={{ lat: 51.062935, lon: 3.6823739 }}
        name="thomas"
    />
));

storiesOf('Countdown', module).add('Countdown', () => (
    <Countdown
        timeTillDate="05 28 2019, 11:10 pm"
        timeFormat="MM DD YYYY, h:mm a"
    />
));

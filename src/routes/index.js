import About from './about/About';

export default [
    {
        indexRoute: true,
        component: About,
    },
    require('./home/'),
    require('./about/')
];

import About from './about/About';

export default [
    {
        indexRoute: true,
        component: About,
    },
    require('./home/routes'),
    require('./about/routes')
];

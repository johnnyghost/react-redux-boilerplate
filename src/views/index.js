import Activity from './activity/Activity';

export default [
  {
    indexRoute: true,
    component: Activity
  },
  require('./activity/'),
  require('./weight/'),
  require('./sleep/')
];

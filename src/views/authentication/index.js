module.exports = {
  path: 'auth',
  onEnter: (next, transition) => {
    transition({
      pathname: '/'
    });
  }
};

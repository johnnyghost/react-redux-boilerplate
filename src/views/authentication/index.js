module.exports = {
  path: 'auth',
  onEnter: (next, transition) => {
    console.warn(next);
    console.warn(transition);
    transition({
      pathname: '/'
    });
  }
};

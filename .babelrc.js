const {
  NODE_ENV,
  BABEL_ENV
} = process.env;
const cjs = NODE_ENV === 'test' || BABEL_ENV === 'commonjs';
const loose = true;

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-transform-typescript', {
      allowNamespaces: true
    }],
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/transform-react-jsx',
    cjs && ['@babel/transform-modules-commonjs', {
      loose
    }],
    ['@babel/transform-runtime', {
      useESModules: !cjs
    }],
  ].filter(Boolean),
};

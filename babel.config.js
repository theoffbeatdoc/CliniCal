module.exports = {
    presets: [
      // keeping `modules: false` so we preserve ES modules (works well for modern bundlers)
      ['@babel/preset-env', { modules: false }],
      // using automatic JSX runtime to avoid needing `import React` in every file
      ['@babel/preset-react', { runtime: 'automatic' }]
    ],
  };
  
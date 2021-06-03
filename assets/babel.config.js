// module.exports = {
//     presets: [['@babel/preset-env', {targets: {node: 'current'}}],
//     '@babel/preset-typescript',
//     '@babel/preset-react'],
    
//   };

// module.exports = {
//   presets: ['@babel/preset-env', '@babel/preset-react', ],
// };

// module.exports = function (api) {
//   api.cache(true);

//   const presets = [ '@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript' ];
//   //const plugins = [ ... ];

//   return {
//     presets,
//     //plugins
//   };
// }

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
};
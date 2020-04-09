const path = require('path');

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
	path: path.resolve(__dirname, 'es'),
	filename: 'entry.js',
	libraryExport: 'default',
	libraryTarget: 'umd'
  },
  module: {
	rules: [
	  {
		test: /\.jsx?$/,
		exclude: /(node_modules)/,
		use:{
		  loader: 'babel-loader',
		  options: {
		    babelrc: false,
			presets: [
				require.resolve('@babel/preset-react'),
				[require.resolve('@babel/preset-env'), { modules: false }]
			],
			cacheDirectory: true,
		  }
		}
	  },
	  {
		test: /\.css$/,
		use: ['style-loader', 'css-loader'],
	  }
	],
  }
};

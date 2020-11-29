const path = require('path');

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				oneOf: [
					{
						test: /\.tsx?$/,
						use: 'ts-loader',
						include: [path.resolve(__dirname, 'src')],
					},
					{
						loader: require.resolve('file-loader'),
						exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
						options: {
							name: 'media/[name].[hash:8].[ext]',
						},
					},
				],
			},
		],
	},
	devtool: 'source-map',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		port: 9000,
	},
};

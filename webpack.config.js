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
						exclude: /node_modules/,
					},
					{
						loader: require.resolve('file-loader'),
						exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
						options: {
							name: 'public/media/[name].[hash:8].[ext]',
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	mode: 'development',
	watch: true,
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		compress: true,
		port: 9000,
	},
};

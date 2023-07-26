import webpack from 'webpack';

export const buildWebpackLoaders = (): webpack.ModuleOptions => {
	return {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	};
};

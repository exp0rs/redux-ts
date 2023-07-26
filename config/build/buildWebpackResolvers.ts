import webpack from 'webpack';

export const buildWebpackResolvers = (): webpack.ResolveOptions => {
	return {
		extensions: ['.tsx', '.ts', '.js'],
	};
};

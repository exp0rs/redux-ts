import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { webpackConfigOptions } from './types/buildWebpack';

export const buildWebpackPlugins = (
	options: webpackConfigOptions
): webpack.WebpackPluginInstance[] => {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: options.paths.htmlTemplate,
		}),
	];
};

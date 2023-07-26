type buildType = 'production' | 'development';

export interface envBuild {
	mode: buildType;
	port: number;
}
export interface webpackConfigOptions {
	paths: {
		entry: string;
		output: string;
		htmlTemplate: string;
	};
	isDev: boolean;
	port: number;
	mode: buildType;
}

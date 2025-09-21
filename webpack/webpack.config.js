const path = require('path');

const buildResolvers = require('./buildResolvers');
const buildPlugins = require('./buildPlugins');
const buildRules = require('./buildRules');

module.exports = (env) => {
    const options = {
        isDev: env.NODE_ENV === 'dev',
        paths: {
            entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
            output: path.resolve(__dirname, '..', 'build'),
            html: path.resolve(__dirname, '..', 'src', 'index.html'),
            dotenv: path.resolve(__dirname, `.env.${env.NODE_ENV}`),
        }
    }

    return {
        mode: options.isDev ? 'development': 'production',
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: 'bundle.js',
            clean: true
        },
        resolve: buildResolvers(),
        module: {
            rules: buildRules()
        },
        plugins: buildPlugins(options),
        devServer: {
            port: 3000,
            hot: true,
            liveReload: true,
            // open: true,
            // watchFiles: ['src/**/*'],
        },
    };
}
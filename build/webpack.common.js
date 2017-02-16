/**
 * Created by nanren on 2017/2/15.
 */

/*
 * Webpack Constants
 */
const webpack = require('webpack');
const cssnano = require('cssnano');
const utils = require('./utils');
const METADATA = require('../environments/common.json');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {
    /*
     * static metadata for index.html
     *
     * See: (custom attribute)
     * */
    metadata: METADATA,

    context: utils.root('src'),
    /*
     * The entry point for bundle
     *
     * See: https://webpack.js.org/configuration/entry-context/
     */
    entry:{

        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'main':'./src/main.brower.ts'

    },
    /*
     * Options affecting the normal modules
     *
     * See: https://webpack.js.org/configuration/module/
     */
    module:{

        rules:[
            {
                test:/.css$/,
                loader:'css-loader'
            },
            {

            }
        ]
    }
};
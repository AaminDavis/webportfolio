const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  devtool: 'source-map',
  plugins: [
   new  PrerenderSPAPlugin(
      path.join(__dirname, 'dist'),
      ['/', '/home', '/work', '/contact'],
    )
  ],
  module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
        },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            options: {
                includePaths: ["absolute/path/a", "absolute/path/b"]
            }
        }]
    },
    ],
  },
};

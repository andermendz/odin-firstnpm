const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title: 'Webpack tutorial',
      filename: 'index.html',
      inject: 'body',
      scriptLoading: 'defer',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: "asset/resource",
      },
      {

        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: 'asset/resource',

      },
  
    ],
  },
};

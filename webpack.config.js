const HtmlWebpackPlugin = require("html-webpack-plugin");
 const path = require('path');

 module.exports = {
  mode: 'development',
   
  entry: {

    index: './src/index.js',

    print: './src/print.js',

  },
  
   output: {

    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title: 'Development',
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

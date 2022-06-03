const path = require("path");
module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "app/public"),
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    open: true,
    port: 4000,
    hot: true,
    contentBase: path.resolve(__dirname, "app/public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node-modules/,
      },

      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jpg|png|gif|svg$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 90000,
          },
        },
      },
    ],
  },
};

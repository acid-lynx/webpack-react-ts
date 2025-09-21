function buildRules() {
  return [
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.(s[ac]ss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      generator: {
        filename: 'images/[name].[hash][ext]', // Organized + cache-friendly
      },
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'images/[name].[hash][ext]',
      },
    },
  ]
}

module.exports = buildRules

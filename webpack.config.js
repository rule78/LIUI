module.exports = {
    entry: './components/index.js', // 这个是组件的总的入口文件，在这个文件里会把所有组件导出
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)?$/,
          loader: require.resolve('babel-loader'),
          query: {
            cacheDirectory: true,
            plugins: [['import', { libraryName: 'antd', style: 'css' }]],
          },
        },
        {
          test: /\.(css|less)?$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
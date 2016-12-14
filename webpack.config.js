module.exports = {
    entry: "./scripts/index.tsx",
    output:{
        filename: "./bundle.js"
    },
    module: {
        loaders: [
          { test: /\.ts$/, loader: "ts-loader" },
          { test: /\.tsx$/, loader: "ts-loader" }
        ],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}
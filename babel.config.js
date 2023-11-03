module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
  };
};


// plugins: [["nativewind/babel", { mode: "compileOnly" }]]

// plugins: [["nativewind/babel", { mode: "transformOnly" }]]
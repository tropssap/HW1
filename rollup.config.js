import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: { file: "bundle.js" },
  plugins: [typescript() /* Other plugins */],
};

import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

export default  {
    input: 'src/index.ts', // 源文件入口
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            compact: true,

        }, {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            compact: true,
        }, {
            file: 'dist/index.umd.js',
            name: 'optional2js',
            format: 'umd',
            compact: true,
        }
    ],
    plugins: [typescript(), terser()]
}
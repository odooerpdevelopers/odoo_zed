/** @type {import('prettier').Config} */

const config = {
    // https://github.com/prettier/prettier/issues/15388#issuecomment-1717746872
    plugins: [require.resolve("@prettier/plugin-xml")],
    tabWidth: 2, // por defecto OCA usa 2 espacios
    bracketSpacing: false,
    printWidth: 88,
    proseWrap: "always",
    semi: true,
    trailingComma: "es5",
    xmlWhitespaceSensitivity: "preserve",
};

module.exports = config;

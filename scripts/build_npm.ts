import { build, emptyDir } from "https://deno.land/x/dnt@0.25.2/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    // package.json properties
    name: "panic-fn",
    author: "glebbash <glebbash@gmail.com>",
    version: "0.0.0",
    description: "Functional way of throwing errors in JS/TS",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/glebbash/panic-fn.git",
    },
    bugs: {
      url: "https://github.com/glebbash/panic-fn/issues",
    },
    homepage: "https://github.com/glebbash/panic-fn#readme",
    devDependencies: {
      "semantic-release": "^19.0.2",
      "typedoc": "0.22.17",
    },
    release: {
      branches: ["main"],
    },
  },
});

// post build steps

const additionalNpmIgnoreFiles = ["docs/", "tsconfig.json"].join("\n");
const typeDocTSConfig = { compilerOptions: { module: "NodeNext" } };

await Deno.copyFile("LICENSE", "npm/LICENSE");
await Deno.copyFile("README.md", "npm/README.md");
await Deno.writeTextFile("npm/tsconfig.json", JSON.stringify(typeDocTSConfig));
await Deno.writeTextFile("npm/.npmignore", additionalNpmIgnoreFiles, {
  append: true,
});

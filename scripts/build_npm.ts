import { build, emptyDir } from "https://deno.land/x/dnt@0.25.2/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    // package.json properties
    name: "panic-fn",
    version: "0.0.0-development",
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
      "typedoc": "0.22.17"
    }
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");


      var require = await (async () => {
        var { createRequire } = await import("node:module");
        return createRequire(import.meta.url);
      })();
    
import {
  wrapTracer
} from "../../esm-chunks/chunk-5QSXBV7L.js";
import {
  init_esm,
  trace
} from "../../esm-chunks/chunk-GNGHTHMQ.js";
import {
  require_out
} from "../../esm-chunks/chunk-FHR56UHE.js";
import {
  __toESM
} from "../../esm-chunks/chunk-OEQOKJGE.js";

// src/build/functions/server.ts
init_esm();
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { join as posixJoin } from "node:path/posix";
var import_fast_glob = __toESM(require_out(), 1);
import {
  copyNextDependencies,
  copyNextServerCode,
  verifyHandlerDirStructure
} from "../content/server.js";
import { SERVER_HANDLER_NAME } from "../plugin-context.js";
var tracer = wrapTracer(trace.getTracer("Next runtime"));
var copyHandlerDependencies = async (ctx) => {
  await tracer.withActiveSpan("copyHandlerDependencies", async (span) => {
    const promises = [];
    const { included_files: includedFiles = [] } = ctx.netlifyConfig.functions?.["*"] || {};
    includedFiles.push(
      posixJoin(ctx.relativeAppDir, ".env"),
      posixJoin(ctx.relativeAppDir, ".env.production"),
      posixJoin(ctx.relativeAppDir, ".env.local"),
      posixJoin(ctx.relativeAppDir, ".env.production.local")
    );
    span.setAttribute("next.includedFiles", includedFiles.join(","));
    const resolvedFiles = await Promise.all(
      includedFiles.map((globPattern) => (0, import_fast_glob.glob)(globPattern, { cwd: process.cwd() }))
    );
    for (const filePath of resolvedFiles.flat()) {
      promises.push(
        cp(
          join(process.cwd(), filePath),
          // the serverHandlerDir is aware of the dist dir.
          // The distDir must not be the package path therefore we need to rely on the
          // serverHandlerDir instead of the serverHandlerRootDir
          // therefore we need to remove the package path from the filePath
          join(ctx.serverHandlerDir, relative(ctx.relativeAppDir, filePath)),
          {
            recursive: true,
            force: true
          }
        )
      );
    }
    promises.push(
      writeFile(
        join(ctx.serverHandlerRuntimeModulesDir, "package.json"),
        JSON.stringify({ type: "module" })
      )
    );
    const fileList = await (0, import_fast_glob.glob)("dist/**/*", { cwd: ctx.pluginDir });
    for (const filePath of fileList) {
      promises.push(
        cp(join(ctx.pluginDir, filePath), join(ctx.serverHandlerRuntimeModulesDir, filePath), {
          recursive: true,
          force: true
        })
      );
    }
    await Promise.all(promises);
  });
};
var writeHandlerManifest = async (ctx) => {
  await writeFile(
    join(ctx.serverHandlerRootDir, `${SERVER_HANDLER_NAME}.json`),
    JSON.stringify({
      config: {
        name: "Next.js Server Handler",
        generator: `${ctx.pluginName}@${ctx.pluginVersion}`,
        nodeBundler: "none",
        // the folders can vary in monorepos based on the folder structure of the user so we have to glob all
        includedFiles: ["**"],
        includedFilesBasePath: ctx.serverHandlerRootDir
      },
      version: 1
    }),
    "utf-8"
  );
};
var applyTemplateVariables = (template, variables) => {
  return Object.entries(variables).reduce((acc, [key, value]) => {
    return acc.replaceAll(key, value);
  }, template);
};
var getHandlerFile = async (ctx) => {
  const templatesDir = join(ctx.pluginDir, "dist/build/templates");
  const templateVariables = {
    "{{useRegionalBlobs}}": ctx.useRegionalBlobs.toString()
  };
  if (ctx.relativeAppDir.length !== 0) {
    const template = await readFile(join(templatesDir, "handler-monorepo.tmpl.js"), "utf-8");
    templateVariables["{{cwd}}"] = posixJoin(ctx.lambdaWorkingDirectory);
    templateVariables["{{nextServerHandler}}"] = posixJoin(ctx.nextServerHandler);
    return applyTemplateVariables(template, templateVariables);
  }
  return applyTemplateVariables(
    await readFile(join(templatesDir, "handler.tmpl.js"), "utf-8"),
    templateVariables
  );
};
var writeHandlerFile = async (ctx) => {
  const handler = await getHandlerFile(ctx);
  await writeFile(join(ctx.serverHandlerRootDir, `${SERVER_HANDLER_NAME}.mjs`), handler);
};
var clearStaleServerHandlers = async (ctx) => {
  await rm(ctx.serverFunctionsDir, { recursive: true, force: true });
};
var createServerHandler = async (ctx) => {
  await tracer.withActiveSpan("createServerHandler", async () => {
    await mkdir(join(ctx.serverHandlerRuntimeModulesDir), { recursive: true });
    await copyNextServerCode(ctx);
    await copyNextDependencies(ctx);
    await copyHandlerDependencies(ctx);
    await writeHandlerManifest(ctx);
    await writeHandlerFile(ctx);
    await verifyHandlerDirStructure(ctx);
  });
};
export {
  clearStaleServerHandlers,
  createServerHandler
};

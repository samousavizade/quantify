
      var require = await (async () => {
        var { createRequire } = await import("node:module");
        return createRequire(import.meta.url);
      })();
    
import {
  __require
} from "../esm-chunks/chunk-OEQOKJGE.js";

// src/build/advanced-api-routes.ts
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
var ApiRouteType = /* @__PURE__ */ ((ApiRouteType2) => {
  ApiRouteType2["SCHEDULED"] = "experimental-scheduled";
  ApiRouteType2["BACKGROUND"] = "experimental-background";
  return ApiRouteType2;
})(ApiRouteType || {});
async function getAPIRoutesConfigs(ctx) {
  const functionsConfigManifestPath = join(
    ctx.publishDir,
    "server",
    "functions-config-manifest.json"
  );
  if (!existsSync(functionsConfigManifestPath)) {
    return [];
  }
  const functionsConfigManifest = JSON.parse(
    await readFile(functionsConfigManifestPath, "utf-8")
  );
  const appDir = ctx.resolveFromSiteDir(".");
  const pagesDir = join(appDir, "pages");
  const srcPagesDir = join(appDir, "src", "pages");
  const { pageExtensions } = ctx.requiredServerFiles.config;
  return Promise.all(
    Object.keys(functionsConfigManifest.functions).map(async (apiRoute) => {
      const filePath = getSourceFileForPage(apiRoute, [pagesDir, srcPagesDir], pageExtensions);
      const sharedFields = {
        apiRoute,
        filePath,
        config: {}
      };
      if (filePath) {
        const config = await extractConfigFromFile(filePath, appDir);
        return {
          ...sharedFields,
          config
        };
      }
      return sharedFields;
    })
  );
}
var SOURCE_FILE_EXTENSIONS = ["js", "jsx", "ts", "tsx"];
var getSourceFileForPage = (page, roots, pageExtensions = SOURCE_FILE_EXTENSIONS) => {
  for (const root of roots) {
    for (const extension of pageExtensions) {
      const file = join(root, `${page}.${extension}`);
      if (existsSync(file)) {
        return file;
      }
      const fileAtFolderIndex = join(root, page, `index.${extension}`);
      if (existsSync(fileAtFolderIndex)) {
        return fileAtFolderIndex;
      }
    }
  }
};
var findModuleFromBase = ({
  paths,
  candidates
}) => {
  for (const candidate of candidates) {
    try {
      const modulePath = __require.resolve(candidate, { paths });
      if (modulePath) {
        return modulePath;
      }
    } catch {
    }
  }
  for (const candidate of candidates) {
    try {
      const modulePath = __require.resolve(candidate);
      if (modulePath) {
        return modulePath;
      }
    } catch {
    }
  }
  return null;
};
var extractConstValue;
var parseModule;
var extractConfigFromFile = async (apiFilePath, appDir) => {
  if (!apiFilePath || !existsSync(apiFilePath)) {
    return {};
  }
  const extractConstValueModulePath = findModuleFromBase({
    paths: [appDir],
    candidates: ["next/dist/build/analysis/extract-const-value"]
  });
  const parseModulePath = findModuleFromBase({
    paths: [appDir],
    candidates: ["next/dist/build/analysis/parse-module"]
  });
  if (!extractConstValueModulePath || !parseModulePath) {
    return {};
  }
  if (!extractConstValue && extractConstValueModulePath) {
    extractConstValue = __require(extractConstValueModulePath);
  }
  if (!parseModule && parseModulePath) {
    parseModule = __require(parseModulePath).parseModule;
  }
  const { extractExportedConstValue } = extractConstValue;
  const fileContent = await readFile(apiFilePath, "utf8");
  if (!fileContent.includes("config")) {
    return {};
  }
  const ast = await parseModule(apiFilePath, fileContent);
  try {
    return extractExportedConstValue(ast, "config");
  } catch {
    return {};
  }
};
export {
  ApiRouteType,
  getAPIRoutesConfigs
};

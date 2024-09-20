
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

// src/build/content/static.ts
init_esm();
import { existsSync } from "node:fs";
import { cp, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
var import_fast_glob = __toESM(require_out(), 1);
import { encodeBlobKey } from "../../shared/blobkey.js";
import { verifyNetlifyForms } from "../verification.js";
var tracer = wrapTracer(trace.getTracer("Next runtime"));
var copyStaticContent = async (ctx) => {
  return tracer.withActiveSpan("copyStaticContent", async () => {
    const srcDir = join(ctx.publishDir, "server/pages");
    const destDir = ctx.blobDir;
    const paths = await (0, import_fast_glob.default)("**/*.+(html|json)", {
      cwd: srcDir,
      extglob: true
    });
    try {
      await mkdir(destDir, { recursive: true });
      await Promise.all(
        paths.filter((path) => !paths.includes(`${path.slice(0, -5)}.json`)).map(async (path) => {
          const html = await readFile(join(srcDir, path), "utf-8");
          verifyNetlifyForms(ctx, html);
          await writeFile(join(destDir, await encodeBlobKey(path)), html, "utf-8");
        })
      );
    } catch (error) {
      ctx.failBuild("Failed assembling static pages for upload", error);
    }
  });
};
var copyStaticAssets = async (ctx) => {
  return tracer.withActiveSpan("copyStaticAssets", async (span) => {
    try {
      await rm(ctx.staticDir, { recursive: true, force: true });
      const { basePath } = await ctx.getRoutesManifest();
      if (existsSync(ctx.resolveFromSiteDir("public"))) {
        await cp(ctx.resolveFromSiteDir("public"), join(ctx.staticDir, basePath), {
          recursive: true
        });
      }
      if (existsSync(join(ctx.publishDir, "static"))) {
        await cp(join(ctx.publishDir, "static"), join(ctx.staticDir, basePath, "_next/static"), {
          recursive: true
        });
      }
    } catch (error) {
      span.end();
      ctx.failBuild("Failed copying static assets", error);
    }
  });
};
var copyStaticExport = async (ctx) => {
  await tracer.withActiveSpan("copyStaticExport", async () => {
    if (!ctx.exportDetail?.outDirectory) {
      ctx.failBuild("Export directory not found");
    }
    try {
      await rm(ctx.staticDir, { recursive: true, force: true });
      await cp(ctx.exportDetail.outDirectory, ctx.staticDir, { recursive: true });
    } catch (error) {
      ctx.failBuild("Failed copying static export", error);
    }
  });
};
var publishStaticDir = async (ctx) => {
  try {
    await rm(ctx.tempPublishDir, { recursive: true, force: true });
    await mkdir(basename(ctx.tempPublishDir), { recursive: true });
    await rename(ctx.publishDir, ctx.tempPublishDir);
    await rename(ctx.staticDir, ctx.publishDir);
  } catch (error) {
    ctx.failBuild("Failed publishing static content", error instanceof Error ? { error } : {});
  }
};
var unpublishStaticDir = async (ctx) => {
  try {
    if (existsSync(ctx.tempPublishDir)) {
      await rename(ctx.publishDir, ctx.staticDir);
      await rename(ctx.tempPublishDir, ctx.publishDir);
    }
  } catch {
  }
};
export {
  copyStaticAssets,
  copyStaticContent,
  copyStaticExport,
  publishStaticDir,
  unpublishStaticDir
};

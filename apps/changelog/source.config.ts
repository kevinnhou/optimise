import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export default defineConfig({
  mdxOptions: {
    providerImportSource: "@/mdx-components",
  },
});

export const { docs, meta } = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string(),
      tags: z.array(z.string()).optional(),
      version: z.string().optional(),
    }),
  },
});

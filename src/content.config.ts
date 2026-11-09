import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const idSchema = z
  .string()
  .trim()
  .min(1)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const textSchema = z.string().trim().min(1);
const orderSchema = z.number().int().nonnegative();

const evidenceStatusSchema = z.enum([
  "verified-third-party",
  "public-owner-record",
  "archived-document",
  "source-unavailable",
  "current-snapshot-differs",
]);

const evidenceSourceSchema = z
  .object({
    label: textSchema,
    url: z.url().optional(),
    status: evidenceStatusSchema,
    checkedAt: textSchema,
    availability: textSchema,
    supports: z.array(textSchema).min(1),
  })
  .strict();

const projects = defineCollection({
  loader: file("./src/content/projects.json"),
  schema: z
    .object({
      id: idSchema,
      order: orderSchema,
      title: textSchema,
      summary: textSchema,
      category: textSchema,
      status: z.enum(["featured", "draft", "archived", "published"]),
      filters: z
        .array(
          z.enum([
            "filter-featured",
            "filter-software",
            "filter-automation",
            "filter-draft",
            "filter-archived",
          ]),
        )
        .min(1),
      imageSrc: z.string().trim().startsWith("/images/projects/"),
      imageAlt: textSchema,
      repositoryUrl: z.url().optional(),
      productPath: z
        .string()
        .startsWith("/productos/")
        .endsWith("/")
        .optional(),
    })
    .strict()
    .superRefine((project, context) => {
      const statusFilters = {
        featured: "filter-featured",
        draft: "filter-draft",
        archived: "filter-archived",
        published: "filter-software",
      } as const;
      const statusFilter = statusFilters[project.status];

      if (!project.filters.includes(statusFilter)) {
        context.addIssue({
          code: "custom",
          message: `Status ${project.status} requires ${statusFilter}`,
          path: ["filters"],
        });
      }
    }),
});

const labs = defineCollection({
  loader: file("./src/content/labs.json"),
  schema: z
    .object({
      id: idSchema,
      order: orderSchema,
      title: textSchema,
      summary: textSchema,
      status: z.enum(["draft", "in-progress", "published", "archived"]),
      areas: z.array(textSchema).min(1),
      publish: z.boolean(),
    })
    .strict()
    .superRefine((lab, context) => {
      if (lab.publish !== (lab.status === "published")) {
        context.addIssue({
          code: "custom",
          message: "Published labs must use status published and vice versa",
          path: ["publish"],
        });
      }
    }),
});

const competitionAchievementSchema = z
  .object({
    id: idSchema,
    kind: z.literal("competition"),
    year: z.string().regex(/^\d{4}$/),
    title: textSchema,
    organizer: textSchema,
    position: z.literal("Primer lugar"),
    alias: textSchema,
    competitionType: textSchema,
    period: textSchema,
    returnValue: textSchema,
    participants: textSchema,
    prize: textSchema,
    summary: textSchema,
    professionalReading: textSchema,
    discrepancy: textSchema.optional(),
    sources: z.array(evidenceSourceSchema).min(1),
  })
  .strict();

const currentRecordSchema = z
  .object({
    id: idSchema,
    kind: z.literal("current-record"),
    title: textSchema,
    status: textSchema,
    summary: textSchema,
    professionalReading: textSchema,
    methodology: textSchema,
    facts: z
      .array(
        z
          .object({
            label: textSchema,
            value: textSchema,
          })
          .strict(),
      )
      .min(1),
    sources: z.array(evidenceSourceSchema).min(1),
  })
  .strict();

const achievements = defineCollection({
  loader: file("./src/content/achievements.json"),
  schema: z.discriminatedUnion("kind", [
    competitionAchievementSchema,
    currentRecordSchema,
  ]),
});

const posts = defineCollection({
  loader: file("./src/content/posts.json"),
  schema: z
    .object({
      id: idSchema,
      order: orderSchema,
      title: textSchema,
      summary: textSchema,
      status: z.enum(["draft", "published", "archived"]),
      topics: z.array(textSchema).min(1),
      publish: z.boolean(),
      publishedAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict()
    .superRefine((post, context) => {
      if (post.publish !== (post.status === "published")) {
        context.addIssue({
          code: "custom",
          message: "Published posts must use status published and vice versa",
          path: ["publish"],
        });
      }

      if (post.publish && !post.publishedAt) {
        context.addIssue({
          code: "custom",
          message: "Published posts require a publication date",
          path: ["publishedAt"],
        });
      }
    }),
});

const paragraphSchema = z.array(textSchema).min(1);
const localeSchema = z
  .object({
    path: z.string().startsWith("/").endsWith("/"),
    seoTitle: textSchema,
    description: textSchema,
    eyebrow: textSchema,
    headline: textSchema,
    intro: textSchema,
    highlights: paragraphSchema,
    benefitsTitle: textSchema,
    benefits: z
      .array(z.object({ title: textSchema, text: textSchema }).strict())
      .min(1),
    steps: paragraphSchema,
    details: z
      .array(
        z.object({ title: textSchema, paragraphs: paragraphSchema }).strict(),
      )
      .min(1),
    timeframes: z.array(z.tuple([textSchema, textSchema])).length(6),
    installation: paragraphSchema,
    support: textSchema,
    faqs: z
      .array(z.object({ question: textSchema, answer: textSchema }).strict())
      .min(1),
    disclaimer: textSchema,
    closingTitle: textSchema,
    closing: textSchema,
    ui: z
      .object({
        back: textSchema,
        skip: textSchema,
        features: textSchema,
        how: textSchema,
        screenshots: textSchema,
        platforms: textSchema,
        faq: textSchema,
        buy: textSchema,
        separate: textSchema,
        updates: textSchema,
        installation: textSchema,
        support: textSchema,
        limits: textSchema,
        privacy: textSchema,
        terms: textSchema,
        licenses: textSchema,
        enlarge: textSchema,
        close: textSchema,
        zoomIn: textSchema,
        zoomOut: textSchema,
        original: textSchema,
        timeframes: textSchema,
        chart: textSchema,
        sources: textSchema,
        version: textSchema,
        screenshotNote: textSchema,
        overview: textSchema,
        settings: textSchema,
        settingsCaption: textSchema,
        history: textSchema,
      })
      .strict(),
  })
  .strict();
const products = defineCollection({
  loader: file("./src/content/products.json"),
  schema: z
    .object({
      id: idSchema,
      name: textSchema,
      priceCheckedAt: z.iso.date(),
      platforms: z
        .array(
          z
            .object({
              name: z.enum(["MT4", "MT5"]),
              version: textSchema,
              price: z.number().positive(),
              currency: z.literal("USD"),
              url: z.url().startsWith("https://www.mql5.com/"),
            })
            .strict(),
        )
        .length(2),
      locales: z.object({ es: localeSchema, en: localeSchema }).strict(),
    })
    .strict(),
});

export const collections = { projects, labs, achievements, posts, products };

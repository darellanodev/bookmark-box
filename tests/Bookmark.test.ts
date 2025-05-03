import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Bookmark from "../src/components/Bookmark.astro";

test("renders title and link correctly", async () => {
  const container = await AstroContainer.create();

  const result = await container.renderToString(Bookmark, {
    props: {
      bookmark: {
        title: "Astro Docs",
        url: "https://docs.astro.build",
      },
    },
  });

  expect(result).toContain("Astro Docs");
  expect(result).toContain('href="https://docs.astro.build"');
  expect(result).toMatch(/<a[^>]+class="bookmark"/);
});

test("renders the link without the optional title", async () => {
  const container = await AstroContainer.create();

  const result = await container.renderToString(Bookmark, {
    props: {
      bookmark: {
        url: "https://www.example.com",
      },
    },
  });
  expect(result).toContain("https://www.example.com");
});

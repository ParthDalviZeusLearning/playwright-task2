export const mockBooksResponse = {
  books: [
    {
      isbn: "2207",
      title: "Learn Playwright Automation",
      subTitle: "QA Traning Task",
      author: "Parth Dalvi",
      publish_date: "2026-06-011",
      publisher: "Zeus Learning",
      pages: 200,
      description: "Mock Book",
      website: "https://playwright.dev",
    },
  ],
};

export const mockBooksEmptyResponse = {
  books: [],
};

export const mockBooksDelayedResponse = {
  books: [
    {
      isbn: "2208",
      title: "Delayed Book",
      subTitle: "Mocked Delayed Response",
      author: "Parth Dalvi",
      publish_date: "2026-06-011",
      publisher: "Zeus Learning",
      pages: 200,
      description: "Delayed Book",
      website: "https://example.com",
    }
  ]
};

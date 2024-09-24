const todoListResponse = [
  {
    id: 1,
    title:
      "my todo #1",
  },
  {
    id: 2,
    title: "my todo #2", 
  },
];

export default async function mockFetch() {
  return {
    ok: true,
    status: 200,
    json: async () => todoListResponse,
  };
}
export const productApi = {
  getAll: async () => {
    const response = await fetch(import.meta.env.VITE_BACKEND_API + '/products');
    return response.json();
  },
  getById: async (id) => {
    const response = await fetch(import.meta.env.VITE_BACKEND_API + '/products/' + id);
    return response.json();
  },
};

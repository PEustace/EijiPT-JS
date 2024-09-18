// vite.config.js
import { defineConfig, resolveConfig } from "file:///C:/Users/Phill/Documents/W_Dev/OpenAI/EijiPT_JS/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Phill/Documents/W_Dev/OpenAI/EijiPT_JS/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolveConfig("/", "index.html"),
        chatpage: resolveConfig("/", "/chatpage/index.html")
      }
    }
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQaGlsbFxcXFxEb2N1bWVudHNcXFxcV19EZXZcXFxcT3BlbkFJXFxcXEVpamlQVF9KU1xcXFxjbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBoaWxsXFxcXERvY3VtZW50c1xcXFxXX0RldlxcXFxPcGVuQUlcXFxcRWlqaVBUX0pTXFxcXGNsaWVudFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUGhpbGwvRG9jdW1lbnRzL1dfRGV2L09wZW5BSS9FaWppUFRfSlMvY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCByZXNvbHZlQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIG1haW46IHJlc29sdmVDb25maWcoJy8nLCAnaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIGNoYXRwYWdlOiByZXNvbHZlQ29uZmlnKCcvJywgJy9jaGF0cGFnZS9pbmRleC5odG1sJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3JlYWN0KCldLFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9XLFNBQVMsY0FBYyxxQkFBcUI7QUFDaFosT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU0sY0FBYyxLQUFLLFlBQVk7QUFBQSxRQUNyQyxVQUFVLGNBQWMsS0FBSyxzQkFBc0I7QUFBQSxNQUNyRDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQ25CLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
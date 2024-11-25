import { defineConfig } from "vite"

export default defineConfig({
  build: {
    outDir: "out", // 빌드 결과물 경로
    emptyOutDir: true, // 빌드 전에 기존 파일 삭제
  },
})

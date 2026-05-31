import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',


      // ✅ මෙන්න මේ ස්ථානයට devOptions එක් කරන්න
      devOptions: {
        enabled: true, // localhost එකේදීත් service worker එක ක්‍රියාත්මක කිරීමට
        type: 'module' // වැරදි අවම කිරීමට මෙයද එක් කිරීම සුදුසුයි
      },

      workbox: {
        // බාහිර URL (Supabase/ImgBB) කැචේ කිරීමට මෙය එක් කරන්න
        runtimeCaching: [
          {
            urlPattern: ({ url }) => 
              url.origin === 'https://i.ibb.co' || 
              url.origin.includes('supabase.co'),
            handler: 'CacheFirst', // මුලින්ම කැචේ එක පරීක්ෂා කරයි
            options: {
              cacheName: 'symphony-assets-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // දින 30ක් සුරැකේ
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/orcamento',
        destination: 'https://my.forms.app/arqbrunaferri/orcamento',
        permanent: true,
      },
      {
        source: '/contato',
        destination: 'https://api.whatsapp.com/send?phone=5551981909312&text=Ola,%20gostaria%20de%20tirar%20uma%20duvida%20sobre%20seus%20servicos',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

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
        source: '/render',
        destination:
          'https://api.whatsapp.com/send?phone=5551981909312&text=Ola,%20como%20funciona%20o%20seu%20servico%20de%20render?%20',
        permanent: true,
      },
      {
        source: '/contato',
        destination: 'mailto:arqbrunaferri@gmail.com',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ['i.imgur.com', 'images.unsplash.com', 'media.giphy.com', 'images.ctfassets.net'],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/whrrvJ73YA',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/wearenordstudio',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/Nord-Studio',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/wearenordstudio',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UC62FrhOwcYmOPvsq3vt1F8A',
        permanent: true,
      },
      {
        source: '/twitch',
        destination: 'https://www.twitch.tv/wearenord',
        permanent: true,
      },
      {
        source: '/mail',
        destination: 'mailto:hello@nordstud.io',
        permanent: true,
      }
    ]
  }
}
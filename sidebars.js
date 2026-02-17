module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'PPL Lessons',
      items: require('fs')
        .readdirSync('./docs/lessons')
        .filter((file) => file.endsWith('.md'))
        .map((file) => `lessons/${file.replace('.md', '')}`)
    }
  ]
};

module.exports = {
  skipInterpolation: '**/**/*.vue',
  helpers: {
    escape: function(value) {
      return value.replace(/'/g, '&apos;');
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name : nd dashboard'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description :',
      'default': 'My Nuxt.js + Core UI project'
    },
    author: {
      'type': 'string',
      'message': 'Author : 221b LLC'
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
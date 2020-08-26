# Travis McCutcheon

[![Netlify Status](https://api.netlify.com/api/v1/badges/e1f58459-cffc-4f57-85a0-11231e9fcaeb/deploy-status)](https://app.netlify.com/sites/travis-mccutcheon/deploys)

## Steps

### Create Gatsby Default Starter

```sh
gatsby new travis-mccutcheon https://github.com/gatsbyjs/gatsby-starter-default
```

### Connect to travis-mccutcheon repository on GitHub

```sh
git remote add origin https://github.com/earth2travis/travis-mccutcheon.git
git push -u origin master
```

### Add site to Netlify

```sh
gatsby build
```

- Drag and drop public folder into Netlify Sites interface
- Change site name

### Configure travismccutcheon.com domain

- Add domain in Netlify
- Set up Netlify DNS for travismccutcheon.com
- Edit Nameservers with hover

### Enable automatic TLS certificate (HTTPS) in Netlify

You may have to wait on DNS propagation for 24 hours

- Goto Domain management
- Verify DNS configuration
- Provision Let’s Encrypt certificate

### Setup Continuous Deployment

- Link site to a Git repository in Netlify
- Deploy site

### Update Content and Design

- Remove default styles
- Import Google Fonts
- Create a palette with [Coolors](https://coolors.co/generate)
- Add navigation

### Add Styled Components

```sh
npm install --save styled-components
```

## Technologies

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.com/)
- [styled-components](https://styled-components.com/)

## Tools

- [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub](https://github.com/)
- [Netlify](https://netlify.com/)
- [hover](https://www.hover.com/)

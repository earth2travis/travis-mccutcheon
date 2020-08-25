# Travis McCutcheon

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

Drag and drop public folder into Netlify Sites interface

### Configure travismccutcheon.com domain

- Add domain in Netlify
- Set up Netlify DNS for travismccutcheon.com
- Edit Nameservers with hover

### Enable automatic TLS certificate (HTTPS) in Netlify

- Goto Domain management
- Verify DNS configuration
- Provision Let’s Encrypt certificate

## Technologies

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.com/)

## Tools

- [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub](https://github.com/)
- [Netlify](https://netlify.com/)
- [hover](https://www.hover.com/)

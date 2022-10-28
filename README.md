# Homepage of the Artificial Cognitive Systems Lab - Development Guide

This guide provides a comprehensive documentation of the website's architecture and instructions of how to add/adjust the website itself or content therein.

## Infrastructure

### Framework/Language overview

- [**ReactJS:**](https://reactjs.org/) ReactJS is a JavaScript library for building user interfaces. All web components in this website are built using ReactJS.

- [**NextJS:**](https://nextjs.org/) Next.js is a ReactJS framework that provides building blocks to create fast web applications, including *routing, data-fetching, rendering* and *infrastructure*.
    - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
    - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- [**MaterialUI:**](https://mui.com/material-ui/getting-started/overview/) Material UI is an open-source ReactJS component library that implements Google's Material Design. It provides pre-built web components that can be personalized and integrated into the website. 

- [**Typescript:**](https://www.typescriptlang.org/) All Javascript code in this project is written using the Typescript language extension. This is to enable strongly typed programming within Javascript.

- [**MDXJS:**](https://mdxjs.com/) Posts are written using the MDXJS framework. MDX allows the combination of Markdown, HTML and Javascript code within a single file to create richer documents.

### Server and Web 

The website is deployed via an integration of [Netlify](https://www.netlify.com/) and the [Github Repository](https://github.com/artcogsys/artcogsys.github.io) of the project. The website can be reached under the domain [artcogsys.com](https://www.artcogsys.com/). The domain is registered and maintained through [Name.com](https://www.name.com/). The nameservers under Name.com are set to point to the Netlify servers, allowing the website to be served. 

Deployments are run automatically through Netlify's support for the NextJS framework. The deployed state of the website is pulled from the **main** branch of the repository. When a new commit is pushed to the **main** branch, Netlify automatically deploys the updated version.

--> It is recommended that contributors do **not** work directly on the main branch. Instead, please create a feature branch for continuous development until the changes are ready to be released. 

## Getting Started

### Project Structure Overview

    ├── .next                       # compiled content for the development server (generated when running *dev* mode locally)
    ├── components                  # Custom web components
    ├── lib                         # Custom backend functions to fetch and process data
    ├── node_modules                # External Libraries (generated through local installation of the project)
    ├── pages                       # NextJS uses this folder for routing
    │   ├── posts                   # Sub-route under which all posts are gathered (i.e. https://artcogsys.com/posts/intro)
    │   |   └── "...".mdx           # Each file is a post
    │   ├── team                    # Sub-route under which all team member pages are gathered
    │   |   └── [id].tsx            # Tells NextJS what routes to dynamically create and what content to generate for them
    │   ├── _app                    # Defines the NextJS app
    │   ├── _document.tsx           # Customized entrypoint for the web app
    │   └── ...                     # each file represents a page of the website
    ├── people                  
    │   └── ...                     # each member receives their own folder
    │   |   └── "...".md            # Introduction comes here
    │   |   └── "...".png           # image of the member
    │   |   └── publications.json   # generated through Google Scholar scraper
    ├── posts
    |   │   └── ...                 # asset folder for each post
    │   |   └── posts.ts            # holds the meta information for eeach post    
    ├── public                      # assets that need to be globally accessible on the client-side 
    ├── styles                      # CSS style files
    ├── types                       # custom typescript types
    ├── scraper.ipynb               # python notebook to scrape Google Scholar for publications
    ├── ...                         # project settings files
    └── README.md

### Setting up the project locally for development

#### **Prerequisites**

- [NodeJS+NPM:](https://nodejs.org/en/) NodeJS is a JavaScript runtime that is necessary to run JS backend code locally. NodeJS is bundled with the Node Package Manager (NPM). NPM is used to manage third-party library dependencies. Install on your device via the website

- [Git:](https://git-scm.com/) Used for version control. Make sure Git is installed on your device

- GitHub Collaborator rights: In order to contribute to the project, the GitHub account of the member needs to be added as a collaborator to the project.

#### **Local installation**

1. Clone the project to your device. Open a terminal, navigate to the location in which you wish to store the project (`cd path/to/my/location`). Then, in the terminal enter:

```
git clone https://github.com/artcogsys/artcogsys.github.io.git
```

2. Once the cloning process finished, in the terminal, navigate into the project folder (`cd ./artcogsys.github.io`). Then, in the terminal, start initializing the project via: 

```
npm install
```

#### **Running the local development server**

To start the development server, open a terminal in the root folder of the project. Then, in the terminal, enter:

```
npm run dev
```

Open the web browser and navigate to [localhost:3000](http://localhost:3000/) to view the results.

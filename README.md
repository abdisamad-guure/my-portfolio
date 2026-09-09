# Abdisamad Guure — React Portfolio

A frontend-only multi-page portfolio built with React and Vite.

## Pages

- Home
- About
- Skills
- Projects
- Individual project case studies
- Contact with email integration

## Run locally

```bash
npm.cmd run dev
```

Open `http://localhost:5173`.

## Production

```bash
npm.cmd run build
npm.cmd run preview
```

The contact form opens the visitor's email application with the completed message addressed to `gcigale8@gmail.com`. No backend or database is required.

## Deployment

The root `postinstall` script installs the frontend dependencies automatically. `vercel.json` configures Vercel to publish `client/dist` and route React pages through `index.html`.

## CV

The `/cv` page presents the existing portfolio details as a professional profile.
To enable the download button, add the supplied CV as
`client/public/assets/abdisamad-guure-cv.pdf` and rebuild. Until that file is
provided, the page offers a CV request by email. No employment or education
history has been inferred.

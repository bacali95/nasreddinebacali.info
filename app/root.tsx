import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?display=swap&family=Inter:ital,wght@0,300;1,300&family=Fraunces:ital,wght@0,300;0,500;1,300;1,500",
  },
  {
    rel: "stylesheet",
    href: "/styles/index.css",
  },
  {
    rel: "canonical",
    href: "https://nasreddinebacali.info",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Nasreddine Bac Ali</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light only" />
        <meta
          name="description"
          content="I&#039;m Nasreddine Bac Ali, a full-stack software engineer, currently a software engineer at Uber. At least four years of experience in backend, web development. A super nerd who loves competitive programming, Linux and likes to give a hand to anyone who needs help. Interested in developing a better problem-solving method"
        />
        <meta property="og:site_name" content="Nasreddine Bac Ali" />
        <meta property="og:title" content="Nasreddine Bac Ali" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="I&#039;m Nasreddine Bac Ali, a full-stack software engineer, currently a software engineer at Uber. At least four years of experience in backend, web development. A super nerd who loves competitive programming, Linux and likes to give a hand to anyone who needs help. Interested in developing a better problem-solving method"
        />
        <meta
          property="og:image"
          content="https://nasreddinebacali.info/assets/images/card.jpg?v=eb462cc5"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="800" />
        <meta property="og:url" content="https://nasreddinebacali.info" />
        <meta property="twitter:card" content="summary_large_image" />
        <Meta />
        <Links />
      </head>
      <body className="is-loading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 40 40"
          display="none"
          width="0"
          height="0"
        >
          <symbol
            id="icon-c3c8e1063e3b7f84f6b54712741de139"
            viewBox="0 0 40 40"
          >
            <path d="M37.3,15.3v15.3c0,0.8-0.3,1.6-0.9,2.2c-0.6,0.6-1.4,0.9-2.2,0.9H5.8c-0.8,0-1.6-0.3-2.2-0.9s-0.9-1.4-0.9-2.2V15.3 c0.5,0.6,1.2,1.1,2,1.7c4.7,3.1,7.9,5.4,9.6,6.7c0.7,0.5,1.4,0.9,1.8,1.2c0.4,0.3,1,0.6,1.9,0.9c0.7,0.3,1.5,0.5,2.1,0.5l0,0 c0.6,0,1.4-0.2,2.1-0.5c0.7-0.3,1.4-0.6,1.9-0.9c0.4-0.3,1-0.7,1.8-1.2c2.2-1.6,5.4-3.8,9.6-6.7C36.1,16.5,36.7,15.9,37.3,15.3 L37.3,15.3z M37.3,9.6c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.5,1.8-2.4,2.4c-4.9,3.3-7.9,5.4-9,6.2c-0.1,0.1-0.4,0.3-0.8,0.6 c-0.4,0.3-0.7,0.5-1,0.7c-0.3,0.2-0.6,0.4-1,0.6c-0.4,0.2-0.7,0.4-1.1,0.5c-0.4,0.1-0.6,0.2-0.9,0.2l0,0c-0.3,0-0.6-0.1-0.9-0.2 c-0.3-0.1-0.7-0.3-1.1-0.5c-0.4-0.2-0.7-0.4-1-0.6c-0.3-0.2-0.6-0.4-1-0.7c-0.4-0.3-0.7-0.5-0.8-0.6c-1.1-0.8-2.8-2-5.1-3.5 c-2.3-1.6-3.3-2.4-3.7-2.7c-0.8-0.5-1.6-1.2-2.3-2.2s-1-1.9-1-2.6c0-1,0.3-1.9,0.8-2.5c0.5-0.6,1.2-1,2.3-1h28.4 c0.8,0,1.6,0.3,2.2,0.9C37.1,8.1,37.3,8.8,37.3,9.6L37.3,9.6z" />
          </symbol>
          <symbol
            id="icon-8c4b37645de3c276d895d87df51ba614"
            viewBox="0 0 40 40"
          >
            <path d="M36,20.3c0,3.5-1,6.6-3.1,9.4c-2,2.8-4.7,4.7-7.9,5.8c-0.4,0.1-0.6,0-0.8-0.1c-0.2-0.2-0.3-0.4-0.3-0.6v-4.4 c0-1.3-0.4-2.3-1.1-3c0.8-0.1,1.5-0.2,2.1-0.4c0.6-0.2,1.3-0.4,2-0.8c0.7-0.4,1.2-0.8,1.7-1.4c0.5-0.5,0.8-1.3,1.1-2.2 s0.4-2,0.4-3.1c0-1.7-0.5-3.1-1.6-4.3c0.5-1.3,0.5-2.7-0.2-4.2c-0.4-0.1-1,0-1.7,0.2c-0.7,0.3-1.4,0.6-1.9,0.9L24,12.5 c-1.3-0.4-2.6-0.5-4-0.5s-2.7,0.2-4,0.5c-0.2-0.2-0.5-0.3-0.9-0.6c-0.4-0.2-0.9-0.5-1.7-0.8c-0.8-0.3-1.4-0.4-1.8-0.3 c-0.6,1.6-0.7,3-0.1,4.2c-1.1,1.2-1.6,2.6-1.6,4.3c0,1.2,0.1,2.2,0.4,3.1s0.6,1.6,1.1,2.2s1,1,1.7,1.4c0.7,0.4,1.3,0.6,2,0.8 c0.6,0.2,1.3,0.3,2.1,0.4c-0.6,0.5-0.9,1.2-1,2.1c-0.3,0.1-0.6,0.2-0.9,0.3c-0.3,0.1-0.7,0.1-1.2,0.1c-0.5,0-0.9-0.1-1.4-0.4 c-0.5-0.3-0.8-0.7-1.2-1.3c-0.3-0.4-0.6-0.8-1-1.1c-0.4-0.3-0.8-0.4-1-0.5L9,26.5c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.1-0.1,0.2 c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.2l0.1,0.1c0.3,0.1,0.6,0.4,0.9,0.8s0.5,0.7,0.7,1.1l0.2,0.5c0.2,0.5,0.5,1,0.9,1.3 c0.4,0.3,0.9,0.5,1.4,0.6c0.5,0.1,1,0.1,1.4,0.1c0.5,0,0.9,0,1.2-0.1l0.5-0.1c0,0.5,0,1.1,0,1.9c0,0.7,0,1.1,0,1.1 c0,0.2-0.1,0.5-0.3,0.6c-0.2,0.2-0.5,0.2-0.8,0.1c-3.2-1.1-5.8-3-7.9-5.8S4,23.8,4,20.3c0-2.9,0.7-5.6,2.1-8S9.5,7.8,12,6.4 s5.1-2.1,8-2.1s5.6,0.7,8,2.1s4.4,3.4,5.8,5.8S36,17.4,36,20.3L36,20.3z" />
          </symbol>
          <symbol
            id="icon-a1eb5cac0cee3b05a40d856c98ce14a5"
            viewBox="0 0 40 40"
          >
            <path d="M38,20.1c0-9.9-8.1-18-18-18S2,10.1,2,20.1s5.8,15.5,13.7,17.5v-12h-3.7v-5.5h3.7v-2.4c0-6.1,2.8-9,8.8-9s3.1.2,3.9.4v5c-.4,0-1.2,0-2.1,0-3,0-4.1,1.1-4.1,4v1.9h5.9l-1,5.5h-4.9v12.4c8.9-1.1,15.8-8.7,15.8-17.9Z" />
          </symbol>
          <symbol
            id="icon-0c4db87eff374f0f1ef47f8f043f0132"
            viewBox="0 0 40 40"
          >
            <path d="M36.3,10.2c-1,1.3-2.1,2.5-3.4,3.5c0,0.2,0,0.4,0,1c0,1.7-0.2,3.6-0.9,5.3c-0.6,1.7-1.2,3.5-2.4,5.1 c-1.1,1.5-2.3,3.1-3.7,4.3c-1.4,1.2-3.3,2.3-5.3,3c-2.1,0.8-4.2,1.2-6.6,1.2c-3.6,0-7-1-10.2-3c0.4,0,1.1,0.1,1.5,0.1 c3.1,0,5.9-1,8.2-2.9c-1.4,0-2.7-0.4-3.8-1.3c-1.2-1-1.9-2-2.2-3.3c0.4,0.1,1,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-1.4-0.3-2.7-1.1-3.7-2.3s-1.4-2.6-1.4-4.2v-0.1c1,0.6,2,0.9,3,0.9c-1-0.6-1.5-1.3-2.2-2.4c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3,1-3.4 c1.5,2.1,3.6,3.6,6,4.9s4.9,2,7.6,2.1c-0.1-0.6-0.1-1.1-0.1-1.4c0-1.8,0.8-3.5,2-4.7c1.2-1.2,2.9-2,4.7-2c2,0,3.6,0.8,4.8,2.1 c1.4-0.3,2.9-0.9,4.2-1.5c-0.4,1.5-1.4,2.7-2.9,3.6C33.8,11.2,35.1,10.9,36.3,10.2L36.3,10.2z" />
          </symbol>
          <symbol
            id="icon-bf393d6ea48a4e69e1ed58a3563b94a5"
            viewBox="0 0 40 40"
          >
            <path d="M12.1,13.8v19.1H5.7V13.8C5.7,13.8,12.1,13.8,12.1,13.8z M12.5,7.9c0,0.9-0.3,1.7-1,2.4c-0.7,0.6-1.5,0.9-2.6,0.9h0 c-1.1,0-1.9-0.3-2.5-0.9c-0.6-0.6-1-1.4-1-2.4c0-1,0.3-1.7,1-2.4S7.9,4.6,9,4.6s1.9,0.3,2.6,0.9S12.5,6.9,12.5,7.9z M35,22v11h-6.4 V22.7c0-1.4-0.3-2.4-0.8-3.2c-0.5-0.8-1.3-1.1-2.4-1.1c-0.8,0-1.5,0.2-2,0.7c-0.5,0.4-1,1-1.2,1.7c-0.1,0.4-0.2,0.9-0.2,1.6v10.7 h-6.4c0-5.1,0-9.3,0-12.5s0-5.1,0-5.7l0-0.9H22v2.8h0c0.3-0.4,0.5-0.8,0.8-1.1c0.3-0.3,0.6-0.6,1.1-1c0.5-0.4,1-0.6,1.7-0.8 c0.7-0.2,1.4-0.3,2.2-0.3c2.2,0,4,0.7,5.3,2.2C34.4,17,35,19.1,35,22L35,22z" />
          </symbol>
        </svg>
        <div id="wrapper">
          <div id="main">
            <div className="inner">
              <div id="container07" className="container columns">
                <div className="wrapper">
                  <div className="inner">
                    <div>
                      <div
                        id="image01"
                        className="image"
                        data-position="center"
                      >
                        <span className="frame">
                          <img
                            src="/images/image01.jpg?v=eb462cc5"
                            alt="Nasreddine Bac Ali picture"
                          />
                        </span>
                      </div>
                    </div>
                    <div>
                      <h2 id="text03">Full-stack software engineer</h2>
                      <hr id="divider01" />
                      <h1 id="text02">Nasreddine Bac Ali</h1>
                      <p id="text10">
                        Just a regular <em>geek</em> that loves solving problems
                      </p>
                      <ul id="buttons01" className="buttons">
                        <li>
                          <a
                            href="mailto:nasreddine.bacali95@gmail.com"
                            className="button n01"
                          >
                            <svg aria-labelledby="icon-title">
                              <title id="icon-title">Email</title>
                              <use xlinkHref="#icon-c3c8e1063e3b7f84f6b54712741de139"></use>
                            </svg>
                            <span className="label">Get in touch</span>
                          </a>
                        </li>
                      </ul>
                      <ul id="icons01" className="icons">
                        <li>
                          <a className="n01" href="https://github.com/bacali95">
                            <svg aria-labelledby="icon-title">
                              <title id="icon-title">GitHub</title>
                              <use xlinkHref="#icon-8c4b37645de3c276d895d87df51ba614"></use>
                            </svg>
                            <span className="label">GitHub</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="n02"
                            href="https://fb.me/nasreddine.bacali"
                          >
                            <svg aria-labelledby="icon-title">
                              <title id="icon-title">Facebook</title>
                              <use xlinkHref="#icon-a1eb5cac0cee3b05a40d856c98ce14a5"></use>
                            </svg>
                            <span className="label">Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="n03"
                            href="https://www.twitter.com/_bacali"
                          >
                            <svg aria-labelledby="icon-title">
                              <title id="icon-title">Twitter</title>
                              <use xlinkHref="#icon-0c4db87eff374f0f1ef47f8f043f0132"></use>
                            </svg>
                            <span className="label">Twitter</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="n04"
                            href="https://www.linkedin.com/in/bacali"
                          >
                            <svg aria-labelledby="icon-title">
                              <title id="icon-title">LinkedIn</title>
                              <use xlinkHref="#icon-bf393d6ea48a4e69e1ed58a3563b94a5"></use>
                            </svg>
                            <span className="label">LinkedIn</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {children} */}
        <ScrollRestoration />
        <Scripts />
        <script src="/scripts/index.js" type="module"></script>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

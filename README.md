# Text-Similarity API

Text-Similarity API is a [Next.js 13](https://nextjs.org/) project bootstrapped with [`create-next-app@latest`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The goal of this project was to create an API that can compare two pieces of text. Features include a light and dark mode, rate limitation for the created api. A functional table to display past requests that can hide, filter and sort. This application also includes Google authentication with sensitive routes protected.

## Technologies:

- Nextjs 13 - [https://nextjs.org/](https://nextjs.org/)

- TypeScript - [https://www.typescriptlang.org](https://www.typescriptlang.org/docs/)

- Prisma - [https://www.prisma.io/](https://www.prisma.io/docs)

- Tailwind CSS - [https://tailwindcss.com/](https://tailwindcss.com/docs/installation)

- Google Cloud - [https://console.cloud.google.com/](https://console.cloud.google.com/) 

- PlanetScale - [https://planetscale.com/](https://planetscale.com/)

- Openai - [https://platform.openai.com](https://platform.openai.com/docs/introduction)


<br>

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn add
```
Then run the development server:
```bash
npm run dev
# or
yarn dev
```

<br>

## Environmental Variables

Some inormation will be uniqe to the environemnt in which this project is deployed or should not be shared publicly such as port numbers, api keys, etc.

<br>

[Next.js](https://nextjs.org/) uses a file named `.env`

Create the `.env` file in root directory of your project.

I have included a template (`.env.template`) to help you get started.

<br>
Create a project in the Google Cloud Console then navigate to APIs & Services -> Credentials.
Once here configure your OAuth consent screen and then create a OAuth client ID (under create credentials)
Copy the Google ClientID and Google Client Secret into the appropriate fields in the .env file

<br>
Following the Google console setup create a project on [PlanetScale](https://planetscale.com/). Once created click on the connect button, select Prisma in the Connect with field, and copy the DATABASE_URL value into the .env file. Once the environment variables have been input run:

<br>

```bash
npx prisma db push

npx prisma generate

#or

yarn prisma db push

yarn prisma generate
```

<br>
Next, generate your OpenAI key by proceeding to [OpenAI's](https://platform.openai.com/account/api-keys) website, loging in and creating a new secret key. Copy the newly generated key into the .env file.

<br>
Once, you have your OpenAI key create a randomly generated NEXTAUTH_SECRET and then enter http://localhost:3000 into NEXTAUTH_URL.

<br>
Finally, navigate to [upstash.com](https://upstash.com), log in and create a new database. Locate UPSTASH_REDIS_REST_TOKEN under the rest api section. Copy that value and add it to the .env file for REDIS_SECRET. Do the same for UPSTASH_REDIS_REST_URL but add it to the .env file for REDIS_URL. This completes all environment variables. (You may need to restart your server)

<br>
<br>

## Acknowledgments
This project was inspired by Josh's Similarity-API project. If you have any questions check out his YouTube video here: [https://www.youtube.com/watch?v=4lUkSgvmTYM&t=1238s](https://www.youtube.com/watch?v=4lUkSgvmTYM&t=1238s)
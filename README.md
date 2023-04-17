# Text-Similarity API

Text-Similarity API is a [Next.js 13](https://nextjs.org/) project bootstrapped with [`create-next-app@latest`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The goal of this project was to create an API that can compare two pieces of text. Features include a light and dark mode, rate limitation for the created api. A functional table to display past requests that can hide, filter and sort. This application includes Google authentication with sensitive routes protected.

Technologies:

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
Change the .env.template filename to .env
Create a project in the Google Cloud Console then navigate to APIs & Services -> Credentials.
Once here configure your OAuth consent screen and then create a OAuth client ID (under create credentials)
Copy the Google ClientID and Google Client Secret into the appropriate fields in the .env file

Following the Google console setup create a project on [PlanetScale](https://planetscale.com/)

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The first pages loaded will be `pages/home.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

<br>

### Environmental Variables

Some inormation will be uniqe to the environemnt in which this project is deployed or should not be shared publicly such as port numbers, api keys, etc.

[Next.js](https://nextjs.org/) uses a file named `.env.local`

Create the `.env.local` file in root directory of your project.

We've included a template (`.env.template`) to help you get started.

<br>

### Dependencies

Inputs from instructors such as notes and scores are pushed to the students' cohort in [Asana](https://developers.asana.com) as well as to the database (see below). Users MUST have an [asana personal access token (PAT)](https://developers.asana.com/docs/personal-access-token). 


<br>

## Learn More

To learn more about Next.js or pgcrypto, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Storing secure passwords](https://x-team.com/blog/storing-secure-passwords-with-postgresql/) - overview of pgcrypto.


<br>

# On the Database

# Data Philosophy

The application uses a postgres sql relational database. Within the database are 13 interconnected tables with primary and foreign keys, functions, and triggers for the functions.  The functions perform updates, calculations, and data propagation purposes, and are triggered by inserting or updating data in selected columns within certain tables. While these operations could also have been performed on the client side, the developers made the decision to perform these activities within the database to improve the client user experience and performance.

# Database Organization

The `migration.sql` file is organized, and comes with a table of contents that aids finding tables or functions of interest. This aids future developers in adding or modifying database tables, relationships, or features.  The "gid" column that is present in several of the tables is derived from ASANA, and should aid in maintaining compatibility between ASANA and the local database.  

# Data Security

One column (password) in one table (users) is protected by pgcrypto.  The app utilizes the use the gen_salt function, to let PostgreSQL generate a random salt, and utilizes the blowfish (bf) algorithm. The syntax for entering a password is as follows:  

```javascript
crypt('somepassword', gen_salt('bf');
```
To authenticate a user, we use something similar to the following:
```javascript
SELECT id FROM users WHERE username = 'someuser'
   AND password = crypt('somepassword', password);
```

# Future possible enhancements

1. Simple Bivariate Regression Analysis r^2 showing the predictive power of learn assessment scores on the student's assessed tech skills.  This could easily be done by using the following postgres sql command:
```javascript
SELECT regr_r2(learn_avg, tech_skills) as r2_learn_tech FROM students
```
It should only be done with groups of ten or more, to ensure reliability.  The result is the statistical r^2, which here shows how well learn scores predict tech skills.  The closer the number is to one, the more closely the former predicts the latter. It could also be turned into a percentage by multiplying the result by 100. A sample data explanation with hypothetical numbers follows:

"Cohort X average learn scores account for approximately 89% of the variance in average tech skills for students in the cohort."

This could indicate that the curriculum and assessments are relevant to the tech skills (high number), or are meaningless when it comes to student abilities (low score).

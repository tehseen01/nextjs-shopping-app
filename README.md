# Next.js Shopping App

The Next.js shopping app is a simple e-commerce application that uses Next.js, React, Tailwind CSS, MongoDB, TypeScript and Next Auth. It allows users to browse products, add them to the cart, and checkout using Stripe. The app also has authentication and authorization features using Next Auth and custom hooks.

![App screenshot](./public/screenshot.png)

## Features

- Responsive and user-friendly interface
- Product listing and filtering by category
- Shopping cart and checkout functionality
- Payment integration with Stripe
- User authentication and authorization with firebase
- Data fetching and storage with MongoDB
- Type checking with TypeScript
- Styling with Tailwind CSS
- Deployment with Vercel

## Installation

To run the app locally, you need to have Node.js, npm, and MongoDB installed on your machine.

1. Clone the repository:

```bash
git clone https://github.com/tehseen01/nextjs-shopping-app.git
```

2. Install the dependencies:

```bash
cd nextjs-shopping-app
npm install
```

3. Create a `.env.local` file in the root directory and add the following environment variables:

```bash
MONGODB_URI= # your MongoDB connection string
NEXT_PUBLIC_FIREBASE_API_KEY= # your firebase api key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= # your firebase auth domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID= # your firebase project id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET= # your firebase storage bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID= # your firebase messaging sender id
NEXT_PUBLIC_FIREBASE_APP_ID= # your firebase app id

PAYMENT_URL= # http://localhost:3000
STRIPE_SECRET_KEY= # your Stripe secret key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY= # your Stripe public key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Testing

To test the app, you can use the following credentials:

- Email: test@test.com
- Password: test123

You can also use any email address and password to sign up as a new user.

To test the payment functionality, you can use the following test card details:

- Card number: 4242 4242 4242 4242
- Expiry date: any future date
- CVC: any 3 digits
- ZIP: any 5 digits

## Demo

You can view the live demo of the app deployed on Vercel here: ([https://dev-shopp.vercel.app/](https://dev-shopp.vercel.app/))

## Contribution

If you want to contribute to this project, please follow these guidelines:

- Fork the repository and create a new branch with a descriptive name (e.g. `feature/add-product-rating`)
- If you are working on any issue, please assign it to yourself or comment on the issue. This will help others to avoid duplicate work and collaborate more effectively.
- Write clear and concise commit messages and follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) format
- Use [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) to format and lint your code
- Test your code before pushing it to GitHub
- Create a pull request with a detailed description of your changes and link it to the related issue (if any)
- Wait for the code review and feedback

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to contact me at tehseen.type@gmail.com.

Thank you for your interest in contributing to the nextjs-shopping-app. We appreciate your efforts to make this project better.

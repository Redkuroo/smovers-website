This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Hero video

The hero section is configured to play a background video on the right side.

- Place your video at `public/hero.mp4` (H.264/MP4 recommended).
- Optionally provide a poster image at `public/hero.jpg` used while the video loads or if playback fails.
- If `hero.mp4` is missing or fails to load, the component gracefully falls back to the poster image.

## Booking (Cal.com)

Set your public booking link via an environment variable so the "Book a Meeting" button points to the correct page and avoids 404s.

1. Create a `.env.local` file in the project root.
2. Add your Cal.com link slug (the part after `https://cal.com/`), for example:

```
NEXT_PUBLIC_CAL_LINK=your-workspace/30min
```

The hero uses this value to open the Cal.com modal when available, and falls back to opening the booking page in a new tab.

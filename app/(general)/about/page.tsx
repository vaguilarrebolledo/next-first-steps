import type { Metadata } from 'next';




export const metadata = {

  title: "SEO Title About",
  description: "Descripcion de About",
  keywords: "About, SEO, Nextjs",
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <span className="text-5xl">About</span>      
    </main>
  );
}
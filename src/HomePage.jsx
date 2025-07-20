// Personal site for Jason Lambert with blog support
// Tech stack: React + TailwindCSS + Markdown-based blog

import React from "react";
import { useState, useEffect } from "react";
import { FaFacebook, FaXTwitter, FaInstagram, FaDiscord } from "react-icons/fa6";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const context = import.meta.glob("../posts/*.mdx");
      const entries = await Promise.all(
        Object.entries(context).map(async ([path, resolver]) => {
          const mod = await resolver();
          return {
            slug: path.split("/").pop().replace(".md", ""),
            ...mod.metadata,
          };
        })
      );
      setPosts(entries);
    }
    loadPosts();
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m Jason Lambert</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Husband. Father. Technologist. Driven by faith and a desire to build things that matter.
        </p>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {posts.map((post) => (
            <ArticleCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm Jason Lambert, a lifelong learner and builder. Whether I’m spending time with my wife and kids,
          building solutions for MSPs, or exploring how faith and technology intersect—I strive to be intentional,
          simple, and focused. I believe in tools that serve people—not the other way around.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
        <p className="mb-6 text-lg">Reach out for conversation, collaboration, or questions.</p>
        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="border p-3 rounded w-full"
          />
          <input
            type="email"
            placeholder="Your email"
            className="border p-3 rounded w-full"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="border p-3 rounded w-full"
          ></textarea>
          <button type="submit" className="bg-black text-white py-3 rounded font-semibold">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Jason Lambert · All rights reserved.
        <div className="mt-4 flex justify-center space-x-6 text-xl">
          <a href="https://facebook.com/jasonrlambert" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://x.com/jasonrlambert" target="_blank" rel="noopener noreferrer" aria-label="X">
            <FaXTwitter />
          </a>
          <a href="https://instagram.com/jasonrlambert" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://discord.com/users/jasonrlambert" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <FaDiscord />
          </a>
        </div>
      </footer>
    </main>
  );
}

function ArticleCard({ title, excerpt, date }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-gray-700">{excerpt}</p>
    </div>
  );
}
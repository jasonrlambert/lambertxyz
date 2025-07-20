import React from "react";
import post1 from "../blog/index.mdx";

export default function Blog() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Latest Blog Posts</h1>
	<h1 className="text-3xl font-bold mb-4">this is fun</h1>
      <div className="prose max-w-none">
        <post1 />
      </div>
    </div>
  );
}

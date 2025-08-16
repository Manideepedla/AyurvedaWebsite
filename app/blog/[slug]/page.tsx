"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft, Calendar, Clock, Bookmark, Eye,
  Tag, User, Link2
} from "lucide-react";
import { motion } from "framer-motion";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import PageMetadata from "@/components/PageMetaData";
import Image from 'next/image';
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "next-share";

interface BlogPost {
  id: number;
  slug: string;
  blog_title: string;
  blog_content: string;
  blog_image: string;
  blog_cateogry: string;
  created_at: string;
  author?: string;
  readTime?: string;
  views?: number;
}

const BlogPostDetail = () => {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const router = useRouter();

  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  // Function to get the share URL for social media
  const getShareUrl = () => {
    if (!blogPost) return '';
    return `${baseUrl}/blog/${slug}`;
  };
  
  const copyToClipboard = () => {
    if (!blogPost) return;
    
    const postUrl = `${baseUrl}/blog/${slug}`;
    navigator.clipboard.writeText(postUrl)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  useEffect(() => {
    if (!slug) return;

    const fetchBlogPost = async () => {
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) throw new Error("Blog not found");
        const data = await res.json();
        setBlogPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setBlogPost(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#019c9d]"></div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <button
            onClick={() => router.back()}
            className="text-[#019c9d] hover:underline"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <NavigationMenu/>
      
      {/* SEO Metadata */}
      <PageMetadata 
        title={blogPost.blog_title}
        description={blogPost.blog_content.substring(0, 160) + '...'}
        keywords={`${blogPost.blog_cateogry}, edvenswa, blog, article, insights`}
        ogImage={blogPost.blog_image}
        ogUrl={`/blog/${slug}`}
        canonicalUrl={`/blog/${slug}`}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 py-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#019c9d]/10 text-[#019c9d] rounded-full text-sm font-medium mb-4">
                  <Tag size={14} className="inline mr-1" />
                  {blogPost.blog_cateogry}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {blogPost.blog_title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
                  <div className="flex items-center"><User size={16} className="mr-2" /><span>{blogPost.author || "Edvenswa"}</span></div>
                  <div className="flex items-center"><Calendar size={16} className="mr-2" /><span>{new Date(blogPost.created_at).toLocaleDateString()}</span></div>
                  {/* <div className="flex items-center"><Clock size={16} className="mr-2" /><span>{blogPost.readTime || "5 min read"}</span></div> */}
                  {/* <div className="flex items-center"><Eye size={16} className="mr-2" /><span>{blogPost.views || 0} views</span></div> */}
                </div>
                
                {/* Share Section - Moved to hero */}
                <div className="flex flex-wrap items-center gap-3 mt-6">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Share:</span>
                  
                  {/* Twitter Share Button */}
                  <TwitterShareButton
                    url={getShareUrl()}
                    title={blogPost.blog_title}
                  >
                    <div className="inline-flex items-center justify-center p-2 bg-black hover:bg-black/80 text-white rounded-full transition-colors">
                      <Image 
                        src="/twitter X.svg" 
                        alt="Twitter X" 
                        width={18} 
                        height={18}
                        className="w-[18px] h-[18px]"
                      />
                    </div>
                  </TwitterShareButton>
                  
                  {/* Facebook Share Button */}
                  <FacebookShareButton
                    url={getShareUrl()}
                    quote={blogPost.blog_title}
                    hashtag={`#${blogPost.blog_cateogry.replace(/\s+/g, '')}`}
                  >
                    <div className="inline-flex items-center justify-center p-2 bg-[#4267B2] hover:bg-[#4267B2]/80 text-white rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M9 8H6v4h3v12h5V12h3.64L18 8h-4V6.33c0-0.97.32-1.33 1.5-1.33H18V0h-4C10.3 0 9 1.5 9 4v4Z"/>
                      </svg>
                    </div>
                  </FacebookShareButton>
                  
                  {/* LinkedIn Share Button */}
                  <LinkedinShareButton
                    url={getShareUrl()}
                    title={blogPost.blog_title}
                    summary={blogPost.blog_content.substring(0, 250) + '...'}
                    source="Edvenswa"
                  >
                    <div className="inline-flex items-center justify-center p-2 bg-[#0077B5] hover:bg-[#0077B5]/80 text-white rounded-full transition-colors">
                      <Image 
                        src="/linkedin.svg" 
                        alt="LinkedIn" 
                        width={18} 
                        height={18}
                        className="w-[18px] h-[18px]"
                      />
                    </div>
                  </LinkedinShareButton>
                  
                  {/* Copy Link Button */}
                  <button
                    onClick={copyToClipboard}
                    className="inline-flex items-center justify-center px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full transition-colors text-sm"
                    aria-label="Copy link"
                  >
                    <Link2 size={14} className="mr-1" />
                    {isCopied ? 'Copied!' : 'Copy link'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <img src={blogPost.blog_image} alt={blogPost.blog_title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white dark:bg-gray-800 pb-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-[#019c9d] prose-strong:text-gray-900 dark:prose-strong:text-white"
            >
              {blogPost.blog_content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <h4 key={index} className="text-lg font-semibold mt-4 mb-2">{paragraph.replace(/\*\*/g, '')}</h4>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={index} className="ml-4">{paragraph.replace('- ', '')}</li>;
                } else if (paragraph.trim()) {
                  return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
                }
                return null;
              })}
            </motion.div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default BlogPostDetail;

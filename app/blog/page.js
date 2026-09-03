import Image from 'next/image';
import Link from 'next/link';

import { blogPosts } from '../../data/siteData';

export default function BlogPage() {
  return (
    <main className="container section-space">
      <div className="content-center narrow">
        <span className="section-kicker">Blog & mẹo</span>
        <h2>Những chia sẻ giúp đồ của bạn luôn sạch đẹp và bền lâu hơn</h2>
        <Link className="secondary-button blog-back-link" href="/#top">
          Quay lại trang chủ
        </Link>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.slug} className="blog-card">
            <Image src={post.image} alt={post.title} width={600} height={300} />
            <div className="blog-card-content">
              <span>{post.readTime}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link className="secondary-button" href={`/blog/${post.slug}`}>
                Đọc thêm
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { blogPosts } from '../../../data/siteData';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogDetailPage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) notFound();

  return (
    <main className="container section-space blog-hero">
      <article className="article-shell">
        <div className="article-actions">
          <Link href="/blog" className="secondary-button">← Quay lại blog</Link>
          <Link href="/#top" className="secondary-button">Về trang chủ</Link>
        </div>
        <span className="section-kicker" style={{ marginTop: '1rem', display: 'inline-flex' }}>{post.readTime}</span>
        <h1 style={{ margin: '1rem 0', fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.06em' }}>{post.title}</h1>
        <Image src={post.image} alt={post.title} width={1200} height={800} />
        <p>
          Việc bảo quản quần áo đúng cách không chỉ kéo dài tuổi thọ vải mà còn giúp bạn tiết kiệm chi phí và giữ được vẻ đẹp ban đầu cho từng món đồ.
        </p>
        <p>
          Với nhiều doanh nghiệp giặt ủi, cách làm sạch đúng chuẩn không đơn thuần là giặt mạnh hay giặt thường xuyên. Mỗi loại vải cần có chế độ phù hợp để không bạc màu, co giãn hay bị xù lông.
        </p>
        <p>
          Hãy phân loại đồ theo chất liệu: cotton, lanh, len, nhung hoặc chất tổng hợp. Với hàng ngày, bạn nên tách đồ trắng, đồ tối và quần áo có họa tiết để tránh gặp vấn đề chảy màu. Cách phơi tối ưu cũng rất quan trọng: tránh ánh nắng trực tiếp quá mạnh, nên phơi nơi thoáng và khô ráo để giảm nguy cơ bạc màu.
        </p>
        <p>
          Ngoài ra, nếu bạn có những món đồ cần giặt chuyên sâu như giày, rèm hoặc thảm, hãy ưu tiên dịch vụ giặt chuyên nghiệp để bảo dưỡng tốt hơn, khử mùi hiệu quả và giữ form dáng ban đầu.
        </p>
      </article>
    </main>
  );
}

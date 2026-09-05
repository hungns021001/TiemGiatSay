import { ClipboardCheck, Clock3, Droplets, Leaf, ShieldCheck, Sparkles, Star, Truck, WashingMachine, Wind } from 'lucide-react';

export const navItems = [
  { label: 'Trang chủ', href: '#top' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'Đánh giá', href: '#reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'Liên hệ', href: '#contact' },
];

export const stats = [
  { value: '5+', label: 'Năm kinh nghiệm' },
  { value: '999+', label: 'Đơn hàng thành công' },
  { value: '4.9/5', label: 'Đánh giá khách hàng' },
  { value: '24/7', label: 'Hỗ trợ đặt lịch' },
];

export const featureCards = [
  {
    icon: Sparkles,
    title: 'Công nghệ hiện đại',
    text: 'Máy giặt công nghiệp, bộ lọc nước và khử mùi hiện đại giữ đồ sạch sâu nhưng vẫn an toàn cho vải.',
  },
  {
    icon: Leaf,
    title: 'Hóa chất an toàn',
    text: 'Sử dụng hóa chất thân thiện với da, không gây kích ứng và ít ảnh hưởng đến môi trường.',
  },
  {
    icon: Truck,
    title: 'Dịch vụ tận tâm',
    text: 'Nhận đồ tận nơi, báo tiến độ rõ ràng, giao đúng lịch hẹn và hỗ trợ sau dịch vụ chuyên nghiệp.',
  },
];

export const services = [
  {
    title: 'Giặt sấy quần áo',
    subtitle: 'Từ áo sơ mi, đồ gia đình đến bộ đồ văn phòng',
    price: 'Từ 30.000đ/kg',
    accent: 'blue',
    image: '/images/anhquanao.jpg',
  },
  {
    title: 'Giặt giày & túi xách',
    subtitle: 'Làm sạch sâu, khử mùi, phục hồi màu sắc',
    price: 'Từ 60.000đ/đôi',
    accent: 'purple',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Giặt rèm – sofa – thảm',
    subtitle: 'Vệ sinh nội thất chuyên sâu cho không gian sống',
    price: 'Tham khảo báo giá',
    accent: 'cyan',
    image: '/images/rem.png',
  },
  {
    title: 'Giặt áo khoác & đồ mùa đông',
    subtitle: 'Giặt sạch lớp bụi, mùi hôi, giữ phom dáng nguyên vẹn',
    price: 'Tham khảo báo giá',
    accent: 'blue',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Giặt chăn ga gối',
    subtitle: 'Vệ sinh chăn ga gối định kỳ, thơm thoáng và an toàn cho da',
    price: 'Tham khảo báo giá',
    accent: 'purple',
    image: '/images/changgagoi.jpg',
  },
  {
    title: 'Giặt số lượng lớn cho doanh nghiệp',
    subtitle: 'Dịch vụ cho văn phòng, resort, lễ tân, nhân sự',
    price: 'Tham khảo báo giá',
    accent: 'cyan',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=900&q=85',
  },
];

export const process = [
  {
    step: '01',
    icon: ClipboardCheck,
    title: 'Tiếp nhận & phân loại',
    text: 'Kiểm tra chất liệu, màu sắc và mức độ bẩn để tư vấn phương án giặt phù hợp nhất.',
  },
  {
    step: '02',
    icon: WashingMachine,
    title: 'Giặt sạch sâu',
    text: 'Sử dụng máy giặt công nghiệp cùng hóa chất chuyên dụng để loại bỏ bụi và mùi hiệu quả.',
  },
  {
    step: '03',
    icon: Wind,
    title: 'Sấy & ủi',
    text: 'Sấy khô đều, ủi phẳng và kiểm tra chất lượng trước khi đóng gói.',
  },
  {
    step: '04',
    icon: Truck,
    title: 'Giao tận nơi',
    text: 'Giao hàng đúng khung giờ, kiểm tra lại sản phẩm và hỗ trợ sau khi nhận đồ.',
  },
];

export const pricingTable = [
  {
    name: 'Giặt thường',
    price: '30.000đ/kg',
    description: 'Phù hợp đồ quần áo cá nhân, mền, gối, phụ kiện thường ngày.',
    features: ['Giặt sạch sâu', 'Sấy khô cơ bản', 'Tối ưu chi phí'],
    highlight: false,
  },
  {
    name: 'Giặt hấp',
    price: '50.000đ/kg',
    description: 'Phù hợp đồ dễ nhăn, quần áo công sở hoặc cần khử khuẩn nâng cao.',
    features: ['Ẩm tốt', 'Khử khuẩn', 'Phục hồi form dáng'],
    highlight: true,
  },
  {
    name: 'Giặt thảm & sofa',
    price: 'Tham khảo báo giá',
    description: 'Vệ sinh nội thất, khử mùi và bụi bẩn trong không gian sống.',
    features: ['Khử mùi', 'Vệ sinh sâu', 'Tư vấn quote theo diện tích'],
    highlight: false,
  },
];

export const reviews = [
  {
    name: 'Anh Trọng',
    text: 'Dịch vụ rất chuyên nghiệp, đồ sạch như mới, đúng hẹn và gói hàng cực đẹp. Tôi sẽ đặt lại.',
    rating: 5,
    image: '/images/anhtrong.jpg',
  },
  {
    name: 'Anh Tuấn',
    text: 'Tôi đặt giặt giày và rèm cửa, kết quả vượt mong đợi. Dịch vụ đã được tối ưu rất đáng tiền.',
    rating: 5,
    image: '/images/anhtuan.jpg',
  },
  {
    name: 'Chị Hương',
    text: 'Mình rất thích cách nhân viên tư vấn rõ ràng và giao nhận đúng giờ. Cảm giác rất tin cậy.',
    rating: 5,
    image: '/images/chihuong.jpg',
  },
];

export const serviceHighlights = [
  { icon: Droplets, text: 'Khử mùi sâu' },
  { icon: ShieldCheck, text: 'An toàn cho da' },
  { icon: Clock3, text: 'Đúng giờ hẹn' },
  { icon: Star, text: 'Chất lượng cam kết' },
];

export const blogPosts = [
  {
    slug: 'meo-bao-quan-vai-xanh',
    title: '10 Mẹo bảo quản đồ vải xanh và giữ màu lâu',
    excerpt: 'Cách giặt, phơi và bảo quản để quần áo luôn đẹp và bền hơn.',
    keywords: ['bảo quản đồ vải xanh', 'giữ màu quần áo xanh lâu', 'cách giặt quần áo màu xanh'],
    image: '/images/meobaoquanquanao.webp',
    readTime: '13 phút đọc',
  },
  {
    slug: 'cach-khu-mui-nao-bo-cho-giay',
    title: '10 Cách khử mùi cho giày và túi xách hiệu quả',
    excerpt: 'Những lỗi thường gặp khi giặt giày và bí quyết làm sạch đúng cách.',
    keywords: ['khử mùi giày', 'khử mùi túi xách', 'vệ sinh giày túi chuyên nghiệp'],
    image: '/images/khumuigiay.jfif',
    readTime: '14 phút đọc',
  },
  {
    slug: 'lam-sao-giu-rem-sofa-sach-dep',
    title: '10 Cách giữ rèm sofa sạch đẹp theo mùa',
    excerpt: 'Lịch vệ sinh, quy trình chăm sóc và phương pháp giặt phù hợp cho nội thất.',
    keywords: ['vệ sinh rèm sofa', 'giữ rèm sofa sạch đẹp', 'giặt rèm sofa theo mùa'],
    image: '/images/giu-sach-rem.jpg',
    readTime: '15 phút đọc',
  },
];

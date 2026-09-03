import { Clock3, Droplets, Leaf, ShieldCheck, Sparkles, Star, Truck } from 'lucide-react';

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
  { value: '12+', label: 'Năm kinh nghiệm' },
  { value: '8.500+', label: 'Đơn hàng thành công' },
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
    price: 'Từ 35.000đ/kg',
    accent: 'blue',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Giặt giày & túi xách',
    subtitle: 'Làm sạch sâu, khử mùi, phục hồi màu sắc',
    price: 'Từ 120.000đ/đôi',
    accent: 'purple',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Giặt rèm – sofa – thảm',
    subtitle: 'Vệ sinh nội thất chuyên sâu cho không gian sống',
    price: 'Từ 199.000đ',
    accent: 'cyan',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Giặt áo khoác & đồ mùa đông',
    subtitle: 'Giặt sạch lớp bụi, mùi hôi, giữ phom dáng nguyên vẹn',
    price: 'Từ 150.000đ/chiếc',
    accent: 'blue',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Giặt chăn ga gối',
    subtitle: 'Vệ sinh chăn ga gối định kỳ, thơm thoáng và an toàn cho da',
    price: 'Từ 180.000đ/set',
    accent: 'purple',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Giặt đồ đồng phục & công sở',
    subtitle: 'Dịch vụ cho văn phòng, resort, lễ tân, nhân sự',
    price: 'Từ 49.000đ/set',
    accent: 'cyan',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  },
];

export const process = [
  {
    step: '01',
    title: 'Tiếp nhận & phân loại',
    text: 'Kiểm tra chất liệu, màu sắc và mức độ bẩn để tư vấn phương án giặt phù hợp nhất.',
  },
  {
    step: '02',
    title: 'Giặt sạch sâu',
    text: 'Sử dụng máy giặt công nghiệp cùng hóa chất chuyên dụng để loại bỏ bụi và mùi hiệu quả.',
  },
  {
    step: '03',
    title: 'Sấy & ủi',
    text: 'Sấy khô đều, ủi phẳng và kiểm tra chất lượng trước khi đóng gói.',
  },
  {
    step: '04',
    title: 'Giao tận nơi',
    text: 'Giao hàng đúng khung giờ, kiểm tra lại sản phẩm và hỗ trợ sau khi nhận đồ.',
  },
];

export const pricingTable = [
  {
    name: 'Giặt thường',
    price: '35.000đ/kg',
    description: 'Phù hợp đồ quần áo cá nhân, mền, gối, phụ kiện thường ngày.',
    features: ['Giặt sạch sâu', 'Sấy khô cơ bản', 'Tối ưu chi phí'],
    highlight: false,
  },
  {
    name: 'Giặt hấp',
    price: '55.000đ/kg',
    description: 'Phù hợp đồ dễ nhăn, quần áo công sở hoặc cần khử khuẩn nâng cao.',
    features: ['Ẩm tốt', 'Khử khuẩn', 'Phục hồi form dáng'],
    highlight: true,
  },
  {
    name: 'Giặt thảm & sofa',
    price: '199.000đ+',
    description: 'Vệ sinh nội thất, khử mùi và bụi bẩn trong không gian sống.',
    features: ['Khử mùi', 'Vệ sinh sâu', 'Tư vấn quote theo diện tích'],
    highlight: false,
  },
];

export const reviews = [
  {
    name: 'Ms. Lan',
    text: 'Dịch vụ rất chuyên nghiệp, đồ sạch như mới, đúng hẹn và gói hàng cực đẹp. Tôi sẽ đặt lại.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Anh Tuấn',
    text: 'Tôi đặt giặt giày và rèm cửa, kết quả vượt mong đợi. Dịch vụ đã được tối ưu rất đáng tiền.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Chị Hà',
    text: 'Mình rất thích cách nhân viên tư vấn rõ ràng và giao nhận đúng giờ. Cảm giác rất tin cậy.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80',
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
    title: 'Mẹo bảo quản đồ vải xanh và giữ màu lâu',
    excerpt: 'Cách giặt, phơi và bảo quản để quần áo luôn đẹp và bền hơn.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 phút đọc',
  },
  {
    slug: 'cach-khu-mui-nao-bo-cho-giay',
    title: 'Cách khử mùi cho giày và túi xách hiệu quả',
    excerpt: 'Những lỗi thường gặp khi giặt giày và bí quyết làm sạch đúng cách.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 phút đọc',
  },
  {
    slug: 'lam-sao-giu-rem-sofa-sach-dep',
    title: 'Làm sao giữ rèm sofa sạch đẹp theo mùa',
    excerpt: 'Lịch vệ sinh, quy trình chăm sóc và phần mềm giặt phù hợp cho nội thất.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 phút đọc',
  },
];

import { Clock3, Droplets, Leaf, ShieldCheck, Sparkles, Star, Truck } from 'lucide-react';

export const navItems = [
  { label: 'Trang chủ', href: '#top' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Đánh giá', href: '#reviews' },
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
    text: 'Máy giặt công nghiệp, hệ thống lọc, sấy nhiệt và khử mùi hiện đại giúp quần áo sạch sâu nhưng vẫn giữ nguyên độ bền vải.',
  },
  {
    icon: Leaf,
    title: 'Hóa chất an toàn',
    text: 'Sử dụng hóa chất thân thiện với da, an toàn cho sức khỏe người dùng và dịu nhẹ với môi trường.',
  },
  {
    icon: Truck,
    title: 'Dịch vụ tận tâm',
    text: 'Nhận đồ tận nơi, báo tiến độ rõ ràng, giao đúng lịch hẹn và hỗ trợ chăm sóc sau dịch vụ.',
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
    subtitle: 'Giặt sạch lớp bụi, mùi hôi và giữ phom dáng nguyên vẹn',
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
    subtitle: 'Dịch vụ cho văn phòng, resort, lễ tân, nhân sự, đặc biệt khử mùi',
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

export const pricing = [
  {
    name: 'Gói cơ bản',
    price: '99K',
    description: 'Phù hợp với đồ cá nhân, tiện lợi và tiết kiệm thời gian.',
    features: ['Giặt 2kg', 'Sấy khô', 'Giao trong 24h'],
    highlight: false,
  },
  {
    name: 'Gói premium',
    price: '249K',
    description: 'Lựa chọn phổ biến cho gia đình, văn phòng, sinh viên.',
    features: ['Giặt 5kg', 'Ủi phẳng', 'Khử mùi nâng cao'],
    highlight: true,
  },
  {
    name: 'Gói doanh nghiệp',
    price: 'Tùy nhu cầu',
    description: 'Giải pháp dành cho khách sạn, chung cư, resort và văn phòng.',
    features: ['Lịch cố định', 'Hỗ trợ 24/7', 'Đo lường chi tiết'],
    highlight: false,
  },
];

export const reviews = [
  {
    name: 'Ms. Lan',
    text: 'Dịch vụ rất chuyên nghiệp, đồ sạch như mới, đúng hẹn và gói hàng cực đẹp. Tôi sẽ tiếp tục đặt nữa.',
    rating: 5,
  },
  {
    name: 'Anh Tuấn',
    text: 'Tôi đặt giặt giày và rèm cửa, kết quả vượt mong đợi. Nhân viên tư vấn rất rõ ràng và dễ tin.',
    rating: 5,
  },
  {
    name: 'Chị Hà',
    text: 'Sự thân thiện và quy trình rõ ràng khiến tôi cảm giác được chăm sóc thật sự từ đầu đến cuối.',
    rating: 5,
  },
];

export const serviceHighlights = [
  { icon: Droplets, text: 'Khử mùi sâu' },
  { icon: ShieldCheck, text: 'An toàn cho da' },
  { icon: Clock3, text: 'Đúng giờ hẹn' },
  { icon: Star, text: 'Chất lượng cam kết' },
];

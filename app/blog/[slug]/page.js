import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { blogPosts } from '../../../data/siteData';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FloatingContact from '../../../components/FloatingContact';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {};
  }

  const canonicalPath = `/blog/${post.slug}`;

  return {
    title: `${post.title} | Giặt Sấy Cảnh Hương`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalPath,
      siteName: 'Giặt Sấy Cảnh Hương',
      type: 'article',
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function BlueFabricArticle() {
  return (
    <div className="article-content">
      <p>
        Quần áo và các loại đồ vải màu xanh thường dễ bị phai màu nếu giặt, phơi hoặc bảo quản không đúng cách.
        Đặc biệt, những gam xanh đậm như xanh navy, xanh jean hay xanh than có thể nhanh chóng mất màu sau nhiều lần giặt.
      </p>
      <p>
        Vậy làm thế nào để <strong>bảo quản đồ vải xanh và giữ màu lâu hơn</strong>? Dưới đây là những mẹo đơn giản bạn có thể áp dụng ngay tại nhà.
      </p>

      <h2>1. Phân loại đồ vải xanh trước khi giặt</h2>
      <p>Một trong những nguyên nhân khiến quần áo màu xanh nhanh xuống màu là giặt chung với các loại quần áo không phù hợp.</p>
      <p>Trước khi giặt, nên phân loại quần áo theo:</p>
      <ul>
        <li>Màu sáng và màu tối.</li>
        <li>Đồ màu xanh và đồ trắng.</li>
        <li>Vải cotton, jean, kaki và các chất liệu đặc biệt.</li>
        <li>Đồ dễ phai màu và đồ có màu bền.</li>
      </ul>
      <p><strong>Không nên giặt đồ xanh đậm chung với quần áo trắng hoặc màu sáng</strong>, vì màu nhuộm có thể bị lem sang các sản phẩm khác.</p>

      <h2>2. Lộn trái quần áo trước khi giặt</h2>
      <p>
        Đây là mẹo khá đơn giản nhưng có tác dụng tốt trong việc <strong>giữ màu quần áo lâu phai</strong>.
        Khi lộn trái, phần mặt ngoài của vải sẽ giảm tiếp xúc trực tiếp với nước, chất giặt và ma sát trong quá trình giặt.
      </p>
      <p>Với quần jean, áo khoác jean hoặc quần áo xanh đậm, bạn càng nên áp dụng cách này.</p>

      <h2>3. Không sử dụng quá nhiều nước giặt</h2>
      <p>
        Lượng chất giặt tẩy quá nhiều có thể khiến việc xả sạch trở nên khó khăn, đồng thời ảnh hưởng đến chất liệu
        và màu sắc của vải nếu sử dụng thường xuyên.
      </p>
      <p>Hãy sử dụng lượng nước giặt theo hướng dẫn của nhà sản xuất và ưu tiên sản phẩm dành cho <strong>quần áo màu</strong>.</p>

      <h2>4. Ưu tiên nước lạnh khi giặt đồ màu xanh</h2>
      <p>
        Nước có nhiệt độ cao có thể khiến một số loại thuốc nhuộm trên vải mất màu nhanh hơn. Bạn nên ưu tiên giặt
        bằng nước lạnh hoặc nước ở nhiệt độ thấp nếu nhãn hướng dẫn chăm sóc cho phép.
      </p>

      <h2>5. Hạn chế ngâm đồ màu xanh quá lâu</h2>
      <p>
        Ngâm quần áo trong nước giặt trong thời gian dài không đồng nghĩa với việc quần áo sẽ sạch hơn.
        Việc ngâm lâu có thể làm thuốc nhuộm tiếp xúc với nước và chất tẩy lâu hơn, từ đó tăng nguy cơ phai màu.
      </p>

      <h2>6. Không phơi đồ xanh dưới nắng gắt</h2>
      <p>Ánh nắng mặt trời là một trong những yếu tố có thể khiến màu vải nhanh bạc, đặc biệt với những màu đậm.</p>
      <ul>
        <li>Phơi quần áo ở nơi thông thoáng.</li>
        <li>Hạn chế ánh nắng trực tiếp trong thời gian dài.</li>
        <li>Lộn trái quần áo khi phơi.</li>
        <li>Không để quần áo ẩm trong không gian kín quá lâu.</li>
      </ul>
      <p><strong>Lộn trái khi phơi</strong> giúp hạn chế tác động của ánh nắng lên bề mặt vải và giữ màu tốt hơn.</p>

      <h2>7. Đọc kỹ hướng dẫn trên nhãn quần áo</h2>
      <p>
        Một chiếc áo cotton, quần jean, áo len hoặc vải polyester có thể yêu cầu phương pháp giặt và sấy khác nhau.
        Vì vậy, hãy kiểm tra nhãn hướng dẫn trước khi giặt.
      </p>
      <p>Một số ký hiệu quan trọng thường liên quan đến:</p>
      <ul>
        <li>Nhiệt độ nước.</li>
        <li>Cách giặt và cách sấy.</li>
        <li>Cách phơi.</li>
        <li>Có được sử dụng chất tẩy hay không.</li>
      </ul>

      <h2>8. Bảo quản đồ vải xanh ở nơi khô thoáng</h2>
      <p>
        Sau khi giặt và làm khô hoàn toàn, hãy bảo quản quần áo ở nơi khô ráo, thoáng khí.
        Không nên cất quần áo khi vẫn còn hơi ẩm vì có thể tạo điều kiện cho mùi hôi và nấm mốc phát triển.
      </p>
      <p>
        Với những món đồ ít sử dụng, bạn có thể gấp gọn và bảo quản trong túi hoặc hộp phù hợp,
        nhưng cần đảm bảo quần áo đã khô hoàn toàn trước khi cất.
      </p>

      <h2>9. Có nên mang đồ vải xanh đến tiệm giặt sấy?</h2>
      <p>
        Nếu có những món đồ dễ phai màu, chất liệu đặc biệt hoặc cần chăm sóc kỹ, sử dụng
        <strong> dịch vụ giặt sấy chuyên nghiệp</strong> là một lựa chọn đáng cân nhắc.
      </p>
      <p>
        Tiệm giặt sấy có thể phân loại quần áo theo màu sắc và chất liệu, đồng thời lựa chọn chương trình giặt,
        sấy phù hợp hơn với từng loại vải. Cách xử lý đúng giúp hạn chế <strong>phai màu, co rút hoặc biến dạng vải</strong>.
      </p>

      <h2>Những điều cần tránh nếu muốn đồ xanh lâu phai</h2>
      <ul>
        <li>Giặt chung với quần áo trắng.</li>
        <li>Sử dụng chất tẩy mạnh không phù hợp.</li>
        <li>Ngâm quần áo quá lâu.</li>
        <li>Giặt bằng nước quá nóng.</li>
        <li>Phơi trực tiếp dưới nắng gắt trong thời gian dài.</li>
        <li>Sấy ở nhiệt độ cao khi chất liệu không cho phép.</li>
        <li>Cất quần áo khi còn ẩm.</li>
      </ul>

      <h2>Kết luận</h2>
      <p>
        <strong>Bảo quản đồ vải xanh đúng cách</strong> không quá phức tạp. Chỉ cần chú ý từ bước phân loại, giặt,
        phơi cho đến bảo quản, bạn đã có thể hạn chế đáng kể tình trạng phai màu và giúp quần áo bền đẹp lâu hơn.
      </p>
      <p>
        Nếu không có thời gian tự giặt hoặc đang cần xử lý những loại vải khó chăm sóc, bạn có thể lựa chọn dịch vụ
        <strong> giặt sấy chuyên nghiệp</strong> để quần áo được làm sạch và chăm sóc phù hợp với từng chất liệu.
      </p>
    </div>
  );
}

function ShoeBagArticle() {
  return (
    <div className="article-content">
      <p>
        Giày và túi xách được sử dụng thường xuyên nhưng không phải lúc nào cũng được vệ sinh đúng cách.
        Mồ hôi, độ ẩm, bụi bẩn và vi khuẩn tích tụ lâu ngày có thể khiến sản phẩm xuất hiện mùi khó chịu.
      </p>
      <p>
        Nếu chỉ dùng nước hoa hoặc xịt khử mùi để át mùi, tình trạng thường chỉ được cải thiện tạm thời.
        Muốn <strong>khử mùi giày và túi xách hiệu quả</strong>, bạn cần xác định nguyên nhân và vệ sinh đúng phương pháp.
      </p>

      <h2>1. Vì sao giày và túi xách có mùi?</h2>
      <ul>
        <li>Mồ hôi và dầu từ da tích tụ bên trong giày.</li>
        <li>Giày bị ẩm do mưa hoặc sử dụng trong thời gian dài.</li>
        <li>Túi xách chứa đồ ăn, mỹ phẩm hoặc vật dụng có mùi.</li>
        <li>Đồ dùng được bảo quản trong môi trường kín, ẩm.</li>
        <li>Bụi bẩn và vi khuẩn tích tụ lâu ngày.</li>
        <li>Giày hoặc túi chưa được làm khô hoàn toàn trước khi cất.</li>
      </ul>
      <p>Vì vậy, xử lý mùi hiệu quả không chỉ là làm thơm bề mặt mà còn cần <strong>vệ sinh và làm khô đúng cách</strong>.</p>

      <h2>2. Làm sạch giày trước khi khử mùi</h2>
      <p>Đối với giày có thể vệ sinh bằng nước, hãy loại bỏ bụi bẩn bên ngoài trước khi xử lý mùi:</p>
      <ol>
        <li>Tháo dây giày và lấy lót giày nếu có thể.</li>
        <li>Dùng bàn chải mềm loại bỏ bụi đất.</li>
        <li>Vệ sinh thân giày bằng dung dịch phù hợp với chất liệu.</li>
        <li>Làm sạch phần lót và bên trong giày.</li>
        <li>Để giày khô hoàn toàn ở nơi thông thoáng.</li>
      </ol>
      <p>Không nên ngâm toàn bộ giày trong nước nếu nhà sản xuất không cho phép, đặc biệt với giày da, da lộn hoặc chất liệu dễ biến dạng.</p>

      <h2>3. Sử dụng baking soda để hút mùi</h2>
      <p>
        Cho một lượng nhỏ baking soda vào túi vải mỏng hoặc tất sạch, sau đó đặt vào bên trong giày và để qua đêm.
        Baking soda hỗ trợ hấp thụ mùi và độ ẩm, nhưng không nên rắc trực tiếp lượng lớn lên chất liệu nhạy cảm khi chưa kiểm tra.
      </p>

      <h2>4. Làm khô giày đúng cách</h2>
      <p>
        Độ ẩm là yếu tố khiến mùi khó chịu quay trở lại nhanh chóng. Hãy đặt giày ở nơi khô thoáng,
        tháo lót và dây giày để từng bộ phận khô nhanh hơn.
      </p>
      <p><strong>Không phải đôi giày nào cũng nên phơi dưới nắng gắt</strong> vì nhiệt độ cao có thể ảnh hưởng đến keo dán, màu sắc hoặc chất liệu.</p>

      <h2>5. Khử mùi túi xách bằng cách vệ sinh bên trong</h2>
      <p>Hãy lấy toàn bộ đồ dùng ra khỏi túi và kiểm tra các ngăn nhỏ, sau đó:</p>
      <ul>
        <li>Loại bỏ giấy vụn và bụi bẩn.</li>
        <li>Dùng khăn mềm lau phần bên trong nếu chất liệu cho phép.</li>
        <li>Làm sạch những khu vực bị bám bẩn.</li>
        <li>Để túi ở nơi thông thoáng.</li>
        <li>Chỉ cất túi khi bên trong đã khô hoàn toàn.</li>
      </ul>
      <p>Nếu túi có lớp lót hoặc chất liệu đặc biệt, nên kiểm tra hướng dẫn chăm sóc trước khi dùng nước hoặc dung dịch vệ sinh.</p>

      <h2>6. Dùng túi hút ẩm để hạn chế mùi quay lại</h2>
      <p>
        Túi hút ẩm giúp hạn chế độ ẩm trong không gian kín, từ đó hỗ trợ giữ giày và túi xách khô thoáng hơn.
        Tuy nhiên, sản phẩm này không thể thay thế việc vệ sinh.
      </p>

      <h2>7. Không nên dùng nước hoa để che mùi</h2>
      <p>
        Xịt nước hoa chỉ tạo mùi dễ chịu trong thời gian ngắn và không loại bỏ nguyên nhân từ mồ hôi, bụi bẩn hoặc độ ẩm.
        Một số sản phẩm có cồn còn có thể ảnh hưởng đến bề mặt da và vật liệu.
      </p>
      <p>Hãy ưu tiên <strong>vệ sinh – làm khô – khử mùi</strong> thay vì chỉ sử dụng sản phẩm tạo mùi thơm.</p>

      <h2>8. Với giày da và túi da, cần đặc biệt cẩn thận</h2>
      <p>Không nên tự ý:</p>
      <ul>
        <li>Ngâm sản phẩm trong nước.</li>
        <li>Dùng chất tẩy mạnh.</li>
        <li>Chà xát quá mạnh.</li>
        <li>Sấy bằng nhiệt độ cao.</li>
        <li>Sử dụng dung dịch chưa kiểm tra trên chất liệu.</li>
      </ul>
      <p>Nếu sản phẩm có giá trị cao hoặc không chắc chắn về cách vệ sinh, nên chọn <strong>dịch vụ vệ sinh giày và túi xách chuyên nghiệp</strong>.</p>

      <h2>9. Khi nào nên mang giày và túi xách đi vệ sinh chuyên nghiệp?</h2>
      <ul>
        <li>Mùi đã xuất hiện trong thời gian dài.</li>
        <li>Giày bị ướt và có mùi ẩm nặng.</li>
        <li>Túi xách có mùi khó xử lý tại nhà.</li>
        <li>Sản phẩm làm từ da, da lộn hoặc chất liệu đặc biệt.</li>
        <li>Đã vệ sinh tại nhà nhưng mùi nhanh chóng quay lại.</li>
        <li>Không chắc sản phẩm có thể giặt bằng nước hay không.</li>
      </ul>
      <p>Làm sai cách có thể khiến sản phẩm bị bạc màu, biến dạng hoặc hư hỏng.</p>

      <h2>10. Cách hạn chế giày và túi xách bị hôi trở lại</h2>
      <ul>
        <li>Để giày khô thoáng sau mỗi lần sử dụng.</li>
        <li>Không mang một đôi giày liên tục trong nhiều ngày nếu có thể thay đổi.</li>
        <li>Vệ sinh lót giày định kỳ.</li>
        <li>Không để đồ ăn hoặc vật dụng dễ gây mùi trong túi.</li>
        <li>Vệ sinh túi xách định kỳ.</li>
        <li>Không cất giày, túi khi còn ẩm.</li>
        <li>Bảo quản sản phẩm ở nơi khô thoáng.</li>
        <li>Sử dụng túi hút ẩm khi cần thiết.</li>
      </ul>

      <h2>Kết luận</h2>
      <p>
        <strong>Khử mùi cho giày và túi xách</strong> không chỉ đơn giản là sử dụng nước hoa hay xịt thơm.
        Hãy kết hợp vệ sinh phù hợp với từng chất liệu, làm khô hoàn toàn và bảo quản đúng cách.
      </p>
      <p>
        Với sản phẩm có chất liệu đặc biệt hoặc tình trạng mùi khó xử lý, <strong>dịch vụ vệ sinh giày túi chuyên nghiệp</strong>
        có thể giúp hạn chế rủi ro làm hỏng sản phẩm trong quá trình tự vệ sinh.
      </p>
    </div>
  );
}

function CurtainSofaArticle() {
  return (
    <div className="article-content">
      <p>
        Rèm cửa và sofa là những vật dụng quen thuộc trong hầu hết gia đình. Không chỉ góp phần tạo nên vẻ đẹp cho không gian,
        chúng còn thường xuyên tiếp xúc với bụi, độ ẩm, ánh nắng và các tác nhân từ môi trường.
      </p>
      <p>
        Mỗi mùa lại có những yếu tố khác nhau ảnh hưởng đến <strong>rèm cửa và sofa</strong>.
        Mùa nắng có thể khiến vải nhanh bạc màu, còn mùa mưa dễ tạo mùi khó chịu nếu đồ vải không được làm khô đúng cách.
      </p>

      <h2>1. Vệ sinh rèm và sofa định kỳ</h2>
      <p>Bụi mịn có thể tích tụ trên bề mặt vải theo thời gian, đặc biệt trong các khe sofa và nếp gấp rèm. Bạn nên:</p>
      <ul>
        <li>Hút bụi bề mặt sofa.</li>
        <li>Hút bụi rèm bằng đầu hút phù hợp.</li>
        <li>Lau sạch các khu vực dễ bám bụi xung quanh.</li>
        <li>Xử lý vết bẩn càng sớm càng tốt.</li>
        <li>Vệ sinh chuyên sâu định kỳ tùy tần suất sử dụng và chất liệu.</li>
      </ul>

      <h2>2. Mùa xuân: tổng vệ sinh rèm và sofa</h2>
      <p>
        Sau một thời gian sử dụng, đây là thời điểm phù hợp để tổng vệ sinh không gian sống.
        Hãy kiểm tra nhãn chăm sóc và loại bỏ bụi bề mặt trước khi vệ sinh sâu hơn.
      </p>
      <p>
        Với sofa, chú ý tay vịn, tựa lưng, mặt ghế và các khe giữa đệm. Với rèm, kiểm tra phần đầu rèm,
        nếp gấp và những vị trí dễ tích tụ bụi. Không tự ý dùng chất tẩy mạnh với chất liệu đặc biệt.
      </p>

      <h2>3. Mùa hè: hạn chế ánh nắng và bụi</h2>
      <p>
        Nhiệt độ cao và ánh nắng mạnh có thể ảnh hưởng đến màu sắc. Bạn có thể sử dụng rèm chống nắng
        hoặc điều chỉnh rèm khi ánh nắng chiếu trực tiếp vào sofa.
      </p>
      <ul>
        <li>Hút bụi sofa định kỳ.</li>
        <li>Làm sạch bụi trên rèm.</li>
        <li>Không để sofa tiếp xúc với nắng trực tiếp quá lâu.</li>
        <li>Giữ không gian thông thoáng.</li>
        <li>Xử lý vết bẩn ngay khi phát hiện.</li>
      </ul>

      <h2>4. Mùa mưa: ưu tiên kiểm soát độ ẩm</h2>
      <p>
        Rèm hoặc sofa bị ẩm trong thời gian dài có thể xuất hiện mùi khó chịu và ảnh hưởng đến chất liệu.
        Khi thời tiết ẩm, bạn nên:
      </p>
      <ul>
        <li>Tăng cường thông thoáng khi điều kiện cho phép.</li>
        <li>Sử dụng máy hút ẩm hoặc điều hòa ở chế độ phù hợp nếu cần.</li>
        <li>Không để rèm tiếp xúc trực tiếp với nước mưa.</li>
        <li>Xử lý ngay khu vực sofa bị ướt.</li>
        <li>Đảm bảo rèm và sofa khô hoàn toàn trước khi sử dụng.</li>
      </ul>
      <p>Không nên chỉ lau bề mặt sofa bị thấm nước mà bỏ qua phần đệm bên trong.</p>

      <h2>5. Mùa thu: kiểm tra và làm sạch bụi tích tụ</h2>
      <p>Thời điểm giao mùa thích hợp để kiểm tra tình trạng rèm và sofa sau một thời gian sử dụng:</p>
      <ul>
        <li>Các vết bẩn lâu ngày.</li>
        <li>Khe và góc sofa.</li>
        <li>Phần mặt sau và chân rèm.</li>
        <li>Các vị trí thường xuyên tiếp xúc với tay hoặc cơ thể.</li>
      </ul>
      <p>Vết bẩn càng tồn tại lâu thường càng khó làm sạch hoàn toàn, nên xử lý ngay khi phát hiện.</p>

      <h2>6. Mùa đông: giữ sofa và rèm luôn khô thoáng</h2>
      <p>
        Khi gia đình thường đóng kín cửa, không khí trong phòng kém lưu thông và mùi ẩm dễ xuất hiện hơn.
        Hãy duy trì hút bụi, vệ sinh định kỳ và tạo sự lưu thông không khí khi điều kiện cho phép.
      </p>
      <p>Không nên phủ kín sofa hoặc cất rèm khi chúng vẫn còn ẩm.</p>

      <h2>7. Xử lý vết bẩn trên sofa càng sớm càng tốt</h2>
      <p>
        Khi đồ uống hoặc thức ăn đổ lên sofa, dùng khăn sạch thấm nhẹ phần chất lỏng.
        Không chà xát mạnh vì có thể khiến vết bẩn lan rộng hoặc thấm sâu hơn.
      </p>
      <p>
        Kiểm tra hướng dẫn chăm sóc trước khi dùng dung dịch vệ sinh. Với vết bẩn khó xử lý hoặc sofa chất liệu đặc biệt,
        nên cân nhắc <strong>dịch vụ vệ sinh sofa chuyên nghiệp</strong>.
      </p>

      <h2>8. Không phải loại rèm và sofa nào cũng có thể giặt giống nhau</h2>
      <p>Trước khi vệ sinh, cần kiểm tra:</p>
      <ul>
        <li>Nhãn hướng dẫn và thành phần chất liệu.</li>
        <li>Khả năng chịu nước và chịu nhiệt.</li>
        <li>Phương pháp vệ sinh được nhà sản xuất khuyến nghị.</li>
      </ul>
      <p>Tự ý giặt hoặc dùng chất tẩy mạnh có thể khiến vải co rút, phai màu hoặc biến dạng.</p>

      <h2>9. Khi nào nên sử dụng dịch vụ vệ sinh chuyên nghiệp?</h2>
      <p>
        Nếu rèm hoặc sofa lâu chưa vệ sinh, có nhiều vết bẩn, xuất hiện mùi khó chịu hoặc làm từ chất liệu khó chăm sóc,
        dịch vụ chuyên nghiệp có thể là lựa chọn phù hợp. Với sản phẩm kích thước lớn, tự tháo, giặt và làm khô tại nhà
        cũng không phải lúc nào thuận tiện.
      </p>

      <h2>10. Một số thói quen giúp rèm và sofa luôn sạch đẹp</h2>
      <ul>
        <li>Hạn chế ăn uống trên sofa.</li>
        <li>Không để thú cưng tiếp xúc với sofa khi đang bẩn hoặc ướt.</li>
        <li>Hút bụi định kỳ.</li>
        <li>Không để sofa tiếp xúc lâu với ánh nắng trực tiếp.</li>
        <li>Giữ phòng thông thoáng.</li>
        <li>Xử lý vết bẩn ngay khi xảy ra.</li>
        <li>Vệ sinh rèm định kỳ.</li>
        <li>Kiểm tra chất liệu trước khi tự vệ sinh.</li>
      </ul>

      <h2>Kết luận</h2>
      <p>
        <strong>Giữ rèm và sofa sạch đẹp theo mùa</strong> không cần quá phức tạp nếu duy trì vệ sinh định kỳ
        và chú ý đến yếu tố đặc trưng của từng mùa. Mùa nắng nên chú ý bụi và ánh sáng trực tiếp, còn mùa mưa cần
        ưu tiên kiểm soát độ ẩm và làm khô.
      </p>
      <p>
        Nếu rèm hoặc sofa lâu chưa vệ sinh, có vết bẩn khó xử lý hoặc chất liệu đặc biệt, bạn có thể lựa chọn
        <strong> dịch vụ giặt rèm và vệ sinh sofa chuyên nghiệp</strong>.
      </p>
    </div>
  );
}

export default function BlogDetailPage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://giatsaycanhhuong.vercel.app/blog/${post.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: 'Giặt Sấy Cảnh Hương',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Giặt Sấy Cảnh Hương',
    },
  };

  return (
    <div className="app-shell theme-dark">
      <Header />
      <main className="container section-space blog-hero">
        <article className="article-shell">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
          <div className="article-actions">
            <Link href="/blog" className="secondary-button">← Quay lại blog</Link>
          </div>
          <span className="section-kicker" style={{ marginTop: '1rem', display: 'inline-flex' }}>{post.readTime}</span>
          <h1 style={{ margin: '1rem 0', fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.06em' }}>{post.title}</h1>
          <Image src={post.image} alt={post.title} width={1200} height={800} />
          {post.slug === 'meo-bao-quan-vai-xanh' ? <BlueFabricArticle /> : post.slug === 'cach-khu-mui-nao-bo-cho-giay' ? <ShoeBagArticle /> : post.slug === 'lam-sao-giu-rem-sofa-sach-dep' ? <CurtainSofaArticle /> : (
            <p>
              Mỗi loại vải cần được chăm sóc theo chất liệu và tình trạng riêng. Hãy phân loại đồ trước khi giặt
              và ưu tiên quy trình phù hợp để giữ đồ sạch đẹp, bền màu hơn.
            </p>
          )}
        </article>
      </main>
      <FloatingContact />
      <Footer />
    </div>
  );
}

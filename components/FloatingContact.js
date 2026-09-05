import { MessageCircle, PhoneCall } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a href="https://zalo.me/0367123568" target="_blank" rel="noreferrer" className="zalo-bubble" aria-label="Chat Zalo">
        <MessageCircle size={22} />
      </a>
      <a href="tel:0367123568" className="phone-bubble" aria-label="Gọi điện">
        <PhoneCall size={22} />
      </a>
    </div>
  );
}

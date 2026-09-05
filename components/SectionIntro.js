export default function SectionIntro({ kicker, title, children, className = '' }) {
  return (
    <div className={`content-center narrow ${className}`.trim()}>
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

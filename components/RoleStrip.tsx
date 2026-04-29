export interface RoleItem {
  label: string;
  value: string;
}

export default function RoleStrip({ items }: { items: RoleItem[] }) {
  return (
    <section className="role-strip">
      <div className="wrap">
        <div className="role-grid">
          {items.map((item) => (
            <div className="role-item" key={item.label}>
              <div className="role-label">{item.label}</div>
              <div className="role-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TimelineNode({isChecked}) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <div
        className="h-4 w-4 rounded-full border-2"
        style={{ borderColor: "var(--primary)", background:  isChecked ? "var(--primary)" : "var(--bg)" }}
      />
    </div>
  );
}

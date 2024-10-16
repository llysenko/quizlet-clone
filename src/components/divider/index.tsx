export default function Divider({ text }: { text: string }) {
  return (
    <div className="divider mt-6 flex items-center justify-center">
      <div className="relative text-sm font-semibold text-gray-600">{text}</div>
      <style jsx>{`
        .divider::after,
        .divider::before {
          content: ' ';
          height: 0.0625rem;
          flex-grow: 1;
          background: #edeff4;
        }

        .divider::after {
          margin-left: 1rem;
        }

        .divider::before {
          margin-right: 1rem;
        }
      `}</style>
    </div>
  );
}

export default function Page({ params }: { params: { username: string } }) {
  return <div>{params.username}</div>;
}

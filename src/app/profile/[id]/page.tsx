export default function UserProfile({ params }: any) {
  return (
    <div>
      <h1>Profile Page</h1>
      <hr />
      <p className="text-4xl">ProfileName:{params.id}</p>
    </div>
  );
}

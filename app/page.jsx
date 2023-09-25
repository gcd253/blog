import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <h2>Main Page</h2>
      <div className="flex flex-col space-y-36">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

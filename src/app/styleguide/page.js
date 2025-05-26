// This is a simple Next.js page showing your custom colors

export default function StyleGuide() {
  const colors = [
    { name: 'dodger-blue', hex: '#21c6fa' },
    { name: 'cornflower-blue', hex: '#4f60f6' },
    { name: 'firefly', hex: '#040b10' },
    { name: 'black-pearl', hex: '#061834' },
    { name: 'downriver', hex: '#0a2c55' },
    { name: 'blue-whale', hex: '#042c41' },
    { name: 'atoll', hex: '#075871' },
    { name: 'meteorite', hex: '#2c1c71' },
    { name: 'blue-chill', hex: '#0d8c94' },
    { name: 'cinder', hex: '#140f1a' },
  ];

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">🎨 Style Guide</h1>
      <section className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {colors.map(({ name, hex }) => (
          <div key={name} className="rounded shadow p-4 bg-white flex flex-col items-center">
            <div
              className="w-24 h-24 rounded mb-3"
              style={{ backgroundColor: hex }}
            />
            <p className="font-mono text-sm">{name}</p>
            <p className="font-mono text-xs text-gray-600">{hex}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

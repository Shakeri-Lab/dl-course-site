export const metadata = {
  title: "Module 7 – Coming Soon",
  description: "Placeholder page – content will be added later."
}

export default function ModulePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20">
      <h1 className="text-4xl font-bold mb-4">Module 7 – Coming Soon</h1>
      <p className="text-gray-600">Detailed content, lecture video, reading, and assignments will be added here.</p>
      <div className="mt-6">
        <a
          href="https://colab.research.google.com/drive/11ijv709p9EklndqhqvoliAQN8cb_xAxb?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Open Homework 3 on Colab
        </a>
      </div>
      <div className="mt-8">
        <a href="/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">⟵ Back to Modules Menu</a>
      </div>
    </div>
  )
}

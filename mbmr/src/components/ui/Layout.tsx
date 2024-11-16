interface LayoutProps {
    children: React.ReactNode;
  }
  
  const Layout = ({ children }: LayoutProps) => {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Mood Music</h1>
            <p className="text-gray-600">Find the perfect music for your mood</p>
          </div>
        </header>
  
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
  
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
            Created with ♥ for ♪ 
          </div>
        </footer>
      </div>
    );
  };
  
  export default Layout;
export default function StudentLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="w-full h-full min-h-screen flex flex-col md:flex-row">
        {/* ส่วนซ้าย */}
        <div className="w-full md:w-1/4 text-white p-4 bg-gray-400">
          {/* <h2 className="text-xl font-bold">Left Sidebar</h2> */}
          <p>This is the left sidebar.</p>
          {/* <LeftSidebarPage /> */}
        </div>
  
        {/* ส่วนขวา */}
        <div className="w-full md:w-3/4 p-4">
          {/* <h2 className="text-xl font-bold">Right Content Area</h2> */}
          <main>{children}</main>
          <p>This is the main content area on the right.</p>
        </div>
      </div>
    );
  }
  
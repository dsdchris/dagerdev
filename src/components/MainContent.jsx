function MainContent({ children }) {
  return (
    <main className="w-full lg:ml-[33%] xl:ml-[46%] lg:w-2/3 xl:w-3/4 overflow-y-auto min-h-screen lg:h-screen">
      <div className="p-4 sm:p-6 lg:p-8 lg:pr-8 xl:pr-20">{children}</div>
    </main>
  );
}

export default MainContent;
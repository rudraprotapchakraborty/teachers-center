export default function InfoPanel() {
    return (
      <aside className="hidden lg:block w-80 border-l pl-4">
        <h3 className="text-lg font-semibold mb-2">Details</h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p><strong>Created on:</strong> 22 Dec 2023, 10:35 pm</p>
          <p><strong>Last Modified:</strong> 28 Dec 2023, 12:08 pm</p>
          <p><strong>Visible to:</strong> Batch 1, Batch 2, Batch 3</p>
          <p><strong>No. of subfolders:</strong> 2</p>
          <p><strong>No. of files:</strong> 6</p>
          <p><strong>Physical folder:</strong> 1</p>
        </div>
      </aside>
    );
  }
  
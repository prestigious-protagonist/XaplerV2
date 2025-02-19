import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

const ChatSection = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Fetch users from API
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/getAll")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen  p-4">
      {/* Chat Container */}
      <div className="w-[80%] h-[80vh] bg-black-200 rounded-lg shadow-lg flex">
        {/* Left Column (User List) */}
        <div className="w-[35%] border-r border-gray-300 p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <ul>
          {users.map((user, index) => (
  <li
    key={`${user.id}-${index}`}
    className={`p-3 rounded-lg cursor-pointer border mb-2 text-center font-medium transition-all duration-200 hover:bg-gray-200 ${
      selectedUser?.id === user.id ? "bg-blue-500 text-white" : "bg-white"
    }`}
    onClick={() => setSelectedUser(user)}
  >
    {user.name}
  </li>
))}

          </ul>
        </div>

        {/* Right Column (Chat Area) */}
        <div className="w-[65%] flex flex-col">
          {selectedUser ? (
            <div className="flex flex-col h-full">
              {/* Chat Header */}
              <div className="bg-blue-500 text-white p-4 text-lg font-semibold rounded-tr-lg">
                Chat with {selectedUser.name}
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
                <p className="text-gray-400">Chat content will appear here...</p>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t">
                <input
                  type="text"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Type a message..."
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-lg">
              Select a user to start chatting
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatSection;

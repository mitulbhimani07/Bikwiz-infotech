import React, { useState, useMemo } from 'react';
import { Search, MoreHorizontal, Send, Paperclip, Menu, X } from 'lucide-react';
import { AiOutlineDown } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import { IoCloseCircle } from "react-icons/io5";
import ClientSidebar from '../navbar/ClientSidbar';
import ClientHeader from '../navbar/ClientHeader';
import ClientFooter from '../navbar/ClientFooter';


// Mock data for messages
const conversations = [
    {
        id: 1,
        name: "Jan Mayer",
        message: "We want to invite you for a qui...",
        time: "12 mins ago",
        avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740",
        unread: true
    },
    {
        id: 2,
        name: "Joe Bartmann",
        message: "Hey thanks for your interview...",
        time: "3:40 PM",
        avatar: "https://watershed.co.uk/archive-sites/rifemagazine/wp-content/uploads/2020/11/IMG_9305-scaled.jpg"
    },
    {
        id: 3,
        name: "Ally Wales",
        message: "Hey thanks for your interview...",
        time: "3:40 PM",
        avatar: "https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf//960x0.jpg?format=jpg&width=960"
    },
    {
        id: 4,
        name: "James Gardner",
        message: "Hey thanks for your interview...",
        time: "3:40 PM",
        avatar: "https://static01.nyt.com/images/2015/06/30/multimedia/opdoc-convo3/opdoc-convo3-superJumbo.jpg"
    },
    {
        id: 5,
        name: "Allison Geidt",
        message: "Hey thanks for your interview...",
        time: "3:40 PM",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPD8TPpmTTED8zuuE-ByvNf3aBqSOwVzH0D67rTgGtTiFd9BPS1ft5HTKc8gXHqnoWiFE&usqp=CAU"
    },
    {
        id: 6,
        name: "Ruben Culhane",
        message: "Hey thanks for your interview...",
        time: "3:40 PM",
        avatar: "https://cdn.sanity.io/images/cphrnle8/production/78cb7944abc6030c2ef07d991fdb56afd1a06c04-1200x800.webp?w=1200&q=100&fit=max"
    },
    {
        id: 7,
        name: "Lydia Diaz",
        message: "Hey thanks for your interview...",
        time: "3:40 PM",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGaAkrH6D9Dz5wQU9rRGS6AbqVmLnKgrNkZ2fo-qc4HJ7OpfFypd9CzOmTV64Zjp_ZME&usqp=CAU"
    },
    {
        id: 8,
        name: "James Dokidis",
        message: "Hey thanks for your interview...",
        time: "3:40 PM",
        avatar: "https://media.istockphoto.com/id/1202961168/photo/portrait-of-confident-mature-businesswoman.jpg?s=612x612&w=0&k=20&c=VPRkAd4SR-LKgZlRdJB_ImA9srDw7H-4v2T8cE9BqVc="
    },
    {
        id: 9,
        name: "Angelina Swann",
        message: "Hey thanks for your interview...",
        time: "3:40 PM",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiMGej9v17-Y0HeLBwZ1th_aqzz09NpbpJHou96RhrJVgWdIHurOO4KFa_hjvIRDRVW0M&usqp=CAU"
    }
];

const chatMessages = [
    {
        id: 1,
        sender: "Jan Mayer",
        message: "Hey Jan, I wanted to reach out because we saw your work contributions and were impressed by your work.",
        time: "12 mins ago",
        isMe: false
    },
    {
        id: 2,
        sender: "Jan Mayer",
        message: "We want to invite you for a quick interview",
        time: "12 mins ago",
        isMe: false
    },
    {
        id: 3,
        sender: "You",
        message: "Hi Maria, sure I would love to. Thanks for taking the time to see my work!",
        time: "12 mins ago",
        isMe: true
    }
];

export default function ClientMessages() {
    const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
    const [newMessage, setNewMessage] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showConversationList, setShowConversationList] = useState(false);

    // Filter conversations based on search query
    const filteredConversations = useMemo(() => {
        if (!searchQuery.trim()) return conversations;

        return conversations.filter(conversation =>
            conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            conversation.message.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const handleSendMessage = () => {
        if (!newMessage.trim() && uploadedFiles.length === 0) return;

        console.log("Message:", newMessage);
        console.log("Files:", uploadedFiles);

        setNewMessage("");
        setUploadedFiles([]);
    };

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);

        const newFiles = files.map((file) => ({
            file,
            preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
            name: file.name,
            type: file.type,
        }));

        setUploadedFiles((prev) => [...prev, ...newFiles]);
        event.target.value = "";
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#fff0e5]">
            {/* Sidebar - Desktop only */}
            <div className="hidden lg:block lg:sticky lg:top-0 lg:left-0 lg:h-screen lg:flex-shrink-0">
                <ClientSidebar />
            </div>

            {/* Main content with header and message area */}
            <div className="flex flex-col flex-1 min-w-0">
                <div className="sticky top-0 z-10">
                    <ClientHeader />
                </div>

                {/* Main content (messages) */}
                <div className='flex-1 flex flex-col'>
                    <div className="p-3 sm:p-4 lg:p-6">
                        {/* Mobile: Messages header with conversation toggle */}
                        <div className="mb-4 flex items-center justify-between lg:hidden">
                            <h1 className="text-xl sm:text-2xl font-bold text-orange-500">Messages</h1>
                            <button
                                onClick={() => setShowConversationList(!showConversationList)}
                                className="flex items-center px-3 py-2 bg-orange-500 text-white rounded-lg text-sm"
                            >
                                <Menu className="w-4 h-4 mr-2" />
                                Conversations
                            </button>
                        </div>

                        {/* Desktop: Messages header */}
                        <div className="mb-5 hidden lg:block">
                            <h1 className="text-3xl font-bold text-orange-500">Messages</h1>
                        </div>

                        {/* Mobile: Conversation List Overlay */}
                        {showConversationList && (
                            <div className="fixed inset-0 bg-[#00000014] bg-opacity-50 z-50 lg:hidden">
                                <div className="bg-white w-full max-w-md h-full overflow-y-auto ">
                                    <div className="sticky z-1 top-0 bg-white p-4 border-b border-orange-500">
                                        <div className="flex items-center justify-between mb-4">
                                            <h2 className="text-lg font-semibold text-gray-900">Conversations</h2>
                                            <button
                                                onClick={() => setShowConversationList(false)}
                                                className="p-2 hover:bg-gray-100 rounded-full"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <input
                                                type="text"
                                                placeholder="Search messages"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="w-full pl-10 pr-4 py-2 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-[#ffe1cc] focus:border-transparent rounded"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-2 h-full overflow-y-auto"> {/* Added h-full and overflow-y-auto */}
                                        {filteredConversations.length === 0 ? (
                                            <div className="p-4 text-center text-gray-500">
                                                No conversations found
                                            </div>
                                        ) : (
                                            filteredConversations.map((conversation) => (
                                                <div
                                                    key={conversation.id}
                                                    onClick={() => {
                                                        setSelectedConversation(conversation);
                                                        setShowConversationList(false);
                                                    }}
                                                    className={`flex items-center p-3 hover:bg-[#ffe1cc] cursor-pointer border-b border-orange-500 rounded ${selectedConversation.id === conversation.id ? 'bg-[#ffe1cc]' : ''}`}
                                                >
                                                    <div className="relative">
                                                        <img
                                                            src={conversation.avatar}
                                                            alt={conversation.name}
                                                            className="w-12 h-12 rounded-full object-cover"
                                                        />
                                                        {conversation.unread && (
                                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
                                                        )}
                                                    </div>
                                                    <div className="ml-3 flex-1 min-w-0">
                                                        <div className="flex items-center justify-between">
                                                            <h3 className={`text-sm font-medium truncate ${conversation.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                                                                {conversation.name}
                                                                {conversation.unread && <span className="ml-1 text-orange-500">•</span>}
                                                            </h3>
                                                            <span className="text-xs text-gray-500">{conversation.time}</span>
                                                        </div>
                                                        <p className="text-sm text-gray-500 truncate mt-1">{conversation.message}</p>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-1 h-[calc(100vh-180px)] sm:h-[calc(100vh-200px)] lg:h-auto ">
                            {/* Desktop: Left panel - conversation list */}
                            <div className="hidden lg:flex lg:w-[300px] bg-white rounded-l-3xl border-r border-b border-orange-500 flex-col">
                                {/* Messages heading + search */}
                                <div className="p-6">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="text"
                                            placeholder="Search messages"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-[#ffe1cc] focus:border-transparent rounded"
                                        />
                                    </div>
                                </div>

                                {/* Conversation List */}
                                <div className="flex-1 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-160px)] scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100 hover:scrollbar-thumb-orange-500">
                                    {filteredConversations.length === 0 ? (
                                        <div className="p-4 text-center text-gray-500">
                                            No conversations found
                                        </div>
                                    ) : (
                                        filteredConversations.map((conversation) => (
                                            <div
                                                key={conversation.id}
                                                onClick={() => {
                                                    setSelectedConversation(conversation);
                                                    setIsSidebarOpen(false);
                                                }}
                                                className={`flex items-center p-4 hover:bg-[#ffe1cc] cursor-pointer border-b border-orange-200 transition-all duration-200 ease-in-out ${selectedConversation?.id === conversation.id ? 'bg-[#ffe1cc] border-l-4 border-l-orange-500' : ''}`}
                                            >
                                                <div className="relative flex-shrink-0">
                                                    <img
                                                        src={conversation.avatar}
                                                        alt={conversation.name}
                                                        className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm"
                                                    />
                                                    {conversation.unread && (
                                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></div>
                                                    )}
                                                </div>
                                                <div className="ml-3 flex-1 min-w-0 overflow-hidden">
                                                    <div className="flex items-start justify-between mb-1">
                                                        <h3 className={`text-sm font-medium truncate max-w-[70%] ${conversation.unread ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}>
                                                            {conversation.name}
                                                        </h3>
                                                        <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
                                                            <span className="text-xs text-gray-500 whitespace-nowrap">{conversation.time}</span>
                                                            {conversation.unread && (
                                                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-gray-500 truncate leading-relaxed">{conversation.message}</p>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 flex flex-col bg-[#FFF] rounded-3xl lg:rounded-r-3xl lg:rounded-l-none min-w-0  border-orange-500">
                                {/* Chat Header */}
                                <div className="bg-white border-b border-orange-500 p-3 sm:p-4 flex items-center justify-between rounded-t-3xl">
                                    <div className="flex items-center min-w-0">
                                        <img
                                            src={selectedConversation.avatar}
                                            alt={selectedConversation.name}
                                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                                        />
                                        <div className="ml-3 min-w-0">
                                            <h2 className="text-sm sm:text-lg font-semibold text-gray-900 truncate">{selectedConversation.name}</h2>
                                            <p className="text-xs sm:text-sm text-gray-500 truncate">Designer candidate</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 flex-shrink-0">
                                        <button className="p-2 hover:bg-gray-100 rounded-full">
                                            <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                                        </button>
                                        <button className="text-orange-500 text-xs sm:text-sm font-medium hover:text-orange-600 hidden sm:block">
                                            View Profile
                                        </button>
                                    </div>
                                </div>

                                {/* Chat Messages */}
                                <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">
                                    <div className="max-w-2xl mx-auto">
                                        {/* Profile section */}
                                        <div className="text-center mb-6">
                                            <img
                                                src={selectedConversation.avatar}
                                                alt={selectedConversation.name}
                                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto mb-3"
                                            />
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{selectedConversation.name}</h3>
                                            <p className="text-xs sm:text-sm text-gray-500">Designer candidate</p>
                                        </div>

                                        <div className="relative my-6 flex items-center">
                                            <div className="flex-grow border-t border-orange-300"></div>
                                            <div className="px-3 py-1 border border-orange-300 text-xs sm:text-sm text-gray-900 bg-white flex items-center space-x-1">
                                                <span className="text-l"><AiOutlineDown /></span>
                                                <span>Today</span>
                                            </div>
                                            <div className="flex-grow border-t border-orange-300"></div>
                                        </div>

                                        {/* Messages */}
                                        <div className="space-y-4">
                                            {chatMessages.map((message) => (
                                                <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
                                                    <div className={`flex items-end space-x-2 max-w-xs sm:max-w-md ${message.isMe ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                                        <img
                                                            src={selectedConversation.avatar}
                                                            alt={selectedConversation.name}
                                                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
                                                        />
                                                        <div className={`px-3 sm:px-4 py-2 sm:py-3 rounded-2xl ${message.isMe
                                                            ? 'bg-[#ffe1cc] text-gray-950 rounded-br-sm'
                                                            : 'bg-white text-gray-900 rounded-bl-sm border border-orange-500'
                                                            }`}>
                                                            <p className="text-xs sm:text-sm leading-relaxed">{message.message}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="text-right text-xs text-gray-500 mt-2">
                                            12 mins ago
                                        </div>
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="bg-white border m-3 sm:m-4 lg:m-8 border-orange-500 p-2 sm:p-3 rounded-xl">
                                    {/* Preview Section */}
                                    {uploadedFiles.length > 0 && (
                                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-3">
                                            {uploadedFiles.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border rounded shadow-sm bg-gray-50 p-1"
                                                >
                                                    {item.preview ? (
                                                        <img
                                                            src={item.preview}
                                                            alt="preview"
                                                            className="w-full h-full object-cover rounded"
                                                        />
                                                    ) : (
                                                        <div className="flex items-center justify-center text-xs text-gray-600 h-full text-center px-1">
                                                            📄 {item.name}
                                                        </div>
                                                    )}
                                                    <button
                                                        className="absolute -top-2 -right-2 text-lg sm:text-xl rounded-full bg-white shadow p-1 hover:bg-white"
                                                        onClick={() => {
                                                            const copy = [...uploadedFiles];
                                                            copy.splice(index, 1);
                                                            setUploadedFiles(copy);
                                                        }}
                                                    >
                                                        <IoCloseCircle />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Message Box */}
                                    <div className="flex items-center space-x-2 relative">
                                        {/* Upload File */}
                                        <label className="p-1 sm:p-2 hover:bg-gray-100 rounded-full cursor-pointer flex-shrink-0">
                                            <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                                            <input
                                                type="file"
                                                multiple
                                                className="hidden"
                                                onChange={handleFileUpload}
                                            />
                                        </label>

                                        {/* Emoji Picker */}
                                        {showEmojiPicker && (
                                            <div className="absolute bottom-12 sm:bottom-14 right-2 sm:right-10 z-10 p-2 grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-8 gap-1 bg-white rounded shadow-lg h-40 sm:h-48 lg:h-52 overflow-y-scroll w-48 sm:w-64 lg:w-auto">
                                                {[
                                                    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
                                                    '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
                                                    '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔',
                                                    '🤐', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌',
                                                    '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧',
                                                    '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐',
                                                    '😕', '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🥺', '😦',
                                                    '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞',
                                                    '😓', '😩', '😫', '😤', '😡', '😠', '🤬', '😈', '👿', '💀',
                                                    '☠️', '💩', '🤡', '👻', '👽', '🤖', '💋', '💌', '💘', '💝'
                                                ].map((emoji) => (
                                                    <button
                                                        key={emoji}
                                                        onClick={() => setNewMessage((prev) => prev + emoji)}
                                                        className="text-base sm:text-lg lg:text-xl hover:bg-gray-100 rounded p-1"
                                                    >
                                                        {emoji}
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {/* Textarea Input */}
                                        <textarea
                                            value={newMessage}
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            placeholder="Reply message"
                                            rows={1}
                                            className="flex-1 resize-none px-3 sm:px-4 py-2 border border-transparent focus:outline-none text-sm sm:text-base leading-relaxed overflow-auto max-h-24 sm:max-h-32 lg:max-h-40"
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" && !e.shiftKey) {
                                                    e.preventDefault();
                                                    handleSendMessage();
                                                }
                                            }}
                                        />

                                        {/* Emoji Toggle */}
                                        <button
                                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                            className="p-1 sm:p-2 hover:bg-gray-100 rounded-full flex-shrink-0"
                                        >
                                            <span className="text-base sm:text-lg lg:text-xl">
                                                <GrEmoji />
                                            </span>
                                        </button>

                                        {/* Send Button */}
                                        <button
                                            onClick={handleSendMessage}
                                            className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 lg:px-5 py-2 transition-colors flex-shrink-0 rounded"
                                        >
                                            <IoSend className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto">
                        <ClientFooter />
                    </div>
                </div>
            </div>
        </div>
    );
}
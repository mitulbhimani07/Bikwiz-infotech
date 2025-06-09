import React, { useState } from 'react';
import { Search, MoreHorizontal, Send, Paperclip } from 'lucide-react';
import ClientHeader from '../navbar/ClientHeader';
import ClientSidbar from '../navbar/ClientSidbar';
import { AiOutlineDown } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import { IoCloseCircle } from "react-icons/io5";
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

    const handleSendMessage = () => {
        if (!newMessage.trim() && uploadedFiles.length === 0) return;

        // You can send the message + files here
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
        event.target.value = ""; // Reset input
    };


    return (
        <div className="flex min-h-screen bg-[#fff0e5]">
            {/* Sidebar */}
            <div className="sticky top-0 left-0  h-screen">
                <ClientSidbar />
            </div>

            {/* Main content with header and message area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="sticky top-0 z-10 ">
                    <ClientHeader />
                </div>

                {/* Main content (messages) */}
                <div className='p-6'>
                    <div className="mb-5">
                        <h1 className="text-3xl font-bold  text-orange-500 ">Messages</h1>
                    </div>
                    <div className="flex flex-1  ">
                        {/* Left panel - conversation list */}
                        <div className="w-[300px] bg-white rounded-s-3xl border-e-1 border-b-1 border-orange-500 flex flex-col">
                            {/* Messages heading + search */}
                            <div className="p-6">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder="Search messages"
                                        className="w-full pl-10 pr-4 py-2 border border-orange-500  focus:outline-none focus:ring-2 focus:ring-[#ffe1cc] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Conversation List */}
                            <div className="flex-1 overflow-y-auto m-5 ">
                                {conversations.map((conversation) => (
                                    <div
                                        key={conversation.id}
                                        onClick={() => setSelectedConversation(conversation)}
                                        className={`flex items-center p-4 hover:bg-[#ffe1cc] cursor-pointer border-b border-orange-500 ${selectedConversation.id === conversation.id ? 'bg-[#ffe1cc]' : ''
                                            }`}
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
                                                <h3 className={`text-sm font-medium truncate ${conversation.unread ? 'text-gray-900' : 'text-gray-700'
                                                    }`}>
                                                    {conversation.name}
                                                    {conversation.unread && <span className="ml-1 text-orange-500">•</span>}
                                                </h3>
                                                <span className="text-xs text-gray-500">{conversation.time}</span>
                                            </div>
                                            <p className="text-sm text-gray-500 truncate mt-1">{conversation.message}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right panel - Chat Area */}
                        <div className="flex-1 flex flex-col bg-[#FFF] rounded-e-3xl">
                            {/* Chat Header */}
                            <div className="bg-white border-b border-orange-500 p-4 flex items-center justify-between rounded-t-3xl">
                                <div className="flex items-center">
                                    <img
                                        src={selectedConversation.avatar}
                                        alt={selectedConversation.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div className="ml-3">
                                        <h2 className="text-lg font-semibold text-gray-900">{selectedConversation.name}</h2>
                                        <p className="text-sm text-gray-500">Designer candidate</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button className="p-2 hover:bg-gray-100 rounded-full">
                                        <MoreHorizontal className="w-5 h-5 text-gray-500" />
                                    </button>
                                    <button className="text-orange-500 text-sm font-medium hover:text-orange-600">
                                        View Profile
                                    </button>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <div className="max-w-2xl mx-auto">
                                    {/* Profile section */}
                                    <div className="text-center mb-6">
                                        <img
                                            src={selectedConversation.avatar}
                                            alt={selectedConversation.name}
                                            className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                                        />
                                        <h3 className="text-lg font-semibold text-gray-900">{selectedConversation.name}</h3>
                                        <p className="text-sm text-gray-500">Designer candidate</p>
                                    </div>

                                    <div className="relative my-6 flex items-center">
                                        {/* Horizontal line */}
                                        <div className="flex-grow border-t border-orange-300"></div>

                                        {/* Center label */}
                                        <div className=" px-3 py-1 border border-orange-300 text-sm text-gray-900   bg-white flex items-center space-x-1">
                                            <span className="text-l"><AiOutlineDown /></span>
                                            <span>Today</span>
                                        </div>

                                        {/* Horizontal line */}
                                        <div className="flex-grow border-t border-orange-300"></div>
                                    </div>


                                    {/* Messages */}
                                    <div className="space-y-4">
                                        {chatMessages.map((message) => (
                                            <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
                                                <div className={`flex items-end space-x-2 max-w-md ${message.isMe ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                                    {!message.isMe && (
                                                        <img
                                                            src={selectedConversation.avatar}
                                                            alt={selectedConversation.name}
                                                            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                                                        />
                                                    )}
                                                    {message.isMe && (
                                                        <div className="">
                                                            <img
                                                                src={selectedConversation.avatar}
                                                                alt={selectedConversation.name}
                                                                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                                                            />

                                                        </div>
                                                    )}
                                                    <div className={`px-4 py-3 rounded-2xl ${message.isMe
                                                        ? 'bg-[#ffe1cc] text-gray-950 rounded-br-sm'
                                                        : 'bg-white text-gray-900 rounded-bl-sm border border-orange-500'
                                                        }`}>
                                                        <p className="text-sm leading-relaxed">{message.message}</p>
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
                            <div className="bg-white border m-8 border-orange-500 p-3 rounded-xl">
                                {/* Preview Section */}
                                {uploadedFiles.length > 0 && (
                                    <div className="flex flex-wrap gap-3 mb-3">
                                        {uploadedFiles.map((item, index) => (
                                            <div
                                                key={index}
                                                className="relative w-24 h-24 border rounded shadow-sm bg-gray-50 p-1"
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
                                                {/* Remove button */}
                                                <button
                                                    className="absolute -top-3 -right-3 text-xl rounded-full bg-white shadow p-1 hover:bg-white"
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
                                    <label className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                                        <Paperclip className="w-5 h-5 text-gray-500" />
                                        <input
                                            type="file"
                                            multiple
                                            className="hidden"
                                            onChange={handleFileUpload}
                                        />
                                    </label>

                                    {/* Emoji Picker */}
                                    {showEmojiPicker && (
                                        <div className="absolute bottom-14 right-10 z-10 p-2 grid grid-cols-5 gap-1 bg-white rounded shadow-lg h-52 overflow-y-scroll">
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
                                                    className="text-xl hover:bg-gray-100 rounded p-1"
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
                                        className="flex-1 resize-none px-4 py-2 border border-transparent focus:outline-none text-base leading-relaxed overflow-auto max-h-40"
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
                                        className="p-2 hover:bg-gray-100 rounded-full"
                                    >
                                        <span className="text-xl">
                                            <GrEmoji />
                                        </span>
                                    </button>

                                    {/* Send Button */}
                                    <button
                                        onClick={handleSendMessage}
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 transition-colors"
                                    >
                                        <IoSend className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ClientFooter />

            </div>
        </div>
    );
}
const socketIo = require('socket.io');
const Chat = require('../models/chat.model');

const setupSocket = (server) => {
    const io = socketIo(server);

    io.on('connection', (socket) => {
        console.log('New client connected');

        // Handle 'readChat' event
        socket.on('readChat', async (chatId, userId) => {
            try {
                const chat = await Chat.findOne({ _id: chatId, participants: userId });
                if (!chat) throw new Error('Chat not found!');

                if (!chat.seenBy.includes(userId)) {
                    chat.seenBy.push(userId);
                    await chat.save();

                    // Notify other participants about the read status update
                    socket.broadcast.emit('chatRead', { chatId, userId });
                }
            } catch (error) {
                console.error(`Error in readChat: ${error.message}`);
            }
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });

    return io;
};

module.exports = setupSocket;

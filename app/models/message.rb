class Message < ApplicationRecord

    after_create_commit {broadcast_message}

    belongs_to :profile
    belongs_to :receiver, :class_name => 'Profile'
    belongs_to :chat



    

    private

    def broadcast_message
        ActionCable.server.broadcast("MessagesChannel", {
            id: self.id,
            profile_id: self.profile_id,
            chat_id: self.chat_id,
            receiver_id: self.receiver_id,
            content: self.content
            
        })
    end
end

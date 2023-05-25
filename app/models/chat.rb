class Chat < ApplicationRecord

    after_create_commit {broadcast_chat}

    belongs_to :profile
    # belongs_to :profile_two, :class_name => 'Profile'
    has_many :messages


    private
    
    def broadcast_chat
        ActionCable.server.broadcast("ChatsChannel", {
            id: self.id,
            profile_id: self.profile_id,
            profile_two_id: self.profile_two_id,
            messages: self.messages
            
        })
    end
    
end

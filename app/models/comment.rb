class Comment < ApplicationRecord
    belongs_to :profile
    belongs_to :post

    validates :content, presence: true


    def commenter
        c = {
            id: self.id,
            firstName: self.profile.firstName,
            lastName: self.profile.lastName,
            content: self.content,
            profile_id: self.profile_id,
            created_at: self.created_at
        }

        
    end
end

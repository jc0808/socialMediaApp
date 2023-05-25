class User < ApplicationRecord
    has_one :profile, dependent: :destroy

    validates :username, presence: true
    validates :username, uniqueness: true
    has_secure_password


    def createProfile(params)
        new_profile = {"firstName" => params[:firstName], "lastName" => params[:lastName], "user_id" => self.id, "location" => params[:location], "image" => params[:image]}
        Profile.create!(new_profile)
    end
end
